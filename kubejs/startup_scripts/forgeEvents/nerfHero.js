console.info("[SOCIETY] nerfHero.js loaded");

const apiEvent = Java.loadClass("net.minecraftforge.eventbus.api.Event");

global.runFixGrandma = (e) => {
  if (
    [
      "effect.farm_and_charm.grandmas_blessing",
      "effect.farm_and_charm.farmers_blessing",
      "effect.brewery.pintcharisma",
    ].includes(e.getEffectInstance().getEffect().getDescriptionId()) &&
    e.getEntity().getType().toString() == "minecraft:player"
  ) {
    // e.setResult(apiEvent.Result.DENY);
    if (e.getEntity().potionEffects.getActive().toString().includes("stunning")) {
      console.log("removing")
      e.getEntity().potionEffects.add("oreganized:stunning", 1, 1, true, false);
      e.setResult(apiEvent.Result.DENY);
    }
  }
};

ForgeEvents.onEvent("net.minecraftforge.event.entity.living.MobEffectEvent$Applicable", (event) => {
  global.runFixGrandma(event);

  if (
    [
      "effect.minecraft.hero_of_the_village",
      "effect.vinery.trading",
      "effect.brewery.pintcharisma",
      "effect.nethervinery.gravedigger",
      "effect.nethervinery.improved_gravedigger",
    ].includes(event.getEffectInstance().getEffect().getDescriptionId()) &&
    event.getEntity().getType().toString() == "minecraft:player"
  ) {
    event.setResult(apiEvent.Result.DENY);
    console.log("No cheese in industrial capitalism...");
  }
});