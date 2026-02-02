console.info("[SOCIETY] npcInvite.js loaded");

const npcBlueprints = {
  carpenter: Item.of('portable_blueprints:worn_blueprint', '{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"npc_carpenter",buildAnyway:0b,display:{Name:\'{"italic":false,"color":"#FFFF00","text":"Blueprint: Carpenter House"}\'},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"npc_carpenter",owner:"worn",owner_name:"Duy Luong",remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:0b,wasHolding:1b,worn_set:1b}'),
  market: Item.of('portable_blueprints:worn_blueprint', '{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"npc_market",buildAnyway:0b,display:{Name:\'{"italic":false,"color":"#FFFF00","text":"Blueprint: Market House"}\'},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"npc_market",owner:"worn",owner_name:"EeveeBeby",remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:0b,wasHolding:1b,worn_set:1b}'),
  blacksmith: Item.of('portable_blueprints:worn_blueprint', '{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"npc_blacksmith",buildAnyway:0b,display:{Name:\'{"italic":false,"color":"#FFFF00","text":"Blueprint: Blacksmith House"}\'},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"npc_blacksmith",owner:"worn",owner_name:"Kanlamari",remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:1b,wasHolding:1b,worn_set:1b}'),
  fisher: Item.of('portable_blueprints:worn_blueprint', '{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"npc_fisher",buildAnyway:0b,display:{Name:\'{"italic":false,"color":"#FFFF00","text":"Blueprint: Fisher House"}\'},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"npc_fisher",owner:"worn",owner_name:"Nyxzerria",remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:1b,wasHolding:1b,worn_set:1b}'),
  banker: Item.of('portable_blueprints:worn_blueprint', '{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"npc_banker",buildAnyway:0b,display:{Name:\'{"italic":false,"color":"#FFFF00","text":"Blueprint: Banker House"}\'},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"npc_banker",owner:"worn",owner_name:"Kanlamari",remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:1b,wasHolding:1b,worn_set:1b}'),
  shepherd: Item.of('portable_blueprints:worn_blueprint', '{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"npc_shepherd",buildAnyway:0b,display:{Name:\'{"italic":false,"color":"#FFFF00","text":"Blueprint: Shepherd House"}\'},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"npc_shepherd",owner:"worn",owner_name:"EeveeBeby",remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:1b,wasHolding:1b,worn_set:1b}')
}


ItemEvents.rightClicked("society:invitation", (e) => {
  const { server, player, item } = e;
  if (player.isFake()) e.cancel();
  const inviteNbt = player.getHeldItem("main_hand").getNbt();

  if (inviteNbt) {
    const id = inviteNbt.get("type").id
    const baseId = id.substring(8, id.length);
    player.give(Item.of("society:villager_home", `{type:"${baseId}"}`))
    if (!player.stages.has(`invited_${baseId}`)) {
      player.stages.add(`invited_${baseId}`)
      player.give(npcBlueprints[baseId])
    }
    if (!player.isCreative()) item.count--;
    server.runCommandSilent(
      `playsound stardew_fishing:complete block @a ${player.x} ${player.y} ${player.z}`
    );
  } else {
    player.tell("Something went wrong! Tell Chakyl")
  }
  global.addItemCooldown(player, item, 4);
});
