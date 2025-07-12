global.runPartyStarter = (champion) => {
  if (Math.random() < 0.6) return;
  let length = 1;
  let firework = champion.getLivingEntity().getBlock().createEntity("firework_rocket");
  let fireworkNbt = firework.getNbt();
  fireworkNbt.LifeTime = length;
  fireworkNbt.FireworksItem = {
    id: "firework_rocket",
    Count: 1,
    tag: {
      Fireworks: {
        Flight: length,
        Explosions: [
          {
            Type: 1,
            Flicker: true,
            Colors: NBT.intArrayTag([
              [0xff, 0xff00, 0xff0000]
                .map((v) => v * (Math.random() < 0.5))
                .reduce((acc, c) => acc + c),
            ]),
          },
        ],
      },
    },
  };
  firework.setNbt(fireworkNbt);
  firework.spawn();
};
global.runSlimy = (champion) => {
  let slime = champion.getLivingEntity().getBlock().createEntity("splendid_slimes:splendid_slime");
  let slimeNbt = slime.getNbt();
  slimeNbt.Breed = "splendid_slimes:webby";
  slimeNbt.Happiness = 20;
  slime.setNbt(slimeNbt);
  slime.spawn();
};
StartupEvents.registry("champions:affix", (e) => {
  e.create("society:famine")
    .settings((s) => {
      s.setEnable(true).setPrefix("affix.").setCategory("defense");
    })
    .behavior((b) => {
      b.onAttacked((champion, damageSource, amount) => {
        if (damageSource.getPlayer() && damageSource.getPlayer().potionEffects)
          damageSource.getPlayer().potionEffects.add("minecraft:hunger", 80, 0, true, false);
        return true;
      });
    });
  e.create("society:partystarter")
    .settings((s) => {
      s.setEnable(true).setPrefix("affix.").setCategory("defense");
    })
    .behavior((b) => {
      b.onAttacked((champion, damageSource, amount) => {
        global.runPartyStarter(champion);
        return true;
      });
    });
  e.create("society:slime_pinata")
    .settings((s) => {
      s.setEnable(true).setPrefix("affix.").setCategory("defense");
    })
    .behavior((b) => {
      b.onAttacked((champion, damageSource, amount) => {
        global.runSlimy(champion);
        return true;
      });
    });
});
