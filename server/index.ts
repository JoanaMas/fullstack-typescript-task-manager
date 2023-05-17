import express, { Express, Request, Response } from 'express';
import dontev from 'dotenv';
import { DataSource } from 'typeorm';


const app: Express = express();
dontev.config();

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
    synchronize: true,
});


// Default route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});


AppDataSource.initialize().then(() => {
    app.listen(port);
    console.log('Data Source has benn initialized');
}).catch((err) => {
    console.error("Error during Data Source initialization", err);
});

