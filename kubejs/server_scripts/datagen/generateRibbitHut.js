const runRibbitHutDatagen = false;

const facing = ["north", "east", "south", "west"];
const layers = ["bottom", "middle", "top"];
const depths = ["front", "center", "back"];
const sides = ["left", "center", "right"];

const getFacingY = (face) => {
  switch (face) {
    case "north":
      return 0;
    case "south":
      return 180;
    case "east":
      return 90;
    case "west":
      return 270;
  }
};

if (runRibbitHutDatagen) {
  let blockstateJson = {
    variants: {},
  };
  facing.forEach((face) => {
    layers.forEach((layer, layerIndex) => {
      sides.forEach((side, sideIndex) => {
        depths.forEach((depth, depthIndex) => {
          blockstateJson.variants[
            `facing=${face},layer=${layerIndex},depth=${depthIndex},side=${sideIndex}`
          ] = {
            model: `society:block/ribbit_hut/${layer}_${depth}_${side}`,
            y: getFacingY(face)
          };
        });
      });
    });
  });
  JsonIO.write(`kubejs/assets/society/blockstates/ribbit_hut_block.json`, blockstateJson);
}
