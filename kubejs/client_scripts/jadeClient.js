const $Block = Java.loadClass("net.minecraft.world.level.block.Block");
const $IntegerProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.IntegerProperty"
);
const $BooleanProperty = Java.loadClass(
  "net.minecraft.world.level.block.state.properties.BooleanProperty"
);
const $CropBlock = Java.loadClass(
  "net.minecraft.world.level.block.CropBlock"
);
const $SereneFertility = Java.loadClass("sereneseasons.init.ModFertility");
const $JadeCropInfo = Java.loadClass("snownee.jade.addon.vanilla.CropProgressProvider");
const Vec2 = Java.loadClass("net.minecraft.world.phys.Vec2");

global["JadePlushieClientCallback"] = (tooltip, accessor, pluginConfig) => {
  if (!global.plushies.includes(accessor.getBlock().id)) return;
  const nbt = accessor.getServerData();

  if (nbt.type.equals("")) return;
  const type = nbt.type;
  let typeData = global.plushieTraits[type];
  const affection = Number(nbt.affection);
  const quality = Number(nbt.quality);
  let blockName = accessor.getBlock().getDescriptionId();
  tooltip.clear();
  tooltip.add(Component.translatable(blockName));
  tooltip.add(`§6${"★".repeat(quality + 1)}§8${"☆".repeat(3 - quality)}`);
  tooltip.add(`§${typeData.color}${global.formatName(typeData.trait)}`);
  if (nbt.animal) {
    tooltip.add(global.getTranslatedEntityName(String(nbt.animal)));
  } else {
    tooltip.add(
      `§c${affection > 0 ? `❤`.repeat(affection) : ""}§8${
        affection < 4 ? `❤`.repeat(4 - affection) : ""
      }`
    );
  }
};

global["JadeShippingBinClientCallback"] = (tooltip, accessor, pluginConfig) => {
  const blockId = accessor.getBlock().id;
  if (blockId !== "shippingbin:basic_shipping_bin" && blockId !== "shippingbin:smart_shipping_bin") return;

  const nbt = accessor.getServerData();

  let customName = global.getShippingBinName(nbt, false);
  if (customName) tooltip.add(customName);
};

global["JadeFishPondClientCallback"] = (tooltip, accessor, pluginConfig) => {
  if (accessor.getBlock().id !== "society:fish_pond") return;
  const properties = accessor.getBlockState();
  const nbt = accessor.getServerData();

  if (nbt.type.equals("")) return;
  let fish = nbt.type;
  const upgraded = properties.getValue($BooleanProperty.create("upgraded"));
  let fishIcons = "";

  for (let index = 0; index < nbt.max_population; index++) {
    if (index < nbt.population) fishIcons += "§3⏳§r";
    else fishIcons += "§7⏳§r";
  }
  let blockName = accessor.getBlock().getDescriptionId();
  tooltip.clear();
  const helper = tooltip.getElementHelper();
  const fishIcon = helper
    .item(Item.of(fish), 0.5)
    .message(null)
    .translate(Vec2(-2, -1));
  tooltip.add(Component.translatable(blockName));
  tooltip["add(snownee.jade.api.ui.IElement)"](fishIcon);
  tooltip.append(Component.translatable(Item.of(fish).getDescriptionId()));
  if (upgraded) {
    tooltip["add(snownee.jade.api.ui.IElement)"](
      helper
        .item(Item.of("society:sea_biscut"), 0.5)
        .message(null)
        .translate(Vec2(-2, -1))
    );
    tooltip.append(fishIcons);
  } else {
    tooltip.add(fishIcons);
  }
};

global["JadeArtisanMachineClientCallback"] = (
  tooltip,
  accessor,
  pluginConfig
) => {
  if (!global.artisanMachineIds.includes(accessor.getBlock().id)) return;
  const properties = accessor.getBlockState();
  const nbt = accessor.getServerData();
  if (!nbt) return;
  const machine = global.artisanMachineDefinitions.filter((obj) => {
    return obj.id === accessor.getBlock().id;
  })[0];
  if (!machine) return;
  const isChargingRod = accessor.getBlock().id === "society:charging_rod";
  const working = properties.getValue($BooleanProperty.create("working"));
  if (!working || (nbt.recipe.equals("") && !isChargingRod)) return;

  const recipe = isChargingRod
    ? {
        output: ["society:battery"],
      }
    : machine.recipes.get(nbt.recipe);
  const stage = nbt.stage;
  const upgraded = properties.getValue($BooleanProperty.create("upgraded"));
  let duration = recipe.time || machine.stageCount;
  if (accessor.getBlock().id == "society:aging_cask" && upgraded) {
    duration = Math.round(duration / 2);
  }
  let progressIcons = "";
  for (let index = 0; index < duration; index++) {
    if (index < stage) progressIcons += "⬛";
    else progressIcons += "⬜";
  }
  const progress = Text.translatable(
    "jade.society.working_block_entity.progress",
    `${Number(stage)}`,
    `${duration}`
  );
  let blockName = accessor.getBlock().getDescriptionId();
  tooltip.clear();
  const helper = tooltip.getElementHelper();
  const recipeIcon = helper
    .item(Item.of(recipe.output[0]), 0.5)
    .message(null)
    .translate(Vec2(-2, -1));
  tooltip.add(Component.translatable(blockName));
  tooltip["add(snownee.jade.api.ui.IElement)"](recipeIcon);
  tooltip.append(
    Component.translatable(Item.of(recipe.output[0]).getDescriptionId())
  );

  if (upgraded) {
    tooltip["add(snownee.jade.api.ui.IElement)"](
      helper
        .item(Item.of(machine.upgrade), 0.5)
        .message(null)
        .translate(Vec2(-2, -1))
    );
    tooltip.append(progress);
  } else {
    tooltip.add(progress);
  }
  tooltip["append(snownee.jade.api.ui.IElement)"](
    helper
      .item(Item.of("minecraft:clock"), 0.5)
      .message(null)
      .translate(Vec2(-2, -1))
  );
};

global["JadeSocietyCropClientCallback"] = (
  tooltip,
  accessor,
  pluginConfig
) => {
  const block = accessor.getBlock();
  const state = accessor.getBlockState();
  const name = block.getIdLocation().toString();
  const skips = [
    "minecraft:cocoa",
    "minecraft:chorus_flower",
    "minecraft:nether_wart",
    "atmospheric:aloe_vera",
    "farmersdelight:rice",
    "pamhc2trees:pamcinnamon",
    "pamhc2trees:pamdragonfruit",
    "pamhc2trees:pamstarfruit",
    "pamhc2trees:pamlychee",
    "pamhc2trees:pampassionfruit",
    "pamhc2trees:pammango",
    "pamhc2trees:pambanana",
    "pamhc2trees:pampawpaw",
    "pamhc2trees:pamhazelnut",
    "pamhc2trees:pamorange",
    "pamhc2trees:pamplum",
    "pamhc2trees:pampeach",
    "pamhc2trees:pamlemon",
    "pamhc2trees:pamcherry",
    "pamhc2trees:pamapple"
  ];
  const needsFarmland = [
    "minecraft:sweet_berry_bush",
    "windswept:wild_berry_bush",
    "vintagedelight:gearo_berry_bush",
    "farmersdelight:rice",
    "farmersdelight:rice_panicles"
  ];
  const grapeMap = {
    red: "vinery:red_grape_seeds",
    white: "vinery:white_grape_seeds",
    savanna_red: "vinery:savanna_grape_seeds_red",
    savanna_white: "vinery:savanna_grape_seeds_white",
    taiga_red: "vinery:taiga_grape_seeds_red",
    taiga_white: "vinery:taiga_grape_seeds_white",
    jungle_red: "vinery:jungle_grape_seeds_red",
    jungle_white: "vinery:jungle_grape_seeds_white",
    crimson: "nethervinery:crimson_grape_seeds",
    warped: "nethervinery:warped_grape_seeds"
  };

  const hasGreenhouseGlass = (level, cropPos) => {
    let scannedBlock;
    for (let i = 0; i < 16; i++) {
      scannedBlock = level.getBlock(cropPos.offset(0, i + 1, 0));
      if (scannedBlock.hasTag("sereneseasons:greenhouse_glass")) {
        return true;
      }
    }
    return false;
  };
  const hasFarmland = (level, cropPos) => {
    let scannedBlock;
    for (let i = -2; i < 0 ; i++) {
      scannedBlock = level.getBlock(cropPos.offset(0, i, 0));
      if (scannedBlock.getId().includes("farmland")) {
        return true;
      }
    }
    return false;
  };
  const isCropFertile = (cropId) => {
    if (needsFarmland.includes(name) && !hasFarmland(accessor.getLevel(), accessor.getPosition())) return false;
    return $SereneFertility.isCropFertile(cropId, accessor.getLevel(), accessor.getPosition())
    || hasGreenhouseGlass(accessor.getLevel(), accessor.getPosition());
  };
  const addGrowthLevelTooltip = (current, max, isFertile) => {
    if (current >= max) {
      tooltip.add(Component.translatable("jade.society.crop_growth.mature").darkGreen());
    } else {
      tooltip.add(Component.translatable("jade.society.crop_growth", Number(current).toFixed(), Number(max).toFixed()));
    }
    if (!isFertile) {
      tooltip.add(Component.translatable("jade.society.crop_growth.stop").red());
    }
  };

  if ($SereneFertility.isCrop(state) && !skips.includes(name)) {
    try {
      if (block instanceof $CropBlock) {
        addGrowthLevelTooltip(block.getAge(state), block.getMaxAge(), isCropFertile(name));
      } else if (state.hasProperty(BlockProperties.AGE_7)) {
        addGrowthLevelTooltip(state.getValue(BlockProperties.AGE_7), 7, isCropFertile(name));
      } else if (state.hasProperty(BlockProperties.AGE_5)) {
        addGrowthLevelTooltip(state.getValue(BlockProperties.AGE_5), 5, isCropFertile(name));
      } else if (state.hasProperty(BlockProperties.AGE_4)) {
        addGrowthLevelTooltip(state.getValue(BlockProperties.AGE_4), 4, isCropFertile(name));
      } else if (state.hasProperty(BlockProperties.AGE_3)) {
        addGrowthLevelTooltip(state.getValue(BlockProperties.AGE_3), 3, isCropFertile(name));
      } 
    } catch (e) {}
  } else if (name.includes("grape_bush")) {
    let age = state.getValue(BlockProperties.AGE_3);
    addGrowthLevelTooltip(age, 3, isCropFertile(grapeMap[name.replace("_grape_bush", "")]));
    tooltip.add(Component.translatable("jade.society.crop_growth.stop").red());
    if (name.includes("jungle")) tooltip.add(Component.translatable("jade.society.crop_growth.need_lattice").red());
    else tooltip.add(Component.translatable("jade.society.crop_growth.need_stem").red());
  } else if (name.includes("grapevine_stem") || name.match(/vinery:.+_lattice/i)) {
    let age = state.getValue(BlockProperties.AGE_4);
    if (age == 0) return;
    addGrowthLevelTooltip(
      age,
      4,
      isCropFertile(grapeMap[state.getValue(block.getStateDefinition().getProperty("grape")).getSerializedName()])
    );
  } else {
    $JadeCropInfo.INSTANCE.appendTooltip(tooltip.getTooltip(), accessor, pluginConfig);
    if (skips.includes(name) && !isCropFertile(name)) {
      tooltip.add(Component.translatable("jade.society.crop_growth.stop").red());
    }
  }
  if (needsFarmland.includes(name) && !hasFarmland(accessor.getLevel(), accessor.getPosition())) {
      if (name.includes("rice")) tooltip.add(Component.translatable("jade.society.crop_growth.need_watered_farmland").red());
      else tooltip.add(Component.translatable("jade.society.crop_growth.need_farmland").red());
  } 
};

JadeEvents.onClientRegistration((e) => {
  e.block("society:plushie_jade", $Block).tooltip(
    (tooltip, accessor, pluginConfig) => {
      global["JadePlushieClientCallback"](tooltip, accessor, pluginConfig);
    }
  );
  e.block("society:fish_pond_jade", $Block).tooltip(
    (tooltip, accessor, pluginConfig) => {
      global["JadeFishPondClientCallback"](tooltip, accessor, pluginConfig);
    }
  );
  e.block("society:artisan_machine_jade", $Block).tooltip(
    (tooltip, accessor, pluginConfig) => {
      global["JadeArtisanMachineClientCallback"](
        tooltip,
        accessor,
        pluginConfig
      );
    }
  );
  e.block("society:crop_growth_jade", $Block).tooltip(
    (tooltip, accessor, pluginConfig) => {
      global["JadeSocietyCropClientCallback"](tooltip, accessor, pluginConfig);
    }
  );
  e.block("kubejs:shipping_bin_jade", $Block).tooltip(
    (tooltip, accessor, pluginConfig) => {
      global["JadeShippingBinClientCallback"](tooltip, accessor, pluginConfig);
    }
  );
});
