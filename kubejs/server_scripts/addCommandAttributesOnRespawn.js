console.info("[SOCIETY] addCommandAttributesOnRespawn.js loaded");

CommonAddedEvents.playerRespawn((e) => global.addAttributesFromStages(e.player, e.server));
