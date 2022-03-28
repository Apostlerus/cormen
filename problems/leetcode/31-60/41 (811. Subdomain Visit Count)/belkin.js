/**
 * 84 ms, faster than 91.88%
 */
var subdomainVisits = function(cpdomains) {
  let counts = {}, res = [];
  for (let i = 0; i < cpdomains.length; i++) {
    let item = cpdomains[i].split(' ');
    let parts = item[1].split('.');
    while (parts.length > 0) {
      let domain = parts.join('.');
      if (counts[domain] !== undefined) {
        counts[domain] += parseInt(item[0]);
      } else {
        counts[domain] = parseInt(item[0]);
      }
      parts.shift();
    }
  }
  for (let count in counts) {
    res.push([counts[count], count].join(' '));
  }
  return res;
};

let cpdomains = ["900 google.mail.com", "50 yahoo.com", "1 intel.mail.com", "5 wiki.org"];
console.log(subdomainVisits(cpdomains));
