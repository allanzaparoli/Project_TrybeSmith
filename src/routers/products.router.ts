import { Router } from 'express';
import ProductController from '../controllers/products.controller';

const productController = new ProductController();

const routers = Router();

routers.post('/', productController.create);
routers.get('/', productController.getAllProduct);

export default routers;