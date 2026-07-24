// const formatName = (id) => Text.translatable(`item.longwings.${id}`).getString().replace('[', '').replace(']', '')

// const offspringMap = {};
// for (let i = 0; i < global.longwings.length; i++) {
//     offspringMap[i] = [];
// }

// const variantToIndex = {};
// global.longwings.forEach((wing, index) => {
//     variantToIndex[wing.variant] = index;
// });

// for (let p1 = 0; p1 < global.longwings.length; p1++) {
//     for (let p2 = p1 + 1; p2 < global.longwings.length; p2++) {
//         let parent1 = global.longwings[p1];
//         let parent2 = global.longwings[p2];
//         offspringMap[variantToIndex[global.getLongwingFromEgg(parent1.variant, parent2.variant)]].push(`${formatName(parent1.variant)} + ${formatName(parent2.variant)}`);
//     }
// }

// const tableRows = [];
// for (let i = 0; i < global.longwings.length; i++) {
//     tableRows.push({
//         name: formatName(global.longwings[i].variant),
//         rarity: global.longwings[i].rarity,
//         combos: offspringMap[i]
//     });
// }

// tableRows.sort((a, b) => b.rarity - a.rarity);

// let wikiTable = '{| class="wikitable sortable" style="width: 100%;"\n';
// wikiTable += '! Child !! Rarity Tier !! Parents\n';

// tableRows.forEach(row => {
//     wikiTable += '|-\n';
//     wikiTable += `| ${row.name}\n`;
//     wikiTable += `| ${row.rarity}\n`;

//     if (row.combos.length > 0) {
//         wikiTable += `| class="mw-collapsible mw-collapsed" data-expandtext="Show Breeding Pairs" data-collapsetext="Hide" | ${row.combos.join('<br /> ')}\n`;
//     }
// });

// wikiTable += '|}';

// console.log(wikiTable);