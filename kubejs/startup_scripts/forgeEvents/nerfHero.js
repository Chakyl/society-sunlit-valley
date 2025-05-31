console.info("[SOCIETY] nerfHero.js loaded");

const apiEvent = Java.loadClass("net.minecraftforge.eventbus.api.Event");

ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.living.MobEffectEvent$Applicable",
  (event) => {
    if (
      (event.getEffectInstance().getEffect().getDescriptionId() ==
        "effect.minecraft.hero_of_the_village" ||
        event.getEffectInstance().getEffect().getDescriptionId() ==
          "effect.vinery.trading") &&
      event.getEntity().getType().toString() == "minecraft:player"
    ) {
      event.setResult(apiEvent.Result.DENY);
      console.log("No heroes in industrial capitalism...");
    }
  }
);
