import express, { Express, Request, Response } from 'express';
import dontev from 'dotenv';



const app: Express = express();
dontev.config();

// Server port + port fetched from env file
const port = process.env.PORT;


// Default route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})


// Listen to server
app.listen(port);