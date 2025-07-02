console.info("[SOCIETY] sprinklers.js loaded");

const generateSprinkler = (e, tier, radius) => {
  const tooltipRadius = 1 + radius * 2;
  e
    .create(`society:${tier}_sprinkler`)
    .displayName(`${tier == "netherite" ? "Iridium" : tier.charAt(0).toUpperCase() + tier.slice(1)} Sprinkler`)
    .property(booleanProperty.create("sticklogged"))
    .defaultState((state) => {
      state.set(booleanProperty.create("sticklogged"), false);
    })
    .placementState((state) => {
      state.set(booleanProperty.create("sticklogged"), false);
    })
    .tagBlock("minecraft:mineable/pickaxe")
    .tagBlock("society:sprinkler")
    .tagBlock(`dew_drop_farmland_growth:sprinkler_tier_${radius}`)
    .tagBlock("minecraft:needs_stone_tool")
    .transparent(true)
    .box(2, 0, 2, 14, 16, 14)
    .item((item) => {
      item.tooltip(Text.gray("Waters crops before they dry out at 6am"));
      item.tooltip(Text.gray("Can be given a stick for decoration"));
      item.tooltip(Text.green(`Area: ${tooltipRadius}x${tooltipRadius}`));
      item.modelJson({
        parent: `society:block/${tier}_sprinkler`,
      });
    })
    .rightClick((click) => {
      const { player, item, block, hand } = click;
      const stickLogged = block.properties.get("sticklogged").toLowerCase() === "true"
      if (hand == "OFF_HAND") return;
      if (hand == "MAIN_HAND" && item == "minecraft:stick" && !stickLogged) {
        if (!player.isCreative()) item.count--;
        block.set(block.id, {
          sticklogged: true,
        });
      } else if (
        player.isCrouching() &&
        item === "minecraft:air" &&
        stickLogged
      ) {
        player.give(Item.of("minecraft:stick"));
        block.set(block.id, {
          sticklogged: false,
        });
      }
    })
    .blockstateJson = MultipartBuilder(`society:block/${tier}_sprinkler`)
      .complex()
      .add({
        when: { sticklogged: true },
        apply: { model: "society:block/sprinkler_stick" },
      })
      .build();
};
StartupEvents.registry("block", (e) => {
  generateSprinkler(e, "iron", 1);
  generateSprinkler(e, "gold", 2);
  generateSprinkler(e, "diamond", 3);
  generateSprinkler(e, "netherite", 4);
});
