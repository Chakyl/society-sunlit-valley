// const $CafeOpenedEvent = Java.loadClass('io.github.chakyl.cozycafe.modevents.CafeOpenedEvent')
// const $DishServedEvent = Java.loadClass('io.github.chakyl.cozycafe.modevents.DishServedEvent')

// NativeEvents.onEvent($CafeOpenedEvent, (event) => {
//     let player = event.player
//     let cafeManagerBlockEntity = event.cafeManagerBlockEntity

//     if (player) {
//         player.tell(`Opened Cafe: ${cafeManagerBlockEntity.getCafeName()}. Reputation: ${cafeManagerBlockEntity.getReputation()}`)
//     }
// })


// NativeEvents.onEvent($DishServedEvent, (event) => {
//     let player = event.player
//     let cafeManagerBlockEntity = event.cafeManagerBlockEntity
//     let dish = event.dish
//     let moneyEarned = event.moneyEarned

//     if (player) {
//         player.tell(`Served dish: ${dish} at ${cafeManagerBlockEntity.getCafeName()} for ${moneyEarned}. Reputation: ${cafeManagerBlockEntity.getReputation()}`)
//     }
// })