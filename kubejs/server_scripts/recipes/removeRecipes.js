ServerEvents.recipes((event) => {

  const removedTypes = [];

  const removedIDs = [];

  const removedInputs = [];
  
  const removedOutputs = ['@sophisticatedbackpacks'];

  const removedMods = []

  removedTypes.forEach((type) => event.remove({ type: type }));
  removedIDs.forEach((id) => event.remove({ id: id }));
  removedInputs.forEach((input) => event.remove({ input: input }));
  removedOutputs.forEach((output) => event.remove({ output: output }));
  removedMods.forEach((mod) => event.remove({ mod: mod }));
});
