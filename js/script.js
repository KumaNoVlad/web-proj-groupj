$("#option1, #option2, #option3").click(function () {
    showGame();
});

$("#home").click(function () {
    showMenu();
})

function showMenu() {
    $("#game").css({
        "display": "none"
    });
    $("#menu").css({
        "display": "block"
    });
}

function showGame() {
    $("#menu").css({
        "display": "none"
    });
    $("#game").css({
        "display": "block"
    });
}