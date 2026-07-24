// const formatName = (id) => Text.translatable(`item.longwings.${id}`).getString().replace('[', '').replace(']', '');

// const getAverageSize = (size) => {
//     if (size === "small") return 0.75;
//     if (size === "normal") return 0.95;
//     if (size === "larger") return 1;
//     return 0.75;
// };

// const tableRows = [];

// global.longwings.forEach(wing => {
//     tableRows.push({
//         name: formatName(wing.variant),
//         type: wing.type.charAt(0).toUpperCase() + wing.type.slice(1),
//         rarity: wing.rarity,
//         size: wing.size.charAt(0).toUpperCase() + wing.size.slice(1),
//         price: ((16 - wing.rarity) * 78) + Number(Math.round((getAverageSize(wing.size) / 0.01) * 4)),
//         bookPrice: ((16 - wing.rarity) * 78) + Number(Math.round((getAverageSize(wing.size) / 0.01) * 4) * 3)
//     });
// });

// tableRows.sort((a, b) => {
//     if (a.price !== b.price) return a.price - b.price;
//     return a.name.localeCompare(b.name);
// });

// let wikiTable = '{| class="wikitable sortable" style="width: 100%; text-align: center;"\n';
// wikiTable += '! Variant Name !! Type !! Rarity !! Size Tier !! Average Price !! w/ The Metamorphosize \n';

// tableRows.forEach(row => {
//     wikiTable += '|-\n';
//     wikiTable += `| style="text-align: left;" | ${row.name}\n`;
//     wikiTable += `| ${row.type}\n`;
//     wikiTable += `| ${row.rarity}\n`;
//     wikiTable += `| ${row.size}\n`;
//     wikiTable += `| ${global.formatPrice(row.price)}\n`;
//     wikiTable += `| ${global.formatPrice(row.bookPrice)}\n`;
// });

// wikiTable += '|}';

// console.log(wikiTable);