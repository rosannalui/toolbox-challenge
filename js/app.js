"use strict"; 

var imageNum =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]; 
//create an array with all of the images
var imageFiles =[
	'tile1.jpg',
	'tile2.jpg', 
	'tile3.jpg',
	'tile4.jpg', 
	'tile5.jpg',
	'tile6.jpg',
	'tile7.jpg', 
	'tile8.jpg',
	'tile9.jpg',
	'tile10.jpg', 
	'tile11.jpg',
	'tile12.jpg', 
	'tile13.jpg',
	'tile14.jpg',
	'tile15.jpg', 
	'tile16.jpg',
	'tile17.jpg',
	'tile18.jpg', 
	'tile19.jpg',
	'tile20.jpg', 
	'tile21.jpg',
	'tile22.jpg',
	'tile23.jpg', 
	'tile24.jpg',
	'tile25.jpg',
	'tile26.jpg', 
	'tile27.jpg',
	'tile28.jpg', 
	'tile29.jpg',
	'tile30.jpg',
	'tile31.jpg', 
	'tile32.jpg',
]; 


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

var clicks = 0;  
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
	image.attr("src","img/tile-back.png"); 
	$(this).attr("src", $(this).data('reverseCard'));
	clicks++; 

	//if the user clicks 2 cards check if the cards are the same 
	if(clicks>2) {
			console.log("YAY"); 
			clicks=0; 
		} 

		//do something if click is above 2 and checks if the images are the same
		//if it is not the same then click resets to 0 and the images flip back

	console.log(clicks); 
	
	});  







	//flips over first card that the user clicks 
		//switch tiles that the user clicks on 
	//if user clicks a second card then check if it is the same
	//if it is the same it should remain on the screen 











