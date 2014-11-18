"use strict"; 
//create an array with all of the image numbers
var imageNum =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]; 


//shuffle the array then pull first 8 numbers twice into an array 
var shuffledArray = _.shuffle(imageNum); 
var firstEight = _.first(shuffledArray, 8);
var newArray = []; 
	for(var i =0; i <firstEight.length; i++) {
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

//for loop that creates game board with back images. 
//append images to the div run through a for loop ; 
//function to build 4x4 //make a button to start game 
//Show the result:

var firstCard;
var secondCard;
var matches=0;  
var clicks = 1;
var storeImage; 
var blankSlate = $("#background1");
//before the user clicks play 
	for(var i = 0; i <finalShuffle.length; i++) {
		var storeData = 'img/tile' + finalShuffle[i] + '.jpg';
		var image =  $(document.createElement("img"));
		image.data('reverseCard',storeData); 
		image.attr("src","img/tile-back.png"); 
		image.attr("style","width:200px"); 
		blankSlate.append(image);
		//console.log(image.data('reverseCard'));
	}
$('#background1 img').click(function() {
	console.log($(this).data('reverseCard')); 
	//image.attr("src","img/tile-back.png"); 
	$(this).attr("src", $(this).data('reverseCard'));
	
	console.log(clicks);   

	if(clicks==1) {
		firstCard = $(this).data('reverseCard');
		console.log("this works"+ clicks);
		storeImage = $(this); 
		
	
	
	//if the user clicks 2 cards check if the cards are the same 
	 } else if (clicks==2) {
			console.log("Clicks = 2"); 
			secondCard = $(this).data('reverseCard');
				if(firstCard==secondCard) {
					console.log("Succcess!!!"); 
					matches++; 
				} else {
					//create a timer with a pause; 
					//image clicked first time 
					storeImage.attr("src","img/tile-back.png");
					//image last clicked 
					$(this).attr("src","img/tile-back.png");

					console.log("FAILUREEEE"); 
				}
			//if firstCard == secondCard then do something, else reset back
			clicks=0; 
		} 
		clicks++;

		//do something if click is above 2 and checks if the images are the same
		//if it is not the same then click resets to 0 and the images flip back

	console.log(clicks); 
	
	});  


//check if they match
//increment match
//keep images on screen 
//resets back 
//add timer 



	//flips over first card that the user clicks 
		//switch tiles that the user clicks on 
	//if user clicks a second card then check if it is the same
	//if it is the same it should remain on the screen 











