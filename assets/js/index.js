const suspectsArray = [
	{
		firstName: 'Jacob',
		lastName: 'Green',
		occupation: 'Entrepreneur',
		age: 45,
		description: 'He has a lot of connections',
		image: '../assets/img/Tudor_Mansion_Mr._Green.png',
		color: 'green'
	},
	{
		firstName: 'Doctor',
		lastName: 'Orchid',
		occupation: 'Scientist',
		age: 26,
		description: 'PhD in plant toxicology.',
		image: '../assets/img/Tudor_Mansion_Doctor_Orchid.png',
		color: 'white'
	},
	{
		firstName: 'Victor',
		lastName: 'Plum',
		occupation: 'Designer',
		age: 22,
		description: 'Billionaire video game designer',
		image: './assets/img/Tudor_Mansion_Professor_Plum.png',
		color: 'purple'
	},
	{
		firstName: 'Kassandra',
		lastName: 'Scarlet',
		occupation: 'Actress',
		age: 31,
		description: 'She is an A-list movie star with a dark past',
		image: './assets/img/Tudor_Mansion_Miss_Scarlett.png',
		color: 'red'
	},
	{
		firstName: 'Elenor',
		lastName: 'Peacock',
		occupation: 'Socialité',
		age: 36,
		description: 'She is from a wealthy family and uses her status and money to earn popularity',
		image: './assets/img/Tudor_Mansion_Mrs._Peacock.png',
		color: 'blue'
	},
	{
		firstName: 'Jack',
		lastName: 'Mustard',
		occupation: 'Retired Football player',
		age: 62,
		description: 'He is a former football player who tries to get by on his former glory',
		image: './assets/img/Tudor_Mansion_Colonel_Mustard.png',
		color: 'yellow'
	}
];

const weaponsArray = [
	{
		name: 'rope',
		weight: 10
	},
	{
		name: 'knife',
		weight: 8
	},
	{
		name: 'candlestick',
		weight: 2
	},
	{
		name: 'dumbbell',
		weight: 30
	},
	{
		name: 'poison',
		weight: 2
	},
	{
		name: 'axe',
		weight: 15
	},
	{
		name: 'bat',
		weight: 13
	},
	{
		name: 'tropyh',
		weight: 25
	},
	{
		name: 'pistol',
		weight: 20
	}
];

const roomsArray = [
	'Dining Room',
	'Conservatory',
	'Kitchen',
	'Study Room',
	'Library',
	'Billiard Room',
	'Lounge',
	'Ballroom',
	'Hall',
	'Spa',
	'Living Room',
	'Observatory',
	'Theater',
	'Guest House',
	'Patio'
];

function randomNumber(n) {
	return Math.floor(Math.random() * n);
}

var randomSuspect;
var randomWeapon;
var randomRoom;
var mystery;
var killerPic = document.getElementById('killerpic');
var answer = document.getElementById('answer');

function selectRandom() {
	randomSuspect = suspectsArray[randomNumber(6)];
	randomWeapon = weaponsArray[randomNumber(8)];
	randomRoom = roomsArray[randomNumber(15)];
}

function pickMystery() {
	selectRandom();
	answer.innerHTML = "The secret envelope has been filled! Whats's your guess..?";
	mystery = [ randomSuspect, randomWeapon, randomRoom ];

	console.log(mystery);
}

function revealMystery() {
	answer.innerHTML =
		mystery[0].firstName +
		' ' +
		mystery[0].lastName +
		' killed Mr. Boddy using the ' +
		mystery[1].name +
		' in the ' +
		mystery[2] +
		'.';
	killerPic.innerHTML = `<img src="${randomSuspect.image}" alt="${randomSuspect.image}">`;
}

function reset() {
	location.reload();
}
