import express from 'express';

const app = express();

app.use((req, res, next) => {
    console.log('First MiddleWare Function');
    next();
});

app.get('/', (req, res) => {
    console.log('Route Handler');
    res.send('Hello World!');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.use((req, res, next) => {
    console.log('Second MiddleWare Function');
    next();
});

app.listen(3000, () => {    
    console.log('Server is running on port 3000');
});