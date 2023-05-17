import express, { Express, Request, Response } from 'express';



const app: Express = express();

// Server port
const port = 4500;


// Default route
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server')
})


// Listen to server
app.listen(port);