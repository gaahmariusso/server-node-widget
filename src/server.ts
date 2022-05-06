import express from 'express';
import { routes } from './route';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(7000, () => {
    console.log('HTTP server running !')
});