const express = require('express');



const app = express();

// Server port
const port = 4500;


// Default route
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server')
})


// Listen to server
app.listen(port);