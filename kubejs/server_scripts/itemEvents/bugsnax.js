ItemEvents.entityInteracted('longwings:catching_net', event => {
    const { player, target, item, level } = event;
    if (level.isClientSide()) return;
    if (target.type !== 'minecraft:bee') return;

    let entityNbt = {};
    target.save(entityNbt);

    let variantValue = entityNbt.Variant || 0;
    target.discard();
    let filledBug = Item.of('society:bug', {
        "society:bug_type": "society:bee",
    });

    player.give(filledBug);
});