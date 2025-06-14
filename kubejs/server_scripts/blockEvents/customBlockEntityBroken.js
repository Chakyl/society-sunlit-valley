console.info("[SOCIETY] customBlockEntityBroken.js loaded");

const handleBrokenMachine = (block) => {
  const machine = global.artisanMachineDefinitions.filter((obj) => {
    return obj.id === block.id;
  })[0];
  if (!machine) return;
  if (machine.upgrade && block.properties.get("upgraded").toLowerCase() == "true") {
    block.popItem(machine.upgrade);
  }
  if (!block.properties.get("type")) return;
  const currentRecipe = machine.recipes[Number(block.properties.get("type").toLowerCase()) - 1];
  if (block.properties.get("mature").toLowerCase() == "true") {
    currentRecipe.output.forEach((element) => {
      block.popItem(element);
    });
  } else if (
    block.properties.get("working").toLowerCase() == "true" &&
    !["society:charging_rod", "society:tapper"].includes(block.id)
  ) {
    if (
      block.id == "society:ancient_cask" &&
      block.properties.get("upgraded").toLowerCase() == "true"
    ) {
      block.popItem(Item.of(`4x ${currentRecipe.input}`));
    } else if (
      block.id == "society:deluxe_worm_farm" &&
      block.properties.get("upgraded").toLowerCase() == "true"
    ) {
      // Do nothing because of infinity worm upgrade
    } else if (
      block.id == "society:preserves_jar" &&
      block.properties.get("upgraded").toLowerCase() == "true"
    ) {
      block.popItem(Item.of(`3x ${currentRecipe.input}`));
    } else {
      block.popItem(Item.of(`${machine.maxInput}x ${currentRecipe.input}`));
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
        )},max_population:${block.properties.get("max_population")},quest:${block.properties.get("quest")},quest_id:${block.properties.get("quest_id")}}`
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
  const { x, y, z } = e.block;
  Utils.server
    .getLevel("minecraft:overworld")
    .getEntities()
    .forEach((entity) => {
      entity.getTags().forEach((tag) => {
        if (tag === `leaderboard-${x}-${y}-${z}`) {
          entity.kill();
        }
      });
    });
});
