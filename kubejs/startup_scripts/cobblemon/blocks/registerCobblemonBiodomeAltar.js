console.info("[SOCIETY-S-COBBLEMON] registerCobblemonBiodomeAltar.js loaded");

const getAltarState = (name, type) => {
  const path = `sunlit_cobblemon:block/kubejs/biodome_altar${name}`;
  return [
    {
      when: { type: type },
      apply: { model: path, y: 0, uvlock: false },
    }
  ];
};
StartupEvents.registry("block", (e) => {
  e.create("sunlit_cobblemon:biodome_altar", "cardinal")
    .property(integerProperty.create("type", 0, 2))
    .defaultCutout()
    .box(0, 0, 0, 16, 12, 16)
    .soundType("stone")
    .item((item) => {
      item.tooltip(Text.translatable("block.sunlit_cobblemon.biodome_altar.description").gray());
      item.modelJson({
        parent: "sunlit_cobblemon:block/kubejs/biodome_altar",
      });
    })
    .defaultState((state) => {
      state.set(integerProperty.create("type", 0, 2), 0);
    })
    .placementState((state) => {
      state.set(integerProperty.create("type", 0, 2), 0);
    }).blockstateJson = {
    multipart: []
      .concat(getAltarState("", 0))
      .concat(getAltarState("_red", 1))
      .concat(getAltarState("_blue", 2)),
  };
});
