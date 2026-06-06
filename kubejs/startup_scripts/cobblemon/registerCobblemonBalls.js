// console.info("[SOCIETY-S-COBBLEMON] registerCobblemonBalls.js loaded");


// const PokeballDB = {
// 	skull_ball: {
// 		name: "Skull Ball",
// 		spriteModel: null,
// 		modelModel: null,
// 		waterDrag: 1.0,
// 		throwPower: 1.5,
// 		throwable: true,
// 		catchModifier: {
// 			isGuaranteed: false,
// 			calculateValue: function (livingEntityThrower, pokemon) {
// 				console.log(pokemon.entity.level.dimension === "society:skull_cavern")
// 				if (pokemon.entity.level.dimension === "society:skull_cavern") return 4.0
// 				else return 1.0
// 			},
// 			calculateBehavior: function (livingEntityThrower, pokemon, behavior) {
// 				return behavior.ADD
// 			},
// 			calculateIsValid: function (livingEntityThrower, pokemon) {
// 				return true
// 			},
// 			calculateModifyCatchRate: function (currentCatchRate, livingEntityThrower, pokemon) {
// 				if (pokemon.entity.level.dimension === "society:skull_cavern") return 4.0
// 				else return 1.0
// 			}
// 		}
// 	}
// }

// let sunlitBallMap = {}
// StartupEvents.registry('item', (e) => {
// 	// Based on a script by Chesoku
// const $CatchRateModifier = Java.loadClass('com.cobblemon.mod.common.api.pokeball.catching.CatchRateModifier')
// const $PokeBall = Java.loadClass('com.cobblemon.mod.common.pokeball.PokeBall');
// const $PokeBallItem = Java.loadClass('com.cobblemon.mod.common.item.PokeBallItem');
// const $Resourcelocation = Java.loadClass("net.minecraft.resources.ResourceLocation");
// const $Behavior = Java.loadClass("com.cobblemon.mod.common.api.pokeball.catching.CatchRateModifier$Behavior");
// const $PokeBalls = Java.loadClass("com.cobblemon.mod.common.api.pokeball.PokeBalls");

// let pokeballsDefaultsField = $PokeBalls.INSTANCE.getClass().getDeclaredField("defaults")
// pokeballsDefaultsField.setAccessible(true);
// let pokeballMap = pokeballsDefaultsField.get($PokeBalls.INSTANCE)
// const NAMESPACE = "sunlit_cobblemon"

// 	for (let ball in PokeballDB) {
// 		let customBallDB = PokeballDB[ball]
// 		let loc = new $Resourcelocation(NAMESPACE, ball)
// 		let customBall = new $PokeBall(
// 			loc,
// 			new JavaAdapter($CatchRateModifier, {
// 				isGuaranteed() {
// 					return customBallDB.catchModifier.isGuaranteed
// 				},
// 				value(thrower, pokemon) {
// 					return customBallDB.catchModifier.calculateValue(thrower, pokemon)
// 				},
// 				behavior(thrower, pokemon) {
// 					return customBallDB.catchModifier.calculateBehavior(thrower, pokemon, $Behavior)
// 				},
// 				isValid(thrower, pokemon) {
// 					return customBallDB.catchModifier.calculateIsValid(thrower, pokemon)
// 				},
// 				modifyCatchRate(currentCatchRate, thrower, pokemon) {
// 					return customBallDB.catchModifier.calculateModifyCatchRate(currentCatchRate, thrower, pokemon)
// 				}
// 			}),
// 			[],
// 			customBallDB.waterDrag,
// 			new $Resourcelocation(NAMESPACE, 'balls/' + (customBallDB.spriteModel || ball)),
// 			new $Resourcelocation(NAMESPACE, 'balls/' + (customBallDB.modelModel || ball + "_model")),
// 			customBallDB.throwPower,
// 			customBallDB.throwable
// 		)
// 		pokeballMap.put(loc, customBall)
// 		sunlitBallMap[NAMESPACE + ":" + ball] = customBall
// 		e.createCustom(NAMESPACE + ":" + ball, () => new $PokeBallItem(customBall));
// 	}
// })



// StartupEvents.postInit((e) => {
// 	for (let ballName in PokeballDB) {
// 		let newBallItem = Item.of(`sunlit_cobblemon:${ballName}`).getItem()
// 		sunlitBallMap[`sunlit_cobblemon:${ballName}`].item = newBallItem;
// 	}
// })