/**
 * 2190 ms, faster than 38.09%
 */
/**
 * @param {number} n
 */
var SeatManager = function(n) {
  this.toReserve = 1;
  this.unreserved = [];
};

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function() {
  if (this.unreserved.length) {
    return this.unreserved.pop();
  }
  return this.toReserve++;
};

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function(seatNumber) {
  if (seatNumber + 1 === this.toReserve) {
    this.toReserve--;
  } else {
    this.unreserved.push(seatNumber);
    this.unreserved.sort((a, b) => b - a);
  }
};

let seatManager = new SeatManager(5); // Initializes a SeatManager with 5 seats.
console.log(seatManager.reserve()) // All seats are available, so return the lowest numbered seat, which is 1.
console.log(seatManager.reserve()) // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
console.log(seatManager.unreserve(2)) // Unreserve seat 2, so now the available seats are [2,3,4,5].
console.log(seatManager.reserve()) // The available seats are [2,3,4,5], so return the lowest of them, which is 2.
console.log(seatManager.reserve()) // The available seats are [3,4,5], so return the lowest of them, which is 3.
console.log(seatManager.reserve()) // The available seats are [4,5], so return the lowest of them, which is 4.
console.log(seatManager.reserve()) // The only available seat is seat 5, so return 5.
console.log(seatManager.unreserve(5))
