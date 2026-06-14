// const runBuildingShopDatagen = true;

// const buildingSets = ["basic", "alpine", "arid", "bamboo", "bavarian", "cherry", "entrana", "mason", "prismarine", "siberian", "tudor", "vibrantown", "floral", "sakura"]
// const buildingTypes = ["home", "shed", "large_shed", "coop", "barn", "deluxe_barn", "greenhouse"]
// const buildingTypeNames = ["Farmhouse", "Shed", "Large Shed", "Coop", "Barn", "Deluxe Barn", "Greenhouse"]
// const catalysts = ["tanukidecor:antique_bed", 'society:preserves_jar', "society:aging_cask", 'minecraft:egg', 'society:milk', 'society:large_milk', 'moreminecarts:chiseled_organic_glass']
// const villagerBuildingSets = ["basic"]
// const villagerBuildingTypes = ["carpenter", "blacksmith", "banker", "shepherd", "market", "fisher"]
// const villagerTypeNames = ["Carpenter", "Blacksmith", "Banker", "Shepherd", "Market", "Fisher"]
// const villagerCatalysts = ['sawmill:sawmill', 'minecraft:anvil', 'numismatics:bank_terminal', 'society:feeding_trough', 'minecraft:composter', 'aquaculture:worm_farm']

// let langStrings = {}
// let blueprintLangStrings = {}

// const setGenerationFunction = (sets, types, names, catalyst, villager) => {
//   let shopJson = {}
//   let shopTrades
//   let shopIds = []
//   let langPrefix;
//   types.forEach((type, index) => {
//     langStrings[`shop.society_trading.building_shop.${type}`] = `${global.formatName(type)}${villager ? " Home" : ""}`;
//     shopTrades = []
//     sets.forEach((set) => {
//       langPrefix = `portable_blueprints.worn_blueprint.${villager ? "npc_" : ""}${set}_${type}`
//       blueprintLangStrings[langPrefix] = `${global.formatName(set)} ${names[index]}${villager ? " Home" : ""}`;
//       blueprintLangStrings[`${langPrefix}.author`] = "Designed by: ";
//       blueprintLangStrings[`${langPrefix}.dimensions`] = "";
//       shopTrades.push({
//         offer: {
//           item: "portable_blueprints:worn_blueprint",
//           nbt: `{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"${type}_${set}",buildAnyway:0b,display:{Name:\'{\"italic\":false,\"color\":\"#FFFF00\",\"translate\":\"${langPrefix}\"}\',Lore:[\'{\"italic\":false,\"color\":\"#FFFF00\",\"translate\":\"${langPrefix}.author\"}\']},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"${type}_${set}",owner:"worn",owner_name:Ace,remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:1b,wasHolding:1b,worn_set:1b}`,
//           count: 1
//         },
//         request: {
//           item: "meadow:fire_log",
//           count: 32
//         },
//         image: `society:textures/gui/buildings/${set}/${type}_${set}`,
//         image_description: `${langPrefix}.dimensions`,
//         trade_id: `bs_${type}_${set}`
//       });
//     })
//     shopIds.push(`bs_${type}`)
//     shopJson = {
//       shop_id: `bs_${type}`,
//       name: `shop.society_trading.building_shop.${type}`,
//       texture: "dialog:textures/portraits/carpenter",
//       hidden_from_selector: true,
//       display_type: "image",
//       jei_catalyst: {
//         item: catalyst[index]
//       },
//       trades: shopTrades
//     };
//     JsonIO.write(
//       `kubejs/data/society_trading/shops/bs_${type}.json`, shopJson
//     );
//   });
//   let prefix = villager ? "town_" : "";
//   let selector = {
//     selector_id: `${prefix}building_shop`,
//     name: `selector.society_trading.${prefix}building_shop`,
//     shop_ids: shopIds
//   }
//   JsonIO.write(`kubejs/data/society_trading/selectors/${prefix}building_shop.json`, selector);
// }
// if (runBuildingShopDatagen) {
//   setGenerationFunction(buildingSets, buildingTypes, buildingTypeNames, catalysts);
//   setGenerationFunction(villagerBuildingSets, villagerBuildingTypes, villagerTypeNames, villagerCatalysts, true);

//   JsonIO.write(
//     `kubejs/assets/society_trading/lang/building_shop_generated.json`,
//     Object.keys(langStrings)
//       .sort()
//       .reduce((acc, key) => {
//         acc[key] = langStrings[key];
//         return acc;
//       }, {})
//   );
//   JsonIO.write(
//     `kubejs/assets/portable_blueprints/lang/building_shop_generated.json`,
//     Object.keys(blueprintLangStrings)
//       .sort()
//       .reduce((acc, key) => {
//         acc[key] = blueprintLangStrings[key];
//         return acc;
//       }, {})
//   );
// }
