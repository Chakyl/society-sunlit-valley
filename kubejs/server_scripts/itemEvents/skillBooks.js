console.info("[SOCIETY] skillBooks.js loaded");

[
  { id: "society:alias_moss", skillId: "b2zbjhxyrcwlwb9e" },
  { id: "society:animal_fancy", skillId: "dk83vl5zi9fw3ovi" },
  { id: "society:banana_karenina", skillId: "76yv8nz8x47d80oe" },
  { id: "society:brine_and_punishment", skillId: "p5dklukq9ggwgfa4" },
  { id: "society:bluegill_meridian", skillId: "9ax835fydbyuvjkx" },
  { id: "society:bullfish_jobs", skillId: "pirgo25ykt4bsbdo" },
  { id: "society:canadian_and_famous", skillId: "x52wa6t39ywp17zu" },
  { id: "society:first_aid_guide", skillId: "12wl5sjx8vy7q0xl" },
  { id: "society:hitting_hard_and_soft", skillId: "t07mtr3euiz40jb0" },
  { id: "society:no_name_for_the_sheep", skillId: "uzxujhppzlyg5d03" },
  { id: "society:intro_to_algorithms", skillId: "gv808dy0r2fo6ire" },
  { id: "society:paradise_crop", skillId: "3grtavzaxp3xbp67" },
  { id: "society:slouching_towards_artistry", skillId: "pitrguemps2735n3" },
  { id: "society:debt_caverns", skillId: "bh5306iiysq2692k" },
  { id: "society:frogs_bounty_bazaar", skillId: "3fgcne477ni1rjxx" },
  { id: "society:phenomenology_of_treasure", skillId: "z68vn1cf2lucfbos" },
  { id: "society:slime_contain_protect", skillId: "uj8tnf4jgm0xyp13" },
  { id: "society:the_spark_also_rises", skillId: "n3wgu1edjjl2t511" },
  { id: "society:universal_methods_of_farming", skillId: "dm3efjm3y57v34ir" },
  { id: "society:wuthering_logs", skillId: "y1xltbgkupmcoe0i" },
  { id: "society:pond_house_five", skillId: "ajxn495vvckv1pow" },
  { id: "society:the_quality_of_the_earth", skillId: "y99a5jkv7tmu7vmc" },
  { id: "society:the_red_and_the_black", skillId: "ysthrzir822oedus" },
  { id: "society:women_who_run_with_the_plushies", skillId: "2vo8noqvq4aj1egy" },
].forEach((book) => {
  ItemEvents.rightClicked(book.id, (e) => {
    const { player, item, server } = e;
    const stageName = String(item.id).path;
    if (!player.stages.has(stageName)) {
      server.runCommandSilent(
        `puffish_skills skills unlock ${player.username} society:books ${book.skillId}`
      );
      player.tell(Text.translatable("society.skill_book.learn").green());
      server.runCommandSilent(
        `playsound minecraft:block.enchantment_table.use block @a ${player.x} ${player.y} ${player.z}`
      );
      item.count--;
      global.addItemCooldown(player, item, 20);
    } else {
      player.tell(Text.translatable("society.skill_book.already_learn").red());
      global.addItemCooldown(player, item, 20);
    }
  });
});
