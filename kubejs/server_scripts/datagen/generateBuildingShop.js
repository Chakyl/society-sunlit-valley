const runBuildingShopDatagen = true;
const buildingSets = ["basic", "alpine", "arid", "bamboo", "bavarian", "cherry", "entrana", "mason", "prismarine", "siberian", "tudor", "vibrantown"]
const buildingTypes = ["home", "shed", "large_shed", "coop", "barn", "deluxe_barn", "greenhouse"]
const buildingTypeNames = ["Home", "Shed", "Large Shed", "Coop", "Barn", "Deluxe Barn", "greenhouse"]
const catalysts = ["tanukidecor:antique_bed", 'society:preserves_jar', "society:aging_cask", 'minecraft:egg', 'society:milk', 'society:large_milk', 'moreminecarts:chiseled_organic_glass']

if (runBuildingShopDatagen) {
  let shopJson = {}
  let langStrings = {}
  let blueprintLangStrings = {}
  let shopTrades
  let shopIds = []
  buildingTypes.forEach((type, index) => {
    langStrings[`shop.society_trading.building_shop.${type}`] = global.formatName(type);
    shopTrades = []
    buildingSets.forEach((set) => {
    blueprintLangStrings[`portable_blueprints.worn_blueprint.${set}_${type}`] = `${global.formatName(set)} ${buildingTypeNames[index]}`;
    blueprintLangStrings[`portable_blueprints.worn_blueprint.${set}_${type}.author`] = "";
    blueprintLangStrings[`portable_blueprints.worn_blueprint.${set}_${type}.dimensions`] = "";
      shopTrades.push({
        offer: {
          item: "portable_blueprints:worn_blueprint",
          nbt: `{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"${type}_${set}",buildAnyway:0b,display:{Name:\'{\"italic\":false,\"color\":\"#FFFF00\",\"translate\":\"portable_blueprints.worn_blueprint.${set}_${type}\"}\'},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"${type}_${set}",owner:"worn",owner_name:"Chakyl!",remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:1b,wasHolding:1b,worn_set:1b}`,
          count: 1
        },
        request: {
          item: "meadow:fire_log",
          count: 32
        },
        image: `society:textures/gui/buildings/${set}/${type}_${set}`,
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
  JsonIO.write(
    `kubejs/assets/portable_blueprints/lang/building_shop_generated.json`,
    Object.keys(blueprintLangStrings)
      .sort()
      .reduce((acc, key) => {
        acc[key] = blueprintLangStrings[key];
        return acc;
      }, {})
  );
}
