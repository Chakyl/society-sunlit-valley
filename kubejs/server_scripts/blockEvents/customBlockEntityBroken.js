console.info("[SOCIETY] customBlockEntityBroken.js loaded");

const handleBrokenMachine = (block) => {
  const machine = global.artisanMachineDefinitions.filter((obj) => {
    return obj.id === block.id;
  })[0];
  if (!machine) return;
  let working = block.properties.get("working").toLowerCase() == "true";
  if (machine.upgrade && block.properties.get("upgraded").toLowerCase() == "true") {
    block.popItem(machine.upgrade);
  }
  const nbt = block.getEntityData();
  const currentRecipe = machine.recipes.get(nbt.data.recipe);
  if (block.properties.get("mature").toLowerCase() == "true") {
    currentRecipe.output.forEach((element) => {
      block.popItem(element);
    });
  } else if (!["society:charging_rod", "society:tapper"].includes(block.id)) {
    let stage = Number(nbt.data.stage);
    if (
      currentRecipe &&
      block.id == "society:ancient_cask" &&
      block.properties.get("upgraded").toLowerCase() == "true"
    ) {
      if (working) block.popItem(Item.of(`4x ${nbt.data.recipe}`));
      else block.popItem(Item.of(`${stage}x ${nbt.data.recipe}`));
    } else if (
      block.id == "society:deluxe_worm_farm" &&
      block.properties.get("upgraded").toLowerCase() == "true"
    ) {
      // Do nothing because of infinity worm upgrade
    } else if (
      currentRecipe &&
      block.id == "society:preserves_jar" &&
      block.properties.get("upgraded").toLowerCase() == "true"
    ) {
      if (working) block.popItem(Item.of(`3x ${nbt.data.recipe}`));
      else block.popItem(Item.of(`${stage}x ${nbt.data.recipe}`));
    } else if (currentRecipe) {
      if (working) block.popItem(Item.of(`${machine.maxInput}x ${nbt.data.recipe}`));
      else block.popItem(Item.of(`${stage}x ${nbt.data.recipe}`));
    }
  }
};

BlockEvents.broken(global.artisanMachineIds, (e) => {
  handleBrokenMachine(e.block);
});

BlockEvents.broken("society:fish_pond", (e) => {
  const { block } = e;
  const pondType = block.properties.get("type").toLowerCase();
  if (pondType !== "0") {
    block.popItem(
      Item.of(
        "society:fish_pond",
        `{type:${block.properties.get("type")},population:${block.properties.get(
          "population"
        )},max_population:${block.properties.get("max_population")},quest:${block.properties.get(
          "quest"
        )},quest_id:${block.properties.get("quest_id")}}`
      )
    );
  } else {
    block.popItem(Item.of("society:fish_pond"));
  }
  if (block.properties.get("upgraded").toLowerCase() == "true") {
    block.popItem(Item.of("society:sea_biscut"));
  }
});

BlockEvents.broken("society:prize_machine", (e) => {
  e.block.popItem(Item.of("society:prize_machine", `{prize:${e.block.properties.get("prize")}}`));
});

BlockEvents.broken(
  [
    "society:iron_sprinkler",
    "society:gold_sprinkler",
    "society:diamond_sprinkler",
    "society:netherite_sprinkler",
  ],
  (e) => {
    if (e.block.properties.get("sticklogged").toLowerCase() == "true") {
      e.block.popItem("minecraft:stick");
    }
  }
);
BlockEvents.broken("society:coin_leaderboard", (e) => {
  global.clearOldTextDisplay(e.block, "leaderboard");
});

BlockEvents.broken("society:shipping_bin_monitor", (e) => {
  global.clearOldTextDisplay(e.block, "shipping_bin_monitor");
});

BlockEvents.broken("society:fish_pond_basket", (e) => {
  const { block } = e;
  if (block.properties.get("upgraded").toLowerCase() == "true") {
    block.popItem(Item.of("minecraft:bucket"));
  }
});
BlockEvents.broken("society:auto_grabber", (e) => {
  const { block } = e;
  if (block.properties.get("upgraded").toLowerCase() == "true") {
    block.popItem(Item.of("society:magic_shears"));
  }
});
