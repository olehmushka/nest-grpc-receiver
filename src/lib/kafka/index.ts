import {Kafka, Producer, Message} from 'kafkajs';
import {KafkaClientParams} from './interfaces';
import * as utils from '../../core/utils/objectToBuffer';

export class KafkaProducerClient<T> {
  private client: Kafka;
  private producer: Producer;
  private topicName: string;

  constructor(params: KafkaClientParams) {
    const {clientId, brokers, topicName} = params;
    this.client = new Kafka({
      clientId,
      brokers,
    });
    this.producer = this.client.producer();
    this.topicName = topicName;
  }

  public connect(): Promise<void> {
    return this.producer.connect();
  }

  public async publish(key: string, value: T): Promise<void> {
    const message = this.composeMessage(key, value);

    await this.producer.send({
      topic: this.topicName,
      messages: [message],
    });
  }

  private composeMessage(key: string, value: T): Message {
    const message = {
      key,
      value: null,
      timestamp: Date.now().toString(),
    };
    switch(typeof value) {
      case 'string':
        message.value = value;
        break;
      case 'number':
        message.value = String(value);
        break;
      case 'object':
        message.value = utils.objectToBuffer(value as Record<string, unknown>);
        break;
    }
    return message;
  }
}
