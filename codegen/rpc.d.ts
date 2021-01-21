import * as $protobuf from "protobufjs";
/** Namespace contact. */
export namespace contact {

    /** Properties of a Contact. */
    interface IContact {

        /** Contact id */
        id?: (string|null);

        /** Contact name */
        name?: (string|null);

        /** Contact phoneNumber */
        phoneNumber?: (string|null);

        /** Contact userId */
        userId?: (string|null);
    }

    /** Represents a Contact. */
    class Contact implements IContact {

        /**
         * Constructs a new Contact.
         * @param [properties] Properties to set
         */
        constructor(properties?: contact.IContact);

        /** Contact id. */
        public id: string;

        /** Contact name. */
        public name: string;

        /** Contact phoneNumber. */
        public phoneNumber: string;

        /** Contact userId. */
        public userId: string;

        /**
         * Creates a new Contact instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Contact instance
         */
        public static create(properties?: contact.IContact): contact.Contact;

        /**
         * Encodes the specified Contact message. Does not implicitly {@link contact.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: contact.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link contact.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: contact.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): contact.Contact;

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): contact.Contact;

        /**
         * Verifies a Contact message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Contact
         */
        public static fromObject(object: { [k: string]: any }): contact.Contact;

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @param message Contact
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: contact.Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Contact to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace rpc. */
export namespace rpc {

    /** Represents a Rpc */
    class Rpc extends $protobuf.rpc.Service {

        /**
         * Constructs a new Rpc service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Rpc service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Rpc;

        /**
         * Calls CreateUser.
         * @param request CreateUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateUserResponse
         */
        public createUser(request: rpc.ICreateUserRequest, callback: rpc.Rpc.CreateUserCallback): void;

        /**
         * Calls CreateUser.
         * @param request CreateUserRequest message or plain object
         * @returns Promise
         */
        public createUser(request: rpc.ICreateUserRequest): Promise<rpc.CreateUserResponse>;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetUserResponse
         */
        public getUser(request: rpc.IGetUserRequest, callback: rpc.Rpc.GetUserCallback): void;

        /**
         * Calls GetUser.
         * @param request GetUserRequest message or plain object
         * @returns Promise
         */
        public getUser(request: rpc.IGetUserRequest): Promise<rpc.GetUserResponse>;

        /**
         * Calls CreateContact.
         * @param request CreateContactRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CreateContactResponse
         */
        public createContact(request: rpc.ICreateContactRequest, callback: rpc.Rpc.CreateContactCallback): void;

        /**
         * Calls CreateContact.
         * @param request CreateContactRequest message or plain object
         * @returns Promise
         */
        public createContact(request: rpc.ICreateContactRequest): Promise<rpc.CreateContactResponse>;

        /**
         * Calls GetContactsList.
         * @param request GetContactsListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetContactsListResponse
         */
        public getContactsList(request: rpc.IGetContactsListRequest, callback: rpc.Rpc.GetContactsListCallback): void;

        /**
         * Calls GetContactsList.
         * @param request GetContactsListRequest message or plain object
         * @returns Promise
         */
        public getContactsList(request: rpc.IGetContactsListRequest): Promise<rpc.GetContactsListResponse>;
    }

    namespace Rpc {

        /**
         * Callback as used by {@link rpc.Rpc#createUser}.
         * @param error Error, if any
         * @param [response] CreateUserResponse
         */
        type CreateUserCallback = (error: (Error|null), response?: rpc.CreateUserResponse) => void;

        /**
         * Callback as used by {@link rpc.Rpc#getUser}.
         * @param error Error, if any
         * @param [response] GetUserResponse
         */
        type GetUserCallback = (error: (Error|null), response?: rpc.GetUserResponse) => void;

        /**
         * Callback as used by {@link rpc.Rpc#createContact}.
         * @param error Error, if any
         * @param [response] CreateContactResponse
         */
        type CreateContactCallback = (error: (Error|null), response?: rpc.CreateContactResponse) => void;

        /**
         * Callback as used by {@link rpc.Rpc#getContactsList}.
         * @param error Error, if any
         * @param [response] GetContactsListResponse
         */
        type GetContactsListCallback = (error: (Error|null), response?: rpc.GetContactsListResponse) => void;
    }

    /** Properties of a CreateUserRequest. */
    interface ICreateUserRequest {

        /** CreateUserRequest firstName */
        firstName?: (string|null);

        /** CreateUserRequest lastName */
        lastName?: (string|null);

        /** CreateUserRequest birthday */
        birthday?: (string|null);

        /** CreateUserRequest phoneNumber */
        phoneNumber?: (string|null);

        /** CreateUserRequest email */
        email?: (string|null);
    }

    /** Represents a CreateUserRequest. */
    class CreateUserRequest implements ICreateUserRequest {

        /**
         * Constructs a new CreateUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ICreateUserRequest);

        /** CreateUserRequest firstName. */
        public firstName: string;

        /** CreateUserRequest lastName. */
        public lastName: string;

        /** CreateUserRequest birthday. */
        public birthday: string;

        /** CreateUserRequest phoneNumber. */
        public phoneNumber: string;

        /** CreateUserRequest email. */
        public email: string;

        /**
         * Creates a new CreateUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserRequest instance
         */
        public static create(properties?: rpc.ICreateUserRequest): rpc.CreateUserRequest;

        /**
         * Encodes the specified CreateUserRequest message. Does not implicitly {@link rpc.CreateUserRequest.verify|verify} messages.
         * @param message CreateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link rpc.CreateUserRequest.verify|verify} messages.
         * @param message CreateUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ICreateUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.CreateUserRequest;

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.CreateUserRequest;

        /**
         * Verifies a CreateUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserRequest
         */
        public static fromObject(object: { [k: string]: any }): rpc.CreateUserRequest;

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @param message CreateUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.CreateUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateUserResponse. */
    interface ICreateUserResponse {

        /** CreateUserResponse data */
        data?: (user.IUser|null);

        /** CreateUserResponse timestamp */
        timestamp?: (number|null);
    }

    /** Represents a CreateUserResponse. */
    class CreateUserResponse implements ICreateUserResponse {

        /**
         * Constructs a new CreateUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ICreateUserResponse);

        /** CreateUserResponse data. */
        public data?: (user.IUser|null);

        /** CreateUserResponse timestamp. */
        public timestamp: number;

        /**
         * Creates a new CreateUserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateUserResponse instance
         */
        public static create(properties?: rpc.ICreateUserResponse): rpc.CreateUserResponse;

        /**
         * Encodes the specified CreateUserResponse message. Does not implicitly {@link rpc.CreateUserResponse.verify|verify} messages.
         * @param message CreateUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateUserResponse message, length delimited. Does not implicitly {@link rpc.CreateUserResponse.verify|verify} messages.
         * @param message CreateUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ICreateUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateUserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.CreateUserResponse;

        /**
         * Decodes a CreateUserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.CreateUserResponse;

        /**
         * Verifies a CreateUserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateUserResponse
         */
        public static fromObject(object: { [k: string]: any }): rpc.CreateUserResponse;

        /**
         * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
         * @param message CreateUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.CreateUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserRequest. */
    interface IGetUserRequest {

        /** GetUserRequest id */
        id?: (string|null);
    }

    /** Represents a GetUserRequest. */
    class GetUserRequest implements IGetUserRequest {

        /**
         * Constructs a new GetUserRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IGetUserRequest);

        /** GetUserRequest id. */
        public id: string;

        /**
         * Creates a new GetUserRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserRequest instance
         */
        public static create(properties?: rpc.IGetUserRequest): rpc.GetUserRequest;

        /**
         * Encodes the specified GetUserRequest message. Does not implicitly {@link rpc.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IGetUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link rpc.GetUserRequest.verify|verify} messages.
         * @param message GetUserRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IGetUserRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.GetUserRequest;

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.GetUserRequest;

        /**
         * Verifies a GetUserRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserRequest
         */
        public static fromObject(object: { [k: string]: any }): rpc.GetUserRequest;

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @param message GetUserRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.GetUserRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetUserResponse. */
    interface IGetUserResponse {

        /** GetUserResponse data */
        data?: (user.IUser|null);

        /** GetUserResponse timestamp */
        timestamp?: (number|null);
    }

    /** Represents a GetUserResponse. */
    class GetUserResponse implements IGetUserResponse {

        /**
         * Constructs a new GetUserResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IGetUserResponse);

        /** GetUserResponse data. */
        public data?: (user.IUser|null);

        /** GetUserResponse timestamp. */
        public timestamp: number;

        /**
         * Creates a new GetUserResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetUserResponse instance
         */
        public static create(properties?: rpc.IGetUserResponse): rpc.GetUserResponse;

        /**
         * Encodes the specified GetUserResponse message. Does not implicitly {@link rpc.GetUserResponse.verify|verify} messages.
         * @param message GetUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IGetUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetUserResponse message, length delimited. Does not implicitly {@link rpc.GetUserResponse.verify|verify} messages.
         * @param message GetUserResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IGetUserResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetUserResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.GetUserResponse;

        /**
         * Decodes a GetUserResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.GetUserResponse;

        /**
         * Verifies a GetUserResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetUserResponse
         */
        public static fromObject(object: { [k: string]: any }): rpc.GetUserResponse;

        /**
         * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
         * @param message GetUserResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.GetUserResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetUserResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateContactRequest. */
    interface ICreateContactRequest {

        /** CreateContactRequest name */
        name?: (string|null);

        /** CreateContactRequest phoneNumber */
        phoneNumber?: (string|null);

        /** CreateContactRequest userId */
        userId?: (string|null);
    }

    /** Represents a CreateContactRequest. */
    class CreateContactRequest implements ICreateContactRequest {

        /**
         * Constructs a new CreateContactRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ICreateContactRequest);

        /** CreateContactRequest name. */
        public name: string;

        /** CreateContactRequest phoneNumber. */
        public phoneNumber: string;

        /** CreateContactRequest userId. */
        public userId: string;

        /**
         * Creates a new CreateContactRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateContactRequest instance
         */
        public static create(properties?: rpc.ICreateContactRequest): rpc.CreateContactRequest;

        /**
         * Encodes the specified CreateContactRequest message. Does not implicitly {@link rpc.CreateContactRequest.verify|verify} messages.
         * @param message CreateContactRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ICreateContactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateContactRequest message, length delimited. Does not implicitly {@link rpc.CreateContactRequest.verify|verify} messages.
         * @param message CreateContactRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ICreateContactRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateContactRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateContactRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.CreateContactRequest;

        /**
         * Decodes a CreateContactRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateContactRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.CreateContactRequest;

        /**
         * Verifies a CreateContactRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateContactRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateContactRequest
         */
        public static fromObject(object: { [k: string]: any }): rpc.CreateContactRequest;

        /**
         * Creates a plain object from a CreateContactRequest message. Also converts values to other types if specified.
         * @param message CreateContactRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.CreateContactRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateContactRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CreateContactResponse. */
    interface ICreateContactResponse {

        /** CreateContactResponse data */
        data?: (contact.IContact|null);

        /** CreateContactResponse timestamp */
        timestamp?: (number|null);
    }

    /** Represents a CreateContactResponse. */
    class CreateContactResponse implements ICreateContactResponse {

        /**
         * Constructs a new CreateContactResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.ICreateContactResponse);

        /** CreateContactResponse data. */
        public data?: (contact.IContact|null);

        /** CreateContactResponse timestamp. */
        public timestamp: number;

        /**
         * Creates a new CreateContactResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CreateContactResponse instance
         */
        public static create(properties?: rpc.ICreateContactResponse): rpc.CreateContactResponse;

        /**
         * Encodes the specified CreateContactResponse message. Does not implicitly {@link rpc.CreateContactResponse.verify|verify} messages.
         * @param message CreateContactResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.ICreateContactResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CreateContactResponse message, length delimited. Does not implicitly {@link rpc.CreateContactResponse.verify|verify} messages.
         * @param message CreateContactResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.ICreateContactResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CreateContactResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CreateContactResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.CreateContactResponse;

        /**
         * Decodes a CreateContactResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CreateContactResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.CreateContactResponse;

        /**
         * Verifies a CreateContactResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CreateContactResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CreateContactResponse
         */
        public static fromObject(object: { [k: string]: any }): rpc.CreateContactResponse;

        /**
         * Creates a plain object from a CreateContactResponse message. Also converts values to other types if specified.
         * @param message CreateContactResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.CreateContactResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CreateContactResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContactsListRequest. */
    interface IGetContactsListRequest {

        /** GetContactsListRequest skip */
        skip?: (number|null);

        /** GetContactsListRequest limit */
        limit?: (number|null);
    }

    /** Represents a GetContactsListRequest. */
    class GetContactsListRequest implements IGetContactsListRequest {

        /**
         * Constructs a new GetContactsListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IGetContactsListRequest);

        /** GetContactsListRequest skip. */
        public skip: number;

        /** GetContactsListRequest limit. */
        public limit: number;

        /**
         * Creates a new GetContactsListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContactsListRequest instance
         */
        public static create(properties?: rpc.IGetContactsListRequest): rpc.GetContactsListRequest;

        /**
         * Encodes the specified GetContactsListRequest message. Does not implicitly {@link rpc.GetContactsListRequest.verify|verify} messages.
         * @param message GetContactsListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IGetContactsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContactsListRequest message, length delimited. Does not implicitly {@link rpc.GetContactsListRequest.verify|verify} messages.
         * @param message GetContactsListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IGetContactsListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContactsListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContactsListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.GetContactsListRequest;

        /**
         * Decodes a GetContactsListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContactsListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.GetContactsListRequest;

        /**
         * Verifies a GetContactsListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContactsListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContactsListRequest
         */
        public static fromObject(object: { [k: string]: any }): rpc.GetContactsListRequest;

        /**
         * Creates a plain object from a GetContactsListRequest message. Also converts values to other types if specified.
         * @param message GetContactsListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.GetContactsListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContactsListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetContactsListResponse. */
    interface IGetContactsListResponse {

        /** GetContactsListResponse data */
        data?: (contact.IContact[]|null);

        /** GetContactsListResponse timestamp */
        timestamp?: (number|null);
    }

    /** Represents a GetContactsListResponse. */
    class GetContactsListResponse implements IGetContactsListResponse {

        /**
         * Constructs a new GetContactsListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: rpc.IGetContactsListResponse);

        /** GetContactsListResponse data. */
        public data: contact.IContact[];

        /** GetContactsListResponse timestamp. */
        public timestamp: number;

        /**
         * Creates a new GetContactsListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetContactsListResponse instance
         */
        public static create(properties?: rpc.IGetContactsListResponse): rpc.GetContactsListResponse;

        /**
         * Encodes the specified GetContactsListResponse message. Does not implicitly {@link rpc.GetContactsListResponse.verify|verify} messages.
         * @param message GetContactsListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: rpc.IGetContactsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetContactsListResponse message, length delimited. Does not implicitly {@link rpc.GetContactsListResponse.verify|verify} messages.
         * @param message GetContactsListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: rpc.IGetContactsListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetContactsListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetContactsListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): rpc.GetContactsListResponse;

        /**
         * Decodes a GetContactsListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetContactsListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): rpc.GetContactsListResponse;

        /**
         * Verifies a GetContactsListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetContactsListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetContactsListResponse
         */
        public static fromObject(object: { [k: string]: any }): rpc.GetContactsListResponse;

        /**
         * Creates a plain object from a GetContactsListResponse message. Also converts values to other types if specified.
         * @param message GetContactsListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: rpc.GetContactsListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetContactsListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace user. */
export namespace user {

    /** Properties of a User. */
    interface IUser {

        /** User id */
        id?: (string|null);

        /** User firstName */
        firstName?: (string|null);

        /** User lastName */
        lastName?: (string|null);

        /** User birthday */
        birthday?: (string|null);

        /** User phoneNumber */
        phoneNumber?: (string|null);

        /** User email */
        email?: (string|null);
    }

    /** Represents a User. */
    class User implements IUser {

        /**
         * Constructs a new User.
         * @param [properties] Properties to set
         */
        constructor(properties?: user.IUser);

        /** User id. */
        public id: string;

        /** User firstName. */
        public firstName: string;

        /** User lastName. */
        public lastName: string;

        /** User birthday. */
        public birthday: string;

        /** User phoneNumber. */
        public phoneNumber: string;

        /** User email. */
        public email: string;

        /**
         * Creates a new User instance using the specified properties.
         * @param [properties] Properties to set
         * @returns User instance
         */
        public static create(properties?: user.IUser): user.User;

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @param message User message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: user.IUser, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a User message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): user.User;

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): user.User;

        /**
         * Verifies a User message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns User
         */
        public static fromObject(object: { [k: string]: any }): user.User;

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @param message User
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: user.User, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this User to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
