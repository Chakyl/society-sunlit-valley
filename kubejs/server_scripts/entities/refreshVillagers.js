console.info("[SOCIETY] refreshVillagers.js loaded");

ItemEvents.entityInteracted((e) => {
  const { hand, player, level, target, server } = e;
  if (hand == "OFF_HAND") return;
  if (target.type !== "minecraft:villager") return;
  let updateThis = false;
  const nbt = target.nbt.toString();
  if (nbt.includes("shepherd") && (!nbt.includes("slime_vac") || !nbt.includes("name_tag")) ) updateThis = true;
  if (nbt.includes("botanist") && !nbt.includes("cornucopia")) updateThis = true;
  if (nbt.includes("minecraft:farmer") && !nbt.includes("bakery")) updateThis = true;
  if (nbt.includes("candlelight:cook") && !nbt.includes("sweet_potato_seed")) updateThis = true;
  if (nbt.includes("toolsmith") && nbt.includes("destructor_core")) updateThis = true;
  if (nbt.includes("cleric") && !nbt.includes("goddess")) updateThis = true;
  if (nbt.includes("cartographer") && !nbt.includes("blaze_banker")) updateThis = true;
  if (nbt.includes("fletcher") && !nbt.includes("ancient_debris")) updateThis = true;
  if (nbt.includes("fisher") && nbt.includes("nether_star_hook")) updateThis = true;
  
  if (updateThis) {
    let freshVillager = level.createEntity("minecraft:villager");
    let villagerNbt = freshVillager.getNbt();
    villagerNbt.VillagerData.profession = target.nbt.VillagerData.profession;
    villagerNbt.Brain.memories = target.nbt.Brain.memories;
    freshVillager.customName = target.customName;
    villagerNbt.Pos = [Number(target.x), Number(target.y), Number(target.z)];
    freshVillager.setNbt(villagerNbt);
    freshVillager.spawn();
    target.setRemoved("unloaded_to_chunk");
    server.runCommandSilent(
      `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
    );
    player.tell(
      Text.green("Villager updated! Thanks for playing Sunlit Valley!")
    );
  }
});
