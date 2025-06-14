console.info("[SOCIETY] letsDoBroken.js loaded");

BlockEvents.broken("furniture:iron_fish_tank", (e) => {
  if (e.block.properties.get("part").toLowerCase() == "head") {
    e.block.popItem(Item.of("furniture:iron_fish_tank"));
  }
});

BlockEvents.broken("furniture:copper_fish_tank", (e) => {
  if (e.block.properties.get("part").toLowerCase() == "head") {
    e.block.popItem(Item.of("furniture:copper_fish_tank"));
  }
});

BlockEvents.broken("brewery:barrel_main", (e) => {
  if (e.block.properties.get("half").toLowerCase() == "upper") {
    e.block.popItem(Item.of("brewery:barrel_main"));
  }
});

BlockEvents.broken("brewery:barrel_right", (e) => {
  if (e.block.properties.get("half").toLowerCase() == "lower") {
    e.block.popItem(Item.of("brewery:barrel_main"));
  }
});

BlockEvents.broken(["brewery:barrel_main_head", "brewery:barrel_head_right"], (e) => {
  e.block.popItem(Item.of("brewery:barrel_main"));
});

BlockEvents.broken(
  [
    "fantasyfurniture:nordic/painting_small",
    "fantasyfurniture:dunmer/painting_small",
    "fantasyfurniture:nordic/painting_wide",
    "fantasyfurniture:dunmer/painting_wide",
    "fantasyfurniture:venthyr/painting_small",
    "fantasyfurniture:venthyr/painting_wide",
    "fantasyfurniture:bone/skeleton/painting_small",
    "fantasyfurniture:bone/skeleton/painting_wide",
    "fantasyfurniture:bone/wither/painting_small",
    "fantasyfurniture:royal/painting_wide",
    "fantasyfurniture:royal/painting_small",
    "fantasyfurniture:bone/wither/painting_wide",
    "fantasyfurniture:necrolord/painting_small",
    "fantasyfurniture:necrolord/painting_wide",
  ],
  (e) => {
    e.block.popItem(Item.of(e.block.id));
  }
);
