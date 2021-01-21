import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { rpc } from '../../codegen/rpc';
import { UserService } from './user.service';
import CreateUserRequest = rpc.CreateUserRequest;
import CreateUserResponse = rpc.CreateUserResponse;
import GetUserRequest = rpc.GetUserRequest;
import GetUserResponse = rpc.GetUserResponse;

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @GrpcMethod('Rpc', 'CreateUser')
  public async createUser(req: CreateUserRequest): Promise<CreateUserResponse> {
    const user = await this.userService.createUser(req);
    return CreateUserResponse.create({
      data: user,
      timestamp: Date.now(),
    });
  }

  @GrpcMethod('Rpc', 'GetUser')
  public async getUser(req: GetUserRequest): Promise<GetUserResponse> {
    const user = await this.userService.getUser(req.id);
    return GetUserResponse.create({
      data: user,
      timestamp: Date.now(),
    });
  }
}
