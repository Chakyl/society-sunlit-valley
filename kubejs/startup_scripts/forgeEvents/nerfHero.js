console.info("[SOCIETY] nerfHero.js loaded");

const apiEvent = Java.loadClass("net.minecraftforge.eventbus.api.Event");

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Applicable", (event) => {
  if (
    [
      "effect.minecraft.hero_of_the_village",
      "effect.vinery.trading",
      "effect.brewery.pintcharisma",
    ].includes(event.getEffectInstance().getEffect().getDescriptionId()) &&
    event.getEntity().getType().toString() == "minecraft:player"
  ) {
    event.setResult(apiEvent.Result.DENY);
    console.log("No heroes in industrial capitalism...");
  }
});
