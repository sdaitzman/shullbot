var suits = {
  'clubs': 'black',
  'spades': 'black',
  'diamonds': 'red',
  'hearts': 'red'
}

var Card = function Card(suit, rank) {
  if (!suit) throw new Error('first arg suit is not defined')
  if (!rank) throw new Error('second arg rank is not defined')
  if (typeof suit !== 'string') throw new Error('suit is not a string')
  if (typeof rank !== 'number') throw new Error('rank is not a number')

  this.suit = suit
  this.rank = rank
}

module.exports = Card
