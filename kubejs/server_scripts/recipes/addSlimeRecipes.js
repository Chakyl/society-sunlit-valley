console.info("[SOCIETY] addSlimeRecipes.js loaded");

ServerEvents.recipes((e) => {
  e.remove({ output: "splendid_slimes:slime_heart" });

  global.plorts.forEach((plort) => {
    e.custom({
      type: "splendid_slimes:plort_pressing",
      ingredient: {
        count: 16,
        item: "splendid_slimes:plort",
        nbt: {
          plort: {
            id: `${plort.type}`,
          },
        },
      },
      result: {
        item: "splendid_slimes:slime_heart",
        nbt: {
          slime: {
            id: `${plort.type}`,
          },
        },
      },
    });
  });
  const addFusion = (top, bottom, output) => {
    e.custom({
      type: "splendid_slimes:plort_pressing",
      ingredient: {
        item: "splendid_slimes:slime_heart",
        nbt: {
          slime: {
            id: `splendid_slimes:${top}`,
          },
        },
      },
      output: {
        item: "splendid_slimes:slime_heart",
        nbt: {
          slime: {
            id: `splendid_slimes:${bottom}`,
          },
        },
      },
      result: {
        item: "splendid_slimes:slime_heart",
        nbt: {
          slime: {
            id: `splendid_slimes:${output}`,
          },
        },
      },
    });
  };
  const addItemFusion = (item, bottom, output) => {
    e.custom({
      type: "splendid_slimes:plort_pressing",
      ingredient: {
        item: item,
      },
      output: {
        item: "splendid_slimes:slime_heart",
        nbt: {
          slime: {
            id: `splendid_slimes:${bottom}`,
          },
        },
      },
      result: {
        item: "splendid_slimes:slime_heart",
        nbt: {
          slime: {
            id: `splendid_slimes:${output}`,
          },
        },
      },
    });
  };
  addFusion("luminous", "webby", "all_seeing");
  addFusion("boomcat", "blazing", "bitwise");
  addFusion("weeping", "puddle", "prisma");

  addItemFusion("society:aged_chenet_wine", "slimy", "juicy");
  addItemFusion("society:magic_rock_candy", "slimy", "sweet");
  addItemFusion("numismatics:ancient_coin", "minty", "gold");
  addItemFusion("botania:life_essence", "ender", "minty");
  addItemFusion("minecraft:dragon_egg", "ender", "minty");
  addItemFusion("society:token_of_unity", "boomcat", "sparkcat");
  addItemFusion("society:magic_bulb", "orby", "mechanic");

  e.custom({
    type: "splendid_slimes:plort_pressing",
    ingredient: {
      item: "golemoverhaul:honey_blob",
      count: 16,
    },
    result: {
      item: "splendid_slimes:slime_heart",
      nbt: {
        slime: {
          id: `splendid_slimes:bear`,
        },
      },
    },
  });
});
