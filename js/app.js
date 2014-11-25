"use strict";

//if user hits three card only show two cards and the third wone should remain unflipped 

//the user should be able to play the game when the page loads
//when the user has 8 matches alert the user with a YAY 
//the user would have the option to click play again to play again or reset game. 

var matches = 0; 
var remaining = 16; 
var failed = 0; 
var firstCard;
var secondCard;  
var clicks = 1;
var storeImage;
var storeExtra; 
var totalTries = 0; 
var storeSecond; 


//sets up the game board 
function onReady (){
	//create an array with all of the image numbers
	var imageNum =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]; 
	//shuffle the array then pull first 8 numbers twice into an array 
	var shuffledArray = _.shuffle(imageNum); 
	var firstEight = _.first(shuffledArray, 8);
	var newArray = []; 
		for(var i = 0; i <firstEight.length; i++) {
			newArray.push(firstEight[i]); 
			newArray.push(firstEight[i]); 
	} 
	//shuffle the order of the array
	var finalShuffle = _.shuffle(newArray); 
	console.log(finalShuffle);

	//Loop over an array of filenames, and create an image for them, packing into an array:
	for (var i = 0; i < finalShuffle.length; i++) {
	    var image = new Image;
	    image.src = 'img/tile' + finalShuffle[i] + '.jpg'; //Set the src attribute (imageFiles[i] is the current filename in the loop)
	}


	var blankSlate = $("#background1");
	//before the user clicks play 
		for(var i = 0; i <finalShuffle.length; i++) {
			var storeData = "img/tile" + finalShuffle[i] + ".jpg";
			var image =  $(document.createElement("img"));
			image.data('reverseCard',storeData); 
			image.attr("src","img/tile-back.png"); 
			image.attr("style","width:200px"); 
			blankSlate.append(image);
		}
	$('#background1 img').on('click', clicky);


	function clicky() {
		
		if(clicks==1) {
			$(this).attr("src", $(this).data('reverseCard')); 
			firstCard = $(this).data('reverseCard');
			storeImage = $(this); 
			$(this).off('click');	
			clicks++;

		//if the user clicks 2 cards check if the cards are the same 
		 } else if(clicks==2){
		 		
		 		$(this).attr("src", $(this).data('reverseCard')); 
		 		$('#background1 img').off('click', clicky);
		 		//$('#background1 img').click(function() {

				secondCard = $(this).data('reverseCard');
				storeSecond = $(this); 
				//console.log("second click");

					if(firstCard==secondCard) { 
						matches++; 
						remaining--; 
						$('matches').text(matches); 
						$('remains').text(remaining); 
						$('#background1 img').on('click', clicky);		
						if(matches==8) {
							alert("You won! You took " + totalTries + " tries.");
							}								
					} else {
						failed++; 
						$('failed').text(fail); 

						//create a timer with a pause; 
						setTimeout(function() {
							storeImage.attr("src","img/tile-back.png");
							storeSecond.attr("src","img/tile-back.png");
							$('#background1 img').on('click', clicky);
						}, 1000);
					}
				 
				totalTries++; 
				clicks=1;
				console.log(totalTries +" tries"); 
			} 
		} 
			
	}



document.addEventListener('DOMContentLoaded', onReady);




//when someone first clicks start timer 
//starts game 
//click function that you can call 
//new game will call a function 
//when click event happen 




