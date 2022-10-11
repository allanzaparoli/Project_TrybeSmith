import { Pool } from 'mysql2/promise';
import { Order } from '../interfaces/orders.interface';

export default class OrderModel {
  constructor(private connection: Pool) {
  }

  public async getAllOrder(): Promise<Order[]> {
    const result = await this.connection.execute(`
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as productsIds
    FROM Trybesmith.Orders as o INNER JOIN Trybesmith.Products as
    p ON o.id = p.orderId
    GROUP BY o.id
    ORDER BY o.userId;
    `);
    const [rows] = result;
    return rows as Order[];
  }
}