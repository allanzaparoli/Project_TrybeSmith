import { User } from '../interfaces/users.interface';
import UsersModel from '../models/user';
import connection from '../models/connection';

export default class UserService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: User): Promise<User> {
    const result = await this.model.create(user);
    return this.model.create(result);
  }
}