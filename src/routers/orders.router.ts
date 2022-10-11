import { Router } from 'express';
import OrderController from '../controllers/orders.controller';

const userController = new OrderController();

const routers = Router();

routers.get('/', userController.getAllOrder);

export default routers;