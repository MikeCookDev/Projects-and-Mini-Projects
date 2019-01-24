$('.trivia').on('click', 'button', function(event){
	console.log(event.target);
	//Show the trivia text
 	$(this).prev().show();
    //Hide the "Reveal trivia" button
    $(this).hide();
});

//Create the "Reveal trivia" button
const $button = $('<button>Reveal Trivia</button>');
//Append to web page
$('.trivia').append($button);
//Hide the spoiler text
$('.trivia span').hide();


