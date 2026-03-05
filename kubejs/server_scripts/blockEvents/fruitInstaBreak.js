console.info("[SOCIETY] fruitInstaBreak.js loaded");

global.breakableFruits = [
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
  "pamhc2trees:pamapple",
]

BlockEvents.leftClicked(global.breakableFruits, (e) => {
  const { player, block } = e;
  if (player.isFake()) return;
  if (player.getHeldItem("main_hand").hasTag("forge:shears")) {
    let fruitItem = Item.of(block.id);
    block.popItem(fruitItem);
    block.set("minecraft:air");
  }
})
