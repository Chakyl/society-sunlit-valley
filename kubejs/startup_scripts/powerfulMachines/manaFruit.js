console.info("[SOCIETY] manaFruit.js loaded");

const MANA_DRAIN = 2500;
const FRUIT_MAX_MANA = MANA_DRAIN * 7;

global.handleManaFruit = (e) => {
  const { level, block } = e;
  const { x, y, z } = block;
  let dayTime = level.dayTime();
  let morningModulo = dayTime % 24000;
  let blockProperties = level.getBlock(block.pos).getProperties();
  let age = Number(blockProperties.get("age"));
  if (!global.surviveCheck(level, block.pos))
    level.destroyBlock(block.pos, true);
  if (age < 7 && morningModulo >= 20 && morningModulo < 40) {
    let mana = e.persistentData.getInt("mana");

    if (mana >= MANA_DRAIN) {
      blockProperties.age = String(
        age +
          CropGrowthUtils.getFertilizerIncrease(
            age,
            7,
            level.getBlockState(block.pos.below())
          )
      );
      block.set(block.id, blockProperties);
      e.persistentData.putInt("mana", mana - MANA_DRAIN);
      level.server.runCommandSilent(
        `playsound botania:mana_pool_craft block @a ${x} ${y} ${z}`
      );
      level.spawnParticles(
        "windswept:will_o_the_wisp",
        true,
        x,
        y + 0.25,
        z,
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        5,
        0.01
      );
    } else if (age > 0) {
      blockProperties.age = String(age - 1);
      block.set(block.id, blockProperties);
      level.server.runCommandSilent(
        `playsound botania:virus_infect block @a ${x} ${y} ${z}`
      );
      level.spawnParticles(
        "farmlife:stinky",
        true,
        x,
        y + 0.25,
        z,
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        0.1 * rnd(1, 4),
        5,
        0.01
      );
    }
  }
};
StartupEvents.registry("block", (e) => {
  e
    .create("society:mana_fruit_crop")
    .defaultCutout()
    .hardness(0)
    .resistance(0)
    .displayName("Mana Fruit Seed")
    .mapColor("grass")
    .soundType("azalea_leaves")
    .box(1, 0, 1, 15, 4, 15)
    .property(integerProperty.create("age", 0, 7))
    .defaultState((state) => {
      state.set(integerProperty.create("age", 0, 7), 0);
    })
    .placementState((state) => {
      state.set(integerProperty.create("age", 0, 7), 0);
    })
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .blockEntity((blockInfo) => {
      blockInfo.serverTick(20, 0, (entity) => global.handleManaFruit(entity)),
        blockInfo.attachCapability(
          BotaniaCapabilityBuilder.MANA.blockEntity()
            .canReceiveManaFromBurst((be) => {
              let mana = be.persistentData.getInt("mana");
              return mana < FRUIT_MAX_MANA;
            })
            .receiveMana((be, amount) => {
              let currentMana = be.persistentData.getInt("mana");
              let received = Math.min(FRUIT_MAX_MANA - currentMana, amount);
              be.persistentData.putInt("mana", currentMana + received);
            })
            .getCurrentMana((be) => be.persistentData.getInt("mana"))
            .isFull((be) => {
              let mana = be.persistentData.getInt("mana");
              return mana >= FRUIT_MAX_MANA;
            })
        );
    })
    .item((item) => {
      item.tooltip(
        Text.translatable("society.working_block_entity.need_mana").aqua()
      );
      item.modelJson({
        parent: "minecraft:item/generated",
        textures: {
          layer0: "society:item/mana_fruit_seed",
        },
      });
    }).blockstateJson = {
    multipart: [
      {
        when: { age: 0 },
        apply: { model: "society:block/kubejs/crops/mana_fruit_crop_stage0" },
      },
      {
        when: { age: 1 },
        apply: { model: "society:block/kubejs/crops/mana_fruit_crop_stage1" },
      },
      {
        when: { age: 2 },
        apply: { model: "society:block/kubejs/crops/mana_fruit_crop_stage1" },
      },
      {
        when: { age: 3 },
        apply: { model: "society:block/kubejs/crops/mana_fruit_crop_stage2" },
      },
      {
        when: { age: 4 },
        apply: { model: "society:block/kubejs/crops/mana_fruit_crop_stage2" },
      },
      {
        when: { age: 5 },
        apply: { model: "society:block/kubejs/crops/mana_fruit_crop_stage3" },
      },
      {
        when: { age: 6 },
        apply: { model: "society:block/kubejs/crops/mana_fruit_crop_stage4" },
      },
      {
        when: { age: 7 },
        apply: { model: "society:block/kubejs/crops/mana_fruit_crop_stage5" },
      },
    ],
  };
});
