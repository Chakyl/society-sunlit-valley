let $BlockEntity = Java.loadClass(
  "net.minecraft.world.level.block.entity.BlockEntity"
);

const registerKey = (blockEntity, tag, key, compoundValues) => {
  if (blockEntity.data != null) {
    if (blockEntity.data[key] != null && !Number.isNaN(blockEntity.data[key])) {
      if (typeof blockEntity.data[key] == Number) {
        tag.putInt(key, blockEntity.data[key]);
      } else if (typeof blockEntity.data[key] == Object) {
        compoundValues.forEach((compoundKey) => {
          tag.putString(key, blockEntity.data[key].compoundKey);
        });
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

  const plushieNbtKeys = ["type", "quality", "affection", "animal"];
  const plushieAnimalKeys = ["type", "name"];
  e.blockDataProvider("society:plushie_jade", $BlockEntity).setCallback(
    (tag, accessor) => {
      const { blockEntity } = accessor;

      ["type", "quality", "affection", "animal"].forEach((key) => {
        registerKey(blockEntity, tag, key, plushieAnimalKeys);
      });
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
