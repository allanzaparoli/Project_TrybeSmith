import express from 'express';
import productsRouters from './routers/products.router';
import usersRouters from './routers/users.router';

const app = express();
app.use(express.json());

app.use('/products', productsRouters);
app.use('/users', usersRouters);

export default app;
