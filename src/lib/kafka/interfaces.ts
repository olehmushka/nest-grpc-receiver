export interface KafkaClientParams {
  clientId: string;
  brokers: string[];
  topicName: string;
}