import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  async getAllUsers(req: Request, res: Response): Promise<void> {
    const users = await this.userService.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response): Promise<void> {
    const user = await this.userService.getUserById(Number(req.params.id));
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user = await this.userService.createUser(req.body);
    res.status(201).json(user);
  }
}
