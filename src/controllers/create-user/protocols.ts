import { User } from "../../models/user";

export interface CreateUserParams {
  firstName: string;
  lasttName: string;
  email: string;
  password: string;
}

export interface ICreatUserRepository {
  createUser(params: CreateUserParams): Promise<User>;
}
