// if (true) {
//     let fans = []
//     let toilets = []
//     let basins = []
//     let grills = []
//     let kitchen = []
//     let trampoline = []
//     let bath = []
//     let jars = []
//     let cutting = []
//     let crates = []
//     let chairs = []
//     let table = []
//     let desk = []
//     let drawers = []
//     let cabinets = []
//     let latticeGate = []
//     let latticeFence = []
//     let mailbox = []
//     let hedge = []
//     let addToTags = (itemId, everyComp) => {
//         if (itemId.includes("toilet")) toilets.push(itemId)
//         if (itemId.includes("basin")) basins.push(itemId)
//         if (itemId.includes("bath")) bath.push(itemId)
//         if (itemId.includes("fan")) fans.push(itemId)
//         if (itemId.includes("grill")) grills.push(itemId)
//         if (itemId.includes("kitchen")) kitchen.push(itemId)
//         else if (itemId.includes("drawer")) drawers.push(itemId)
//         else if (itemId.includes("cabinet") && (!everyComp || everyComp && itemId.includes("rfm"))) cabinets.push(itemId)
//         if (itemId.includes("trampoline")) trampoline.push(itemId)
//         if (itemId.includes("jar")) jars.push(itemId)
//         if (itemId.includes("cutting")) cutting.push(itemId)
//         if (itemId.includes("crate")) crates.push(itemId)
//         if (itemId.includes("chair")) chairs.push(itemId)
//         if (itemId.includes("_table") && (!everyComp || everyComp && itemId.includes("rfm"))) table.push(itemId)
//         if (itemId.includes("desk")) desk.push(itemId)
//         if (itemId.includes("gate")) latticeGate.push(itemId)
//         else if (itemId.includes("lattice")) latticeFence.push(itemId)
//         if (itemId.includes("hedge")) hedge.push(itemId)
//         if (itemId.includes("mail_box")) mailbox.push(itemId)
//     }
//     Ingredient.of("@refurbished_furniture").getStacks().forEach((item) => addToTags(item.id));
//     Ingredient.of("@everycomp").getStacks().forEach((item) => addToTags(item.id, true));

//     let root = "kubejs/data/refurbished_furniture/tags/items/"
//     JsonIO.write(root + `ceiling_fans.json`, { values: fans });
//     JsonIO.write(root + `toilets.json`, { values: toilets });
//     JsonIO.write(root + `basins.json`, { values: basins });
//     JsonIO.write(root + `grills.json`, { values: grills });
//     JsonIO.write(root + `kitchen_furniture.json`, { values: kitchen });
//     JsonIO.write(root + `trampolines.json`, { values: trampoline });
//     JsonIO.write(root + `baths.json`, { values: bath });
//     JsonIO.write(root + `storage_jars.json`, { values: jars });
//     JsonIO.write(root + `cutting_boards.json`, { values: cutting });
//     JsonIO.write(root + `crates.json`, { values: crates });

//     JsonIO.write(root + `drawers.json`, { values: drawers });
//     JsonIO.write(root + `cabinets.json`, { values: cabinets });
//     JsonIO.write(root + `chairs.json`, { values: chairs });
//     JsonIO.write(root + `tables.json`, { values: table });
//     JsonIO.write(root + `desks.json`, { values: desk });
//     JsonIO.write(root + `lattice_fence_gates.json`, { values: latticeGate });
//     JsonIO.write(root + `lattice_fence.json`, { values: latticeFence });
//     JsonIO.write(root + `multiplayer_mailboxes.json`, { values: mailbox });
//     JsonIO.write(root + `hedges.json`, { values: hedge });


//     // Beautify
//     let blinds = []
//     let lattice = []
//     let addToBeautTags = (itemId) => {
//         if (itemId.includes("blind")) blinds.push(itemId)
//         if (itemId.includes("trellis")) lattice.push(itemId)
//     }
//     Ingredient.of("@beautify").getStacks().forEach((item) => addToBeautTags(item.id));
//     Ingredient.of("@everycomp").getStacks().forEach((item) => addToBeautTags(item.id));

//     root = "kubejs/data/beautify/tags/items/"
//     JsonIO.write(root + `blinds.json`, { values: blinds });
//     JsonIO.write(root + `flower_lattice.json`, { values: lattice });

//     // Quark
//     let leafCarp = [];
//     Ingredient.of("@quark").getStacks().forEach((item) => { if (item.id.includes("leaf_carpet")) leafCarp.push(item.id) });
//     Ingredient.of("@everycomp").getStacks().forEach((item) => { if (item.id.includes("leaf_carpet")) leafCarp.push(item.id) });

//     root = "kubejs/data/quark/tags/items/"
//     JsonIO.write(root + `leaf_carpets.json`, { values: leafCarp });
// }
