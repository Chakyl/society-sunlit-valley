console.info("[SOCIETY] refreshVillagers.js loaded");

ItemEvents.entityInteracted((e) => {
  const { hand, player, level, target, server } = e;
  if (hand == "OFF_HAND") return;
  if (target.type !== "minecraft:villager") return;
  let updateThis = false;
  const nbt = target.nbt.toString();
  if (nbt.includes("leatherworker") && !nbt.includes("stylin_purple_hat")) updateThis = true;
  // if (nbt.includes("weaponsmith") && !nbt.includes("omega")) updateThis = true;
  if (nbt.includes("botanist") && nbt.includes("cornucopia")) updateThis = true;
  if (nbt.includes("minecraft:farmer") && !nbt.includes("bakery")) updateThis = true;
  if (nbt.includes("candlelight:cook") && !nbt.includes("sweet_potato_seed")) updateThis = true;
  if (nbt.includes("toolsmith") && nbt.includes("reinforced_core")) updateThis = true;
  if (nbt.includes("cleric") && !nbt.includes("core_destruction")) updateThis = true;
  if (nbt.includes("cartographer") && nbt.includes("banking_guide")) updateThis = true;
  if (nbt.includes("fletcher") && !nbt.includes("magic_rope")) updateThis = true;
  if (nbt.includes("fisher") && !nbt.includes("guide_book")) updateThis = true;

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
    player.tell(Text.green("Villager updated! Thanks for playing Sunlit Valley!"));
  }
});

ItemEvents.entityInteracted((e) => {
  const { hand, level, target } = e;
  if (hand == "OFF_HAND") return;
  if (target.type !== "vinery:wandering_winemaker") return;
  let updateThis = false;
  const nbt = target.nbt.toString();
  if (nbt.includes("minecraft:emerald")) updateThis = true;

  if (updateThis) {
    let freshVillager = level.createEntity("vinery:wandering_winemaker");
    let villagerNbt = freshVillager.getNbt();
    villagerNbt.Brain.memories = target.nbt.Brain.memories;
    freshVillager.customName = target.customName;
    villagerNbt.Pos = [Number(target.x), Number(target.y), Number(target.z)];
    freshVillager.setNbt(villagerNbt);
    villagerNbt.Offers = {
      Recipes: [
        {
          buy: { Count: 18, id: "numismatics:cog" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 12,
          priceMultiplier: 0.2,
          "quark:tier": 6,
          rewardExp: 1,
          sell: {
            Count: 1,
            id: "quark:pathfinders_quill",
            tag: {
              targetBiome: "minecraft:old_growth_pine_taiga",
              targetBiomeColor: 5980703,
              targetBiomeUnderground: 0,
            },
          },
          specialPrice: 0,
          uses: 0,
          xp: 15,
        },
        {
          buy: { Count: 4, id: "numismatics:cog" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "vinery:red_grape_seeds" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 4, id: "numismatics:cog" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "vinery:white_grape_seeds" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "vinery:taiga_grape_seeds_red" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "vinery:taiga_grape_seeds_white" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "vinery:savanna_grape_seeds_red" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "vinery:savanna_grape_seeds_white" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "vinery:jungle_grape_seeds_red" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "vinery:jungle_grape_seeds_white" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 4, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "nethervinery:crimson_grape_seeds" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 4, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "nethervinery:warped_grape_seeds" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
      ],
    };
    freshVillager.setNbt(villagerNbt);
    freshVillager.spawn();
    target.setRemoved("unloaded_to_chunk");
  }
});

ItemEvents.entityInteracted((e) => {
  const { hand, level, target } = e;
  if (hand == "OFF_HAND") return;
  if (target.type !== "bakery:wandering_baker") return;
  let updateThis = false;
  const nbt = target.nbt.toString();
  if (nbt.includes("minecraft:emerald")) updateThis = true;

  if (updateThis) {
    let freshVillager = level.createEntity("bakery:wandering_baker");
    let villagerNbt = freshVillager.getNbt();
    villagerNbt.Brain.memories = target.nbt.Brain.memories;
    freshVillager.customName = target.customName;
    villagerNbt.Pos = [Number(target.x), Number(target.y), Number(target.z)];
    freshVillager.setNbt(villagerNbt);
    villagerNbt.Offers = {
      Recipes: [
        {
          buy: { Count: 18, id: "numismatics:cog" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 12,
          priceMultiplier: 0.2,
          "quark:tier": 6,
          rewardExp: 1,
          sell: {
            Count: 1,
            id: "quark:pathfinders_quill",
            tag: {
              targetBiome: "minecraft:old_growth_pine_taiga",
              targetBiomeColor: 5980703,
              targetBiomeUnderground: 0,
            },
          },
          specialPrice: 0,
          uses: 0,
          xp: 15,
        },
        {
          buy: { Count: 1, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "bakery:strawberry_cake" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 2, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "bakery:chocolate_cake" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "numismatics:cog" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "bakery:sweetberry_cake" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 2, id: "numismatics:crown" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "atmospheric:yucca_gateau" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 4, id: "numismatics:cog" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "bakery:chocolate_gateau" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "society:prismatic_shard" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "society:prize_ticket" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "society:prismatic_shard" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "splendid_slimes:slime_ticket" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 1, id: "society:prismatic_shard" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 4, id: "splendid_slimes:slime_candy" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 2, id: "society:prismatic_shard" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "pamhc2trees:cinnamon_sapling" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 3, id: "society:prismatic_shard" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "pamhc2trees:pawpaw_sapling" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 3, id: "society:prismatic_shard" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "pamhc2trees:hazelnut_sapling" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
        {
          buy: { Count: 8, id: "society:prismatic_shard" },
          buyB: { Count: 0, id: "minecraft:air" },
          demand: 0,
          maxUses: 8,
          priceMultiplier: 0.05,
          rewardExp: 1,
          sell: { Count: 1, id: "pamhc2trees:lemon_sapling" },
          specialPrice: 0,
          uses: 0,
          xp: 1,
        },
      ],
    };
    freshVillager.setNbt(villagerNbt);
    freshVillager.spawn();
    target.setRemoved("unloaded_to_chunk");
  }
});
