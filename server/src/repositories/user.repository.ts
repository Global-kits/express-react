import { User, users } from "../models/user.model";

export class UserRepository {
  async findAll(): Promise<User[]> {
    return users; // Simulate a database query
  }

  async findById(id: number): Promise<User | undefined> {
    return users.find((user) => user.id === id);
  }

  async create(user: User): Promise<User> {
    users.push(user);
    return user;
  }
}
