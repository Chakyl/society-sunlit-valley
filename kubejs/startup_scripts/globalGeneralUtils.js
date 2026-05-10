// Priority: 1000
global.getDay = (level) =>  Number((Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed());

/**
 * Expected:
 *  day: 10 | checkedDay: 11 | amount: 1 = true. Day in the past (time commands used)
 *  day: 11 | checkedDay: 10 | amount: 1 = true. 
 *  day: 12 | checkedDay: 10 | amount: 1 = false. 
 * 
 * @param {*} day Current world day, usually gotten from global.getDay()
 * @param {*} checkedDay day to compare to current day
 * @param {*} amount Amount of days to get the difference of
 * @returns If the amount is greater than or equal to the amount of days have passed
 */
global.compareDay = (day, checkedDay, amount) => Number(day) < Number(checkedDay) || Number(day) - Number(checkedDay) >= amount;

global.getFacingPlusOffset = (facing, pos, offset) => {
  switch (facing) {
    case "north":
      return pos.offset(0, 0, -offset);
    case "south":
      return pos.offset(0, 0, offset);
    case "west":
      return pos.offset(-offset, 0, 0);
    case "east":
      return pos.offset(offset, 0, 0);
  }
};

global.getHasCurio = (player, item) => {
  const curios = player.nbt.ForgeCaps["curios:inventory"]
  if (!curios) return false;
  return curios.toString().includes(item)
} 
