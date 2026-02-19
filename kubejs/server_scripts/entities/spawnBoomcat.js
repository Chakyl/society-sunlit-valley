console.info("[SOCIETY] spawnBoomcat.js loaded");

EntityEvents.death((e) => {
  const { level, server, entity } = e;
  if (Math.random() < 0.2 && entity.type === "minecraft:creeper") {
    let cat = level.createEntity("splendid_slimes:splendid_slime");
    cat.nbt.Breed = "splendid_slimes:boomcat";
    cat.mergeNbt({ Breed: "splendid_slimes:boomcat" });
    cat.setPosition(entity.x, entity.y + 2, entity.z);
    cat.spawn();
    server.runCommandSilent(
      `playsound supplementaries:block.present.open block @a ${entity.x} ${entity.y} ${entity.z}`
    );
  }
});
