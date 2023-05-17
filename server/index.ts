import express, { Express } from 'express';
import { DataSource } from 'typeorm';
import dontev from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
// Entities
import { Task } from './src/tasks/tasks.entity';
// Routers
import { tasksRouter } from './src/tasks/tasks.router';


const app: Express = express();
dontev.config();

// Middlewares: streamline incoming requests, no cross origin errors, body parser will convert json form request to js object and attach it to request as body property.
app.use(bodyParser.json());
app.use(cors());


// Server port + port fetched from env file
const port = process.env.PORT;

// Database connection
export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    entities: [Task],
    synchronize: true,
});

AppDataSource.initialize().then(() => {
    app.listen(port);
    console.log('Data Source has benn initialized');
}).catch((err) => {
    console.error("Error during Data Source initialization", err);
});

app.use("/", tasksRouter);