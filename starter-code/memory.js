var MemoryGame = function() {
  this.Cards = [
  		{ name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
  		{ name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
      { name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
      { name: "aquaman",         img: "aquaman.jpg" },
  		{ name: "batman",          img: "batman.jpg" },
  		{ name: "captain america", img: "captain-america.jpg" },
      { name: "fantastic four",  img: "fantastic-four.jpg" },
  		{ name: "flash",           img: "flash.jpg" },
  		{ name: "green arrow",     img: "green-arrow.jpg" },
  		{ name: "green lantern",   img: "green-lantern.jpg" },
  		{ name: "ironman",         img: "ironman.jpg" },
  		{ name: "spiderman",       img: "spiderman.jpg" },
  		{ name: "superman",        img: "superman.jpg" },
  		{ name: "the avengers",    img: "the-avengers.jpg" },
  		{ name: "thor",            img: "thor.jpg" },
  	];
  this.picked_cards  = [];
  this.pairs_clicked = 0;
  this.pairs_guessed = 0;
  this._shuffleCard();
};
// this function just takes the array of cards above and shuffles them into a random order
MemoryGame.prototype._shuffleCard = function() {
  var counter = this.Cards.length;

  while (counter > 0) {
    // set index to a random number from 1 to counter
    var index = Math.floor(Math.random() * counter);
    // lower counter by 1
    counter--;
    // set temp to a card at index 'counter'
    var temp = this.Cards[counter];
    // set card at index 'counter' to be card at index 'index'
    this.Cards[counter] = this.Cards[index];
    // set card at index 'index' to the temp card we saved earlier
    this.Cards[index] = temp;
  }
  return;
};


var memoryGame;

$(document).ready(function(){
  memoryGame = new MemoryGame();

  var imgArray = [];
  var pairArray = [];
  var pairsFound = 0;
  var pairsTried = 0;
  var pairAmount = $('.pic').length / 2;

  $('.pic').click(function(e){

    var curInd = $('.pic').index(e.currentTarget);
    var curImg = memoryGame.Cards[curInd].img;
    console.log(curImg);

    $(e.currentTarget).addClass('flipped');

    // if only one card is clicked
    if ($('.flipped').length % 2 !== 0 ) {
      $(e.currentTarget).css('background-image', 'url(img/' + curImg + ')');
      $(e.currentTarget).addClass('found');
      imgArray.push(curImg);
      pairArray.push(e.currentTarget);

      console.log(imgArray);

      // if the second card is clicked
    } else {
      $(e.currentTarget).css('background-image', 'url(img/' + curImg + ')');
      $(e.currentTarget).addClass('found');
      imgArray.push(curImg);
      pairArray.push(e.currentTarget);
      console.log(imgArray);
      console.log(pairArray);
      pairsTried ++;
      $('#pairs-tried').html("Pairs tried: " + pairsTried);

      // if pair is found
      if (imgArray[0] === imgArray[1]) {
        pairsFound ++;
        $('#pairs-found').html("Pairs found: " + pairsFound);
        imgArray = [];
        pairArray = [];

        if (pairsFound === pairAmount) {
          // wait for card to show and then give the winning message
          setTimeout( function() {
            alert("YOU WON! It took you " + pairsTried + " tries.");
          }, 500);
        } // this 'if' statment is by itself, the else below if part of the above 'if' statement

        // if pair is not found
      } else {
        setTimeout(function(){

          for (x = 0; x < pairArray.length; x++) {
            $(pairArray[x]).css('background-image', '');
            $(pairArray[x]).removeClass('found');
            $(pairArray[x]).removeClass('flipped');
          }
          imgArray = [];
          pairArray = [];
        }, 1000);
      }
    }
  });
});
