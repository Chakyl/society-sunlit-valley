let $BlockEntity = Java.loadClass("net.minecraft.world.level.block.entity.BlockEntity");

JadeEvents.onCommonRegistration((event) => {
  const artisanMachineNbtKeys = ["stage", "type"];

  event
    .blockDataProvider("society:artisan_machine_jade", $BlockEntity)
    .setCallback((tag, accessor) => {
      const { blockEntity } = accessor;

      artisanMachineNbtKeys.forEach((key) => {
        if (blockEntity.data != null) {
          if (blockEntity.data[key] != null && !Number.isNaN(blockEntity.data[key])) {
            tag.putInt(key, blockEntity.data[key]);
          }
        }
      });
    });
});
