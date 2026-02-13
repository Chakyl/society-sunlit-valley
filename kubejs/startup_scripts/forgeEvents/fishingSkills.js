console.info("[SOCIETY] fishingSkills.js loaded");

global.handleExtraFishing = (e) => {
  const player = e.getEntity();
  let increase = 0;
  if (player.isFake()) player.getHeldItem("main_hand").count--;
  let hasNet = global.hasBobber(player.getHeldItem("main_hand"), "society:net_bobber")
  if (player.getLevel().dimension === "minecraft:the_nether") {
    if (Math.random() < 0.1) player.give(Item.of(`${hasNet ? 3 : 1}x society:nether_jelly`));
    if (player.stages.has("wooden_pollution") && Math.random() < 0.1)
      player.give(Item.of(`${hasNet ? 3 : 1}x society:nether_jelly`));
    if (player.stages.has("fly_fisher")) increase += 1;
    if (player.stages.has("school_fisher")) increase += 3;
    if (
      global.hasBobber(player.getHeldItem("main_hand"), "society:needle_bobber")
    )
      increase += 5;
    if (increase > 0) {
      e.getDrops().forEach((drop) => {
        if (drop.hasTag("minecraft:fishes")) {
          player.give(Item.of(`${increase}x ${drop.id}`, drop.nbt));
        }
      });
    }
  }
  e.getDrops().forEach((drop) => {
    if (
      !drop.hasTag("minecraft:fishes") &&
      hasNet &&
      drop.maxStackSize > drop.count * 2
    ) {
      player.give(Item.of(`${drop.count * 2}x ${drop.id}`, drop.nbt));
    }
  });
};

ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.player.ItemFishedEvent",
  (e) => {
    global.handleExtraFishing(e);
  }
);
