// priority: -21
console.info("[SOCIETY-S-COBBLEMON] cobblemonUtils.js loaded");

const $CobblemonAPI = Java.loadClass("com.cobblemon.mod.common.Cobblemon").INSTANCE;

global.getPlayerParty = (player) => $CobblemonAPI.getStorage().getParty(player.uuid);

global.getPartyLevel = (player) => {
  if (player == undefined) return 0;
  const party = global.getPlayerParty(player);
  if (party == undefined) return 0;
  let partyCount = 0;
  let levelSum = 0;
  let levelHighest = 0;
  party.forEach((pokemon) => {
    if (pokemon.isLegendary() || pokemon.isMythical()) levelSum += 99999;
    levelSum += pokemon.level;
    if (levelHighest < pokemon.level) levelHighest = pokemon.level;
    partyCount++;
  });
  let levelAverage = Math.round(levelSum / partyCount);
  if (Math.round(levelAverage * 1.5) < levelHighest) return levelHighest;
  return levelAverage;
};

global.hasScope = (entity) => entity.nbt.ForgeCaps["curios:inventory"].toString().includes("sunlit_cobblemon:silph_scope");

global.rollPokeWeightedTable = (table) => {
  let roll = 0;
  const totalWeight = table.reduce((acc, current) => acc + current.weight, 0);
  let currentWeight = 0;
  if (totalWeight > 1) {
    roll = rnd(0, totalWeight);
    for (let index = 0; index < table.length; index++) {
      currentWeight += table[index].weight;
      if (currentWeight >= roll) {
        return table[index];
      }
    }
  }
  return;
};

global.getPokemonLevel = (lvlRange) => {
  if (!lvlRange || lvlRange.length < 2) return 1;
  return (
    Math.floor(Math.random() * (lvlRange[1] - lvlRange[0] + 1)) + lvlRange[0]
  );
};
const $CobblemonWorldSpawnerManager = Java.loadClass("com.cobblemon.mod.common.api.spawning.CobblemonWorldSpawnerManager");
const $SpawningArea = Java.loadClass("com.cobblemon.mod.common.api.spawning.spawner.SpawningArea");
const $SpawnBucket = Java.loadClass("com.cobblemon.mod.common.api.spawning.SpawnBucket");
const $SpawnCause = Java.loadClass("com.cobblemon.mod.common.api.spawning.SpawnCause");

global.getCurrentSpawnDetails = (level, player, rarity) => {
  const configWorldSliceDiameter = 8;
  const configWorldSliceHeight = 16;
  const spawner = $CobblemonWorldSpawnerManager.INSTANCE.getSpawnersForPlayers().get(player.getUuid());
  let cause = new $SpawnCause(spawner, new $SpawnBucket(rarity, 1.0), player);

  let spawnArea = new $SpawningArea(
    cause,
    level,
    Math.ceil(player.x - configWorldSliceDiameter / 2.0),
    Math.ceil(player.y - configWorldSliceHeight / 2.0),
    Math.ceil(player.z - configWorldSliceDiameter / 2.0),
    configWorldSliceDiameter,
    configWorldSliceHeight,
    configWorldSliceDiameter,
  );
  let slice = spawner.prospector.prospect(spawner, spawnArea)
  let contexts = spawner.resolver.resolve(spawner, spawner.contextCalculators, slice)
  return spawner.getSpawningSelector().getProbabilities(spawner, contexts)
}

global.getImportantAspect = (aspects) => { 
  for (let i = 0; i < aspects.length; i++) {
    if (["galarian", "hisuian", "alolan", "paldean"].includes(aspects[i])) return aspects[i];
  }
  return null;
}

global.summonRaidPokemon = (server, level, block, type, variant, raidLevel, spawnedLevel, shiny, hiddenAbility, raidTier, moveUp) => {
  server.runCommandSilent(`execute in ${level.dimension} run pokespawnat ${block.x} ${block.y + 1} ${block.z} ${type}  ${shiny ? "shiny " : ""} ${hiddenAbility ? "hiddenability " : ""} ${variant && variant.equals("") ? "" : variant} level=${raidLevel} hp_ev=84 defence_ev=84 special_defence_ev=84 speed_ev=252 uncatchable=yes hp_iv=32 defence_iv=31 special_defence_iv=31 attack_iv=31 special_attack_iv=31 speed_iv=31`);
  let spawnedPokemon = level.getEntitiesWithin(AABB.ofBlock(level.getBlock(block.getPos())).inflate(0.2)).filter((e) => e.type.equals("cobblemon:pokemon"));
  if (spawnedPokemon && spawnedPokemon.length > 0) {
    spawnedPokemon = spawnedPokemon[0];
    if (moveUp) spawnedPokemon.setDeltaMovement(new Vec3d(0, 1.1, 0));
    spawnedPokemon.persistentData.raidMon = true;
    if (type === "lunala") spawnedPokemon.persistentData.moonMon = true;
    spawnedPokemon.persistentData.raidMonStats = {
      tier: raidTier,
      hasHiddenAbility: hiddenAbility,
      spawnedLevel: spawnedLevel,
      variant: variant,
      isShiny: shiny
    }
    spawnedPokemon.potionEffects.add("minecraft:glowing", 1200, 0, false, false);
    spawnedPokemon.potionEffects.add("minecraft:slow_falling", 400, 0, false, false);
    server.runCommandSilent(`scale set 3 ${spawnedPokemon.getUuid().toString()}`)
    return true;
  }
  return false;
}

global.hasPartyPokemon = (player, pokemonNames, count) => {
  if (player == undefined) return false;
  const party = global.getPlayerParty(player);
  if (party == undefined) return false;
  let regis = []
  party.forEach((pokemon) => {
    let speciesId = pokemon.species.toString()
    if (pokemonNames.includes(speciesId) && !regis.includes(speciesId)) regis.push(speciesId)
  });
  return regis.length >= count;
};


global.handleLeagueFee = (server, player, reason) => {
  const UUID = player.getUuid();
  let amountToDeduct = 0;
  let balance = 0;
  let account = null;
  let maxFee = 0;
  let minimumFee = 512;

  global.GLOBAL_BANK.accounts.forEach((playerUUID, bankAccount) => {
    if (UUID.toString() == playerUUID.toString()) {
      balance = bankAccount.getBalance();
      account = bankAccount;
    }
  });
  if (reason === "murder") {
    minimumFee = 10000;
    maxFee = 50000;
    amountToDeduct = Math.min((Math.round(balance * 0.2) * (player.persistentData.winStreak + 1)), maxFee);
  }
  if (reason === "loss") {
    minimumFee = 512;
    maxFee = 10000;

    amountToDeduct = Math.min(Math.round(balance * 0.05) * (player.persistentData.winStreak + 1), maxFee);
  }
  amountToDeduct *= player.stages.has("trainer_level_8") ? 2 : 1;
  if (amountToDeduct < minimumFee) amountToDeduct = minimumFee;
  if (balance < amountToDeduct) {
    let currentDebt = null;
    let foundIndex = -1;
    if (!server.persistentData.debts) server.persistentData.debts = [];
    for (let index = 0; index < server.persistentData.debts.length; index++) {
      if (String(UUID) === String(server.persistentData.debts[index].uuid)) {
        currentDebt = Number(server.persistentData.debts[index].amount);
        server.persistentData.debts[index].amount = currentDebt + amountToDeduct;
        foundIndex = index;
        break;
      }
    }
    if (!currentDebt) {
      server.persistentData.debts.push({ uuid: UUID.toString(), amount: amountToDeduct });
    }
  } else {
    account.setBalance(balance - amountToDeduct);
  }
  server.runCommandSilent(
    global.getEmbersTextAPICommand(
      player.username,
      `{anchor:"TOP_LEFT",background:1,color:"#FFFFFF",size:1,offsetY:36,offsetX:6,typewriter:1,align:"TOP_LEFT"}`,
      160,
      Text.translatable(
        reason === "murder" ? "sunlit_cobblemon.murder.fee" : "sunlit_cobblemon.loss.fee",
        global.formatPrice(amountToDeduct.toFixed())
      ).toJson()
    ))
};

const NPCMysteryGifts = {
    banker: "marshadow",
    blacksmith: "magearna",
    carpenter: "celebi",
    fisher: "volcanion",
    market: "zeraora",
    shepherd: "meloetta"
}


global.giveNPCMysteryGift = (player, target, server, npcId) => {
  player.give(Item.of("sunlit_cobblemon:mystery_gift", { pokemon: NPCMysteryGifts[npcId], ot: npcId}) )
  server.runCommandSilent(
    `dialog ${target.getUuid()} show ${player.username} ${npcId}_unique_cobblemon_mystery_gift`
  );
};

