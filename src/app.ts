import express from 'express';
import productsRouters from './routers/products.router';

const app = express();
app.use(express.json());

app.use('/products', productsRouters);

export default app;
