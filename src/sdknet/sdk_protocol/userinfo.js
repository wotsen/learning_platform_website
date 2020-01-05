// source: in_sdk_body.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.insider.sdk.UserInfo');
goog.provide('proto.insider.sdk.UserInfo.Permissson');
goog.provide('proto.insider.sdk.UserInfo.Result');
goog.provide('proto.insider.sdk.UserInfo.UserType');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.insider.sdk.User');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.insider.sdk.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.insider.sdk.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.insider.sdk.UserInfo.displayName = 'proto.insider.sdk.UserInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.insider.sdk.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.insider.sdk.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.insider.sdk.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.insider.sdk.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    userType: jspb.Message.getFieldWithDefault(msg, 1, 0),
    user: (f = msg.getUser()) && proto.insider.sdk.User.toObject(includeInstance, f),
    permission: jspb.Message.getFieldWithDefault(msg, 3, 0),
    token: jspb.Message.getFieldWithDefault(msg, 4, ""),
    aliveTime: jspb.Message.getFieldWithDefault(msg, 5, 0),
    result: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.insider.sdk.UserInfo}
 */
proto.insider.sdk.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.insider.sdk.UserInfo;
  return proto.insider.sdk.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.insider.sdk.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.insider.sdk.UserInfo}
 */
proto.insider.sdk.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.insider.sdk.UserInfo.UserType} */ (reader.readEnum());
      msg.setUserType(value);
      break;
    case 2:
      var value = new proto.insider.sdk.User;
      reader.readMessage(value,proto.insider.sdk.User.deserializeBinaryFromReader);
      msg.setUser(value);
      break;
    case 3:
      var value = /** @type {!proto.insider.sdk.UserInfo.Permissson} */ (reader.readEnum());
      msg.setPermission(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAliveTime(value);
      break;
    case 6:
      var value = /** @type {!proto.insider.sdk.UserInfo.Result} */ (reader.readEnum());
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.insider.sdk.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.insider.sdk.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.insider.sdk.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.insider.sdk.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.insider.sdk.User.serializeBinaryToWriter
    );
  }
  f = message.getPermission();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAliveTime();
  if (f !== 0) {
    writer.writeUint64(
      5,
      f
    );
  }
  f = message.getResult();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.insider.sdk.UserInfo.UserType = {
  U_LOGIN: 0,
  U_LOGOUT: 1,
  U_VERI: 2,
  U_REGISTER: 3
};

/**
 * @enum {number}
 */
proto.insider.sdk.UserInfo.Result = {
  U_OK: 0,
  U_ERROR: 1,
  U_TOKEN_TIMEOUT: 2,
  U_USER_EXIST: 3,
  U_USER_NOT_EXIST: 4,
  U_USER_BLACK: 5,
  US_USER_NO_PERMISSION: 6
};

/**
 * @enum {number}
 */
proto.insider.sdk.UserInfo.Permissson = {
  U_PERMISSION_ADMIN: 0,
  U_PERMISSION_ADVANCED: 1,
  U_PERMOSSION_NORMAL: 2
};

/**
 * optional UserType user_type = 1;
 * @return {!proto.insider.sdk.UserInfo.UserType}
 */
proto.insider.sdk.UserInfo.prototype.getUserType = function() {
  return /** @type {!proto.insider.sdk.UserInfo.UserType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.insider.sdk.UserInfo.UserType} value
 * @return {!proto.insider.sdk.UserInfo} returns this
 */
proto.insider.sdk.UserInfo.prototype.setUserType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional User user = 2;
 * @return {?proto.insider.sdk.User}
 */
proto.insider.sdk.UserInfo.prototype.getUser = function() {
  return /** @type{?proto.insider.sdk.User} */ (
    jspb.Message.getWrapperField(this, proto.insider.sdk.User, 2));
};


/**
 * @param {?proto.insider.sdk.User|undefined} value
 * @return {!proto.insider.sdk.UserInfo} returns this
*/
proto.insider.sdk.UserInfo.prototype.setUser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.insider.sdk.UserInfo} returns this
 */
proto.insider.sdk.UserInfo.prototype.clearUser = function() {
  return this.setUser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.insider.sdk.UserInfo.prototype.hasUser = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Permissson permission = 3;
 * @return {!proto.insider.sdk.UserInfo.Permissson}
 */
proto.insider.sdk.UserInfo.prototype.getPermission = function() {
  return /** @type {!proto.insider.sdk.UserInfo.Permissson} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.insider.sdk.UserInfo.Permissson} value
 * @return {!proto.insider.sdk.UserInfo} returns this
 */
proto.insider.sdk.UserInfo.prototype.setPermission = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string token = 4;
 * @return {string}
 */
proto.insider.sdk.UserInfo.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.insider.sdk.UserInfo} returns this
 */
proto.insider.sdk.UserInfo.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional uint64 alive_time = 5;
 * @return {number}
 */
proto.insider.sdk.UserInfo.prototype.getAliveTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.insider.sdk.UserInfo} returns this
 */
proto.insider.sdk.UserInfo.prototype.setAliveTime = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Result result = 6;
 * @return {!proto.insider.sdk.UserInfo.Result}
 */
proto.insider.sdk.UserInfo.prototype.getResult = function() {
  return /** @type {!proto.insider.sdk.UserInfo.Result} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.insider.sdk.UserInfo.Result} value
 * @return {!proto.insider.sdk.UserInfo} returns this
 */
proto.insider.sdk.UserInfo.prototype.setResult = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};

