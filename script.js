'use strict';

let targetNumber;
let userNumber;

const getRandomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const playGame = function (userNumber) {
	if (userNumber === null) {
		alert('Игра окончена');
		return;
	}

	userNumber = +userNumber;
	
	if (!isNumber(userNumber) || userNumber === 0) {
		userNumber = prompt('Введите число!');
		playGame(userNumber);
	} else if(userNumber === targetNumber){
		alert('Поздравляю, Вы угадали!!!');
		return;
	} else if (userNumber > targetNumber) {
		userNumber = prompt('Загаданное число меньше! \nПопробуй ещё');
		playGame(userNumber);
	} else if (userNumber < targetNumber) {
		userNumber = prompt('Загаданное число больше! \nПопробуй ещё');
		playGame(userNumber);
	}
};

const isNumber = function (num) {
	return !isNaN(parseFloat(num)) && isFinite(num);
};

targetNumber = getRandomNumber(1, 100);
userNumber = prompt('Угадай число от 1 до 100');
playGame(userNumber);