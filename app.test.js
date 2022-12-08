import {
	getResistenza,
	getTheStrongestNumber,
	getFrequente,
	getFrequenti,
} from './app.js';

test('The strength of 882 should be 3', () => {
	let result = getResistenza(882);
	expect(result).toBe(3);
});

test('The strength of 72 should be 2', () => {
	let result = getResistenza(72);
	expect(result).toBe(2);
});

test('The strength of 1453 should be 2', () => {
	let result = getResistenza(1453);
	expect(result).toBe(2);
});

test('The strength of 321624 should be 4', () => {
	let result = getResistenza(321624);
	expect(result).toBe(4);
});

test('The strongest of the numbers up to 100 should be 77', () => {
	let result = getTheStrongestNumber(100);
	expect(result).toBe(77);
});

test('The strongest of the numbers up to 1000 should be 679', () => {
	let result = getTheStrongestNumber(1000);
	expect(result).toBe(679);
});

test('The strongest of the numbers up to 10000 should be 6788', () => {
	let result = getTheStrongestNumber(10000);
	expect(result).toBe(6788);
});

test('The strongest of the numbers up to 100000 should be 68889', () => {
	let result = getTheStrongestNumber(100000);
	expect(result).toBe(68889);
});

test('The frequent number should be 4', () => {
	let result = getFrequente([2, 4, 1, 5, 6, 3, 4, 2, 7, 4, 5, 4, 5]);
	expect(result).toBe(4);
});

test('The frequent number should be 12', () => {
	let result = getFrequente([12, 56, 12, 2, 1, 4, 4, 1, 12, 12]);
	expect(result).toBe(12);
});

test('The frequent number should be 2', () => {
	let result = getFrequente([2, 7, 4, 2, 5, 4, 5, 2, 2]);
	expect(result).toBe(2);
});

test('The frequent number should be 8', () => {
	let result = getFrequente([
		2, 4, 1, 8, 8, 5, 6, 3, 8, 4, 2, 8, 7, 8, 4, 5, 8, 4, 5,
	]);
	expect(result).toBe(8);
});

test('The 2 most frequently repeated numbers should be [1,2]', () => {
	let result = getFrequenti([2, 4, 1, 8, 8, 2, 1, 1, 2, 1], 2);
	expect([1, 2]).toEqual(expect.arrayContaining(result));
});

test('The 3 most frequently repeated numbers should be [1,2,8]', () => {
	let result = getFrequenti([2, 4, 1, 8, 8, 2, 1, 1, 2, 1], 3);
	expect([1, 2, 8]).toEqual(expect.arrayContaining(result));
});

test('The 1 most frequently repeated numbers should be [12]', () => {
	let result = getFrequenti([12, 4, 1, 8, 8, 12, 1, 12, 12, 1], 1);
	expect([12]).toEqual(expect.arrayContaining(result));
});

test('The 3 most frequently repeated numbers should be [2,8,10]', () => {
	let result = getFrequenti([2, 4, 1, 8, 8, 2, 8, 10, 10, 2, 10], 3);
	expect([2, 8, 10]).toEqual(expect.arrayContaining(result));
});
