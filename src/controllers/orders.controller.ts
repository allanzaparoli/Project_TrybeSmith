import { Request, Response } from 'express';
import OrderService from '../services/orders.service';

export default class OrderController {
  public orderservice: OrderService;
  
  constructor() {
    this.orderservice = new OrderService();
  }

  public getAllOrder = async (_req: Request, res: Response) => {
    const result = await this.orderservice.getAllOrder();
    res.status(200).json(result);
  };
}