let $BlockEntity = Java.loadClass(
  "net.minecraft.world.level.block.entity.BlockEntity"
);

const registerKey = (blockEntity, tag, key) => {
  if (blockEntity.data != null) {
    if (blockEntity.data[key] != null && !Number.isNaN(blockEntity.data[key])) {
      if (typeof blockEntity.data[key] == Number) {
        tag.putInt(key, blockEntity.data[key]);
      } else {
        tag.putString(key, blockEntity.data[key]);
      }
    }
  }
};
JadeEvents.onCommonRegistration((e) => {
  const artisanMachineNbtKeys = ["stage", "recipe"];
  e.blockDataProvider("society:artisan_machine_jade", $BlockEntity).setCallback(
    (tag, accessor) => {
      const { blockEntity } = accessor;
      artisanMachineNbtKeys.forEach((key) => {
        registerKey(blockEntity, tag, key);
      });
    }
  );

  const plushieNbtKeys = ["type", "quality", "affection"];
  e.blockDataProvider("society:plushie_jade", $BlockEntity).setCallback(
    (tag, accessor) => {
      const { blockEntity } = accessor;

      plushieNbtKeys.forEach((key) => {
        registerKey(blockEntity, tag, key);
      });
      if (blockEntity.data != null && blockEntity.data.animal != null) {
        tag.putString("animal", blockEntity.data.animal.type);
      }
    }
  );

  const fishPondNbtKeys = ["type", "population", "max_population"];
  e.blockDataProvider("society:fish_pond_jade", $BlockEntity).setCallback(
    (tag, accessor) => {
      const { blockEntity } = accessor;

      fishPondNbtKeys.forEach((key) => {
        registerKey(blockEntity, tag, key);
      });
    }
  );
});
