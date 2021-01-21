/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.contact = (function() {

    /**
     * Namespace contact.
     * @exports contact
     * @namespace
     */
    var contact = {};

    contact.Contact = (function() {

        /**
         * Properties of a Contact.
         * @memberof contact
         * @interface IContact
         * @property {string|null} [id] Contact id
         * @property {string|null} [name] Contact name
         * @property {string|null} [phoneNumber] Contact phoneNumber
         * @property {string|null} [userId] Contact userId
         */

        /**
         * Constructs a new Contact.
         * @memberof contact
         * @classdesc Represents a Contact.
         * @implements IContact
         * @constructor
         * @param {contact.IContact=} [properties] Properties to set
         */
        function Contact(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Contact id.
         * @member {string} id
         * @memberof contact.Contact
         * @instance
         */
        Contact.prototype.id = "";

        /**
         * Contact name.
         * @member {string} name
         * @memberof contact.Contact
         * @instance
         */
        Contact.prototype.name = "";

        /**
         * Contact phoneNumber.
         * @member {string} phoneNumber
         * @memberof contact.Contact
         * @instance
         */
        Contact.prototype.phoneNumber = "";

        /**
         * Contact userId.
         * @member {string} userId
         * @memberof contact.Contact
         * @instance
         */
        Contact.prototype.userId = "";

        /**
         * Creates a new Contact instance using the specified properties.
         * @function create
         * @memberof contact.Contact
         * @static
         * @param {contact.IContact=} [properties] Properties to set
         * @returns {contact.Contact} Contact instance
         */
        Contact.create = function create(properties) {
            return new Contact(properties);
        };

        /**
         * Encodes the specified Contact message. Does not implicitly {@link contact.Contact.verify|verify} messages.
         * @function encode
         * @memberof contact.Contact
         * @static
         * @param {contact.IContact} message Contact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contact.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.phoneNumber);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link contact.Contact.verify|verify} messages.
         * @function encodeDelimited
         * @memberof contact.Contact
         * @static
         * @param {contact.IContact} message Contact message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Contact.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @function decode
         * @memberof contact.Contact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {contact.Contact} Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contact.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.contact.Contact();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.phoneNumber = reader.string();
                    break;
                case 4:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof contact.Contact
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {contact.Contact} Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Contact.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Contact message.
         * @function verify
         * @memberof contact.Contact
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Contact.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof contact.Contact
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {contact.Contact} Contact
         */
        Contact.fromObject = function fromObject(object) {
            if (object instanceof $root.contact.Contact)
                return object;
            var message = new $root.contact.Contact();
            if (object.id != null)
                message.id = String(object.id);
            if (object.name != null)
                message.name = String(object.name);
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @function toObject
         * @memberof contact.Contact
         * @static
         * @param {contact.Contact} message Contact
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Contact.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.name = "";
                object.phoneNumber = "";
                object.userId = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this Contact to JSON.
         * @function toJSON
         * @memberof contact.Contact
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Contact.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Contact;
    })();

    return contact;
})();

$root.rpc = (function() {

    /**
     * Namespace rpc.
     * @exports rpc
     * @namespace
     */
    var rpc = {};

    rpc.Rpc = (function() {

        /**
         * Constructs a new Rpc service.
         * @memberof rpc
         * @classdesc Represents a Rpc
         * @extends $protobuf.rpc.Service
         * @constructor
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         */
        function Rpc(rpcImpl, requestDelimited, responseDelimited) {
            $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
        }

        (Rpc.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Rpc;

        /**
         * Creates new Rpc service using the specified rpc implementation.
         * @function create
         * @memberof rpc.Rpc
         * @static
         * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
         * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
         * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
         * @returns {Rpc} RPC service. Useful where requests and/or responses are streamed.
         */
        Rpc.create = function create(rpcImpl, requestDelimited, responseDelimited) {
            return new this(rpcImpl, requestDelimited, responseDelimited);
        };

        /**
         * Callback as used by {@link rpc.Rpc#createUser}.
         * @memberof rpc.Rpc
         * @typedef CreateUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.CreateUserResponse} [response] CreateUserResponse
         */

        /**
         * Calls CreateUser.
         * @function createUser
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.ICreateUserRequest} request CreateUserRequest message or plain object
         * @param {rpc.Rpc.CreateUserCallback} callback Node-style callback called with the error, if any, and CreateUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.createUser = function createUser(request, callback) {
            return this.rpcCall(createUser, $root.rpc.CreateUserRequest, $root.rpc.CreateUserResponse, request, callback);
        }, "name", { value: "CreateUser" });

        /**
         * Calls CreateUser.
         * @function createUser
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.ICreateUserRequest} request CreateUserRequest message or plain object
         * @returns {Promise<rpc.CreateUserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.Rpc#getUser}.
         * @memberof rpc.Rpc
         * @typedef GetUserCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.GetUserResponse} [response] GetUserResponse
         */

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IGetUserRequest} request GetUserRequest message or plain object
         * @param {rpc.Rpc.GetUserCallback} callback Node-style callback called with the error, if any, and GetUserResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.getUser = function getUser(request, callback) {
            return this.rpcCall(getUser, $root.rpc.GetUserRequest, $root.rpc.GetUserResponse, request, callback);
        }, "name", { value: "GetUser" });

        /**
         * Calls GetUser.
         * @function getUser
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IGetUserRequest} request GetUserRequest message or plain object
         * @returns {Promise<rpc.GetUserResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.Rpc#createContact}.
         * @memberof rpc.Rpc
         * @typedef CreateContactCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.CreateContactResponse} [response] CreateContactResponse
         */

        /**
         * Calls CreateContact.
         * @function createContact
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.ICreateContactRequest} request CreateContactRequest message or plain object
         * @param {rpc.Rpc.CreateContactCallback} callback Node-style callback called with the error, if any, and CreateContactResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.createContact = function createContact(request, callback) {
            return this.rpcCall(createContact, $root.rpc.CreateContactRequest, $root.rpc.CreateContactResponse, request, callback);
        }, "name", { value: "CreateContact" });

        /**
         * Calls CreateContact.
         * @function createContact
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.ICreateContactRequest} request CreateContactRequest message or plain object
         * @returns {Promise<rpc.CreateContactResponse>} Promise
         * @variation 2
         */

        /**
         * Callback as used by {@link rpc.Rpc#getContactsList}.
         * @memberof rpc.Rpc
         * @typedef GetContactsListCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {rpc.GetContactsListResponse} [response] GetContactsListResponse
         */

        /**
         * Calls GetContactsList.
         * @function getContactsList
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IGetContactsListRequest} request GetContactsListRequest message or plain object
         * @param {rpc.Rpc.GetContactsListCallback} callback Node-style callback called with the error, if any, and GetContactsListResponse
         * @returns {undefined}
         * @variation 1
         */
        Object.defineProperty(Rpc.prototype.getContactsList = function getContactsList(request, callback) {
            return this.rpcCall(getContactsList, $root.rpc.GetContactsListRequest, $root.rpc.GetContactsListResponse, request, callback);
        }, "name", { value: "GetContactsList" });

        /**
         * Calls GetContactsList.
         * @function getContactsList
         * @memberof rpc.Rpc
         * @instance
         * @param {rpc.IGetContactsListRequest} request GetContactsListRequest message or plain object
         * @returns {Promise<rpc.GetContactsListResponse>} Promise
         * @variation 2
         */

        return Rpc;
    })();

    rpc.CreateUserRequest = (function() {

        /**
         * Properties of a CreateUserRequest.
         * @memberof rpc
         * @interface ICreateUserRequest
         * @property {string|null} [firstName] CreateUserRequest firstName
         * @property {string|null} [lastName] CreateUserRequest lastName
         * @property {string|null} [birthday] CreateUserRequest birthday
         * @property {string|null} [phoneNumber] CreateUserRequest phoneNumber
         * @property {string|null} [email] CreateUserRequest email
         */

        /**
         * Constructs a new CreateUserRequest.
         * @memberof rpc
         * @classdesc Represents a CreateUserRequest.
         * @implements ICreateUserRequest
         * @constructor
         * @param {rpc.ICreateUserRequest=} [properties] Properties to set
         */
        function CreateUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserRequest firstName.
         * @member {string} firstName
         * @memberof rpc.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.firstName = "";

        /**
         * CreateUserRequest lastName.
         * @member {string} lastName
         * @memberof rpc.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.lastName = "";

        /**
         * CreateUserRequest birthday.
         * @member {string} birthday
         * @memberof rpc.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.birthday = "";

        /**
         * CreateUserRequest phoneNumber.
         * @member {string} phoneNumber
         * @memberof rpc.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.phoneNumber = "";

        /**
         * CreateUserRequest email.
         * @member {string} email
         * @memberof rpc.CreateUserRequest
         * @instance
         */
        CreateUserRequest.prototype.email = "";

        /**
         * Creates a new CreateUserRequest instance using the specified properties.
         * @function create
         * @memberof rpc.CreateUserRequest
         * @static
         * @param {rpc.ICreateUserRequest=} [properties] Properties to set
         * @returns {rpc.CreateUserRequest} CreateUserRequest instance
         */
        CreateUserRequest.create = function create(properties) {
            return new CreateUserRequest(properties);
        };

        /**
         * Encodes the specified CreateUserRequest message. Does not implicitly {@link rpc.CreateUserRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.CreateUserRequest
         * @static
         * @param {rpc.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.firstName);
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lastName);
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.birthday);
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.phoneNumber);
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified CreateUserRequest message, length delimited. Does not implicitly {@link rpc.CreateUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.CreateUserRequest
         * @static
         * @param {rpc.ICreateUserRequest} message CreateUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.CreateUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.firstName = reader.string();
                    break;
                case 2:
                    message.lastName = reader.string();
                    break;
                case 3:
                    message.birthday = reader.string();
                    break;
                case 4:
                    message.phoneNumber = reader.string();
                    break;
                case 5:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.CreateUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.CreateUserRequest} CreateUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserRequest message.
         * @function verify
         * @memberof rpc.CreateUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                if (!$util.isString(message.birthday))
                    return "birthday: string expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a CreateUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.CreateUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.CreateUserRequest} CreateUserRequest
         */
        CreateUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.CreateUserRequest)
                return object;
            var message = new $root.rpc.CreateUserRequest();
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.birthday != null)
                message.birthday = String(object.birthday);
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a CreateUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.CreateUserRequest
         * @static
         * @param {rpc.CreateUserRequest} message CreateUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.firstName = "";
                object.lastName = "";
                object.birthday = "";
                object.phoneNumber = "";
                object.email = "";
            }
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                object.birthday = message.birthday;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this CreateUserRequest to JSON.
         * @function toJSON
         * @memberof rpc.CreateUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserRequest;
    })();

    rpc.CreateUserResponse = (function() {

        /**
         * Properties of a CreateUserResponse.
         * @memberof rpc
         * @interface ICreateUserResponse
         * @property {user.IUser|null} [data] CreateUserResponse data
         * @property {number|null} [timestamp] CreateUserResponse timestamp
         */

        /**
         * Constructs a new CreateUserResponse.
         * @memberof rpc
         * @classdesc Represents a CreateUserResponse.
         * @implements ICreateUserResponse
         * @constructor
         * @param {rpc.ICreateUserResponse=} [properties] Properties to set
         */
        function CreateUserResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateUserResponse data.
         * @member {user.IUser|null|undefined} data
         * @memberof rpc.CreateUserResponse
         * @instance
         */
        CreateUserResponse.prototype.data = null;

        /**
         * CreateUserResponse timestamp.
         * @member {number} timestamp
         * @memberof rpc.CreateUserResponse
         * @instance
         */
        CreateUserResponse.prototype.timestamp = 0;

        /**
         * Creates a new CreateUserResponse instance using the specified properties.
         * @function create
         * @memberof rpc.CreateUserResponse
         * @static
         * @param {rpc.ICreateUserResponse=} [properties] Properties to set
         * @returns {rpc.CreateUserResponse} CreateUserResponse instance
         */
        CreateUserResponse.create = function create(properties) {
            return new CreateUserResponse(properties);
        };

        /**
         * Encodes the specified CreateUserResponse message. Does not implicitly {@link rpc.CreateUserResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.CreateUserResponse
         * @static
         * @param {rpc.ICreateUserResponse} message CreateUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.hasOwnProperty("data"))
                $root.user.User.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified CreateUserResponse message, length delimited. Does not implicitly {@link rpc.CreateUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.CreateUserResponse
         * @static
         * @param {rpc.ICreateUserResponse} message CreateUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.CreateUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.CreateUserResponse} CreateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.CreateUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = $root.user.User.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timestamp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.CreateUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.CreateUserResponse} CreateUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateUserResponse message.
         * @function verify
         * @memberof rpc.CreateUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.user.User.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            return null;
        };

        /**
         * Creates a CreateUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.CreateUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.CreateUserResponse} CreateUserResponse
         */
        CreateUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.CreateUserResponse)
                return object;
            var message = new $root.rpc.CreateUserResponse();
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".rpc.CreateUserResponse.data: object expected");
                message.data = $root.user.User.fromObject(object.data);
            }
            if (object.timestamp != null)
                message.timestamp = object.timestamp | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.CreateUserResponse
         * @static
         * @param {rpc.CreateUserResponse} message CreateUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.data = null;
                object.timestamp = 0;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.user.User.toObject(message.data, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            return object;
        };

        /**
         * Converts this CreateUserResponse to JSON.
         * @function toJSON
         * @memberof rpc.CreateUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateUserResponse;
    })();

    rpc.GetUserRequest = (function() {

        /**
         * Properties of a GetUserRequest.
         * @memberof rpc
         * @interface IGetUserRequest
         * @property {string|null} [id] GetUserRequest id
         */

        /**
         * Constructs a new GetUserRequest.
         * @memberof rpc
         * @classdesc Represents a GetUserRequest.
         * @implements IGetUserRequest
         * @constructor
         * @param {rpc.IGetUserRequest=} [properties] Properties to set
         */
        function GetUserRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserRequest id.
         * @member {string} id
         * @memberof rpc.GetUserRequest
         * @instance
         */
        GetUserRequest.prototype.id = "";

        /**
         * Creates a new GetUserRequest instance using the specified properties.
         * @function create
         * @memberof rpc.GetUserRequest
         * @static
         * @param {rpc.IGetUserRequest=} [properties] Properties to set
         * @returns {rpc.GetUserRequest} GetUserRequest instance
         */
        GetUserRequest.create = function create(properties) {
            return new GetUserRequest(properties);
        };

        /**
         * Encodes the specified GetUserRequest message. Does not implicitly {@link rpc.GetUserRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetUserRequest
         * @static
         * @param {rpc.IGetUserRequest} message GetUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            return writer;
        };

        /**
         * Encodes the specified GetUserRequest message, length delimited. Does not implicitly {@link rpc.GetUserRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetUserRequest
         * @static
         * @param {rpc.IGetUserRequest} message GetUserRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetUserRequest} GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetUserRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetUserRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetUserRequest} GetUserRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserRequest message.
         * @function verify
         * @memberof rpc.GetUserRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            return null;
        };

        /**
         * Creates a GetUserRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetUserRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetUserRequest} GetUserRequest
         */
        GetUserRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetUserRequest)
                return object;
            var message = new $root.rpc.GetUserRequest();
            if (object.id != null)
                message.id = String(object.id);
            return message;
        };

        /**
         * Creates a plain object from a GetUserRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetUserRequest
         * @static
         * @param {rpc.GetUserRequest} message GetUserRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = "";
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this GetUserRequest to JSON.
         * @function toJSON
         * @memberof rpc.GetUserRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserRequest;
    })();

    rpc.GetUserResponse = (function() {

        /**
         * Properties of a GetUserResponse.
         * @memberof rpc
         * @interface IGetUserResponse
         * @property {user.IUser|null} [data] GetUserResponse data
         * @property {number|null} [timestamp] GetUserResponse timestamp
         */

        /**
         * Constructs a new GetUserResponse.
         * @memberof rpc
         * @classdesc Represents a GetUserResponse.
         * @implements IGetUserResponse
         * @constructor
         * @param {rpc.IGetUserResponse=} [properties] Properties to set
         */
        function GetUserResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetUserResponse data.
         * @member {user.IUser|null|undefined} data
         * @memberof rpc.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.data = null;

        /**
         * GetUserResponse timestamp.
         * @member {number} timestamp
         * @memberof rpc.GetUserResponse
         * @instance
         */
        GetUserResponse.prototype.timestamp = 0;

        /**
         * Creates a new GetUserResponse instance using the specified properties.
         * @function create
         * @memberof rpc.GetUserResponse
         * @static
         * @param {rpc.IGetUserResponse=} [properties] Properties to set
         * @returns {rpc.GetUserResponse} GetUserResponse instance
         */
        GetUserResponse.create = function create(properties) {
            return new GetUserResponse(properties);
        };

        /**
         * Encodes the specified GetUserResponse message. Does not implicitly {@link rpc.GetUserResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetUserResponse
         * @static
         * @param {rpc.IGetUserResponse} message GetUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.hasOwnProperty("data"))
                $root.user.User.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified GetUserResponse message, length delimited. Does not implicitly {@link rpc.GetUserResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetUserResponse
         * @static
         * @param {rpc.IGetUserResponse} message GetUserResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetUserResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetUserResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetUserResponse} GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetUserResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = $root.user.User.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timestamp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetUserResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetUserResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetUserResponse} GetUserResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetUserResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetUserResponse message.
         * @function verify
         * @memberof rpc.GetUserResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetUserResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.user.User.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            return null;
        };

        /**
         * Creates a GetUserResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetUserResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetUserResponse} GetUserResponse
         */
        GetUserResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetUserResponse)
                return object;
            var message = new $root.rpc.GetUserResponse();
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".rpc.GetUserResponse.data: object expected");
                message.data = $root.user.User.fromObject(object.data);
            }
            if (object.timestamp != null)
                message.timestamp = object.timestamp | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetUserResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetUserResponse
         * @static
         * @param {rpc.GetUserResponse} message GetUserResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetUserResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.data = null;
                object.timestamp = 0;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.user.User.toObject(message.data, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            return object;
        };

        /**
         * Converts this GetUserResponse to JSON.
         * @function toJSON
         * @memberof rpc.GetUserResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetUserResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetUserResponse;
    })();

    rpc.CreateContactRequest = (function() {

        /**
         * Properties of a CreateContactRequest.
         * @memberof rpc
         * @interface ICreateContactRequest
         * @property {string|null} [name] CreateContactRequest name
         * @property {string|null} [phoneNumber] CreateContactRequest phoneNumber
         * @property {string|null} [userId] CreateContactRequest userId
         */

        /**
         * Constructs a new CreateContactRequest.
         * @memberof rpc
         * @classdesc Represents a CreateContactRequest.
         * @implements ICreateContactRequest
         * @constructor
         * @param {rpc.ICreateContactRequest=} [properties] Properties to set
         */
        function CreateContactRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateContactRequest name.
         * @member {string} name
         * @memberof rpc.CreateContactRequest
         * @instance
         */
        CreateContactRequest.prototype.name = "";

        /**
         * CreateContactRequest phoneNumber.
         * @member {string} phoneNumber
         * @memberof rpc.CreateContactRequest
         * @instance
         */
        CreateContactRequest.prototype.phoneNumber = "";

        /**
         * CreateContactRequest userId.
         * @member {string} userId
         * @memberof rpc.CreateContactRequest
         * @instance
         */
        CreateContactRequest.prototype.userId = "";

        /**
         * Creates a new CreateContactRequest instance using the specified properties.
         * @function create
         * @memberof rpc.CreateContactRequest
         * @static
         * @param {rpc.ICreateContactRequest=} [properties] Properties to set
         * @returns {rpc.CreateContactRequest} CreateContactRequest instance
         */
        CreateContactRequest.create = function create(properties) {
            return new CreateContactRequest(properties);
        };

        /**
         * Encodes the specified CreateContactRequest message. Does not implicitly {@link rpc.CreateContactRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.CreateContactRequest
         * @static
         * @param {rpc.ICreateContactRequest} message CreateContactRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateContactRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.phoneNumber);
            if (message.userId != null && message.hasOwnProperty("userId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.userId);
            return writer;
        };

        /**
         * Encodes the specified CreateContactRequest message, length delimited. Does not implicitly {@link rpc.CreateContactRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.CreateContactRequest
         * @static
         * @param {rpc.ICreateContactRequest} message CreateContactRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateContactRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateContactRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.CreateContactRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.CreateContactRequest} CreateContactRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateContactRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.CreateContactRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.phoneNumber = reader.string();
                    break;
                case 3:
                    message.userId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateContactRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.CreateContactRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.CreateContactRequest} CreateContactRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateContactRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateContactRequest message.
         * @function verify
         * @memberof rpc.CreateContactRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateContactRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            if (message.userId != null && message.hasOwnProperty("userId"))
                if (!$util.isString(message.userId))
                    return "userId: string expected";
            return null;
        };

        /**
         * Creates a CreateContactRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.CreateContactRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.CreateContactRequest} CreateContactRequest
         */
        CreateContactRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.CreateContactRequest)
                return object;
            var message = new $root.rpc.CreateContactRequest();
            if (object.name != null)
                message.name = String(object.name);
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            if (object.userId != null)
                message.userId = String(object.userId);
            return message;
        };

        /**
         * Creates a plain object from a CreateContactRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.CreateContactRequest
         * @static
         * @param {rpc.CreateContactRequest} message CreateContactRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateContactRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.phoneNumber = "";
                object.userId = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            return object;
        };

        /**
         * Converts this CreateContactRequest to JSON.
         * @function toJSON
         * @memberof rpc.CreateContactRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateContactRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateContactRequest;
    })();

    rpc.CreateContactResponse = (function() {

        /**
         * Properties of a CreateContactResponse.
         * @memberof rpc
         * @interface ICreateContactResponse
         * @property {contact.IContact|null} [data] CreateContactResponse data
         * @property {number|null} [timestamp] CreateContactResponse timestamp
         */

        /**
         * Constructs a new CreateContactResponse.
         * @memberof rpc
         * @classdesc Represents a CreateContactResponse.
         * @implements ICreateContactResponse
         * @constructor
         * @param {rpc.ICreateContactResponse=} [properties] Properties to set
         */
        function CreateContactResponse(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateContactResponse data.
         * @member {contact.IContact|null|undefined} data
         * @memberof rpc.CreateContactResponse
         * @instance
         */
        CreateContactResponse.prototype.data = null;

        /**
         * CreateContactResponse timestamp.
         * @member {number} timestamp
         * @memberof rpc.CreateContactResponse
         * @instance
         */
        CreateContactResponse.prototype.timestamp = 0;

        /**
         * Creates a new CreateContactResponse instance using the specified properties.
         * @function create
         * @memberof rpc.CreateContactResponse
         * @static
         * @param {rpc.ICreateContactResponse=} [properties] Properties to set
         * @returns {rpc.CreateContactResponse} CreateContactResponse instance
         */
        CreateContactResponse.create = function create(properties) {
            return new CreateContactResponse(properties);
        };

        /**
         * Encodes the specified CreateContactResponse message. Does not implicitly {@link rpc.CreateContactResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.CreateContactResponse
         * @static
         * @param {rpc.ICreateContactResponse} message CreateContactResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateContactResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.hasOwnProperty("data"))
                $root.contact.Contact.encode(message.data, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified CreateContactResponse message, length delimited. Does not implicitly {@link rpc.CreateContactResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.CreateContactResponse
         * @static
         * @param {rpc.ICreateContactResponse} message CreateContactResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateContactResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateContactResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.CreateContactResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.CreateContactResponse} CreateContactResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateContactResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.CreateContactResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = $root.contact.Contact.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.timestamp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateContactResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.CreateContactResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.CreateContactResponse} CreateContactResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateContactResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateContactResponse message.
         * @function verify
         * @memberof rpc.CreateContactResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateContactResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                var error = $root.contact.Contact.verify(message.data);
                if (error)
                    return "data." + error;
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            return null;
        };

        /**
         * Creates a CreateContactResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.CreateContactResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.CreateContactResponse} CreateContactResponse
         */
        CreateContactResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.CreateContactResponse)
                return object;
            var message = new $root.rpc.CreateContactResponse();
            if (object.data != null) {
                if (typeof object.data !== "object")
                    throw TypeError(".rpc.CreateContactResponse.data: object expected");
                message.data = $root.contact.Contact.fromObject(object.data);
            }
            if (object.timestamp != null)
                message.timestamp = object.timestamp | 0;
            return message;
        };

        /**
         * Creates a plain object from a CreateContactResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.CreateContactResponse
         * @static
         * @param {rpc.CreateContactResponse} message CreateContactResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateContactResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.data = null;
                object.timestamp = 0;
            }
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = $root.contact.Contact.toObject(message.data, options);
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            return object;
        };

        /**
         * Converts this CreateContactResponse to JSON.
         * @function toJSON
         * @memberof rpc.CreateContactResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateContactResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateContactResponse;
    })();

    rpc.GetContactsListRequest = (function() {

        /**
         * Properties of a GetContactsListRequest.
         * @memberof rpc
         * @interface IGetContactsListRequest
         * @property {number|null} [skip] GetContactsListRequest skip
         * @property {number|null} [limit] GetContactsListRequest limit
         */

        /**
         * Constructs a new GetContactsListRequest.
         * @memberof rpc
         * @classdesc Represents a GetContactsListRequest.
         * @implements IGetContactsListRequest
         * @constructor
         * @param {rpc.IGetContactsListRequest=} [properties] Properties to set
         */
        function GetContactsListRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetContactsListRequest skip.
         * @member {number} skip
         * @memberof rpc.GetContactsListRequest
         * @instance
         */
        GetContactsListRequest.prototype.skip = 0;

        /**
         * GetContactsListRequest limit.
         * @member {number} limit
         * @memberof rpc.GetContactsListRequest
         * @instance
         */
        GetContactsListRequest.prototype.limit = 0;

        /**
         * Creates a new GetContactsListRequest instance using the specified properties.
         * @function create
         * @memberof rpc.GetContactsListRequest
         * @static
         * @param {rpc.IGetContactsListRequest=} [properties] Properties to set
         * @returns {rpc.GetContactsListRequest} GetContactsListRequest instance
         */
        GetContactsListRequest.create = function create(properties) {
            return new GetContactsListRequest(properties);
        };

        /**
         * Encodes the specified GetContactsListRequest message. Does not implicitly {@link rpc.GetContactsListRequest.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetContactsListRequest
         * @static
         * @param {rpc.IGetContactsListRequest} message GetContactsListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetContactsListRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.skip != null && message.hasOwnProperty("skip"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.skip);
            if (message.limit != null && message.hasOwnProperty("limit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.limit);
            return writer;
        };

        /**
         * Encodes the specified GetContactsListRequest message, length delimited. Does not implicitly {@link rpc.GetContactsListRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetContactsListRequest
         * @static
         * @param {rpc.IGetContactsListRequest} message GetContactsListRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetContactsListRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetContactsListRequest message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetContactsListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetContactsListRequest} GetContactsListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetContactsListRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetContactsListRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.skip = reader.int32();
                    break;
                case 2:
                    message.limit = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetContactsListRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetContactsListRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetContactsListRequest} GetContactsListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetContactsListRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetContactsListRequest message.
         * @function verify
         * @memberof rpc.GetContactsListRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetContactsListRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.skip != null && message.hasOwnProperty("skip"))
                if (!$util.isInteger(message.skip))
                    return "skip: integer expected";
            if (message.limit != null && message.hasOwnProperty("limit"))
                if (!$util.isInteger(message.limit))
                    return "limit: integer expected";
            return null;
        };

        /**
         * Creates a GetContactsListRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetContactsListRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetContactsListRequest} GetContactsListRequest
         */
        GetContactsListRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetContactsListRequest)
                return object;
            var message = new $root.rpc.GetContactsListRequest();
            if (object.skip != null)
                message.skip = object.skip | 0;
            if (object.limit != null)
                message.limit = object.limit | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetContactsListRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetContactsListRequest
         * @static
         * @param {rpc.GetContactsListRequest} message GetContactsListRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetContactsListRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.skip = 0;
                object.limit = 0;
            }
            if (message.skip != null && message.hasOwnProperty("skip"))
                object.skip = message.skip;
            if (message.limit != null && message.hasOwnProperty("limit"))
                object.limit = message.limit;
            return object;
        };

        /**
         * Converts this GetContactsListRequest to JSON.
         * @function toJSON
         * @memberof rpc.GetContactsListRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetContactsListRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetContactsListRequest;
    })();

    rpc.GetContactsListResponse = (function() {

        /**
         * Properties of a GetContactsListResponse.
         * @memberof rpc
         * @interface IGetContactsListResponse
         * @property {Array.<contact.IContact>|null} [data] GetContactsListResponse data
         * @property {number|null} [timestamp] GetContactsListResponse timestamp
         */

        /**
         * Constructs a new GetContactsListResponse.
         * @memberof rpc
         * @classdesc Represents a GetContactsListResponse.
         * @implements IGetContactsListResponse
         * @constructor
         * @param {rpc.IGetContactsListResponse=} [properties] Properties to set
         */
        function GetContactsListResponse(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * GetContactsListResponse data.
         * @member {Array.<contact.IContact>} data
         * @memberof rpc.GetContactsListResponse
         * @instance
         */
        GetContactsListResponse.prototype.data = $util.emptyArray;

        /**
         * GetContactsListResponse timestamp.
         * @member {number} timestamp
         * @memberof rpc.GetContactsListResponse
         * @instance
         */
        GetContactsListResponse.prototype.timestamp = 0;

        /**
         * Creates a new GetContactsListResponse instance using the specified properties.
         * @function create
         * @memberof rpc.GetContactsListResponse
         * @static
         * @param {rpc.IGetContactsListResponse=} [properties] Properties to set
         * @returns {rpc.GetContactsListResponse} GetContactsListResponse instance
         */
        GetContactsListResponse.create = function create(properties) {
            return new GetContactsListResponse(properties);
        };

        /**
         * Encodes the specified GetContactsListResponse message. Does not implicitly {@link rpc.GetContactsListResponse.verify|verify} messages.
         * @function encode
         * @memberof rpc.GetContactsListResponse
         * @static
         * @param {rpc.IGetContactsListResponse} message GetContactsListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetContactsListResponse.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.contact.Contact.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified GetContactsListResponse message, length delimited. Does not implicitly {@link rpc.GetContactsListResponse.verify|verify} messages.
         * @function encodeDelimited
         * @memberof rpc.GetContactsListResponse
         * @static
         * @param {rpc.IGetContactsListResponse} message GetContactsListResponse message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        GetContactsListResponse.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a GetContactsListResponse message from the specified reader or buffer.
         * @function decode
         * @memberof rpc.GetContactsListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {rpc.GetContactsListResponse} GetContactsListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetContactsListResponse.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.rpc.GetContactsListResponse();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.contact.Contact.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.timestamp = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a GetContactsListResponse message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof rpc.GetContactsListResponse
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {rpc.GetContactsListResponse} GetContactsListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        GetContactsListResponse.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a GetContactsListResponse message.
         * @function verify
         * @memberof rpc.GetContactsListResponse
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        GetContactsListResponse.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.contact.Contact.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp))
                    return "timestamp: integer expected";
            return null;
        };

        /**
         * Creates a GetContactsListResponse message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof rpc.GetContactsListResponse
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {rpc.GetContactsListResponse} GetContactsListResponse
         */
        GetContactsListResponse.fromObject = function fromObject(object) {
            if (object instanceof $root.rpc.GetContactsListResponse)
                return object;
            var message = new $root.rpc.GetContactsListResponse();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".rpc.GetContactsListResponse.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".rpc.GetContactsListResponse.data: object expected");
                    message.data[i] = $root.contact.Contact.fromObject(object.data[i]);
                }
            }
            if (object.timestamp != null)
                message.timestamp = object.timestamp | 0;
            return message;
        };

        /**
         * Creates a plain object from a GetContactsListResponse message. Also converts values to other types if specified.
         * @function toObject
         * @memberof rpc.GetContactsListResponse
         * @static
         * @param {rpc.GetContactsListResponse} message GetContactsListResponse
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        GetContactsListResponse.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults)
                object.timestamp = 0;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.contact.Contact.toObject(message.data[j], options);
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                object.timestamp = message.timestamp;
            return object;
        };

        /**
         * Converts this GetContactsListResponse to JSON.
         * @function toJSON
         * @memberof rpc.GetContactsListResponse
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        GetContactsListResponse.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return GetContactsListResponse;
    })();

    return rpc;
})();

$root.user = (function() {

    /**
     * Namespace user.
     * @exports user
     * @namespace
     */
    var user = {};

    user.User = (function() {

        /**
         * Properties of a User.
         * @memberof user
         * @interface IUser
         * @property {string|null} [id] User id
         * @property {string|null} [firstName] User firstName
         * @property {string|null} [lastName] User lastName
         * @property {string|null} [birthday] User birthday
         * @property {string|null} [phoneNumber] User phoneNumber
         * @property {string|null} [email] User email
         */

        /**
         * Constructs a new User.
         * @memberof user
         * @classdesc Represents a User.
         * @implements IUser
         * @constructor
         * @param {user.IUser=} [properties] Properties to set
         */
        function User(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * User id.
         * @member {string} id
         * @memberof user.User
         * @instance
         */
        User.prototype.id = "";

        /**
         * User firstName.
         * @member {string} firstName
         * @memberof user.User
         * @instance
         */
        User.prototype.firstName = "";

        /**
         * User lastName.
         * @member {string} lastName
         * @memberof user.User
         * @instance
         */
        User.prototype.lastName = "";

        /**
         * User birthday.
         * @member {string} birthday
         * @memberof user.User
         * @instance
         */
        User.prototype.birthday = "";

        /**
         * User phoneNumber.
         * @member {string} phoneNumber
         * @memberof user.User
         * @instance
         */
        User.prototype.phoneNumber = "";

        /**
         * User email.
         * @member {string} email
         * @memberof user.User
         * @instance
         */
        User.prototype.email = "";

        /**
         * Creates a new User instance using the specified properties.
         * @function create
         * @memberof user.User
         * @static
         * @param {user.IUser=} [properties] Properties to set
         * @returns {user.User} User instance
         */
        User.create = function create(properties) {
            return new User(properties);
        };

        /**
         * Encodes the specified User message. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encode
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.firstName);
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.lastName);
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.birthday);
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.phoneNumber);
            if (message.email != null && message.hasOwnProperty("email"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.email);
            return writer;
        };

        /**
         * Encodes the specified User message, length delimited. Does not implicitly {@link user.User.verify|verify} messages.
         * @function encodeDelimited
         * @memberof user.User
         * @static
         * @param {user.IUser} message User message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        User.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a User message from the specified reader or buffer.
         * @function decode
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.user.User();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.firstName = reader.string();
                    break;
                case 3:
                    message.lastName = reader.string();
                    break;
                case 4:
                    message.birthday = reader.string();
                    break;
                case 5:
                    message.phoneNumber = reader.string();
                    break;
                case 6:
                    message.email = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a User message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof user.User
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {user.User} User
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        User.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a User message.
         * @function verify
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        User.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isString(message.id))
                    return "id: string expected";
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                if (!$util.isString(message.firstName))
                    return "firstName: string expected";
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                if (!$util.isString(message.lastName))
                    return "lastName: string expected";
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                if (!$util.isString(message.birthday))
                    return "birthday: string expected";
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                if (!$util.isString(message.phoneNumber))
                    return "phoneNumber: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            return null;
        };

        /**
         * Creates a User message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof user.User
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {user.User} User
         */
        User.fromObject = function fromObject(object) {
            if (object instanceof $root.user.User)
                return object;
            var message = new $root.user.User();
            if (object.id != null)
                message.id = String(object.id);
            if (object.firstName != null)
                message.firstName = String(object.firstName);
            if (object.lastName != null)
                message.lastName = String(object.lastName);
            if (object.birthday != null)
                message.birthday = String(object.birthday);
            if (object.phoneNumber != null)
                message.phoneNumber = String(object.phoneNumber);
            if (object.email != null)
                message.email = String(object.email);
            return message;
        };

        /**
         * Creates a plain object from a User message. Also converts values to other types if specified.
         * @function toObject
         * @memberof user.User
         * @static
         * @param {user.User} message User
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        User.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = "";
                object.firstName = "";
                object.lastName = "";
                object.birthday = "";
                object.phoneNumber = "";
                object.email = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.firstName != null && message.hasOwnProperty("firstName"))
                object.firstName = message.firstName;
            if (message.lastName != null && message.hasOwnProperty("lastName"))
                object.lastName = message.lastName;
            if (message.birthday != null && message.hasOwnProperty("birthday"))
                object.birthday = message.birthday;
            if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                object.phoneNumber = message.phoneNumber;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            return object;
        };

        /**
         * Converts this User to JSON.
         * @function toJSON
         * @memberof user.User
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        User.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return User;
    })();

    return user;
})();

module.exports = $root;
