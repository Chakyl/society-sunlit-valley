// If playing on a server, the server admin must change these values
// Requires a full game restart to take affect

/**
 * Only server needs to change this
 * Replace true with false below if you want to remove the fishing minigame!
 * Fish will no longer have quality and you won't get the extra loot chests
 * 
 * This can now be done on a per-player basis using the /stardew_fishing command
 */
global.enableFishingMinigame = true;

/**
 * Only server needs to change this
 * Enables a fee when a player dies to discourage players from dying on purpose.
 * Also disables fee from fainting in Skull Caverns
 * Setting this to false is not recommended.
 */
global.enableDeathDebt = true;

/**
 * Only server needs to change this
 * Enables the clock icon from the HUD
 */
global.clockIcon = true;

/**
 * Only server needs to change this
 * Gives every new player a White Sharestone on spawn to make visiting bases easier
 * This won't do anything in Single Player as they aren't otherwise obtainable
 */
global.multiplayerSharestones = false;

/**
 * Only server needs to change this
 * Skull Cavern will decay blocks placed after 30 seconds and torches after 1 minute
 */
global.skullCavernHardmode = false;

/**
 * Only server needs to change this
 * Dev tool for large servers to diagnose crashes. May spam your console!
 */
global.susFunctionLogging = false;

/**
 * Client and server need to change this for accurate tooltips. 
 * Global modifiers for the different categories of products. 
 * Can be used to make the game easier or harder depending on your preferences.
 */

global.farmerProductMult = 1.0
global.artisanProductMult = 1.0
global.miningProductMult = 1.0
global.adventurerProductMult = 1.0