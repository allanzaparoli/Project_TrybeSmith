import { Pool, ResultSetHeader } from 'mysql2/promise';
import Products from '../interfaces/products.interface';

export default class ProductModel {
  constructor(private connection: Pool) {
  }

  public async getAll(): Promise<Products[]> {
    const result = await this.connection.execute('SELECT * FROM Products');
    const [rows] = result;
    return rows as Products[];
  }

  public async create(product: Products): Promise<Products> {
    const { name, amount } = product;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name,amount) VALUES (?, ?)',
      [name, amount],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...product };
  }
}