console.info("[SOCIETY] seedMessage.js loaded");

const seedMessageThrottle = ((temp) => (entity, tick, identifier) => {
  const { age, uuid } = entity;
  const key = `${uuid}${identifier}`;
  const now = temp[key];
  if (!now || age - now >= tick) {
    temp[key] = age;
    return false;
  }
  return true;
})({});

BlockEvents.rightClicked(
  [
    "minecraft:farmland",
    "dew_drop_farmland_growth:weak_fertilized_farmland",
    "dew_drop_farmland_growth:strong_fertilized_farmland",
    "dew_drop_farmland_growth:hyper_fertilized_farmland",
    "dew_drop_farmland_growth:hydrating_farmland",
    "dew_drop_farmland_growth:bountiful_fertilized_farmland",
    "dew_drop_farmland_growth:low_quality_fertilized_farmland",
    "dew_drop_farmland_growth:high_quality_fertilized_farmland",
    "dew_drop_farmland_growth:pristine_quality_fertilized_farmland",
  ],
  (e) => {
    const { player, level, block, server } = e;
    if (!player.getHeldItem("main_hand").hasTag("forge:seeds")) return;
    let errorText;
    const biomeTags = level
      .getBiome(block.pos)
      .tags()
      .map((tagkey) => tagkey.location())
      .toList();
    if (
      biomeTags.toString().includes("sereneseasons:tropical_biomes") &&
      !player.getHeldItem("main_hand").hasTag("sereneseasons:summer_crops")
    ) {
      errorText = "This Biome is always treated as Summer for planted crops.";
    }
    if (
      Number(level.getBiome(block.pos).get().getTemperature(block.pos)) < 0.15 &&
      !player.getHeldItem("main_hand").hasTag("sereneseasons:winter_crops")
    ) {
      errorText = "This Biome is always treated as Winter for planted crops.";
    }
    if (!seedMessageThrottle(player, 6000, "seed_message_throttle") && errorText) {
      global.renderUiText(
        player,
        server,
        {
          seedBiomeMessage: {
            type: "text",
            x: 0,
            y: -90,
            text: errorText,
            color: "#FF5555",
            alignX: "center",
            alignY: "bottom",
          },
          seedBiomeMessageShadow: {
            type: "text",
            x: 1,
            z: -1,
            y: -89,
            text: errorText,
            color: "#000000",
            alignX: "center",
            alignY: "bottom",
          },
        },
        global.mainUiElementIds
      );
    }
  }
);
