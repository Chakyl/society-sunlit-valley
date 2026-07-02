ServerEvents.recipes((event) => {

  const removedTypes = [
    'autowork:enriching'
  ];

  const removedIDs = [
    'passablefoliage:enchanted_book',
    'autowork:crushing/migrated/recipe_7',
    'autowork:crushing/migrated/recipe_8',
    'autowork:bulk_smelting/log_to_coal'
  ];

  const removedInputs = [];
  
  const removedOutputs = [
    '@sophisticatedbackpacks',
    '/^sophisticatedstorage:.*upgrade.*/',
    '/^sophisticatedstorage:.*downgrade.*/'
];

  const removedMods = []

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
  removedMods.forEach((mod) => event.remove({ mod: mod }));
});
