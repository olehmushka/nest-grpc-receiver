import {Injectable, OnModuleInit} from '@nestjs/common';
import {KafkaProducerClient} from '../lib/kafka';
import {CreateUserKafkaMessage} from '../core/interfaces/user';
import config from '../core/config';
import {user, rpc} from '../../codegen/rpc';
import RawUser = rpc.CreateUserRequest;
import User = user.IUser;

const users: User[] = [];

@Injectable()
export class UserService implements OnModuleInit {
  private userProducerMQ: KafkaProducerClient<CreateUserKafkaMessage>;

  constructor() {
    this.userProducerMQ = new KafkaProducerClient({
      clientId: config.kafka.clientId,
      brokers: config.kafka.brokers,
      topicName: config.kafka.topics.createUser,
    });
  }

  public async onModuleInit() {
    await this.userProducerMQ.connect();
  }

  public async createUser(input: RawUser): Promise<User> {
    const user = {
      ...input,
      id: Math.random().toString(36).substring(3),
    };
    users.push(user);
    await this.userProducerMQ.publish(`${config.kafka.topics.createUser}:${user.id}`, user);

    return user;
  }

  public async getUser(id: string): Promise<User> {
    return users.find((u) => u.id === id);
  }
}
