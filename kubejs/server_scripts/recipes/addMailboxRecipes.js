console.info("[SOCIETY] addMailboxRecipes.js loaded");

ServerEvents.recipes((e) => {
  const recipes = [
    { type: "autumnity:maple", mailbox: "everycomp:rfm/autumnity/maple_mail_box" },
    { type: "atmospheric:kousa", mailbox: "everycomp:rfm/atmospheric/kousa_mail_box" },
    { type: "meadow:pine", mailbox: "everycomp:rfm/meadow/pine_mail_box" },
    { type: "atmospheric:aspen", mailbox: "everycomp:rfm/atmospheric/aspen_mail_box" },
    { type: "atmospheric:yucca", mailbox: "everycomp:rfm/atmospheric/yucca_mail_box" },
    { type: "atmospheric:rosewood", mailbox: "everycomp:rfm/atmospheric/rosewood_mail_box" },
    { type: "atmospheric:morado", mailbox: "everycomp:rfm/atmospheric/morado_mail_box" },
    { type: "beachparty:palm", mailbox: "everycomp:rfm/beachparty/palm_mail_box" },
    { type: "atmospheric:grimwood", mailbox: "everycomp:rfm/atmospheric/grimwood_mail_box" },
    { type: "atmospheric:laurel", mailbox: "everycomp:rfm/atmospheric/laurel_mail_box" },
    { type: "vinery:dark_cherry", mailbox: "everycomp:rfm/vinery/dark_cherry_mail_box" },
    { type: "betterarcheology:rotten", mailbox: "everycomp:rfm/betterarcheology/rotten_mail_box" },
    { type: "quark:ancient", mailbox: "everycomp:rfm/quark/ancient_mail_box" },
    { type: "quark:azalea", mailbox: "everycomp:rfm/quark/azalea_mail_box" },
    { type: "quark:blossom", mailbox: "everycomp:rfm/quark/blossom_mail_box" },
    { type: "botania:dreamwood", mailbox: "everycomp:rfm/botania/dreamwood_mail_box" },
    { type: "botania:livingwood", mailbox: "everycomp:rfm/botania/livingwood_mail_box" },
  ];
  [];
  recipes.forEach((recipe) => {
    const { type, mailbox } = recipe;
    // Thanks Vaskii for having slabs be x_planks_slab
    e.shaped(mailbox, ["sss", "pbp", " f "], {
      s:
        type.includes("botania") || type.includes("quark") ? `${type}_planks_slab` : `${type}_slab`,
      p: `${type}_planks`,
      b: "minecraft:barrel",
      f: `${type}_fence`,
    });
  });
});
