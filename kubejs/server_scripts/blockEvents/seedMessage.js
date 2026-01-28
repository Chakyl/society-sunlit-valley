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
      errorText = Text.translatable("society.planting_crop.eternal_summer").toJson();
    }
    if (
      Number(level.getBiome(block.pos).get().getTemperature(block.pos)) < 0.15 &&
      !player.getHeldItem("main_hand").hasTag("sereneseasons:winter_crops")
    ) {
      errorText = Text.translatable("society.planting_crop.eternal_winter").toJson();
    }
    if (biomeTags.toString().includes("sereneseasons:infertile_biomes")) {
      errorText = Text.translatable("society.planting_crop.infertile_biome").toJson();
    }
    if (!seedMessageThrottle(player, 1200, "seed_message_throttle") && errorText) {
      global.renderUiText(
        player,
        server,
        {
          seedBiomeMessage: {
            type: "text",
            x: 0,
            y: -90,
            text: `${errorText}`,
            color: "#FF5555",
            alignX: "center",
            alignY: "bottom",
          },
          seedBiomeMessageShadow: {
            type: "text",
            x: 1,
            z: -1,
            y: -89,
            text: `${errorText}`,
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
// BlockEvents.placed(
//   ([
//     "minecraft:cactus",
//     "moreminecarts:glass_cactus",
//     "minecraft:sugar_cane",
//     "nethervinery:crimson_grape_bush",
//     "nethervinery:warped_grape_bush",
//     "vinery:jungle_grape_bush_red",
//     "vinery:jungle_grape_bush_white",
//     "vinery:taiga_grape_bush_white",
//     "vinery:taiga_grape_bush_red",
//     "vinery:savanna_grape_bush_white",
//     "vinery:savanna_grape_bush_red",
//     "vinery:white_grape_bush",
//     "vinery:red_grape_bush",
//     "windswept:wild_berry_bush",
//     "minecraft:sweet_berry_bush",
//   ],
//   (e) => {
//     const { player, block, server } = e;
//     let errorText;
//     if (
//       ["minecraft:cactus", "moreminecarts:glass_cactus", "minecraft:sugar_cane"].includes(block.id)
//     ) {
//       errorText = "This must be planted on Tilled Sand to grow";
//     }
//     if (block.id.includes("jungle")) {
//       errorText = "This Seed must be planted on a Vinery Lattice to grow";
//     } else if (block.id.includes("grape")) {
//       errorText = "This must be planted on a Grapevine Stem to grow";
//     }
//     if (block.id.includes("berry")) {
//       errorText = "This berry must be planted on farmland to grow";
//     }

//     if (errorText) {
//       global.renderUiText(
//         player,
//         server,
//         {
//           seedBiomeMessage: {
//             type: "text",
//             x: 0,
//             y: -90,
//             text: errorText,
//             color: "#FF5555",
//             alignX: "center",
//             alignY: "bottom",
//           },
//           seedBiomeMessageShadow: {
//             type: "text",
//             x: 1,
//             z: -1,
//             y: -89,
//             text: errorText,
//             color: "#000000",
//             alignX: "center",
//             alignY: "bottom",
//           },
//         },
//         global.mainUiElementIds
//       );
//     }
//   })
// );
