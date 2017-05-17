
//four crystals each represent random number 

//random number displayed on screen 

//when a crystal is clicked the number will be added to the users number 

//each crystal number is added onto the users number until the users number matches the random number 

$(document).ready(function(){

	var Score = 0;
	var match = 0;
	var wins = 0;
	var losses = 0;
	var yourNumber = 0;
	var crystal1Value = 0;
	var crystal2Value = 0;
	var crystal3Value = 0;
	var crystal4Value = 0;
	var endGame = false;

	function scoreWorth() {

		$("#yourNumber").html(yourNumber);

		if (yourNumber == match) {
			endGame = true;
			wins++;
		} else if (yourNumber > match) {
			endGame = true;
			losses++;
		};

		if (endGame) {
			$("#wins").html("wins:" + wins);
			$("#losses").html("losses:" + losses);
			startgame()
		}
	};

	function startgame() {
		//reset score
		yourNumber = 0 
		endGame = false;

		//reset match number 
		match = Math.floor(Math.random() * 30) + 20;

		//reset crystal values 
		crystal1Value = Math.floor(Math.random() * 9) + 1;
		crystal2Value = Math.floor(Math.random() * 9) + 1;
		crystal3Value = Math.floor(Math.random() * 9) + 1;
		crystal4Value = Math.floor(Math.random() * 9) + 1;

		$(".crystal1").on('click', function() {
			if (endGame == false) {
			yourNumber = yourNumber + crystal1Value;
			scoreWorth();
			$("#yourNumber").html(yourNumber);

			console.log(yourNumber);
			};
		})

		$(".crystal2").on('click', function() {
			if (endGame == false) {
			yourNumber = yourNumber + crystal2Value;
			scoreWorth();
			$("#yourNumber").html(yourNumber);

			console.log(yourNumber);
			};
		})

		$(".crystal3").on('click', function() {
			if (endGame == false) {
			yourNumber = yourNumber + crystal3Value;
			scoreWorth();
			$("#yourNumber").html(yourNumber);

			console.log(yourNumber);
			};
		})

		$(".crystal4").on('click', function() {
			if (endGame == false) {
			yourNumber = yourNumber + crystal4Value;
			scoreWorth();
			$("#yourNumber").html(yourNumber);

			console.log(yourNumber);
			};
		})

		$("#match").html(match);
		$("#yourNumber").html(yourNumber);
		$("#wins").html(wins);
		$("#losses").html(losses);
	}

	startgame();

	});

//Function to assign a unique value to a crystal


