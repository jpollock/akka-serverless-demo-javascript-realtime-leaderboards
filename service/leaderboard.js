/*
 * Copyright 2019 Lightbend Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


const EventSourced = require("cloudstate").EventSourced;

const entity = new EventSourced(
  ["LeaderboardService.proto", "domain.proto"],
  "realtime.leaderboard.RealtimeLeaderboardService",
  {
    persistenceId: "leaderboard",
    snapshotEvery: 5, // Usually you wouldn't snapshot this frequently, but this helps to demonstrate snapshotting
    includeDirs: ["./"],
    serializeFallbackToJson: true // Enables JSON support for persistence
  }
);

/*
 * Set a callback to create the initial state. This is what is created if there is no
 * snapshot to load.
 *
 * We can ignore the userId parameter if we want, it's the id of the entity, which is
 * automatically associated with all events and state for this entity.
 */
entity.setInitial(leaderboardId => ({players: []}));

/*
 * Set a callback to create the behavior given the current state. Since there is no state
 * machine like behavior transitions for our shopping leaderboard, we just return one behavior, but
 * this could inspect the leaderboard, and return a different set of handlers depending on the
 * current state of the leaderboard - for example, if the leaderboard supported being checked out, then
 * if the leaderboard was checked out, it might return AddPlayer and RemovePlayer command handlers that
 * always fail because the leaderboard is checked out.
 *
 * This callback will be invoked after each time that an event is handled to get the current
 * behavior for the current state.
 */
entity.setBehavior(leaderboard => {
  return {
    // Command handlers. The name of the command corresponds to the name of the rpc call in
    // the gRPC service that this entity offers.
    commandHandlers: {
      AddPlayer: addPlayer,
      RemovePlayer: removePlayer,
      GetLeaderboard: getLeaderboard,
      GetLeaderboardSorted: getLeaderboardSorted
    },
    // Event handlers. The name of the event corresponds to the value of the
    // type field in the event JSON.
    eventHandlers: {
      PlayerAdded: playerAdded,
      PlayerRemoved: playerRemoved
    }
  };
});

/**
 * Handler for add player commands.
 */
function addPlayer(addPlayer, leaderboard, ctx) {
  console.log("addPlayer", addPlayer);
  // Validation:
  // Make sure that it is not possible to add negative quantities
  // Create the event.    
    const playerAdded = {
      type: "PlayerAdded",
      player: {
        playerId: addPlayer.playerId,
        playerName: addPlayer.playerName,
        age: addPlayer.age,
        score: addPlayer.score
      }
    };
    // Emit the event.
    console.log("addPlayer::emit event", playerAdded);
    ctx.emit(playerAdded);
    return {};
}

/**
 * Handler for remove player commands.
 */
function removePlayer(removePlayer, leaderboard, ctx) {
  console.log("removePlayer", removePlayer);
  // Validation:
  // Check that the player that we're removing actually exists.
  const existing = leaderboard.players.find(player => {
    console.log("removePlayer:: return existing");
    return player.playerId === removePlayer.playerId;
  });

  // If not, fail the command.
  if (!existing) {
    ctx.fail("Player " + removePlayer.playerId + " not in leaderboard");
  } else {
    // Otherwise, emit an player removed event.
    const playerRemoved = {
      type: "PlayerRemoved",
      playerId: removePlayer.playerId
    };
    ctx.emit(playerRemoved);
    return {};
  }
}

/**
 * Handler for get leaderboard commands.
 */
function getLeaderboard(request, leaderboard) {
  console.log("getLeaderboard", leaderboard.players);
  // Simply return the shopping leaderboard as is.
  return leaderboard;
}

/**
 * Handler for get leaderboard commands.
 */
function getLeaderboardSorted(request, leaderboard) {
  // Simply return the shopping leaderboard as is.
  let lb = {"players": leaderboard.players.sort((a, b) => (a.score < b.score) ? 1 : -1).slice(0, request.limit), "totalPlayers": {"count": leaderboard.players.length}};
  console.log(lb);
  return lb;
}

/**
 * Handler for player added events.
 */
function playerAdded(added, leaderboard) {
  console.log("playerAdded");
  // If there is an existing player with that product id, we need to increment its score.
  const existing = leaderboard.players.find(player => {
    console.log("playerAdded::return existing");
    return player.playerId === added.player.playerId;
  });

  if (existing) {
    existing.score = added.player.score;
  } else {
    console.log("playerAdded::push");
    // Otherwise, we just add the player to the existing list.
    leaderboard.players.push(added.player);
  }

  // And return the new state.
  console.log("return state");
  return leaderboard;
}

/**
 * Handler for player removed events.
 */
function playerRemoved(removed, leaderboard) {
  // Filter the removed player from the players by product id.
  leaderboard.players = leaderboard.players.filter(player => {
    return player.playerId !== removed.playerId;
  });

  // And return the new state.
  return leaderboard;
}

// Export the entity
module.exports = entity;
