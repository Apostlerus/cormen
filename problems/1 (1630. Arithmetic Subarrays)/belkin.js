/**
 * Для начала попробуем в лоб (Не готово, сохраню, потом доделаю)
 */
var checkArithmeticSubarrays = function(nums, l, r) {
	let answer = [];
	for (let i = 0; i < l.length; i++) {
		if (l[i] - r[i] < 2) {
			answer.push(true);
		}
		let temp = nums.slice(l[i], r[i]).sort;
		let diff = temp[1] - temp[0];
		for (let j = 0; j < temp.length; j++) {

		}
	}
	return answer;
};

let nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5];

console.log(checkArithmeticSubarrays(nums, l, r));
