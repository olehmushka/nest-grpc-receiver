import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { rpc } from '../../codegen/rpc';
import { ContactService } from './contact.service';
import CreateContactRequest = rpc.CreateContactRequest;
import CreateContactResponse = rpc.CreateContactResponse;
import GetContactsListRequest = rpc.GetContactsListRequest;
import GetContactsListResponse = rpc.GetContactsListResponse;

@Controller()
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @GrpcMethod('Rpc', 'CreateContact')
  public async createContact(
    req: CreateContactRequest,
  ): Promise<CreateContactResponse> {
    const contact = await this.contactService.createContact(req);
    return CreateContactResponse.create({
      data: contact,
      timestamp: Date.now(),
    });
  }

  @GrpcMethod('Rpc', 'GetContactsList')
  public async getContactsList(
    req: GetContactsListRequest,
  ): Promise<GetContactsListResponse> {
    const contacts = await this.contactService.getContactsList({
      skip: req.skip,
      limit: req.limit,
    });
    return GetContactsListResponse.create({
      data: contacts,
      timestamp: Date.now(),
    });
  }
}
