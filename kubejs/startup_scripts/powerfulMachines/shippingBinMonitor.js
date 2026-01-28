console.info("[SOCIETY] shippingBinMonitor.js loaded");

global.runShippingBinMonitor = (entity) => {
  const { level, block } = entity;
  const belowPos = block.getPos().below();
  const belowBlock = level.getBlock(belowPos.x, belowPos.y, belowPos.z);
  if (belowBlock.hasTag("society:shipping_bin")) {
    let slots = belowBlock.inventory.getSlots();
    global.cacheShippingBin(entity);
    let blockData = belowBlock.getEntityData().data;
    let playerAttributes = blockData.attributes;
    let playerStages = blockData.stages;
    let calculationResults = -1;
    if (!playerStages || !playerAttributes) return;

    calculationResults = Math.round(
      global.processShippingBinInventory(
        belowBlock.inventory,
        slots,
        playerAttributes,
        playerStages,
        false,
        true
      ).calculatedValue
    );
    let nbt = block.getEntityData();
    if (nbt.data.value !== calculationResults) {
      nbt.merge({ data: { value: calculationResults } });
      block.setEntityData(nbt);
      global.clearOldTextDisplay(block, "shipping_bin_monitor");
      global.spawnTextDisplay(
        block,
        block.y + 0.25,
        "shipping_bin_monitor",
        calculationResults === -1
          ? Text.translatable("block.society.shipping_bin_monitor.offline")
          : Text.of(`●${calculationResults < 100000000 ? " " : ""}${global.formatPrice(calculationResults)}`)
      );
    }
  }
};

StartupEvents.registry("block", (event) => {
  event
    .create("society:shipping_bin_monitor", "cardinal")
    .tagBlock("minecraft:mineable/pickaxe")
    .defaultCutout()
    .box(0, 0, 0, 16, 3, 16)
    .item((item) => {
      item.tooltip(Text.translatable("block.society.shipping_bin_monitor.description").gray());
      item.modelJson({
        parent: "society:block/kubejs/shipping_bin_monitor",
      });
    })
    .model("society:block/kubejs/shipping_bin_monitor")
    .blockEntity((blockInfo) => {
      blockInfo.initialData({ value: 0 });
      blockInfo.serverTick(200, 0, (entity) => global.runShippingBinMonitor(entity));
    })
    .rightClick((click) => {
      global.runShippingBinMonitor({ block: click.block, level: click.level });
    });
});
