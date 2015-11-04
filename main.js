$(document).ready(function() {
	var compliments = [
	  'People behind you in class think you are the perfect height.',
	  'Your posture during breaks effectively masks your exhaustion.',
	  'Your commit messages are Kafka-esque.',
	  'Your fingers are magic on the keys.'
	];

	var colors = ['pink', 'blue', 'yellow', 'green'];

	$compliment = $('.compliment');
	$newCompliment = $('.new-button');
	$moveOn = $('.move-button');
	$body = $('body');
	//select random compliment 

	var randomCompliment = function () {
		var random = Math.floor(Math.random() * compliments.length-1);
		$compliment.text(compliments[random]);
		$body.css('background-color', colors[random]);

	}

	$moveOn.on('click', jQuery); 
	$newCompliment.on('click', randomCompliment);
});