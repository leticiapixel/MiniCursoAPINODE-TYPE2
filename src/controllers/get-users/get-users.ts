import { ok } from "assert";
import { HttpResponse, IController } from "../protocols";
import { IGetUsersRepository } from "./protocols";
import { User } from "../../models/user";
import { serverError } from "../helpers";

export class GetUserController implements IController {
  constructor(private readonly getUsersRepository: IGetUsersRepository) {}

  async handle(): Promise<HttpResponse<User[] | string>> {
    try {
      const users = await this.getUsersRepository.getUsers();

      return ok<User[]>(users);
    } catch (error) {
      return serverError();
    }
  }
}
