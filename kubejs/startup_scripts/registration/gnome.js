console.info("[SOCIETY] gnome.js loaded");

const getGnomeState = (name, type) => {
  const path = `society:block/kubejs/gnome/${name}`;
  let cardianal = [
    {
      when: { type: type, facing: "north" },
      apply: { model: path, y: 0, uvlock: false },
    },
    {
      when: { type: type, facing: "east" },
      apply: { model: path, y: 90, uvlock: false },
    },
    {
      when: { type: type, facing: "south" },
      apply: { model: path, y: 180, uvlock: false },
    },
    {
      when: { type: type, facing: "west" },
      apply: { model: path, y: -90, uvlock: false },
    },
  ];
  return cardianal;
};
StartupEvents.registry("block", (e) => {
  e
    .create("society:gnome", "cardinal")
    .property(integerProperty.create("type", 0, 3))
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.gnome.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/gnome/base",
      });
    })
    .defaultState((state) => {
      state.set(integerProperty.create("type", 0, 3), 0);
    })
    .placementState((state) => {
      state.set(integerProperty.create("type", 0, 3), 0);
    })
    .rightClick((click) => {
      const { block, item, hand } = click;
      const type = Number(block.properties.get("type"));
      const facing = block.properties.get("facing");

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        if (item == "minecraft:lantern") {
          block.set("society:lantern_gnome", {
            facing: facing,
          });
        } else {
          block.set(block.id, {
            facing: facing,
            type: type == 3 ? "0" : String(type + 1),
          });
        }
      }
    }).blockstateJson = {
    multipart: []
      .concat(getGnomeState("base", 0))
      .concat(getGnomeState("fish", 1))
      .concat(getGnomeState("twig", 2))
      .concat(getGnomeState("swing", 3)),
  };
  e
    .create("society:lantern_gnome", "cardinal")
    .property(integerProperty.create("type", 0, 3))
    .defaultCutout()
    .item((item) => {
      item.tooltip(Text.translatable("block.society.lantern_gnome.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/gnome/lantern",
      });
    })
    .lightLevel(0.8)
    .rightClick((click) => {
      const { block, hand } = click;
      const type = Number(block.properties.get("type"));
      const facing = block.properties.get("facing");

      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND") {
        block.set(block.id, {
          facing: facing,
          type: type == 3 ? "0" : String(type + 1),
        });
      }
    }).blockstateJson = {
    multipart: [
      {
        when: { facing: "north" },
        apply: { model: "society:block/kubejs/gnome/lantern", y: 0, uvlock: false },
      },
      {
        when: { facing: "east" },
        apply: { model: "society:block/kubejs/gnome/lantern", y: 90, uvlock: false },
      },
      {
        when: { facing: "south" },
        apply: { model: "society:block/kubejs/gnome/lantern", y: 180, uvlock: false },
      },
      {
        when: { facing: "west" },
        apply: { model: "society:block/kubejs/gnome/lantern", y: -90, uvlock: false },
      },
    ],
  };
});
