console.info("[SOCIETY] smokeTubasmokeStick.js loaded");

const endlessEntranaTemplate =
  '{anchor:"BOTTOM_CENTER",background:1,wrap:220,align:"BOTTOM_CENTER",color:"#00AAAA",offsetY:-60}';

ItemEvents.rightClicked("society:tubasmoke_stick", (e) => {
  const { server, player, item, hand, level } = e;
  player.damageHeldItem(hand, 1);
  server.runCommandSilent(
    `playsound minecraft:item.flintandsteel.use block @a ${player.x} ${player.y} ${player.z}`
  );

  item.count--;
  level.spawnParticles(
    "farmersdelight:steam",
    true,
    player.x,
    player.y + 1,
    player.z,
    0.1 * rnd(1, 6),
    0.1 * rnd(1, 4),
    0.1 * rnd(1, 4),
    22,
    0.001
  );
  server.runCommandSilent(
    `playsound supplementaries:block.cannon.ignite block @a ${player.x} ${player.y} ${player.z}`
  );
  server.runCommandSilent(`effect give ${player.username} minecraft:slowness 20 1`);
  if (Math.random() < 0.02) {
    server.runCommandSilent(
      `execute in ${level.dimension} run summon lightning_bolt ${player.x} ${player.y} ${player.z}`
    );
    server.runCommandSilent(
      global.getEmbersTextAPICommand(player.username, `{anchor:"BOTTOM_CENTER",charShakeRandom:0.2,background:1,wrap:220,align:"BOTTOM_CENTER",color:"#FF5555",offsetY:-60}`, 60, Text.translatable("society.endless_entrana.text.0").toJson())
    );
  }
  if (Math.random() < 0.01 && !item.nbt) {
    server.runCommandSilent(
      `playsound tanukidecor:block.cash_register.ring block @a ${player.x} ${player.y} ${player.z}`
    );
    server.runCommandSilent(
      global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.1").toJson())
    );
    server.scheduleInTicks(1, () => {
      player.give(
        Item.of(
          "society:tubasmoke_stick",
          `{edition:1,display:{Name:'${Text.translatable("society.endless_entrana", Text.of("1").bold()).bold().italic(false).toJson()}'}}`
        )
      );
    });
  }
  if (item.nbt && item.nbt.edition) {
    let giveNew = true;
    if (item.nbt.edition === 500)
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.2").toJson())
      );
    if (item.nbt.edition === 650) {
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.3").toJson())
      );
    }
    if (item.nbt.edition === 666) {
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.4").toJson())
      );
      server.scheduleInTicks(100, () => {
        server.runCommandSilent(`kill ${player.username}`);
      });
    }

    if (item.nbt.edition === 999) {
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 1200, Text.translatable("society.endless_entrana.text.5").toJson())
      );
      server.scheduleInTicks(648000, () => {
        server.runCommandSilent(`kill ${player.username}`);
      });
    }

    if (item.nbt.edition === 2000) {
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.6").toJson())
      );
    }

    if (item.nbt.edition === 2100) {
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.7").toJson())
      );
    }
    if (item.nbt.edition === 5000) {
      player.give("numismatics:spur");
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.8").toJson())
      );
    }
    if (item.nbt.edition > 10000 && Math.random() < 0.001) {
      player.give("numismatics:bevel");
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.9").toJson())
      );
    }
    if (item.nbt.edition > 10000 && Math.random() < 0.001) {
      player.give("numismatics:sprocket");
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.9").toJson())
      );
    }
    if (item.nbt.edition > 1000000000 && Math.random() < 0.0001) {
      if (player.offHandItem === "numismatics:prismatic_coin") {
        player.give("create:creative_blaze_cake");
        player.offHandItem.count--;
        server.runCommandSilent(
          global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.11").toJson())
        );
        giveNew = false;
      } else {
        server.runCommandSilent(
          global.getEmbersTextAPICommand(player.username, endlessEntranaTemplate, 120, Text.translatable("society.endless_entrana.text.10").toJson())
        );
      }
    }
    if (giveNew) {
      server.scheduleInTicks(1, () => {
        player.give(
          Item.of(
            "society:tubasmoke_stick",
            `{edition:${item.nbt.edition + 1},display:{Name:'${Text.translatable("society.endless_entrana", Text.of((item.nbt.edition + 1).toFixed()).bold()).bold().italic(false).toJson()}'}}`
          )
        );
      });
    }
  }
  if (Math.random() < 0.01) {
    server.scheduleInTicks(800, () => {
      server.runCommandSilent(`effect give ${player.username} minecraft:wither 40 3`);
      server.runCommandSilent(
        global.getEmbersTextAPICommand(player.username, `{anchor:"BOTTOM_CENTER",charShakeRandom:0.2,background:1,wrap:220,align:"BOTTOM_CENTER",color:"#FF5555",offsetY:-60}`, 60, Text.translatable("society.endless_entrana.text.0").toJson())
      );
    });
  }
  global.addItemCooldown(player, item, 10);
});
