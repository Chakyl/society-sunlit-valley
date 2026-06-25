console.info("[SOCIETY-S-COBBLEMON] cobblemonPoodleDeco.js loaded");
const JavaString = Java.loadClass('java.lang.String');
const furfrouMap = new Map([
  ["minecraft:yellow_dye", "debutante"],
  ["minecraft:orange_dye", "diamond"],
  ["minecraft:red_dye", "kabuki"],
  ["minecraft:brown_dye", "cinammon"],
  ["minecraft:black_dye", "mourner"],
  ["minecraft:gray_dye", "rocker"],
  ["minecraft:light_gray_dye", "crusader"],
  ["minecraft:magenta_dye", "matron"],
  ["minecraft:pink_dye", "heart"],
  ["minecraft:purple_dye", "lavender"],
  ["minecraft:blue_dye", "pharaoh"],
  ["minecraft:light_blue_dye", "star"],
  ["minecraft:cyan_dye", "la_reine"],
  ["minecraft:green_dye", "matcha"],
  ["minecraft:lime_dye", "dandy"],
  ["minecraft:white_dye", "natural"],
]);

ItemEvents.entityInteracted((e) => {
  const { player, server, item, hand, target } = e;
  if (target.type !== "cobblemon:pokemon") return;
  if (hand == "MAIN_HAND") {
    if (target.pokemon.getSpecies() == "furfrou" && furfrouMap.get(`${item.id}`)) {
      let trim = furfrouMap.get(`${item.id}`);
      let newAspects = [];
      let consume = false;
      for (let i = 0; i < target.pokemon.aspects.length; i++) {
        let currentAspect = target.pokemon.aspects[i];
        if (String(currentAspect).endsWith('-trim') && String(currentAspect) !== `${trim}-trim`) {
          newAspects.push(JavaString.valueOf(`${trim}-trim`));
          consume = true;
        } else {
          newAspects.push(JavaString.valueOf(currentAspect));
        }
      }
      target.pokemon.setAspects(newAspects);
      target.pokemon.updateForm();

      if (consume) {
        server.runCommandSilent(`playsound minecraft:entity.sheep.shear block @a ${player.x} ${player.y} ${player.z}`);
        server.runCommandSilent(`playsound create:spout block @a ${player.x} ${player.y} ${player.z}`);
        if (!player.isCreative()) item.shrink(1)
      }
    }
  }
});