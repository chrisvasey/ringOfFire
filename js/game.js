var cards = [
    "spades-1",
    "spades-2",
    "spades-3",
    "spades-4",
    "spades-5",
    "spades-6",
    "spades-7",
    "spades-8",
    "spades-9",
    "spades-10",
    "spades-jack",
    "spades-queen",
    "spades-king",
    "hearts-1",
    "hearts-2",
    "hearts-3",
    "hearts-4",
    "hearts-5",
    "hearts-6",
    "hearts-7",
    "hearts-8",
    "hearts-9",
    "hearts-10",
    "hearts-jack",
    "hearts-queen",
    "hearts-king",
    "clubs-1",
    "clubs-2",
    "clubs-3",
    "clubs-4",
    "clubs-5",
    "clubs-6",
    "clubs-7",
    "clubs-8",
    "clubs-9",
    "clubs-10",
    "clubs-jack",
    "clubs-queen",
    "clubs-king",
    "diamonds-1",
    "diamonds-2",
    "diamonds-3",
    "diamonds-4",
    "diamonds-5",
    "diamonds-6",
    "diamonds-7",
    "diamonds-8",
    "diamonds-9",
    "diamonds-10",
    "diamonds-jack",
    "diamonds-queen",
    "diamonds-king"
];

// Initialise game
var game = cards.slice(0);

$(document).ready(function(){

    // Initialise remaining card count
    $(".cardCount").text(game.length + " cards remaining");

});

function nextCard() {

    if (game.length > 0) {

        // Randomly pick a card
        var random = Math.floor(Math.random() * game.length);
        var card = game[random];

        // Update card image
        $("#card").removeClass().addClass(card);

        // Remove card from game
        var gameIndex = game.indexOf(card);
        if (gameIndex != -1) {
            game.splice(gameIndex, 1);
        }

        // Update remaining card count
        if (game.length == 0) {
            $(".cardCount").text("Game Over!");
            $(".nextBtn").attr("disabled","disabled");
        }
        else if (game.length == 1) {
            $(".cardCount").text(game.length + " card remaining");
        }
        else {
            $(".cardCount").text(game.length + " cards remaining");
        }

        console.log("Pulled: " + card + " (" + random + "/" + (game.length + 1) + ")");

    } else {

        return false;

    }
}

function resetGame() {

    // Reset card image
    $("#card").removeClass();

    // Reset the game
    game = cards.slice(0);

    // Reset remaining card count
    $(".cardCount").text(game.length + " cards remaining");
    $(".nextBtn").removeAttr("disabled");

}