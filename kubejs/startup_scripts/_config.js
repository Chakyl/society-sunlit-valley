// If playing on a server, the server admin must change these values
// Requires a full game restart to take affect

/**
 * Only server needs to change this
 * Enables a fee when a player dies to discourage players from dying on purpose.
 * Also disables fee from fainting in Skull Caverns
 * Setting this to false is not recommended.
 */
global.enableDeathDebt = true;

/**
 * Only server needs to change this
 * Used for seeds unlocked in year 2. It should match what's in your seasons.toml
 */
global.subSeasonDuration = 10;

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
 * Prevents blocks that break multiple blocks from being used in the Skull Cavern.
 * This is due to performance to prevent crashes from overloading the caverns.
 */
global.disableHammersSkullCavern = true;

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
 * Only server needs to change this
 * Enables chat color functionality with dyes in curio slots.
 * Disable if you are using other chat mods that do this
 */
global.enableChatColors = true;