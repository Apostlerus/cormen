/**
 * ...
 */
var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]');
};

let address = "1.1.1.1";
console.log(defangIPaddr(address));
