import { UserRepository } from "./user.repository";
import { ApiError } from "../../utils/apiError";

export class UserService {
    private userRepository: UserRepository;

    constructor() {
        this.userRepository = new UserRepository();
    }

    
}