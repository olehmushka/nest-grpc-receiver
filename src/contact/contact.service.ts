import { Injectable } from '@nestjs/common';
import { contact, rpc } from '../../codegen/rpc';
import RawContact = rpc.CreateContactRequest;
import Contact = contact.IContact;

const contacts: Contact[] = [];

@Injectable()
export class ContactService {
  public async createContact(input: RawContact): Promise<Contact> {
    const user = {
      ...input,
      id: Math.random().toString(36).substring(3),
    };
    contacts.push(user);

    return user;
  }

  public async getContactsList(ops: {
    skip: number;
    limit: number;
  }): Promise<Contact[]> {
    const { skip, limit } = ops;
    const result = [];

    for (let i = 0; i < contacts.length; i++) {
      if (i < skip) {
        continue;
      }
      result.push(contacts[i]);
      if (result.length === limit) {
        break;
      }
    }

    return result;
  }
}
