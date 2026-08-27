// Задача 1

function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) {
			max = arr[i];
		}

		if (arr[i] < min) {
			min = arr[i];
		}

		sum += arr[i];
	}

	let avg = Number((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}





// Задача 2

function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}

	return sum;
}

function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let differenceMaxMin = max - min;

	return differenceMaxMin;
}

function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}

	let differenceEvenOdd = sumEvenElement - sumOddElement;

	return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement += 1;
		}
	}

	let averageEvenElements = sumEvenElement / countEvenElement;

	return averageEvenElements;
}





// Задача 3
function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const workerResult = func(...arrOfArr[i]);

		if (workerResult > maxWorkerResult) {
			maxWorkerResult = workerResult;
		}
	}

	return maxWorkerResult;
}