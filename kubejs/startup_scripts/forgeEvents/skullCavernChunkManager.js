console.info("[SOCIETY] skullCavernChunkManager.js loaded");
const ChunkSerializer = Java.loadClass(
  "net.minecraft.world.level.chunk.storage.ChunkSerializer"
);
// function getLoadedChunks(level) {
//   let loadedChunks = level.getChunkSource().chunkMap
//   try {
//       let getChunks = loadedChunks.class.getDeclaredMethod("m_140416_")
//       getChunks.setAccessible(true)
//       return getChunks.invoke(loadedChunks)
//   } catch (e) {
//       console.error(e)
//   }
// }
global.chunkLoadManager = (e) => {
  const { chunk, level } = e;
  if (level.dimension === "society:skull_cavern" && !level.isClientSide()) {
    const day = (level.time / 24000).toFixed(0);
    // const chunkToRead = ChunkSerializer.read(level, chunk)
    // const chunkDay = ChunkSerializer.read(level, null, chunk.pos, "day");
    // console.log(chunkDay)
    // const chunkTag = ChunkSerializer.write(level, chunk);
    // console.log(chunkTag)
    // if (!chunkTag.day) {
    //   console.log("day not found...")
    //   chunkTag.day = day
    // }
    // chunkTag.getOrCreateTag("day", day)
    //  if (*)
    // if (level.persistentData) {
    //   let chunkMap = level.getServer().persistentData.chunkMap;
    //   if (!chunkMap) {
    //     console.log("creating new chunkmap...")
    //     level.getServer().persistentData.chunkMap = {}
    //     chunkMap = level.getServer().persistentData.chunkMap;
    //   }
    //   let pos = chunk.pos.toString();
    //   if (chunkMap && !chunkMap[pos]) {
    //     console.log(`Saving ${pos}...`);
    //     chunkMap[pos] = { day: day, toggle: false };
    //   } else {

    //     console.log("Pos found!");
    //     console.log(`${pos}: ${chunkMap[pos]}`);
    //   }
    //   level.getServer().persistentData.chunkMap = chunkMap;
    // }
  }
};
ForgeEvents.onEvent("net.minecraftforge.event.level.ChunkEvent$Load", (e) => {
  global.chunkLoadManager(e);
});
