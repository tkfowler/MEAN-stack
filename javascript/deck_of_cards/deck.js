function Card(suit, rank){
  this.suit = suit;
  this.rank = rank;
}

function Deck(){
  // this.deck = [];
  this.createDeck = createDeck;
  this.shuffle = shuffle;
  this.reset = reset;
  this.deal = deal;

  function createDeck(){
    var suit = ["Diamonds", "Clubs", "Hearts", "Spades"];
    var rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    this.deck = [];
    for(var i = 0; i < suit.length; i++){
      for(var j = 0; j < rank.length; j++){
        this.deck.push(new Card(suit[i], rank[j]));
      }
    }
    return this;
  }

  function shuffle() {
    for(var i = 0; i < this.deck.length; i++){
      for(var j = 0; j < this.deck.length; j++){
        var k = Math.floor(Math.random() * this.deck.length);
        var temp = this.deck[j];
        this.deck[j] = this.deck[k];
        this.deck[k] = temp;
      }
    }
    return this;
  }

  function reset(){
    this.createDeck();
  }

  function deal(){
    if(this.deck.length > 0){
      return this.deck.shift()
    }
    else{
      return null;
    }
  }
}

function Player(name){
  this.name = name;
  this.hand = [];
  this.draw = draw;
  this.discard = discard;

  function draw(deck){
    this.hand.push(deck.deal())
    return this;
  }

  function discard(card){
    if(this.hand.length > card){
      this.hand.splice(card,1)
    }
  }
}


// var deck = new Deck();
// deck.createDeck();
// deck.shuffle();
// console.log(deck)
// deck.reset();
// console.log(deck);
// deck.shuffle();
// console.log(deck);
// var tommy = new Player('tommy')
// console.log(tommy)
// tommy.draw(deck).draw(deck).draw(deck).draw(deck).draw(deck);
// console.log(tommy.hand);
// tommy.discard(0);
// console.log(tommy.hand);
