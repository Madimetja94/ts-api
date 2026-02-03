import { User, users } from "../models/user.model";
import { ApiError } from "../utils/apiError";

export class UserService {
    getAllUsers(): User[] {
        return users;
    }

    getUserByID(id: number): User{
        const user = users.find(user=> user.id === id);
        if(!user){ throw new ApiError(404, "User Not Found");}
        return user;
    }

    createUser(name: string, email: string): User{
        const user = users.find(user => user.email === email);
        if(user){ throw new ApiError(400, "User Already Exists")}
        const newUser = {
            id: users.length + 1,
            name,
            email
        }
        users.push(newUser);
        return newUser
    }

}