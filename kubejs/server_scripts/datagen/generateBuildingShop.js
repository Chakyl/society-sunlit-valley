// const runBuildingShopDatagen = true;

// const farmBuildingTypes = [
//     { type: "home", price: 6, name: "Farmhouse", catalyst: "tanukidecor:antique_bed" },
//     { type: "shed", price: 1, name: "Shed", catalyst: "society:preserves_jar" },
//     { type: "large_shed", price: 3, name: "Large Shed", catalyst: "society:aging_cask" },
//     { type: "coop", price: 2, name: "Coop", catalyst: "minecraft:egg" },
//     { type: "barn", price: 4, name: "Barn", catalyst: "society:milk" },
//     { type: "deluxe_barn", price: 12, name: "Deluxe Barn", catalyst: "society:large_milk" },
//     { type: "greenhouse", price: 2, name: "Greenhouse", catalyst: "moreminecarts:chiseled_organic_glass" }
// ];

// const villagerfarmBuildingTypes = [
//     { type: "carpenter", price: 2, name: "Carpenter", catalyst: "sawmill:sawmill" },
//     { type: "blacksmith", price: 2, name: "Blacksmith", catalyst: "minecraft:anvil" },
//     { type: "shepherd", price: 2, name: "Shepherd", catalyst: "society:feeding_trough" },
//     { type: "market", price: 2, name: "Market", catalyst: "minecraft:composter" },
//     { type: "fisher", price: 2, name: "Fisher", catalyst: "aquaculture:worm_farm" },
//     { type: "banker", price: 3, name: "Banker", catalyst: "numismatics:bank_terminal" },
//     { type: "librarian", price: 5, name: "Librarian", catalyst: "minecraft:book" },
//     { type: "witch", price: 4, name: "Witch", catalyst: 'society:crystal_of_regret_mining' },
//     { type: "trader", price: 5, name: "Trader", catalyst: "society:ancient_cog" }
// ];

// const buildingSets = ["basic", "alpine", "arid", "bamboo", "bavarian", "cherry", "entrana", "floral", "mason", "prismarine", "rural", "sakura", "siberian", "tudor", "vibrantown"];
// const villagerBuildingSets = ["basic", "pineconetown","rural"];

// let langStrings = {};
// let blueprintLangStrings = {};

// const setGenerationFunction = (sets, buildingTypes, villager) => {
//     let shopJson = {};
//     let shopTrades;
//     let shopIds = [];
//     let langPrefix;

//     buildingTypes.forEach((buildingType) => {
//         let { type, price, name, catalyst } = buildingType;

//         langStrings[`shop.society_trading.building_shop.${type}`] = `${global.formatName(type)}${villager ? " Home" : ""}`;
//         shopTrades = [];
    
//         sets.forEach((set) => {
//             langPrefix = `portable_blueprints.worn_blueprint.${set}_${type}`;
//             blueprintLangStrings[langPrefix] = `${global.formatName(set)} ${name}${villager ? " Home" : ""}`;
//             blueprintLangStrings[`${langPrefix}.author`] = "Designed by: ";
//             blueprintLangStrings[`${langPrefix}.dimensions`] = "";

//             shopTrades.push({
//                 offer: {
//                     item: "portable_blueprints:worn_blueprint",
//                     nbt: `{Damage:1,allow_nbt:1,altezza:0,blueprint_name:"${type}_${set}",buildAnyway:0b,display:{Name:\'{\"italic\":false,\"color\":\"#FFFF00\",\"translate\":\"${langPrefix}\"}\',Lore:[\'{\"italic\":false,\"color\":\"#FFFF00\",\"translate\":\"${langPrefix}.author\"}\']},free_build:1,inventari_blocco_selezionati:"",lunghezzaX:0,lunghezzaZ:0,mirrowX:0b,mirrowY:0b,mirrowZ:0b,nome:"${type}_${set}",owner:"worn",owner_name:Ace,remaining_uses:1,rotateValue:0s,skipObstructionBlock:0b,visualizeBuild:1b,wasHolding:1b,worn_set:1b}`,
//                     count: 1
//                 },
//                 request: {
//                     item: type.includes("greenhouse") ? "society:greenhouse_building_supplies" : "society:building_supplies",
//                     count: price
//                 },
//                 image: `society:textures/gui/buildings/${set}/${type}_${set}`,
//                 image_description: `${langPrefix}.dimensions`,
//                 trade_id: `bs_${type}_${set}`
//             });
//         });

//         shopIds.push(`bs_${type}`);
//         shopJson = {
//             shop_id: `bs_${type}`,
//             name: `shop.society_trading.building_shop.${type}`,
//             texture: "dialog:textures/portraits/carpenter",
//             hidden_from_selector: true,
//             display_type: "image",
//             jei_catalyst: {
//                 item: catalyst
//             },
//             trades: shopTrades
//         };

//         JsonIO.write(`kubejs/data/society_trading/shops/bs_${type}.json`, shopJson);
//     });

//     let prefix = villager ? "town_" : "";
//     let selector = {
//         selector_id: `${prefix}building_shop`,
//         name: `selector.society_trading.${prefix}building_shop`,
//         shop_ids: shopIds
//     };
//     JsonIO.write(`kubejs/data/society_trading/selectors/${prefix}building_shop.json`, selector);
// };

// if (runBuildingShopDatagen) {
//     setGenerationFunction(buildingSets, farmBuildingTypes, false);
//     setGenerationFunction(villagerBuildingSets, villagerfarmBuildingTypes, true);

//     JsonIO.write(
//         `kubejs/assets/society_trading/lang/building_shop_generated.json`,
//         Object.keys(langStrings)
//             .sort()
//             .reduce((acc, key) => {
//                 acc[key] = langStrings[key];
//                 return acc;
//             }, {})
//     );

//     JsonIO.write(
//         `kubejs/assets/portable_blueprints/lang/building_shop_generated.json`,
//         Object.keys(blueprintLangStrings)
//             .sort()
//             .reduce((acc, key) => {
//                 acc[key] = blueprintLangStrings[key];
//                 return acc;
//             }, {})
//     );
// }