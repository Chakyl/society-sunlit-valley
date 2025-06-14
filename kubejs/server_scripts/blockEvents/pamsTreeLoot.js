console.info("[SOCIETY] pamsTreeLoot.js loaded");
const weirdFruits = new Map([
  ["pamhc2trees:pamcherry", "vinery:cherry"],
  ["pamhc2trees:pamorange", "atmospheric:orange"],
  ["pamhc2trees:pampassionfruit", "atmospheric:passion_fruit"],
]);
BlockEvents.rightClicked(
  [
    "pamhc2trees:pamapple",
    "pamhc2trees:pamcherry",
    "pamhc2trees:pamorange",
    "pamhc2trees:pampeach",
    "pamhc2trees:pamplum",
    "pamhc2trees:pamhazelnut",
    "pamhc2trees:pampawpaw",
    "pamhc2trees:pambanana",
    "pamhc2trees:pamcinnamon",
    "pamhc2trees:pamdragonfruit",
    "pamhc2trees:pammango",
    "pamhc2trees:pamstarfruit",
    "pamhc2trees:pamlychee",
    "pamhc2trees:pamlemon",
    "pamhc2trees:pampassionfruit",
  ],
  (e) => {
    const { block, player, server } = e;
    const fruitName = `${block.id.toString().split(":")[1]}`;
    if (
      player.isHoldingInAnyHand("minecraft:bone_meal") ||
      player.isHoldingInAnyHand("farm_and_charm:fertilizer") ||
      player.isHoldingInAnyHand("meadow:watering_can")
    )
      return;
    if (player.stages.has("tree_whisperer") && Number(block.properties.get("age")) == 7) {
      const weirdFruit = weirdFruits.get(String(block.id));
      server.runCommandSilent(
        `puffish_skills experience add ${player.username} society:farming 40`
      );
      if (weirdFruit) {
        block.popItem(`2x ${weirdFruit}`);
      } else {
        block.popItem(`2x pamhc2trees:${fruitName.substring(3, fruitName.length)}item`);
      }
    }
  }
);
