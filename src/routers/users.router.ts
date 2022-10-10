import { Router } from 'express';
import UserController from '../controllers/users.controller';

const userController = new UserController();

const routers = Router();

routers.post('/', userController.create);

export default routers;