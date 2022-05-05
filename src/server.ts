import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    return res.send('Funcionou !');
});

app.listen(7000, () => {
    console.log('HTTP server running !')
});