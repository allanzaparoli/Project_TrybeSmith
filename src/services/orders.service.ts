import { Order } from '../interfaces/orders.interface';
import OrderModel from '../models/order';
import connection from '../models/connection';

export default class OrderService {
  public model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  public async getAllOrder(): Promise<Order[]> {
    const result = await this.model.getAllOrder();
    return result;
  }
}