console.info("[SOCIETY] skillBooks.js loaded");

[
  { id: "society:animal_fancy", skillId: "dk83vl5zi9fw3ovi" },
  { id: "society:banana_karenina", skillId: "76yv8nz8x47d80oe" },
  { id: "society:canadian_and_famous", skillId: "x52wa6t39ywp17zu" },
  { id: "society:first_aid_guide", skillId: "12wl5sjx8vy7q0xl" },
  { id: "society:intro_to_algorithms", skillId: "gv808dy0r2fo6ire" },
  { id: "society:slouching_towards_artistry", skillId: "pitrguemps2735n3" },
  { id: "society:debt_caverns", skillId: "bh5306iiysq2692k" },
  { id: "society:frogs_bounty_bazaar", skillId: "3fgcne477ni1rjxx" },
  { id: "society:phenomenology_of_treasure", skillId: "z68vn1cf2lucfbos" },
].forEach((book) => {
  ItemEvents.rightClicked(book.id, (e) => {
    const { player, item, server } = e;
    const stageName = item.id.split(":")[1];
    if (!player.stages.has(stageName)) {
      server.runCommandSilent(
        `puffish_skills skills unlock ${player.username} society:books ${book.skillId}`
      );
      player.tell(Text.green("You learned the skill!"));
      server.runCommandSilent(
        `playsound minecraft:block.enchantment_table.use block @a ${player.x} ${player.y} ${player.z}`
      );
      item.count--;
      player.addItemCooldown(item, 20);
    } else {
      player.tell(Text.red("You've already learned this skill!"));
      player.addItemCooldown(item, 20);
    }
  });
});
