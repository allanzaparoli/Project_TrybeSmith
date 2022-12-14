import { Products } from '../interfaces/products.interface';
import ProductsModel from '../models/products';
import connection from '../models/connection';

export default class ProductServices {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<Products[]> {
    const result = await this.model.getAll();
    return result;
  }

  public create(product: Products): Promise<Products> {
    return this.model.create(product);
  }
}