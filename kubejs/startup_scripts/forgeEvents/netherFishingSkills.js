console.info("[SOCIETY] netherFishingSkills.js loaded");

global.handleNetherFishing = (e) => {
  const player = e.getEntity();
  let increase = 0;
  if (player.isFake()) player.getHeldItem("main_hand").count--;
  if (player.getLevel().dimension === "minecraft:the_nether") {
    if (Math.random() < 0.1) player.give(Item.of("society:nether_jelly"));
    if (player.stages.has("fly_fisher")) increase += 1;
    if (player.stages.has("school_fisher")) increase += 3;
    if (increase > 0) {
      e.getDrops().forEach((drop) => {
        if (drop.hasTag("minecraft:fishes"))
          player.give(Item.of(`${increase}x ${drop.id}`, drop.nbt));
      });
    }
  }
};

ForgeEvents.onEvent("net.minecraftforge.event.entity.player.ItemFishedEvent", (e) => {
  global.handleNetherFishing(e);
});
