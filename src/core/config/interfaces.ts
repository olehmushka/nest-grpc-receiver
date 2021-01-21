export interface KafkaConfig {
  clientId: string;
  brokers: string[];
  topics: {
    createUser: string;
  },
}

export interface GrpcConfig {
  port: number;
  host: string;
  url: string;
}

export interface ServerConfig {
  port: number;
  host: string;
  grpc: GrpcConfig;
  kafka: KafkaConfig;
}

export interface Config {
  server: ServerConfig;
}
