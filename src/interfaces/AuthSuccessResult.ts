import { User } from "./User";

export interface AuthSuccessResult {
    user: User
    token: string
}