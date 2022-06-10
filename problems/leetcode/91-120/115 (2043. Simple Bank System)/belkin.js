/**
 * 390 ms, faster than 62.79%
 */
var Bank = function(balance) {
  this.bank = balance;
};

/**
 * @param {number} account1
 * @param {number} account2
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.transfer = function(account1, account2, money) {
  if (this.bank[account1 - 1] === undefined
      || this.bank[account2 - 1] === undefined
      || this.bank[account1 - 1] < money
  ) {
    return false;
  }
  this.bank[account1 - 1] -= money;
  this.bank[account2 - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.deposit = function(account, money) {
  if (this.bank[account - 1] === undefined) {
    return false;
  }
  this.bank[account - 1] += money;
  return true;
};

/**
 * @param {number} account
 * @param {number} money
 * @return {boolean}
 */
Bank.prototype.withdraw = function(account, money) {
  if (this.bank[account - 1] === undefined || this.bank[account - 1] < money) {
    return false;
  }
  this.bank[account - 1] -= money;
  return true;
};

let bank = new Bank([10, 100, 20, 50, 30]);
console.log(bank.withdraw(3, 10));    // return true, account 3 has a balance of $20, so it is valid to withdraw $10.
                         // Account 3 has $20 - $10 = $10.
console.log(bank.transfer(5, 1, 20)); // return true, account 5 has a balance of $30, so it is valid to transfer $20.
                         // Account 5 has $30 - $20 = $10, and account 1 has $10 + $20 = $30.
console.log(bank.deposit(5, 20));     // return true, it is valid to deposit $20 to account 5.
                         // Account 5 has $10 + $20 = $30.
console.log(bank.transfer(3, 4, 15)); // return false, the current balance of account 3 is $10,
                         // so it is invalid to transfer $15 from it.
console.log(bank.withdraw(10, 50));   // return false, it is invalid because account 10 does not exist.
