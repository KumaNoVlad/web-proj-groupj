$(document).ready(function(){
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

getBackground();

});

function getRandomTag(){
    var tags = ["animals", "sports", "music"];
    var tag = tags[Math.floor(Math.random()*tags.length)];
    return tag;
}

function getBackground(){
    var url = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a76b957313f70adde07f2658342a23f0&tags=" +getRandomTag()+ "&safe_search=1&per_page=20";
    var src;
    $.getJSON(url + "&format=json&jsoncallback=?", function(data){
        $.each(data.photos.photo, function(i,item){
            src = "http://farm"+ item.farm +".static.flickr.com/"+ item.server +"/"+ item.id +"_"+ item.secret +"_m.jpg";
    });
        // $(' #body').css("background" , src);
        //alert(src);
        //window.open(src);
        $('body').css('background-image', 'url(' + src + ')');


});
}
