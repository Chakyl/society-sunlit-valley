console.info("[SOCIETY] refreshVillagers.js loaded");

ItemEvents.entityInteracted((e) => {
  const { hand, player, level, target, server } = e;
  if (hand == "OFF_HAND") return;
  if (target.type !== "minecraft:villager") return;
  let updateThis = false;
  const nbt = target.nbt.toString();
  if (nbt.includes("leatherworker") && !nbt.includes("stylin_purple_hat")) updateThis = true;
  if (nbt.includes("weaponsmith") && !nbt.includes("64k_storage_block")) updateThis = true;
  if (nbt.includes("shepherd") && !nbt.includes("diamond_lasso")) updateThis = true;
  if (nbt.includes("botanist") && !nbt.includes("endless_fortune")) updateThis = true;
  if (nbt.includes("bountiful_fertilizer")) updateThis = true;
  if (nbt.includes("candlelight:cook") && !nbt.includes("sweet_potato_seed")) updateThis = true;
  if (nbt.includes("toolsmith") && nbt.includes("reinforced_core")) updateThis = true;
  if (nbt.includes("cleric") && !nbt.includes("hostile_lasso")) updateThis = true;
  if (nbt.includes("librarian") && !nbt.includes("silk_touch")) updateThis = true;
  if (
    nbt.includes("cartographer") &&
    !nbt.includes("fletcher") &&
    !nbt.includes("shipping_bin_monitor")
  )
    updateThis = true;
  if (nbt.includes("fletcher") && !nbt.includes("enkephalin")) updateThis = true;
  if (nbt.includes("fisher") && !nbt.includes("river_jelly")) updateThis = true;

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
          buy: { Count: 2, id: "numismatics:cog" },
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
ItemEvents.entityInteracted((e) => {
  const { hand, level, target } = e;
  if (hand == "OFF_HAND") return;
  if (target.type !== "ribbits:ribbit") return;
  let updateThis = false;
  const nbt = target.nbt.toString();
  if (nbt.includes("cod") || nbt.includes("salmon")) updateThis = true;

  if (updateThis) {
    let freshVillager = level.createEntity("ribbits:ribbit");
    let villagerNbt = freshVillager.getNbt();
    villagerNbt.Brain.memories = target.nbt.Brain.memories;
    freshVillager.customName = target.customName;
    villagerNbt.Pos = [Number(target.x), Number(target.y), Number(target.z)];
    freshVillager.setNbt(villagerNbt);
    villagerNbt.RibbitData = {
      umbrella: "ribbits:umbrella_3",
      instrument: "ribbits:none",
      profession: "ribbits:fisherman",
    };
    villagerNbt.Offers = {
      Recipes: [
        {
          xp: 0,
          buy: { id: "minecraft:amethyst_shard", Count: 6 },
          sell: { id: "aquaculture:sushi", Count: 1 },
          uses: 0,
          priceMultiplier: 0.05,
          "quark:tier": 6,
          maxUses: 16,
          rewardExp: 1,
          demand: -32,
          specialPrice: 0,
          buyB: { id: "minecraft:air", tag: {}, Count: 0 },
        },
        {
          xp: 0,
          buy: { id: "minecraft:amethyst_shard", Count: 16 },
          sell: { id: "crabbersdelight:pearl", Count: 1 },
          uses: 0,
          priceMultiplier: 0.05,
          "quark:tier": 6,
          maxUses: 16,
          rewardExp: 1,
          demand: -32,
          specialPrice: 0,
          buyB: { id: "minecraft:air", tag: {}, Count: 0 },
        },
        {
          xp: 0,
          buy: { id: "society:amethyst_chunk", Count: 2 },
          sell: { id: "society:ribbit_drum", Count: 1 },
          uses: 0,
          priceMultiplier: 0.05,
          "quark:tier": 6,
          maxUses: 16,
          rewardExp: 1,
          demand: -32,
          specialPrice: 0,
          buyB: { id: "minecraft:air", tag: {}, Count: 0 },
        },
        {
          xp: 0,
          buy: { id: "society:amethyst_chunk", Count: 4 },
          sell: { id: "society:ribbit_gadget", Count: 1 },
          uses: 0,
          priceMultiplier: 0.05,
          "quark:tier": 6,
          maxUses: 16,
          rewardExp: 1,
          demand: -32,
          specialPrice: 0,
          buyB: { id: "minecraft:air", tag: {}, Count: 0 },
        },
        {
          xp: 0,
          buy: { id: "minecraft:amethyst_shard", Count: 32 },
          sell: { id: "furniture:iron_fish_tank", Count: 1 },
          uses: 0,
          priceMultiplier: 0.05,
          "quark:tier": 6,
          maxUses: 16,
          rewardExp: 1,
          demand: -32,
          specialPrice: 0,
          buyB: { id: "minecraft:air", tag: {}, Count: 0 },
        },
        {
          xp: 0,
          buy: { id: "minecraft:amethyst_shard", Count: 32 },
          sell: { id: "furniture:copper_fish_tank", Count: 1 },
          uses: 0,
          priceMultiplier: 0.05,
          "quark:tier": 6,
          maxUses: 16,
          rewardExp: 1,
          demand: -32,
          specialPrice: 0,
          buyB: { id: "minecraft:air", tag: {}, Count: 0 },
        },
        {
          xp: 0,
          buy: { id: "minecraft:amethyst_block", Count: 16 },
          sell: {
            id: "aquaculture:gold_fishing_rod",
            Count: 1,
          },
          uses: 0,
          priceMultiplier: 0.05,
          "quark:tier": 6,
          maxUses: 4,
          rewardExp: 1,
          demand: -8,
          specialPrice: 0,
          buyB: { id: "minecraft:air", tag: {}, Count: 0 },
        },
        {
          xp: 0,
          buy: { id: "society:aged_amethyst_cheese_block", Count: 4 },
          sell: { id: "society:river_jelly", Count: 1 },
          uses: 0,
          priceMultiplier: 0.05,
          "quark:tier": 6,
          maxUses: 16,
          rewardExp: 1,
          demand: -32,
          specialPrice: 0,
          buyB: { id: "minecraft:air", tag: {}, Count: 0 },
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
  if (target.type !== "ribbits:ribbit") return;
  let updateThis = false;
  const nbt = target.nbt.toString();
  if (nbt.includes("gardener")) updateThis = true;

  if (updateThis) {
    let freshVillager = level.createEntity("ribbits:ribbit");
    let villagerNbt = freshVillager.getNbt();
    villagerNbt.Brain.memories = target.nbt.Brain.memories;
    freshVillager.customName = target.customName;
    villagerNbt.Pos = [Number(target.x), Number(target.y), Number(target.z)];
    freshVillager.setNbt(villagerNbt);
    villagerNbt.RibbitData = {
      umbrella: "ribbits:umbrella_3",
      instrument: "ribbits:none",
      profession: "ribbits:fisherman",
    };
    freshVillager.setNbt(villagerNbt);
    freshVillager.spawn();
    target.setRemoved("unloaded_to_chunk");
  }
});
