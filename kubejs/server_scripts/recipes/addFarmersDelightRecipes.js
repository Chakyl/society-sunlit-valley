// Server Scripts
// Adds recipes using Farmer's Delight recipe types based on the maps below

const cookingMap = [
    ["atmospheric:orange_pudding", ["#c:eggs", "atmospheric:orange", "society:large_milk"], 200, "minecraft:bowl"]
]

ServerEvents.recipes((event) => {
    for (const [output, inputArray, container, time] of cookingMap) {
        farmersdelightCookingHelper(event, output, inputArray, container, time)
    }
})