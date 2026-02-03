import { Request, Response, NextFunction } from "express";
import { UserService } from "../services/user.service";

const userService = new UserService();

export class UserController {
  static getAllUsers(req: Request, res: Response) {
    const users = userService.getAllUsers();
    res.status(200).json(users);
  }

  static getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const user = userService.getUserByID(Number(req.params.id));
      res.status(200).json(user);
    } catch (error) {
      next();
    }
  }

  static createUser(req: Request, res: Response, next: NextFunction) {
    try{
        const {name, email} = req.body;
        const user = userService.createUser(name, email);
        res.status(201).json(user);
    }catch(error){
      next(error);
    }
  }
}
