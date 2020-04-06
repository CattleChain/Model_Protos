// source: protos/animalIdentity.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.cattlechain.AnimalIdentity', null, global);
goog.exportSymbol('proto.cattlechain.AnimalIdentity.LOCATION', null, global);
goog.exportSymbol('proto.cattlechain.AnimalIdentity.Sex', null, global);
goog.exportSymbol('proto.cattlechain.AnimalIdentity.Species', null, global);
goog.exportSymbol('proto.cattlechain.AnimalMonitoringEvent', null, global);
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
proto.cattlechain.AnimalIdentity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cattlechain.AnimalIdentity.repeatedFields_, null);
};
goog.inherits(proto.cattlechain.AnimalIdentity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cattlechain.AnimalIdentity.displayName = 'proto.cattlechain.AnimalIdentity';
}
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
proto.cattlechain.AnimalIdentity.LOCATION = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.cattlechain.AnimalIdentity.LOCATION.repeatedFields_, null);
};
goog.inherits(proto.cattlechain.AnimalIdentity.LOCATION, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cattlechain.AnimalIdentity.LOCATION.displayName = 'proto.cattlechain.AnimalIdentity.LOCATION';
}
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
proto.cattlechain.AnimalMonitoringEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.cattlechain.AnimalMonitoringEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.cattlechain.AnimalMonitoringEvent.displayName = 'proto.cattlechain.AnimalMonitoringEvent';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cattlechain.AnimalIdentity.repeatedFields_ = [19];



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
proto.cattlechain.AnimalIdentity.prototype.toObject = function(opt_includeInstance) {
  return proto.cattlechain.AnimalIdentity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cattlechain.AnimalIdentity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cattlechain.AnimalIdentity.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    species: jspb.Message.getFieldWithDefault(msg, 3, 0),
    legalid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    birthdate: jspb.Message.getFieldWithDefault(msg, 5, ""),
    sex: jspb.Message.getFieldWithDefault(msg, 6, 0),
    breed: jspb.Message.getFieldWithDefault(msg, 7, ""),
    calvedby: jspb.Message.getFieldWithDefault(msg, 8, ""),
    siredby: jspb.Message.getFieldWithDefault(msg, 9, ""),
    location: (f = msg.getLocation()) && proto.cattlechain.AnimalIdentity.LOCATION.toObject(includeInstance, f),
    weight: jspb.Message.getFloatingPointFieldWithDefault(msg, 11, 0.0),
    ownedby: jspb.Message.getFieldWithDefault(msg, 12, ""),
    locatedat: jspb.Message.getFieldWithDefault(msg, 13, ""),
    phenologicalcondition: jspb.Message.getFieldWithDefault(msg, 14, ""),
    reproductivecondition: jspb.Message.getFieldWithDefault(msg, 15, ""),
    healthcondition: jspb.Message.getFieldWithDefault(msg, 16, ""),
    fedwith: jspb.Message.getFieldWithDefault(msg, 17, ""),
    welfarecondition: jspb.Message.getFieldWithDefault(msg, 18, ""),
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.cattlechain.AnimalMonitoringEvent.toObject, includeInstance)
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
 * @return {!proto.cattlechain.AnimalIdentity}
 */
proto.cattlechain.AnimalIdentity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cattlechain.AnimalIdentity;
  return proto.cattlechain.AnimalIdentity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cattlechain.AnimalIdentity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cattlechain.AnimalIdentity}
 */
proto.cattlechain.AnimalIdentity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {!proto.cattlechain.AnimalIdentity.Species} */ (reader.readEnum());
      msg.setSpecies(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLegalid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBirthdate(value);
      break;
    case 6:
      var value = /** @type {!proto.cattlechain.AnimalIdentity.Sex} */ (reader.readEnum());
      msg.setSex(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBreed(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setCalvedby(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSiredby(value);
      break;
    case 10:
      var value = new proto.cattlechain.AnimalIdentity.LOCATION;
      reader.readMessage(value,proto.cattlechain.AnimalIdentity.LOCATION.deserializeBinaryFromReader);
      msg.setLocation(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWeight(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwnedby(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocatedat(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhenologicalcondition(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setReproductivecondition(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setHealthcondition(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setFedwith(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setWelfarecondition(value);
      break;
    case 19:
      var value = new proto.cattlechain.AnimalMonitoringEvent;
      reader.readMessage(value,proto.cattlechain.AnimalMonitoringEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
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
proto.cattlechain.AnimalIdentity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cattlechain.AnimalIdentity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cattlechain.AnimalIdentity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cattlechain.AnimalIdentity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSpecies();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getLegalid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getBirthdate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSex();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getBreed();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCalvedby();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSiredby();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getLocation();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.cattlechain.AnimalIdentity.LOCATION.serializeBinaryToWriter
    );
  }
  f = message.getWeight();
  if (f !== 0.0) {
    writer.writeDouble(
      11,
      f
    );
  }
  f = message.getOwnedby();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getLocatedat();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getPhenologicalcondition();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getReproductivecondition();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getHealthcondition();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getFedwith();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getWelfarecondition();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      19,
      f,
      proto.cattlechain.AnimalMonitoringEvent.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.cattlechain.AnimalIdentity.Species = {
  DAIRY_CATTLE: 0,
  BEEF_CATTLE: 1,
  SHEEP: 2,
  GOAT: 3,
  HOURSE: 4,
  PIG: 5
};

/**
 * @enum {number}
 */
proto.cattlechain.AnimalIdentity.Sex = {
  MALE: 0,
  FEMALE: 1
};


/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.cattlechain.AnimalIdentity.LOCATION.repeatedFields_ = [2];



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
proto.cattlechain.AnimalIdentity.LOCATION.prototype.toObject = function(opt_includeInstance) {
  return proto.cattlechain.AnimalIdentity.LOCATION.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cattlechain.AnimalIdentity.LOCATION} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cattlechain.AnimalIdentity.LOCATION.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    coordinatesList: (f = jspb.Message.getRepeatedFloatingPointField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.cattlechain.AnimalIdentity.LOCATION}
 */
proto.cattlechain.AnimalIdentity.LOCATION.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cattlechain.AnimalIdentity.LOCATION;
  return proto.cattlechain.AnimalIdentity.LOCATION.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cattlechain.AnimalIdentity.LOCATION} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cattlechain.AnimalIdentity.LOCATION}
 */
proto.cattlechain.AnimalIdentity.LOCATION.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {!Array<number>} */ (reader.readPackedFloat());
      msg.setCoordinatesList(value);
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
proto.cattlechain.AnimalIdentity.LOCATION.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cattlechain.AnimalIdentity.LOCATION.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cattlechain.AnimalIdentity.LOCATION} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cattlechain.AnimalIdentity.LOCATION.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCoordinatesList();
  if (f.length > 0) {
    writer.writePackedFloat(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.LOCATION.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity.LOCATION} returns this
 */
proto.cattlechain.AnimalIdentity.LOCATION.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated float coordinates = 2;
 * @return {!Array<number>}
 */
proto.cattlechain.AnimalIdentity.LOCATION.prototype.getCoordinatesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedFloatingPointField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.cattlechain.AnimalIdentity.LOCATION} returns this
 */
proto.cattlechain.AnimalIdentity.LOCATION.prototype.setCoordinatesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.cattlechain.AnimalIdentity.LOCATION} returns this
 */
proto.cattlechain.AnimalIdentity.LOCATION.prototype.addCoordinates = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cattlechain.AnimalIdentity.LOCATION} returns this
 */
proto.cattlechain.AnimalIdentity.LOCATION.prototype.clearCoordinatesList = function() {
  return this.setCoordinatesList([]);
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Species species = 3;
 * @return {!proto.cattlechain.AnimalIdentity.Species}
 */
proto.cattlechain.AnimalIdentity.prototype.getSpecies = function() {
  return /** @type {!proto.cattlechain.AnimalIdentity.Species} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.cattlechain.AnimalIdentity.Species} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setSpecies = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string legalId = 4;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getLegalid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setLegalid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string birthdate = 5;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getBirthdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setBirthdate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Sex sex = 6;
 * @return {!proto.cattlechain.AnimalIdentity.Sex}
 */
proto.cattlechain.AnimalIdentity.prototype.getSex = function() {
  return /** @type {!proto.cattlechain.AnimalIdentity.Sex} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.cattlechain.AnimalIdentity.Sex} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setSex = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string breed = 7;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getBreed = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setBreed = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string calvedBy = 8;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getCalvedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setCalvedby = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string siredBy = 9;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getSiredby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setSiredby = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional LOCATION location = 10;
 * @return {?proto.cattlechain.AnimalIdentity.LOCATION}
 */
proto.cattlechain.AnimalIdentity.prototype.getLocation = function() {
  return /** @type{?proto.cattlechain.AnimalIdentity.LOCATION} */ (
    jspb.Message.getWrapperField(this, proto.cattlechain.AnimalIdentity.LOCATION, 10));
};


/**
 * @param {?proto.cattlechain.AnimalIdentity.LOCATION|undefined} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
*/
proto.cattlechain.AnimalIdentity.prototype.setLocation = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.clearLocation = function() {
  return this.setLocation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.cattlechain.AnimalIdentity.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional double weight = 11;
 * @return {number}
 */
proto.cattlechain.AnimalIdentity.prototype.getWeight = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 11, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setWeight = function(value) {
  return jspb.Message.setProto3FloatField(this, 11, value);
};


/**
 * optional string ownedBy = 12;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getOwnedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setOwnedby = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string locatedAt = 13;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getLocatedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setLocatedat = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string phenologicalCondition = 14;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getPhenologicalcondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setPhenologicalcondition = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string reproductiveCondition = 15;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getReproductivecondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setReproductivecondition = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string healthCondition = 16;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getHealthcondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setHealthcondition = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string fedWith = 17;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getFedwith = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setFedwith = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string welfareCondition = 18;
 * @return {string}
 */
proto.cattlechain.AnimalIdentity.prototype.getWelfarecondition = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.setWelfarecondition = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * repeated AnimalMonitoringEvent events = 19;
 * @return {!Array<!proto.cattlechain.AnimalMonitoringEvent>}
 */
proto.cattlechain.AnimalIdentity.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.cattlechain.AnimalMonitoringEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.cattlechain.AnimalMonitoringEvent, 19));
};


/**
 * @param {!Array<!proto.cattlechain.AnimalMonitoringEvent>} value
 * @return {!proto.cattlechain.AnimalIdentity} returns this
*/
proto.cattlechain.AnimalIdentity.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 19, value);
};


/**
 * @param {!proto.cattlechain.AnimalMonitoringEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cattlechain.AnimalMonitoringEvent}
 */
proto.cattlechain.AnimalIdentity.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 19, opt_value, proto.cattlechain.AnimalMonitoringEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.cattlechain.AnimalIdentity} returns this
 */
proto.cattlechain.AnimalIdentity.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};





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
proto.cattlechain.AnimalMonitoringEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.cattlechain.AnimalMonitoringEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.cattlechain.AnimalMonitoringEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cattlechain.AnimalMonitoringEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    actityalert: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tempraturealert: jspb.Message.getFieldWithDefault(msg, 2, ""),
    weightalert: jspb.Message.getFieldWithDefault(msg, 3, ""),
    drikingbehaviouralert: jspb.Message.getFieldWithDefault(msg, 4, ""),
    resttimealert: jspb.Message.getFieldWithDefault(msg, 5, ""),
    dairytimealert: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.cattlechain.AnimalMonitoringEvent}
 */
proto.cattlechain.AnimalMonitoringEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.cattlechain.AnimalMonitoringEvent;
  return proto.cattlechain.AnimalMonitoringEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.cattlechain.AnimalMonitoringEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.cattlechain.AnimalMonitoringEvent}
 */
proto.cattlechain.AnimalMonitoringEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setActityalert(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTempraturealert(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeightalert(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDrikingbehaviouralert(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setResttimealert(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDairytimealert(value);
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
proto.cattlechain.AnimalMonitoringEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.cattlechain.AnimalMonitoringEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.cattlechain.AnimalMonitoringEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.cattlechain.AnimalMonitoringEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActityalert();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTempraturealert();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWeightalert();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDrikingbehaviouralert();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getResttimealert();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDairytimealert();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string actityAlert = 1;
 * @return {string}
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.getActityalert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalMonitoringEvent} returns this
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.setActityalert = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tempratureAlert = 2;
 * @return {string}
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.getTempraturealert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalMonitoringEvent} returns this
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.setTempraturealert = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string weightAlert = 3;
 * @return {string}
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.getWeightalert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalMonitoringEvent} returns this
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.setWeightalert = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string drikingBehaviourAlert = 4;
 * @return {string}
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.getDrikingbehaviouralert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalMonitoringEvent} returns this
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.setDrikingbehaviouralert = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string restTimeAlert = 5;
 * @return {string}
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.getResttimealert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalMonitoringEvent} returns this
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.setResttimealert = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string dairyTimeAlert = 6;
 * @return {string}
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.getDairytimealert = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.cattlechain.AnimalMonitoringEvent} returns this
 */
proto.cattlechain.AnimalMonitoringEvent.prototype.setDairytimealert = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


goog.object.extend(exports, proto.cattlechain);