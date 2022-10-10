import { Request, Response } from 'express';
import ProductServices from '../services/products.service';

export default class ProductController {
  private productservice: ProductServices;

  constructor() {
    this.productservice = new ProductServices();
  }

  create = async (req: Request, res: Response) => {
    const result = await this.productservice.create(req.body);
    res.status(201).json(result);
  };

  getAllProduct = async (_req: Request, res: Response) => {
    const result = await this.productservice.getAll();
    res.status(200).json(result);
  };
}