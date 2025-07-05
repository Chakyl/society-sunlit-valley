const relicTroveTable = [
  {
    drop: "#society:relics",
    drop_chance: 1,
  },
  {
    drop: "#society:treasure_books",
    drop_chance: 0.05,
  },
];

const artifactTroveTable = [
  {
    drop: "#society:artifacts",
    drop_chance: 1,
  },
  {
    drop: "#society:treasure_books",
    drop_chance: 0.05,
  },
];
const geodeLootTable = [
  {
    drop: "#society:geode_junk",
    drop_chance: 0.9,
  },
  {
    drop: "#society:geode_bonus",
    drop_chance: 0.3,
  },
  {
    drop: "#society:geode_treasure",
    drop_chance: 0.2,
  },
  {
    drop: "#society:geode_relic",
    drop_chance: 0.01,
  },
];
const frozenGeodeLootTable = [
  {
    drop: "#society:geode_junk",
    drop_chance: 0.9,
  },
  {
    drop: "#society:frozen_geode_bonus",
    drop_chance: 0.3,
  },
  {
    drop: "#society:frozen_geode_treasure",
    drop_chance: 0.2,
  },
  {
    drop: "#society:frozen_geode_relic",
    drop_chance: 0.01,
  },
];
const magmaGeodeLootTable = [
  {
    drop: "#society:geode_junk",
    drop_chance: 0.9,
  },
  {
    drop: "#society:magma_geode_bonus",
    drop_chance: 0.3,
  },
  {
    drop: "#society:magma_geode_treasure",
    drop_chance: 0.2,
  },
  {
    drop: "#society:magma_geode_relic",
    drop_chance: 0.01,
  },
];
const omniGeodeLootTable = [
  {
    drop: "#society:geode_junk",
    drop_chance: 0.9,
  },
  {
    drop: "#society:omni_geode_bonus",
    drop_chance: 0.4,
  },
  {
    drop: "#society:omni_geode_treasure",
    drop_chance: 0.6,
  },
  {
    drop: "#society:omni_geode_special",
    drop_chance: 0.03,
  },
];

global.extractinatorRecipes = [
  { input: "society:relic_trove", output: relicTroveTable },
  { input: "society:artifact_trove", output: artifactTroveTable },
  { input: "society:geode", output: geodeLootTable },
  { input: "society:frozen_geode", output: frozenGeodeLootTable },
  { input: "society:magma_geode", output: magmaGeodeLootTable },
  { input: "society:omni_geode", output: omniGeodeLootTable },
];
