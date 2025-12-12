ItemEvents.tooltip((tooltip) => {
  const yearRound = ['aquaculture:minnow', 'aquaculture:carp', 'aquaculture:bluegill', 'society:neptuna']
  let springFish = [];
  let summerFish = [];
  let autumnFish = [];
  let winterFish = [];

  tooltip.add(yearRound, [Text.of(" ").append(Text.translatable("desc.sereneseasons.year_round").lightPurple())]);
  const addSeasonTooltip = (item, seasonText, seasonArray) => {
    if (!yearRound.includes(item) && !seasonArray.includes(item)) {
      seasonArray.push(item);
      tooltip.add(item, [Text.of(" ").append(seasonText)]);
    }
  };
  global.springOcean.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.spring").green(), springFish)
  );
  global.springRiver.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.spring").green(), springFish)
  );
  global.springFresh.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.spring").green(), springFish)
  );

  global.summerOcean.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.summer").yellow(), summerFish)
  );
  global.summerRiver.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.summer").yellow(), summerFish)
  );
  global.summerFresh.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.summer").yellow(), summerFish)
  );

  global.autumnOcean.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.autumn").gold(), autumnFish)
  );
  global.autumnRiver.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.autumn").gold(), autumnFish)
  );
  global.autumnFresh.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.autumn").gold(), autumnFish)
  );

  global.winterOcean.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.winter").aqua(), winterFish)
  );
  global.winterRiver.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.winter").aqua(), winterFish)
  );
  global.winterFresh.forEach((entry) =>
    addSeasonTooltip(entry.fish, Text.translatable("desc.sereneseasons.winter").aqua(), winterFish)
  );
});
