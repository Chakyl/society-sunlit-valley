global.updateBerryBush = (level, block) => {
  let type = 0;
  switch (global.getSeasonFromLevel(level)) {
    case "spring":
      type = 1;
      break;
    case "summer":
      type = 2;
      break;
    case "autumn":
      type = 3;
      break;
    default:
    case "winter":
      type = 4;
  }
  block.set(block.id, {
    type: String(type),
  });
};

StartupEvents.registry("block", (e) => {
  // TODO: 4.0
  // e.create("society:berry_bush_crop", "crop")
  //   .age(3, (builder) => {
  //     builder
  //       .shape(0, 0, 0, 0, 16, 4, 16)
  //       .shape(1, 0, 0, 0, 16, 13, 16)
  //       .shape(2, 0, 0, 0, 16, 16, 16)
  //       .shape(3, 0, 0, 0, 16, 16, 16);
  //   })
  //   .survive((state, level, pos) => global.surviveCheck(level, pos))
  //   .dropSeed(false)
  //   .tagBlock("minecraft:mineable/hoe")
  //   .tagBlock("minecraft:crops")
  //   .property(integerProperty.create("type", 0, 4))
  //   .defaultState((state) => {
  //     state.set(integerProperty.create("type", 0, 4), 0);
  //   })
  //   .placementState((state) => {
  //     state.set(integerProperty.create("type", 0, 4), 0);
  //   })
  //   .item((seedItem) => {
  //     seedItem.texture("society:item/berry_bush_seed");
  //   }).blockstateJson = {
  //   multipart: [
  //     {
  //       when: { age: 0 },
  //       apply: { model: "society:block/kubejs/berry_bush/start" },
  //     },
  //     {
  //       when: { age: 1 },
  //       apply: { model: "society:block/kubejs/berry_bush/middle" },
  //     },
  //     {
  //       when: { age: 2 },
  //       apply: { model: "society:block/kubejs/berry_bush/base" },
  //     },
  //     {
  //       when: { age: 3 },
  //       apply: { model: "society:block/kubejs/berry_bush/base" },
  //     },
  //   ],
  // };

  e
    .create("society:ancient_fruit", "crop")
    .age(10, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 3, 16)
        .shape(1, 0, 0, 0, 16, 4, 16)
        .shape(2, 0, 0, 0, 16, 4, 16)
        .shape(3, 0, 0, 0, 16, 8, 16)
        .shape(4, 0, 0, 0, 16, 8, 16)
        .shape(5, 0, 0, 0, 16, 16, 16)
        .shape(6, 0, 0, 0, 16, 16, 16)
        .shape(7, 0, 0, 0, 16, 16, 16)
        .shape(8, 0, 0, 0, 16, 16, 16)
        .shape(9, 0, 0, 0, 16, 16, 16)
        .shape(10, 0, 0, 0, 16, 24, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("society:ancient_fruit", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/ancient_seed");
    }).blockstateJson = {
    multipart: [
      {
        when: { age: 0 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage0" },
      },
      {
        when: { age: 1 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage1" },
      },
      {
        when: { age: 2 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage1" },
      },
      {
        when: { age: 3 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage2" },
      },
      {
        when: { age: 4 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage2" },
      },
      {
        when: { age: 5 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage2" },
      },
      {
        when: { age: 6 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage3" },
      },
      {
        when: { age: 7 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage3" },
      },
      {
        when: { age: 8 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage4" },
      },
      {
        when: { age: 9 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage4" },
      },
      {
        when: { age: 10 },
        apply: { model: "society:block/kubejs/crops/ancient_fruit_crop_stage5" },
      },
    ],
  };
  e
    .create("society:tubabacco_leaf", "crop")
    .age(9, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 4, 16)
        .shape(2, 0, 0, 0, 16, 5, 16)
        .shape(3, 0, 0, 0, 16, 5, 16)
        .shape(4, 0, 0, 0, 16, 10, 16)
        .shape(5, 0, 0, 0, 16, 10, 16)
        .shape(6, 0, 0, 0, 16, 10, 16)
        .shape(7, 0, 0, 0, 16, 10, 16)
        .shape(8, 0, 0, 0, 16, 16, 16)
        .shape(9, 0, 0, 0, 16, 16, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("society:tubabacco_leaf", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/tubabacco_seed");
    }).blockstateJson = {
    multipart: [
      {
        when: { age: 0 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage0" },
      },
      {
        when: { age: 1 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage0" },
      },
      {
        when: { age: 2 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage0" },
      },
      {
        when: { age: 3 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage1" },
      },
      {
        when: { age: 4 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage1" },
      },
      {
        when: { age: 5 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage2" },
      },
      {
        when: { age: 6 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage2" },
      },
      {
        when: { age: 7 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage3" },
      },
      {
        when: { age: 8 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage3" },
      },
      {
        when: { age: 9 },
        apply: { model: "society:block/kubejs/crops/tubabacco_plant_stage4" },
      },
    ],
  };

  e
    .create("farm_and_charm:strawberry", "crop")
    .age(5, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 2, 16)
        .shape(1, 0, 0, 0, 16, 4, 16)
        .shape(2, 0, 0, 0, 16, 6, 16)
        .shape(3, 0, 0, 0, 16, 8, 16)
        .shape(4, 0, 0, 0, 16, 10, 16)
        .shape(5, 0, 0, 0, 16, 12, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("farm_and_charm:strawberry", 2)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("farm_and_charm:item/strawberry_seeds");
    }).blockstateJson = {
    multipart: [
      {
        when: { age: 0 },
        apply: { model: "farm_and_charm:block/strawberries_stage0" },
      },
      {
        when: { age: 1 },
        apply: { model: "farm_and_charm:block/strawberries_stage1" },
      },
      {
        when: { age: 2 },
        apply: { model: "farm_and_charm:block/strawberries_stage2" },
      },
      {
        when: { age: 3 },
        apply: { model: "farm_and_charm:block/strawberries_stage3" },
      },
      {
        when: { age: 4 },
        apply: { model: "farm_and_charm:block/strawberries_stage4" },
      },
      {
        when: { age: 5 },
        apply: { model: "farm_and_charm:block/strawberries_stage5" },
      },
    ],
  };

  e
    .create("brewery:hop_trellis", "crop")
    .age(6, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 16, 16)
        .shape(1, 0, 0, 0, 16, 16, 16)
        .shape(2, 0, 0, 0, 16, 16, 16)
        .shape(3, 0, 0, 0, 16, 16, 16)
        .shape(4, 0, 0, 0, 16, 16, 16)
        .shape(5, 0, 0, 0, 16, 16, 16)
        .shape(6, 0, 0, 0, 16, 22, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("brewery:hops", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("brewery:item/hops_seeds");
    }).blockstateJson = {
    multipart: [
      {
        when: { age: 0 },
        apply: { model: "society:block/kubejs/crops/hops_crop_stage0" },
      },
      {
        when: { age: 1 },
        apply: { model: "society:block/kubejs/crops/hops_crop_stage1" },
      },
      {
        when: { age: 2 },
        apply: { model: "society:block/kubejs/crops/hops_crop_stage1" },
      },
      {
        when: { age: 3 },
        apply: { model: "society:block/kubejs/crops/hops_crop_stage2" },
      },
      {
        when: { age: 4 },
        apply: { model: "society:block/kubejs/crops/hops_crop_stage2" },
      },
      {
        when: { age: 5 },
        apply: { model: "society:block/kubejs/crops/hops_crop_stage3" },
      },
      {
        when: { age: 6 },
        apply: { model: "society:block/kubejs/crops/hops_crop_stage4" },
      },
    ],
  };

  e
    .create("society:blueberry", "crop")
    .age(7, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 6, 16)
        .shape(2, 0, 0, 0, 16, 6, 16)
        .shape(3, 0, 0, 0, 16, 12, 16)
        .shape(4, 0, 0, 0, 16, 12, 16)
        .shape(5, 0, 0, 0, 16, 16, 16)
        .shape(6, 0, 0, 0, 16, 16, 16)
        .shape(7, 0, 0, 0, 16, 20, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("society:blueberry", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/blueberry_seeds");
    }).blockstateJson = {
    multipart: [
      {
        when: { age: 0 },
        apply: { model: "society:block/kubejs/crops/blueberry_crop_stage0" },
      },
      {
        when: { age: 1 },
        apply: { model: "society:block/kubejs/crops/blueberry_crop_stage1" },
      },
      {
        when: { age: 2 },
        apply: { model: "society:block/kubejs/crops/blueberry_crop_stage1" },
      },
      {
        when: { age: 3 },
        apply: { model: "society:block/kubejs/crops/blueberry_crop_stage2" },
      },
      {
        when: { age: 4 },
        apply: { model: "society:block/kubejs/crops/blueberry_crop_stage2" },
      },
      {
        when: { age: 5 },
        apply: { model: "society:block/kubejs/crops/blueberry_crop_stage3" },
      },
      {
        when: { age: 6 },
        apply: { model: "society:block/kubejs/crops/blueberry_crop_stage4" },
      },
      {
        when: { age: 7 },
        apply: { model: "society:block/kubejs/crops/blueberry_crop_stage5" },
      },
    ],
  };
  e
    .create("society:cranberry", "crop")
    .age(5, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 6, 16)
        .shape(2, 0, 0, 0, 16, 6, 16)
        .shape(3, 0, 0, 0, 16, 12, 16)
        .shape(4, 0, 0, 0, 16, 12, 16)
        .shape(5, 0, 0, 0, 16, 16, 16)
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("society:cranberry", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/cranberry_seeds");
    }).blockstateJson = {
    multipart: [
      {
        when: { age: 0 },
        apply: { model: "society:block/kubejs/crops/cranberry_crop_stage0" },
      },
      {
        when: { age: 1 },
        apply: { model: "society:block/kubejs/crops/cranberry_crop_stage1" },
      },
      {
        when: { age: 2 },
        apply: { model: "society:block/kubejs/crops/cranberry_crop_stage2" },
      },
      {
        when: { age: 3 },
        apply: { model: "society:block/kubejs/crops/cranberry_crop_stage3" },
      },
      {
        when: { age: 4 },
        apply: { model: "society:block/kubejs/crops/cranberry_crop_stage4" },
      },
      {
        when: { age: 5 },
        apply: { model: "society:block/kubejs/crops/cranberry_crop_stage5" },
      },
    ],
  };
  e
    .create("society:eggplant", "crop")
    .age(6, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 6, 16)
        .shape(2, 0, 0, 0, 16, 7, 16)
        .shape(3, 0, 0, 0, 16, 7, 16)
        .shape(4, 0, 0, 0, 16, 13, 16)
        .shape(5, 0, 0, 0, 16, 13, 16)
        .shape(6, 0, 0, 0, 16, 16, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("society:eggplant", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/eggplant_seeds");
    }).blockstateJson = {
    multipart: [
      {
        when: { age: 0 },
        apply: { model: "society:block/kubejs/crops/eggplant_crop_stage0" },
      },
      {
        when: { age: 1 },
        apply: { model: "society:block/kubejs/crops/eggplant_crop_stage1" },
      },
      {
        when: { age: 2 },
        apply: { model: "society:block/kubejs/crops/eggplant_crop_stage1" },
      },
      {
        when: { age: 3 },
        apply: { model: "society:block/kubejs/crops/eggplant_crop_stage2" },
      },
      {
        when: { age: 4 },
        apply: { model: "society:block/kubejs/crops/eggplant_crop_stage2" },
      },
      {
        when: { age: 5 },
        apply: { model: "society:block/kubejs/crops/eggplant_crop_stage3" },
      },
      {
        when: { age: 6 },
        apply: { model: "society:block/kubejs/crops/eggplant_crop_stage4" },
      },
    ],
  };

  e
    .create("society:carrot", "crop")
    .age(7, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 6, 16)
        .shape(2, 0, 0, 0, 16, 7, 16)
        .shape(3, 0, 0, 0, 16, 7, 16)
        .shape(4, 0, 0, 0, 16, 13, 16)
        .shape(5, 0, 0, 0, 16, 13, 16)
        .shape(6, 0, 0, 0, 16, 16, 16)
        .shape(7, 0, 0, 0, 16, 16, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("minecraft:carrot", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/carrot_seed");
    }).blockstateJson = {
    variants: {
      "age=0": {
        model: "minecraft:block/carrots_stage0",
      },
      "age=1": {
        model: "minecraft:block/carrots_stage0",
      },
      "age=2": {
        model: "minecraft:block/carrots_stage1",
      },
      "age=3": {
        model: "minecraft:block/carrots_stage1",
      },
      "age=4": {
        model: "minecraft:block/carrots_stage2",
      },
      "age=5": {
        model: "minecraft:block/carrots_stage2",
      },
      "age=6": {
        model: "minecraft:block/carrots_stage2",
      },
      "age=7": {
        model: "minecraft:block/carrots_stage3",
      },
    },
  };

  e
    .create("society:potato", "crop")
    .age(7, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 6, 16)
        .shape(2, 0, 0, 0, 16, 7, 16)
        .shape(3, 0, 0, 0, 16, 7, 16)
        .shape(4, 0, 0, 0, 16, 13, 16)
        .shape(5, 0, 0, 0, 16, 13, 16)
        .shape(6, 0, 0, 0, 16, 16, 16)
        .shape(7, 0, 0, 0, 16, 16, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("minecraft:potato", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/potato_seed");
    }).blockstateJson = {
    variants: {
      "age=0": {
        model: "minecraft:block/potatoes_stage0",
      },
      "age=1": {
        model: "minecraft:block/potatoes_stage0",
      },
      "age=2": {
        model: "minecraft:block/potatoes_stage1",
      },
      "age=3": {
        model: "minecraft:block/potatoes_stage1",
      },
      "age=4": {
        model: "minecraft:block/potatoes_stage2",
      },
      "age=5": {
        model: "minecraft:block/potatoes_stage2",
      },
      "age=6": {
        model: "minecraft:block/potatoes_stage2",
      },
      "age=7": {
        model: "minecraft:block/potatoes_stage3",
      },
    },
  };

  e
    .create("society:onion", "crop")
    .age(4, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 6, 16)
        .shape(2, 0, 0, 0, 16, 7, 16)
        .shape(3, 0, 0, 0, 16, 13, 16)
        .shape(4, 0, 0, 0, 16, 16, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("farm_and_charm:onion", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/onion_seed");
    }).blockstateJson = {
    variants: {
      "age=0": [
        {
          model: "farm_and_charm:block/onion_stage0",
          weight: 1,
        },
      ],
      "age=1": [
        {
          model: "farm_and_charm:block/onion_stage1",
          weight: 1,
        },
      ],
      "age=2": [
        {
          model: "farm_and_charm:block/onion_stage2",
          weight: 1,
        },
      ],
      "age=3": [
        {
          model: "farm_and_charm:block/onion_stage3",
          weight: 1,
        },
      ],
      "age=4": [
        {
          model: "farm_and_charm:block/onion_stage4_1",
          weight: 1,
        },
        {
          model: "farm_and_charm:block/onion_stage4_2",
          weight: 1,
        },
        {
          model: "farm_and_charm:block/onion_stage4_3",
          weight: 1,
        },
      ],
    },
  };

  e
    .create("society:sweet_potato", "crop")
    .age(5, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 6, 16)
        .shape(2, 0, 0, 0, 16, 7, 16)
        .shape(3, 0, 0, 0, 16, 3, 16)
        .shape(4, 0, 0, 0, 16, 13, 16)
        .shape(5, 0, 0, 0, 16, 16, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("veggiesdelight:sweet_potato", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/sweet_potato_seed");
    }).blockstateJson = {
    variants: {
      "age=0": {
        model: "veggiesdelight:block/sweet_potato_stage0",
      },
      "age=1": {
        model: "veggiesdelight:block/sweet_potato_stage1",
      },
      "age=2": {
        model: "veggiesdelight:block/sweet_potato_stage2",
      },
      "age=3": {
        model: "veggiesdelight:block/sweet_potato_stage3",
      },
      "age=4": {
        model: "veggiesdelight:block/sweet_potato_stage3",
      },
      "age=5": {
        model: "veggiesdelight:block/sweet_potato_stage4",
      },
    },
  };

  e
    .create("society:peanut", "crop")
    .age(7, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 4, 16)
        .shape(1, 0, 0, 0, 16, 6, 16)
        .shape(2, 0, 0, 0, 16, 7, 16)
        .shape(3, 0, 0, 0, 16, 7, 16)
        .shape(4, 0, 0, 0, 16, 13, 16)
        .shape(5, 0, 0, 0, 16, 13, 16)
        .shape(6, 0, 0, 0, 16, 16, 16)
        .shape(7, 0, 0, 0, 16, 16, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("vintagedelight:peanut", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/peanut_seed");
    }).blockstateJson = {
    variants: {
      "age=0": {
        model: "vintagedelight:block/peanuts_stage0",
      },
      "age=1": {
        model: "vintagedelight:block/peanuts_stage0",
      },
      "age=2": {
        model: "vintagedelight:block/peanuts_stage1",
      },
      "age=3": {
        model: "vintagedelight:block/peanuts_stage1",
      },
      "age=4": {
        model: "vintagedelight:block/peanuts_stage2",
      },
      "age=5": {
        model: "vintagedelight:block/peanuts_stage3",
      },
      "age=6": {
        model: "vintagedelight:block/peanuts_stage3",
      },
      "age=7": {
        model: "vintagedelight:block/peanuts_stage4",
      },
    },
  };

  e
    .create("society:berry_bush")
    .defaultCutout()
    .hardness(0)
    .resistance(0)
    .mapColor("grass")
    .noCollision()
    .soundType("azalea_leaves")
    .property(integerProperty.create("type", 0, 4))
    .defaultCutout()
    .item((item) => {
      item.modelJson({
        parent: "society:block/kubejs/berry_bush/base",
      });
    })
    .defaultState((state) => {
      state.set(integerProperty.create("type", 0, 4), 0);
    })
    .placementState((state) => {
      state.set(integerProperty.create("type", 0, 4), 0);
    })
    .rightClick((click) => {
      const { block, level, hand } = click;

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        global.updateBerryBush(level, block);
      }
    })
    .randomTick((tick) => {
      const { block, level } = tick;
      global.updateBerryBush(level, block);
    }).blockstateJson = {
    multipart: [
      {
        when: { type: "0" },
        apply: { model: "society:block/kubejs/berry_bush/base" },
      },
      {
        when: { type: "1" },
        apply: { model: "society:block/kubejs/berry_bush/salmonberry" },
      },
      {
        when: { type: "2" },
        apply: { model: "society:block/kubejs/berry_bush/boysenberry" },
      },
      {
        when: { type: "3" },
        apply: { model: "society:block/kubejs/berry_bush/cranberry" },
      },
      {
        when: { type: "4" },
        apply: { model: "society:block/kubejs/berry_bush/crystalberry" },
      },
    ],
  };

  e
    .create("society:sparkpod", "crop")
    .age(8, (builder) => {
      builder
        .shape(0, 0, 0, 0, 16, 3, 16)
        .shape(1, 0, 0, 0, 16, 3, 16)
        .shape(2, 0, 0, 0, 16, 5, 16)
        .shape(3, 0, 0, 0, 16, 5, 16)
        .shape(4, 0, 0, 0, 16, 8, 16)
        .shape(5, 0, 0, 0, 16, 8, 16)
        .shape(6, 0, 0, 0, 16, 11, 16)
        .shape(7, 0, 0, 0, 16, 11, 16)
        .shape(8, 0, 0, 0, 16, 16, 16);
    })
    .survive((state, level, pos) => global.surviveCheck(level, pos))
    .dropSeed(false)
    .crop("society:sparkpod", 1)
    .tagBlock("minecraft:mineable/hoe")
    .tagBlock("minecraft:crops")
    .randomTick((tick) => {})
    .item((seedItem) => {
      seedItem.texture("society:item/sparkpod_spores");
    }).blockstateJson = {
    multipart: [
      {
        when: { age: 0 },
        apply: { model: "society:block/kubejs/crops/sparkpod_crop_stage0" },
      },
      {
        when: { age: 1 },
        apply: { model: "society:block/kubejs/crops/sparkpod_crop_stage0" },
      },
      {
        when: { age: 2 },
        apply: { model: "society:block/kubejs/crops/sparkpod_crop_stage1" },
      },
      {
        when: { age: 3 },
        apply: { model: "society:block/kubejs/crops/sparkpod_crop_stage1" },
      },
      {
        when: { age: 4 },
        apply: { model: "society:block/kubejs/crops/sparkpod_crop_stage2" },
      },
      {
        when: { age: 5 },
        apply: { model: "society:block/kubejs/crops/sparkpod_crop_stage2" },
      },
      {
        when: { age: 6 },
        apply: { model: "society:block/kubejs/crops/sparkpod_crop_stage3" },
      },
      {
        when: { age: 7 },
        apply: { model: "society:block/kubejs/crops/sparkpod_crop_stage3" },
      },
      {
        when: { age: 8 },
        apply: { model: "society:block/kubejs/crops/sparkpod_crop_stage4" },
      },
    ],
  };
});
