// source: in_sdk_body_appmodule.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.insider.sdk.AppModuleBaseInfo');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');

goog.forwardDeclare('proto.insider.sdk.AppModuleCfgPermission');
goog.forwardDeclare('proto.insider.sdk.AppModuleState');
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
proto.insider.sdk.AppModuleBaseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.insider.sdk.AppModuleBaseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.insider.sdk.AppModuleBaseInfo.displayName = 'proto.insider.sdk.AppModuleBaseInfo';
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
proto.insider.sdk.AppModuleBaseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.insider.sdk.AppModuleBaseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.insider.sdk.AppModuleBaseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.insider.sdk.AppModuleBaseInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    enable: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    state: jspb.Message.getFieldWithDefault(msg, 3, 0),
    permission: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.insider.sdk.AppModuleBaseInfo}
 */
proto.insider.sdk.AppModuleBaseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.insider.sdk.AppModuleBaseInfo;
  return proto.insider.sdk.AppModuleBaseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.insider.sdk.AppModuleBaseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.insider.sdk.AppModuleBaseInfo}
 */
proto.insider.sdk.AppModuleBaseInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnable(value);
      break;
    case 3:
      var value = /** @type {!proto.insider.sdk.AppModuleState} */ (reader.readEnum());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {!proto.insider.sdk.AppModuleCfgPermission} */ (reader.readEnum());
      msg.setPermission(value);
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
proto.insider.sdk.AppModuleBaseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.insider.sdk.AppModuleBaseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.insider.sdk.AppModuleBaseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.insider.sdk.AppModuleBaseInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnable();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getPermission();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.insider.sdk.AppModuleBaseInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.insider.sdk.AppModuleBaseInfo} returns this
 */
proto.insider.sdk.AppModuleBaseInfo.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool enable = 2;
 * @return {boolean}
 */
proto.insider.sdk.AppModuleBaseInfo.prototype.getEnable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.insider.sdk.AppModuleBaseInfo} returns this
 */
proto.insider.sdk.AppModuleBaseInfo.prototype.setEnable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional AppModuleState state = 3;
 * @return {!proto.insider.sdk.AppModuleState}
 */
proto.insider.sdk.AppModuleBaseInfo.prototype.getState = function() {
  return /** @type {!proto.insider.sdk.AppModuleState} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.insider.sdk.AppModuleState} value
 * @return {!proto.insider.sdk.AppModuleBaseInfo} returns this
 */
proto.insider.sdk.AppModuleBaseInfo.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional AppModuleCfgPermission permission = 4;
 * @return {!proto.insider.sdk.AppModuleCfgPermission}
 */
proto.insider.sdk.AppModuleBaseInfo.prototype.getPermission = function() {
  return /** @type {!proto.insider.sdk.AppModuleCfgPermission} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.insider.sdk.AppModuleCfgPermission} value
 * @return {!proto.insider.sdk.AppModuleBaseInfo} returns this
 */
proto.insider.sdk.AppModuleBaseInfo.prototype.setPermission = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


