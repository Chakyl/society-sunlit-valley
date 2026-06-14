// const formatItemName = (id) => Item.of(id).displayName.getString().replace('[', '').replace(']', '')

// const pages = ['Mastery']

// const formatWikiLinksMaybe = (string) => {
//     let resolvedString = string
//     pages.forEach(word => {
//         resolvedString = string.replace(word, `[[${word}]]`);
//     });
//     return resolvedString;
// };

// const generateWikiTable = (inputData) => {
//     let trades = inputData.trades;
//     let table = '{| class="wikitable sortable"\n! Offer !! Cost !! Secondary Cost !! Restriction\n';

//     for (let i = 0; i < trades.length; i++) {
//         let trade = trades[i];

//         let offer = (trade.offer.count > 1 ? trade.offer.count + 'x ' : '') + formatItemName(trade.offer.item)

//         let request = trade.request;
//         let secondRequest = trade.second_request;
//         let accountCost = trade.numismatics_cost ? global.formatPrice(Number(trade.numismatics_cost)) : undefined;

//         let requestText = request ? ((request.count > 1 ? request.count + 'x ' : '') + formatItemName(request.item)) : '';
//         let secondRequestText = secondRequest ? ((secondRequest.count > 1 ? secondRequest.count + 'x ' : '') + formatItemName(secondRequest.item)) : '';

//         let requestIsNumi = request && request.item.indexOf('numismatics') !== -1;
//         let secondRequestIsNumi = secondRequest && secondRequest.item.indexOf('numismatics') !== -1;

//         let rowContent = '| ' + offer + ' \n';

//         if (accountCost !== undefined) {
//             if (requestIsNumi && secondRequestIsNumi) {
//                 rowContent += '| ' + accountCost + '\n|\n';
//             } else if (requestIsNumi) {
//                 rowContent += '| ' + accountCost + '\n| ' + secondRequestText + ' \n';
//             } else if (secondRequestIsNumi) {
//                 rowContent += '| ' + requestText + ' \n| ' + accountCost + '\n';
//             } else {
//                 rowContent += '| ' + requestText + ' \n| ' + secondRequestText + ' \n';
//             }
//         } else {
//             rowContent += '| ' + requestText + ' \n| ' + secondRequestText + ' \n';
//         }

//         let restrictions = [];
//         if (trade.stage_required) {
//             restrictions.push(formatWikiLinksMaybe(Text.translatable(trade.unlock_description).getString()));
//         }
//         if (trade.seasons_required && trade.seasons_required.length > 0) {
//             restrictions.push('Seasons: ' + trade.seasons_required.join(', '));
//         }

//         rowContent += '| ' + restrictions.join('<br />') + ' \n';

//         table += '|-\n' + rowContent;
//     }

//     table += '|}';
//     return table;
// }
// let shops = ["ball_boutique",
//     "banker",
//     "barkeeper",
//     "blacksmith",
//     "book_fair",
//     "carpenter",
//     "fisher",
//     "guild",
//     "invitations",
//     "market",
//     "poke_mart",
//     "ribbit_fisher",
//     "ribbit_merchant",
//     "shepherd",
//     "librarian",
//     "sun_offering",
//     "trader",
//     "wanderer",
//     "wandering_baker",
//     "wandering_winemaker",
//     "witch"
// ]
// ItemEvents.rightClicked('rehooked:wood_chain', (e) => {
//     shops.forEach((shop) => {
//         let data = JsonIO.read(`kubejs/data/society_trading/shops/${shop}.json`);
//         e.player.tell(generateWikiTable(data));
//     })
// });