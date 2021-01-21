import * as nodeConfig from 'config';
import {ServerConfig} from './interfaces';

export default nodeConfig.get<ServerConfig>('server');
