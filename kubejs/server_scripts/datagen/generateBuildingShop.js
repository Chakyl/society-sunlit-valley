const runBuildingShopDatagen = false;
const buildingSets = ["basic", "alpine", "arid", "bamboo", "bavarian", "cherry", "entrana", "mason", "prismarine", "siberian", "tudor", "vibrantown"]
const buildingTypes = ["home", "shed", "large_shed", "coop", "barn", "deluxe_barn", "greenhouse"]
const catalysts = ["tanukidecor:antique_bed", 'society:preserves_jar', "society:aging_cask", 'minecraft:egg', 'society:milk', 'society:large_milk', 'moreminecarts:chiseled_organic_glass']

if (runBuildingShopDatagen) {
  let shopJson = {}
  let langStrings = {}
  let shopTrades
  let shopIds = []
  buildingTypes.forEach((type, index) => {
    langStrings[`shop.society_trading.building_shop.${type}`] = type;
    shopTrades = []
    buildingSets.forEach((set) => {
      shopTrades.push({
        offer: {
          item: "portable_blueprints:worn_blueprint",
          nbt: `{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"barn_basic",buildAnyway:0b,free_build:1,display:{Name:\'{\"italic\":false,\"color\":\"#FFFF00\",\"translate\":\"portable_blueprints.worn_blueprint.${set}_${type}\"}\'}}`,
          count: 1
        },
        request: {
          item: "meadow:fire_log",
          count: 32
        },
        image: `society:textures/gui/buildings/${type}_${set}`,
        trade_id: `bs_${type}_${set}`
      });
    })
    shopIds.push(`bs_${type}`)
    shopJson = {
      shop_id: `bs_${type}`,
      name: `shop.society_trading.building_shop.${type}`,
      texture: "dialog:textures/portraits/carpenter",
      hidden_from_selector: true,
      display_type: "image",
      jei_catalyst: {
        item: catalysts[index]
      },
      trades: shopTrades
    };
    JsonIO.write(
      `kubejs/data/society_trading/shops/bs_${type}.json`, shopJson
    );
  });
  let selector = {
    selector_id: "building_shop",
    name: `selector.society_trading.building_shop`,
    shop_ids: shopIds
  }
  JsonIO.write(`kubejs/data/society_trading/selectors/building_shop.json`, selector);
  JsonIO.write(
    `kubejs/assets/society_trading/lang/building_shop_generated.json`,
    Object.keys(langStrings)
      .sort()
      .reduce((acc, key) => {
        acc[key] = langStrings[key];
        return acc;
      }, {})
  );
}
