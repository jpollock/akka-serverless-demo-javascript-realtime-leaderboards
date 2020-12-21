/**
 * @fileoverview gRPC-Web generated client stub for realtime.leaderboard
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var cloudstate_entity_key_pb = require('./cloudstate/entity_key_pb.js')

var cloudstate_eventing_pb = require('./cloudstate/eventing_pb.js')

var google_api_annotations_pb = require('./google/api/annotations_pb.js')
const proto = {};
proto.realtime = {};
proto.realtime.leaderboard = require('./LeaderboardService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.realtime.leaderboard.RealtimeLeaderboardServiceClient =
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
proto.realtime.leaderboard.RealtimeLeaderboardServicePromiseClient =
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
 *   !proto.realtime.leaderboard.AddPlayerRequest,
 *   !proto.realtime.leaderboard.LeaderboardCount>}
 */
const methodDescriptor_RealtimeLeaderboardService_AddPlayer = new grpc.web.MethodDescriptor(
  '/realtime.leaderboard.RealtimeLeaderboardService/AddPlayer',
  grpc.web.MethodType.UNARY,
  proto.realtime.leaderboard.AddPlayerRequest,
  proto.realtime.leaderboard.LeaderboardCount,
  /**
   * @param {!proto.realtime.leaderboard.AddPlayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.realtime.leaderboard.LeaderboardCount.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.realtime.leaderboard.AddPlayerRequest,
 *   !proto.realtime.leaderboard.LeaderboardCount>}
 */
const methodInfo_RealtimeLeaderboardService_AddPlayer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.realtime.leaderboard.LeaderboardCount,
  /**
   * @param {!proto.realtime.leaderboard.AddPlayerRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.realtime.leaderboard.LeaderboardCount.deserializeBinary
);


/**
 * @param {!proto.realtime.leaderboard.AddPlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.realtime.leaderboard.LeaderboardCount)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.realtime.leaderboard.LeaderboardCount>|undefined}
 *     The XHR Node Readable Stream
 */
proto.realtime.leaderboard.RealtimeLeaderboardServiceClient.prototype.addPlayer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/realtime.leaderboard.RealtimeLeaderboardService/AddPlayer',
      request,
      metadata || {},
      methodDescriptor_RealtimeLeaderboardService_AddPlayer,
      callback);
};


/**
 * @param {!proto.realtime.leaderboard.AddPlayerRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.realtime.leaderboard.LeaderboardCount>}
 *     Promise that resolves to the response
 */
proto.realtime.leaderboard.RealtimeLeaderboardServicePromiseClient.prototype.addPlayer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/realtime.leaderboard.RealtimeLeaderboardService/AddPlayer',
      request,
      metadata || {},
      methodDescriptor_RealtimeLeaderboardService_AddPlayer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.realtime.leaderboard.GetLeaderboardRequest,
 *   !proto.realtime.leaderboard.Leaderboard>}
 */
const methodDescriptor_RealtimeLeaderboardService_GetLeaderboard = new grpc.web.MethodDescriptor(
  '/realtime.leaderboard.RealtimeLeaderboardService/GetLeaderboard',
  grpc.web.MethodType.UNARY,
  proto.realtime.leaderboard.GetLeaderboardRequest,
  proto.realtime.leaderboard.Leaderboard,
  /**
   * @param {!proto.realtime.leaderboard.GetLeaderboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.realtime.leaderboard.Leaderboard.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.realtime.leaderboard.GetLeaderboardRequest,
 *   !proto.realtime.leaderboard.Leaderboard>}
 */
const methodInfo_RealtimeLeaderboardService_GetLeaderboard = new grpc.web.AbstractClientBase.MethodInfo(
  proto.realtime.leaderboard.Leaderboard,
  /**
   * @param {!proto.realtime.leaderboard.GetLeaderboardRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.realtime.leaderboard.Leaderboard.deserializeBinary
);


/**
 * @param {!proto.realtime.leaderboard.GetLeaderboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.realtime.leaderboard.Leaderboard)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.realtime.leaderboard.Leaderboard>|undefined}
 *     The XHR Node Readable Stream
 */
proto.realtime.leaderboard.RealtimeLeaderboardServiceClient.prototype.getLeaderboard =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/realtime.leaderboard.RealtimeLeaderboardService/GetLeaderboard',
      request,
      metadata || {},
      methodDescriptor_RealtimeLeaderboardService_GetLeaderboard,
      callback);
};


/**
 * @param {!proto.realtime.leaderboard.GetLeaderboardRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.realtime.leaderboard.Leaderboard>}
 *     Promise that resolves to the response
 */
proto.realtime.leaderboard.RealtimeLeaderboardServicePromiseClient.prototype.getLeaderboard =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/realtime.leaderboard.RealtimeLeaderboardService/GetLeaderboard',
      request,
      metadata || {},
      methodDescriptor_RealtimeLeaderboardService_GetLeaderboard);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.realtime.leaderboard.GetLeaderboardSortedRequest,
 *   !proto.realtime.leaderboard.Leaderboard>}
 */
const methodDescriptor_RealtimeLeaderboardService_GetLeaderboardSorted = new grpc.web.MethodDescriptor(
  '/realtime.leaderboard.RealtimeLeaderboardService/GetLeaderboardSorted',
  grpc.web.MethodType.UNARY,
  proto.realtime.leaderboard.GetLeaderboardSortedRequest,
  proto.realtime.leaderboard.Leaderboard,
  /**
   * @param {!proto.realtime.leaderboard.GetLeaderboardSortedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.realtime.leaderboard.Leaderboard.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.realtime.leaderboard.GetLeaderboardSortedRequest,
 *   !proto.realtime.leaderboard.Leaderboard>}
 */
const methodInfo_RealtimeLeaderboardService_GetLeaderboardSorted = new grpc.web.AbstractClientBase.MethodInfo(
  proto.realtime.leaderboard.Leaderboard,
  /**
   * @param {!proto.realtime.leaderboard.GetLeaderboardSortedRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.realtime.leaderboard.Leaderboard.deserializeBinary
);


/**
 * @param {!proto.realtime.leaderboard.GetLeaderboardSortedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.realtime.leaderboard.Leaderboard)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.realtime.leaderboard.Leaderboard>|undefined}
 *     The XHR Node Readable Stream
 */
proto.realtime.leaderboard.RealtimeLeaderboardServiceClient.prototype.getLeaderboardSorted =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/realtime.leaderboard.RealtimeLeaderboardService/GetLeaderboardSorted',
      request,
      metadata || {},
      methodDescriptor_RealtimeLeaderboardService_GetLeaderboardSorted,
      callback);
};


/**
 * @param {!proto.realtime.leaderboard.GetLeaderboardSortedRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.realtime.leaderboard.Leaderboard>}
 *     Promise that resolves to the response
 */
proto.realtime.leaderboard.RealtimeLeaderboardServicePromiseClient.prototype.getLeaderboardSorted =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/realtime.leaderboard.RealtimeLeaderboardService/GetLeaderboardSorted',
      request,
      metadata || {},
      methodDescriptor_RealtimeLeaderboardService_GetLeaderboardSorted);
};


module.exports = proto.realtime.leaderboard;

