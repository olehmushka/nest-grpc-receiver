import {user} from '../../../codegen/rpc';
import User = user.IUser;

export interface CreateUserKafkaMessage extends User {}
