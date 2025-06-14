// If playing on a server, the server admin must change these values as well as clients

/**
 *  Controls how long it takes for animals to get hungry and produce items, in ticks.
 *  Defaults to 12000 which is 10 minutes (20 ticks * 60 seconds * 10)
 */
global.animalInteractionCooldown = 12000;

/**
 * Only server needs to change this
 * Replace true with false below if you want to remove the fishing minigame!
 * Fish will no longer have quality and you won't get the extra loot chests
 */
global.enableFishingMinigame = true;

/**
 * Only server needs to change this
 * Enables a fee when a player dies to discourage players from dying on purpose.
 * Setting this to false is not recommended.
 */
global.enableDeathDebt = true;

/**
 * Only server needs to change this
 * Enables more cottagecore mechanics for the Skull Cavern:
 * - No longer faint and get sent home at 6AM with a fee
 * - Ores/Bolders no longer regenerate
 */
global.relaxedSkullCavern = false;

/**
 * Only server needs to change this
 * Enables the clock icon from the HUD
 */
global.clockIcon = true;