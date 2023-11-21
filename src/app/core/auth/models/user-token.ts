import { User } from "src/app/models/user";

export interface UserToken {
    user: User;
    token: string;
}