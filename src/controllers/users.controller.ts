import jwt = require('jsonwebtoken');
import { Request, Response } from 'express';
import UserService from '../services/users.service';

const TOKEN_SECRET_KEY = process.env.JWT_SECRET || 'trybesmith';

export default class UserController {
  public userservice: UserService;
  
  constructor() {
    this.userservice = new UserService();
  }

  public create = async (req: Request, res: Response) => {
    const payload = req.body;
    const token = jwt.sign({ payload }, TOKEN_SECRET_KEY);
    console.log(this.userservice, 'estou aqui');
    await this.userservice.create(payload);
    res.status(201).json({ token });
  };
}