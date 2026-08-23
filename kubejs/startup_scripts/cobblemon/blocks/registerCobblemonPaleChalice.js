
console.info("[SOCIETY-S-COBBLEMON] registerCobblemonPaleChalice.js loaded");

global.runPaleChalice = (entity) => {
    const { level, block } = entity;
    if (Math.random() <= 0.25 && level.dimension === "sunlit_cobblemon:moontear" && level.getBlock(block.getPos()).properties.get("full") == "true") {
        let server = level.getServer();
        let { x, y, z } = block;
        let pokemonToSpawn = Math.random() <= 0.5 ? "dialga" : "palkia";
        if (level.getBlock(block.pos.below()).id === "botania:chiseled_metamorphic_mesa_bricks") pokemonToSpawn = "palkia";
        else if (level.getBlock(block.pos.below()).id === "cluttered:chalcedony_chiseled_block") pokemonToSpawn = "dialga";
        let spawnedAny = global.summonRaidPokemon(server, level, level.getBlock(block.getPos().above()), pokemonToSpawn, "", 100, 45, false, false, 0);
        if (spawnedAny) {
            server.runCommandSilent(`playsound cobblemon:poke_ball.send_out block @a ${x} ${y} ${z} 2`);
            server.runCommandSilent(`playsound species:effect.gut_feeling.applied block @a ${x} ${y} ${z} 2`);
            server.runCommandSilent(`playsound botania:babylon_spawn block @a ${x} ${y} ${z} 2`);
            level.spawnParticles("species:ghoul_searching2", true, x + 0.5, y + 2, z + 0.5, 0, 0, 0, 1, 2);
            level.spawnParticles(
                "windswept:will_o_the_wisp",
                true,
                x,
                y + 1.5,
                z,
                0.1 * rnd(4, 14),
                0.1 * rnd(4, 14),
                0.1 * rnd(4, 14),
                20,
                0.01
            );
            block.set(block.id, {
                full: "false",
            });
        }
    }
};

StartupEvents.registry("block", (event) => {
    event
        .create("sunlit_cobblemon:pale_chalice", "cardinal")
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("copper")
        .box(5, 0, 5, 11, 10, 11)
        .defaultCutout()
        .property(booleanProperty.create("full"))
        .defaultState((state) => {
            state
                .set(booleanProperty.create("full"), false)
        })
        .placementState((state) => {
            state
                .set(booleanProperty.create("full"), false)
        })
        .item((item) => {
            item.tooltip(Text.translatable("block.sunlit_cobblemon.pale_chalice.description").gray());
            item.modelJson({
                parent: "sunlit_cobblemon:block/kubejs/pale_chalice_empty",
            });
        })
        .model("sunlit_cobblemon:block/kubejs/pale_chalice_empty")
        .blockEntity((blockInfo) => {
            blockInfo.enableSync();
            blockInfo.serverTick(200, 0, (entity) => {
                global.runPaleChalice(entity);
            });
        }).blockstateJson = {
        multipart: [
            {
                when: { full: "false" },
                apply: { model: "sunlit_cobblemon:block/kubejs/pale_chalice_empty" },
            },
            {
                when: { full: "true" },
                apply: { model: "sunlit_cobblemon:block/kubejs/pale_chalice" },
            },
        ],
    };

});
