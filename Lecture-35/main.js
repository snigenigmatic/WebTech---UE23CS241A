import express from 'express';
// import the hello.js file
import helloRouter from './hello.js';

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Use the helloRouter for the /hello route
app.use('/hello', helloRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

