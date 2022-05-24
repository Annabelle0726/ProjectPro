const SUITS = ["♣", "♦", "♥", "♠"];
const VALUES = ["A", "2", '3',
    '4', '5', '6', '7', '8', '9', '10', "Jack", "Queen", "King"];

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
        this.shuffle();
    }

    get numberOfCards() {
        return this.cards.length;
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }

    pop() {
        return this.cards.shift();
    }

    push(card) {
        this.cards.push(card);
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}

class Card {
    constructor(suit, value) {
        this.value = value;
        this.suit = suit;
    }

    getHTML() {
        const cardDiv = document.createElement('div');
        cardDiv.innerText = this.suit;
        if (this.suit === '♣' || this.suit === '♠') {
            cardDiv.classList.add("color-black");
        } else {
            cardDiv.classList.add("color-red");
        }
        cardDiv.classList.add("card");
        cardDiv.dataset.value = `${this.value} ${this.suit}`;
        return cardDiv;
    }
}