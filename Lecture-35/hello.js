import express from 'express';
var router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello World');
    next();
});

router.get('/', (req, res) => {
    console.log('Hello World');
});

router.get('/yessir', (req, res) => {
    res.send('Welcome to the Yessir World');
});

router.post('/yessir', (req, res) => {
    res.send('Welcome to the Yessir World');
});

router.put('/lmao', (req, res) => {  
    res.send('Welcome to the LMAO World');
});

export default router;