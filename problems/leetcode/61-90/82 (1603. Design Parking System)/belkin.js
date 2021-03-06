/**
 * 186 ms, faster than 37.85%
 */

/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.parking = {
    '1': big,
    '2': medium,
    '3': small,
  };
};

/**
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (this.parking[carType] > 0) {
    this.parking[carType]--;
    return true;
  }
  return false;
};
