console.info("[SOCIETY] cobblemonRadar.js loaded");

const rarities = ["common", "uncommon", "rare", "ultra-rare"];

const getSortedSpawnNames = (spawnNames, namedProbabilities) => {
  let keys = Object.keys(spawnNames);
  keys.sort(function (a, b) {
    let weightA = namedProbabilities[spawnNames[a]] || 0;
    let weightB = namedProbabilities[spawnNames[b]] || 0;
    return weightB - weightA;
  });

  return keys;
}
const applyColor = (name, percentage) => {
  if (percentage < 0.01) {
    return `§5${name}`
  } else if (percentage < 0.1) {
    return `§c${name}`
  } else if (percentage < 5) {
    return `§e${name}`
  } else {
    return `§a${name}`
  }
}

ItemEvents.rightClicked("sunlit_cobblemon:poke_radar", (e) => {
  const { level, player, item, server } = e;
  let rarity = item.getNbt() || { rarity: "common" };
  if (player.isCrouching()) {
    $CuriosApi.getCuriosInventory(player).ifPresent((curiosInventory) => {
      let slots = curiosInventory["findCurios(java.lang.String[])"]("radar");
      if (slots && slots[0] !== undefined && slots[0].toString().includes("poke_radar")) {
        server.runCommandSilent(
          `curios replace radar 0 ${player.username} with sunlit_cobblemon:poke_radar{rarity:"${rarity.rarity}"}`
        );
        server.runCommandSilent(
          `playsound cobblemon:pc.on block @a ${player.x} ${player.y} ${player.z}`
        );
        server.runCommandSilent(
          `playsound cobblemon:fossil_machine.retrieve_pokemon block @a ${player.x} ${player.y} ${player.z}`
        );
        player.tell(Text.translatable(
          "sunlit_cobblemon.poke_radar.rarity_selected_hud",
          Text.translatable(
            `sunlit_cobblemon.poke_radar.rarity.${rarity.rarity}`,
          ).gold()))
      }
    });
  } else {
    let spawnDetails = global.getCurrentSpawnDetails(level, player, rarity.rarity);

    let spawnNames = {}
    let namedProbabilities = {}
    spawnDetails.forEach((entry) => {
      let nameText = entry.getName()
      let nameString = nameText.getString()
      if (!spawnNames[nameString]) {
        spawnNames[nameString] = nameText
      }
      let standardizedNameText = spawnNames[nameString]
      namedProbabilities[standardizedNameText] = (namedProbabilities[standardizedNameText] || 0) + entry.weight
    })
    let sortedKeys = getSortedSpawnNames(spawnNames, namedProbabilities);
    let printStr = ""
    sortedKeys.forEach((key) => {
      var originalText = spawnNames[key];
      var weight = namedProbabilities[originalText];
      printStr += ` ${key}: ${applyColor(Math.round(weight * 100) / 100, weight)}%§r,`;
    });
    player.tell(Text.translatable(
      "sunlit_cobblemon.poke_radar.rarity_selected",
      Text.translatable(
        `sunlit_cobblemon.poke_radar.rarity.${rarity.rarity}`,
      ).gold(),
    ).underlined());
    if (printStr.equals("")) {
      player.tell(Text.translatable("cobblemon.command.checkspawns.nothing").red())
      server.runCommandSilent(
        `playsound refurbished_furniture:ui.paddle_ball.retro_fail block @a ${player.x} ${player.y} ${player.z}`,
      );
    } else {
      player.tell(printStr)
      server.runCommandSilent(
        `playsound cobblemon:fossil_machine.finished block @a ${player.x} ${player.y} ${player.z}`,
      );
    }
  }
  global.addItemCooldown(player, item, 20);
});

ItemEvents.firstLeftClicked("sunlit_cobblemon:poke_radar", (e) => {
  const { item, server, player } = e;
  server.runCommandSilent(
    `playsound refurbished_furniture:ui.paddle_ball.retro_click block @a ${player.x} ${player.y} ${player.z}`,
  );
  let newNbt = item.getNbt() || { rarity: "common" };
  const rarityIndex = rarities.indexOf(newNbt.rarity);
  const selectedRarity = rarities[rarityIndex === 3 ? 0 : rarityIndex + 1];
  newNbt.rarity = selectedRarity;
  item.nbt = newNbt;
  const raritySelectedText = Text.translatable(
    "sunlit_cobblemon.poke_radar.rarity_selected",
    Text.translatable(
      `sunlit_cobblemon.poke_radar.rarity.${selectedRarity}`,
    ).green(),
  );

  global.renderUiText(
    player,
    server,
    {
      pokeRadar: {
        type: "text",
        x: 0,
        y: -90,
        text: `${raritySelectedText.toJson()}`,
        color: "#AAAAAA",
        alignX: "center",
        alignY: "bottom",
      },
      pokeRadarShadow: {
        type: "text",
        x: 1,
        z: -1,
        y: -89,
        text: raritySelectedText.getString(),
        color: "#000000",
        alignX: "center",
        alignY: "bottom",
      },
    },
    ["pokeRadar"],
  );
  global.addItemCooldown(player, item, 10);
});
