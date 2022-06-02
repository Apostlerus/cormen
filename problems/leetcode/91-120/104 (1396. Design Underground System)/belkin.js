/**
 * 381 ms, faster than 21.08%
 */

var UndergroundSystem = function() {
  this.checks = {};
  this.times = {};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  this.checks[id] = {stationName, t};
};

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  const stationsPair = this.checks[id].stationName + '-' + stationName;
  const time = t - this.checks[id].t;
  if (this.times[stationsPair] === undefined) {
    this.times[stationsPair] = [time];
  } else {
    this.times[stationsPair].push(time);
  }
};

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
  let sum = 0;
  let length = this.times[startStation + '-' + endStation].length;
  this.times[startStation + '-' + endStation].map(t => sum += t);
  return sum / length;
};

let undergroundSystem = new UndergroundSystem();
console.log(undergroundSystem.checkIn(45, "Leyton", 3));
console.log(undergroundSystem.checkIn(32, "Paradise", 8));
console.log(undergroundSystem.checkIn(27, "Leyton", 10));
console.log(undergroundSystem.checkOut(45, "Waterloo", 15));  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
console.log(undergroundSystem.checkOut(27, "Waterloo", 20));  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
console.log(undergroundSystem.checkOut(32, "Cambridge", 22)); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
console.log(undergroundSystem.getAverageTime("Paradise", "Cambridge")); // return 14.00000. One trip "Paradise" -> "Cambridge", (14) / 1 = 14
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 11.00000. Two trips "Leyton" -> "Waterloo", (10 + 12) / 2 = 11
console.log(undergroundSystem.checkIn(10, "Leyton", 24));
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 11.00000
console.log(undergroundSystem.checkOut(10, "Waterloo", 38));  // Customer 10 "Leyton" -> "Waterloo" in 38-24 = 14
console.log(undergroundSystem.getAverageTime("Leyton", "Waterloo"));    // return 12.00000. Three trips "Leyton" -> "Waterloo", (10 + 12 + 14) / 3 = 12
