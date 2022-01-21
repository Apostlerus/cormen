/**
 * Для начала попробуем в лоб
 * 144 ms ms 45.5 MB, faster than 98.36%
 * Хотя это лучший, другие запуски были медленнее, иногда раза в полтора.
 */
var checkArithmeticSubarrays1 = function(nums, l, r) {
	let answer = [];
	for (let i = 0; i < l.length; i++) {
		if (r[i] - l[i] < 2) {
			answer.push(true);
			continue;
		}
		let temp = nums.slice(l[i], r[i] + 1);
		temp.sort((a ,b) => a - b);
		let diff = temp[1] - temp[0];
		let arithmetic = true;
		for (let j = 0; j < temp.length - 1; j++) {
			if (temp[j + 1] - temp[j] !== diff) {
				arithmetic = false;
				break;
			}
		}
		answer.push(arithmetic);
	}
	return answer;
};

/**
 * Runtime: 80 ms, faster than 100.00%
 * Взял твой вариант и заюзал массив вместо Set.
 * Отрабатывал стабильно быстрее. Прикол, конечно.
 * Я думаю, что у тебя Set.add добавлет достаточно много времени
 * внутри первого цикла, что немного обесценивает быстрый has().
 * Так что думаю, что на больших миллионных суб-массивах медленный includes
 * добавлял бы времени.
 * Но хотя тогда и Set.add() замедлялся бы..... вопрос оставляю для себя открытым)
 */
var checkArithmeticSubarrays = function(nums, l, r) {
	let result = []
	for (let i = 0; i < l.length; i++) {
		let min = nums[l[i]]
		let max = nums[l[i]]
		let count = 0
		let sum = 0
		let set = []
		for (let j = l[i]; j <= r[i]; j++) {
			count++;
			sum += nums[j]
			min = min > nums[j] ? nums[j] : min;
			max = max > nums[j] ? max: nums[j];
			set.push(nums[j])
		}
		let d = (max - min)/(count - 1);
		let possible = true;
		for (let z = 1; z < set.length; z++) {
			if (!set.includes(min + z*d)) {
				possible = false;
				break;
			}
		}
		result.push(possible)
	}
	return result;
};

let nums = [-12,-9,-3,-12,-6,15,20,-25,-20,-15,-10],
	l = [0, 1, 6, 4, 8, 7],
	r = [4, 4, 9, 7, 9, 10];

console.log(checkArithmeticSubarrays(nums, l, r));
