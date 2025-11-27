console.info("[SOCIETY] slimeTicket.js loaded");

const SlimeFavoriteFoods = {
  all_seeing: { item: "minecraft:golden_carrot" },
  bitwise: { item: "society:fire_opal" },
  blazing: { item: "autumnity:cooked_turkey" },
  bony: { item: "society:large_sheep_milk" },
  boomcat: { item: "untitledduckmod:cooked_duck", entity: "Duck" },
  dusty: { item: "netherdepthsupgrade:bonefish", entity: "Bogged" },
  ender: { item: "minecraft:amethyst_shard" },
  gold: { item: "society:bell_pepper_preserves" },
  juicy: { item: "vinery:jungle_grapes_red" },
  luminous: { item: "vintagedelight:pickle" },
  mechanic: { item: "oreganized:lead_ingot" },
  minty: { entity: "Enderman" },
  orby: { entity: "Drowned" },
  phantom: { item: "minecraft:purple_bed" },
  prisma: { item: "aquaculture:boulti" },
  puddle: { item: "unusualfishmod:raw_sneep_snorp" },
  rotting: { item: "minecraft:chicken", entity: "Chicken" },
  shulking: { item: "minecraft:chorus_flower" },
  slimy: { item: "farm_and_charm:strawberry" },
  sparkcat: { item: "society:smoked_spindlefish" },
  sweet: { item: "atmospheric:orange" },
  webby: { item: "veggiesdelight:garlic" },
  weeping: { item: "pamhc2trees:bananaitem" },
  bear: { item: "buzzier_bees:crystallized_honey_block" },
};
ItemEvents.entityInteracted("splendid_slimes:splendid_slime", (e) => {
  const { hand, player, level, target, server, item } = e;
  if (hand == "OFF_HAND") return;
  if (hand == "MAIN_HAND" && item === "splendid_slimes:slime_ticket") {
    const slimeType = target.nbt.Breed.toString().split(":")[1];
    const favorites = SlimeFavoriteFoods[slimeType];
    server.runCommandSilent(
      `playsound chimes:block.iron.chime block @a ${player.x} ${player.y} ${player.z}`
    );
    level.spawnParticles(
      "legendarycreatures:wisp_particle",
      true,
      target.x,
      target.y + 1.5,
      target.z,
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      0.1 * rnd(1, 4),
      5,
      0.01
    );
    if (favorites.item) {
      player.give(
        Item.of(
          "supplementaries:present_pink",
          `{BlockEntityTag:{Description:"${global.formatName(
            slimeType
          )} Slime\'s favorite food :pink_heart:",ForgeCaps:{},Items:[{Count:1b,Slot:0b,id:"${
            favorites.item
          }"}],Recipient:"${player.username}",Sender:"Slime Ticket",id:"supplementaries:present"}}`
        )
      );
    }
    if (favorites.entity) {
      player.give(
        Item.of(
          "supplementaries:present_pink",
          `{BlockEntityTag:{Description:"${global.formatName(
            slimeType
          )} Slime\'s favorite mob to eat :pink_heart:",ForgeCaps:{},Items:[{Count:1b,Slot:0b,id:"minecraft:paper",tag:{display:{Name:\'{"text":"${
            favorites.entity
          }"}\'}}}],Recipient:"${
            player.username
          }",Sender:"Slime Ticket",id:"supplementaries:present"}}`
        )
      );
    }
    item.count--;
    global.addItemCooldown(player, item, 10);
  }
});
