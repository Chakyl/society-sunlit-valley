// Priority: 1000
global.getDay = (level) =>  Number((Math.floor(Number(level.dayTime() / 24000)) + 1).toFixed());

global.compareDay = (day, checkedDay, amount) => day > Number(checkedDay) || Number(checkedDay) - day > amount