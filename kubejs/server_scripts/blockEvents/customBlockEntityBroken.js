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
    if (
      block.id == "society:ancient_cask" &&
      block.properties.get("upgraded").toLowerCase() == "true"
    ) block.popItem(Item.of(`3x ${Item.of(`${currentRecipe.output[0]}`).id}`));
  } else if (!["society:charging_rod", "society:tapper", "society:mushroom_log"].includes(block.id)) {
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
      if (nbt.data.originalInputs && nbt.data.originalInputs.length > 0) {
        nbt.data.originalInputs.forEach((item) => {
          block.popItem(Item.of(`${item.Count}x ${item.id}`));
        });
      } else {
        if (working) block.popItem(Item.of(`${machine.maxInput}x ${nbt.data.recipe}`));
        else block.popItem(Item.of(`${stage}x ${nbt.data.recipe}`));
      }
    }
  }
};

BlockEvents.broken(global.artisanMachineIds, (e) => {
  handleBrokenMachine(e.block);
});

BlockEvents.broken("society:fish_pond", (e) => {
  const { block } = e;
  const nbt = block.getEntityData();
  if (nbt.data.type !== "") {
    block.popItem(
      Item.of(
        "society:fish_pond",
        `{type:"${nbt.data.type}",population:${Number(nbt.data.population)},max_population:${Number(
          nbt.data.max_population
        )},quest:${block.properties.get("quest")},quest_id:${Number(nbt.data.quest_id)}}`
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
  const nbt = e.block.getEntityData();
  e.block.popItem(Item.of("society:prize_machine", `{prize:${nbt.data.prize}}`));
});

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
