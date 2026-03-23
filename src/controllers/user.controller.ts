import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  static getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = userService.getAllUsers();
      res.status(200).json(users);
    } catch (error) {
      next(error);
    }
  }

  static getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = userService.getUserByID(Number(req.params.id));
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email } = req.body;
      const user = userService.createUser(name, email);
      res.status(201).json(user);
    } catch (error) {
      next(error);
    }
  }
}
