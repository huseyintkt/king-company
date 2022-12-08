/**
 * This function returns the resistance of an integer passed as an argument.
 * @param {Number} pNumber
 * @returns
 */
const getResistenza = (pNumber) => {
	let counter = 0;
	let newValue = pNumber;

	do {
		newValue = newValue
			.toString()
			.split('')
			.map((item) => Number(item))
			.reduce((result, value) => result * value);
		counter++;
	} while (newValue > 9);

	return counter;
};

/**
 * This function returns the strongest number until to the number sent as a parameter to it.
 * @param {Number} pNumber
 * @returns
 */
const getTheStrongestNumber = (pNumber) => {
	const resistenzaArray = [];

	for (let index = 0; index < pNumber; index++) {
		let resistenza = getResistenza(index);
		resistenzaArray.push({ resistenza: resistenza, value: index });
	}

	return resistenzaArray.sort((a, b) => b.resistenza - a.resistenza)[0].value;
};

/**
 * This function returns the most frequent number in an array of integers passed as an argument.
 * @param {Array} pArray
 * @returns
 */
const getFrequente = (pArray) => {
	let result = { count: 0, value: 0 };

	pArray.forEach((itemForFirstLoop) => {
		let counter = 0;

		pArray.forEach((itemForSecondLoop) => {
			if (itemForFirstLoop === itemForSecondLoop) {
				counter = counter + 1;
			}
		});

		if (counter > result.count) {
			result = { count: counter, value: itemForFirstLoop };
		}
	});

	return result.value;
};

/**
 * This function returns an array containing the first k most frequent numbers
 * in an array of integers passed as an argument.
 * @param {Array} pArray
 * @param {Number} pNumber
 * @returns
 */
const getFrequenti = (pArray, pNumber) => {
	let result = [];

	pArray.forEach((itemForFirstLoop) => {
		let counter = 0;

		pArray.forEach((itemForSecondLoop) => {
			if (itemForFirstLoop === itemForSecondLoop) {
				counter = counter + 1;
			}
		});

		if (
			!result.some((item) => {
				return item.value == itemForFirstLoop;
			})
		) {
			result.push({ count: counter, value: itemForFirstLoop });
		}
	});

	return result
		.sort((a, b) => b.count - a.count)
		.slice(0, pNumber)
		.map((item) => item.value);
};

export { getResistenza, getTheStrongestNumber, getFrequente, getFrequenti };
