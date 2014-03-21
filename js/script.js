$(".button").click(function() {
    hideMenu();
    showGame();
});

$(".home").click(function() {
	hideGame();
	showMenu();
});

function hideGame() {
	$("#game").css({"display":"none"});
}

function showMenu() {
	$("#menu").css({"display":"block"});
}

function hideMenu() {
    $("#menu").css({"display":"none"});   
}

function showGame() {
    $("#game").css({"display":"block"});
}



