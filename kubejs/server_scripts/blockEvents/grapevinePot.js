console.info("[SOCIETY] grapevinePot.js loaded");

BlockEvents.rightClicked("vinery:grapevine_pot", (e) => {
  const { block } = e;
  const properties = block.getProperties();
  if (properties.get("storage") == "5") {
    if (properties.get("type").toString().includes("red")) {
      block.set(block.id, {
        stage: "3",
        storage: "6",
        type: "red",
      });
    } else if (properties.get("type").toString().includes("white")) {
      block.set(block.id, {
        stage: "3",
        storage: "6",
        type: "white",
      });
    }
  }
});
