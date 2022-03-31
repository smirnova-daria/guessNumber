'use strict';

const attempts = 10;

let availableAttempts;

let targetNumber;
let userNumber;
let isNewGame = true;

const getRandomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const startGame = function (isNewGame) {
	if (isNewGame) {
		availableAttempts = attempts;
		targetNumber = getRandomNumber(1, 100);
		userNumber = prompt('Угадай число от 1 до 100');
		playGame(userNumber, availableAttempts);
	} else {
		alert('Игра окончена');
		return;
	}
};

const playGame = function (userNumber, attempts) {
	if (attempts > 1) {
		if (userNumber === null) {
			alert('Игра окончена');
			return;
		}

		userNumber = +userNumber;
	
		if (!isNumber(userNumber) || userNumber === 0) {
			attempts--;
			userNumber = prompt('Введите число! Осталось ' + attempts + ' попыток');
			playGame(userNumber, attempts);
		} else if (userNumber === targetNumber) {
			isNewGame = confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?');			
			startGame(isNewGame);			
		} else if (userNumber > targetNumber) {
			attempts--;
			userNumber = prompt('Загаданное число меньше! Осталось ' + attempts + ' попыток \nПопробуй ещё');
			playGame(userNumber, attempts);
		} else if (userNumber < targetNumber) {
			attempts--;
			userNumber = prompt('Загаданное число больше! Осталось ' + attempts + ' попыток \nПопробуй ещё');
			playGame(userNumber, attempts);
		}
	} else {
		isNewGame = confirm('Попытки закончились, хотите сыграть еще?');
		startGame(isNewGame);
	}
};

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};

startGame(isNewGame);