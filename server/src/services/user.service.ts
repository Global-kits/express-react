import { UserRepository } from "../repositories/user.repository";
import { User } from "../models/user.model";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll();
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findById(id);
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.create(user);
  }
}
