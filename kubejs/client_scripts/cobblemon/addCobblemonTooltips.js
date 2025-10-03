// priority: -21
ItemEvents.tooltip((tooltip) => {
  global.cobbleGeology.forEach((item) => {
    global.addPriceTooltip(tooltip, item, "gem");
  });
  
  tooltip.add("sunlit_cobblemon:tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:tm_pack", Text.green("12% chance for a TM"));
  
  tooltip.add("sunlit_cobblemon:greater_tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:greater_tm_pack", Text.green("20% chance for a TM"));
  tooltip.add("sunlit_cobblemon:greater_tm_pack", Text.green("At least one TM guaranteed!"));

  
  tooltip.add("sunlit_cobblemon:prismatic_tm_pack", Text.gray("Right click to open"));
  tooltip.add("sunlit_cobblemon:prismatic_tm_pack", Text.green("Only contains TMs"));
});
