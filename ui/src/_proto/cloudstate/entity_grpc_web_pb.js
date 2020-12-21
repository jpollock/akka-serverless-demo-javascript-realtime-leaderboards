/**
 * @fileoverview gRPC-Web generated client stub for cloudstate
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_any_pb = require('google-protobuf/google/protobuf/any_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_descriptor_pb = require('google-protobuf/google/protobuf/descriptor_pb.js')
const proto = {};
proto.cloudstate = require('./entity_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cloudstate.EntityDiscoveryClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.cloudstate.EntityDiscoveryPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cloudstate.ProxyInfo,
 *   !proto.cloudstate.EntitySpec>}
 */
const methodDescriptor_EntityDiscovery_discover = new grpc.web.MethodDescriptor(
  '/cloudstate.EntityDiscovery/discover',
  grpc.web.MethodType.UNARY,
  proto.cloudstate.ProxyInfo,
  proto.cloudstate.EntitySpec,
  /**
   * @param {!proto.cloudstate.ProxyInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cloudstate.EntitySpec.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cloudstate.ProxyInfo,
 *   !proto.cloudstate.EntitySpec>}
 */
const methodInfo_EntityDiscovery_discover = new grpc.web.AbstractClientBase.MethodInfo(
  proto.cloudstate.EntitySpec,
  /**
   * @param {!proto.cloudstate.ProxyInfo} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.cloudstate.EntitySpec.deserializeBinary
);


/**
 * @param {!proto.cloudstate.ProxyInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.cloudstate.EntitySpec)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.cloudstate.EntitySpec>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cloudstate.EntityDiscoveryClient.prototype.discover =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cloudstate.EntityDiscovery/discover',
      request,
      metadata || {},
      methodDescriptor_EntityDiscovery_discover,
      callback);
};


/**
 * @param {!proto.cloudstate.ProxyInfo} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.cloudstate.EntitySpec>}
 *     Promise that resolves to the response
 */
proto.cloudstate.EntityDiscoveryPromiseClient.prototype.discover =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cloudstate.EntityDiscovery/discover',
      request,
      metadata || {},
      methodDescriptor_EntityDiscovery_discover);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.cloudstate.UserFunctionError,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_EntityDiscovery_reportError = new grpc.web.MethodDescriptor(
  '/cloudstate.EntityDiscovery/reportError',
  grpc.web.MethodType.UNARY,
  proto.cloudstate.UserFunctionError,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.cloudstate.UserFunctionError} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.cloudstate.UserFunctionError,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EntityDiscovery_reportError = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.cloudstate.UserFunctionError} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.cloudstate.UserFunctionError} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.cloudstate.EntityDiscoveryClient.prototype.reportError =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/cloudstate.EntityDiscovery/reportError',
      request,
      metadata || {},
      methodDescriptor_EntityDiscovery_reportError,
      callback);
};


/**
 * @param {!proto.cloudstate.UserFunctionError} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.cloudstate.EntityDiscoveryPromiseClient.prototype.reportError =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/cloudstate.EntityDiscovery/reportError',
      request,
      metadata || {},
      methodDescriptor_EntityDiscovery_reportError);
};


module.exports = proto.cloudstate;

