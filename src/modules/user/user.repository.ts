import { db } from "../../config/db";
import { User } from "./user.model";

export class UserRepository{
    static async findAll():Promise<User[]>{
        const {rows} = await db.query("SELECT * FROM users");
        return rows
    }

    static async findByID(id: number): Promise<User | null>{
        const {rows} = await db.query("SELECT * FROM users WHERE id = $1", [id]);
        return rows[0] || null;
    }

    static async create(name: string, email: string): Promise<User> {
        const {rows} = await db.query("INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email]);
        return rows[0];
    }

}