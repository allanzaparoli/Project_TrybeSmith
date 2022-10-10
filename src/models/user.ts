import { Pool, ResultSetHeader } from 'mysql2/promise';
import { User } from '../interfaces/users.interface';

export default class UserModel {
  constructor(private connection: Pool) {
  }

  public async create(newuser: User): Promise<User> {
    const { username, classe, level, password } = newuser;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...newuser };
  }
}