// Priority: 1000
const $CuriosApi = Java.loadClass("top.theillusivec4.curios.api.CuriosApi")

global.getDay = (level) => Number((Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed());

/**
 * I hate this function.
 * 
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

global.formatPriceTruncated = (number) => {
  let stringNumber = number.toString();
  if (stringNumber.length < 4) return number;
  if (stringNumber.length > 9) {
    let output = stringNumber.slice(0, stringNumber.length - 9);
    if (stringNumber.length === 10 && stringNumber.charAt(1) != "0") {
      output += '.' + stringNumber.charAt(1);
    }
    return output + "B";
  }
  if (stringNumber.length > 6) {
    let output = stringNumber.slice(0, stringNumber.length - 6);
    if (stringNumber.length === 7 && stringNumber.charAt(1) != "0") {
      output += '.' + stringNumber.charAt(1);
    }
    return output + "M";
  }

  return global.formatPrice(number);
};