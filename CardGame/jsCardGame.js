import Deck from "./Deck.js";

const RESET = document.getElementById("reset");
const BTN = document.getElementById("btn");
let computer_deck, player_deck;
const PLAYER_CARD_SLOT = document.querySelector('.player-card-slot')
const COMPUTER_CARD_SLOT = document.querySelector('.computer-card-slot');
const PLAYER_DECK = document.querySelector(".player-deck");
const COMPUTER_DECK = document.querySelector(".computer-deck");
const DISPLAY_MSG = document.querySelector(".display-msg");
const CARD_VALUE_MAP = {
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
    '10': 10,
    "Jack": 10,
    "Queen": 10,
    "King": 10,
    'A': 10
};
let inRound;
const FLIP_CARD = document.getElementById("flipCard");
let flag = false;
const CONTAINER = document.getElementById("container");
RESET.addEventListener('click', reset);

function reset() {
    const deck = new Deck();
    deck.shuffle();
    const DECK_MID_POINT = Math.ceil(deck.numberOfCards / 2);
    computer_deck = new Deck(deck.cards.slice(0, DECK_MID_POINT));
    player_deck = new Deck(deck.cards.slice(DECK_MID_POINT, deck.numberOfCards));
    inRound = false;
    flag = false;
    cleanBeforeRound()
}

function flipCard() {
    inRound = true;
    const PLAYER_CARD = player_deck.pop();
    const COMPUTER_CARD = computer_deck.pop();
    PLAYER_CARD_SLOT.appendChild(PLAYER_CARD.getHTML());
    COMPUTER_CARD_SLOT.appendChild(COMPUTER_CARD.getHTML());
    updateRoundInfo()
    if (isRoundWinner(COMPUTER_CARD, PLAYER_CARD)) {
        DISPLAY_MSG.innerText = "YOU LOST!";
        computer_deck.push(PLAYER_CARD);
        computer_deck.push(COMPUTER_CARD);
    } else if (isRoundWinner(PLAYER_CARD, COMPUTER_CARD)) {
        DISPLAY_MSG.innerText = "YOU WIN!";
        player_deck.push(PLAYER_CARD);
        player_deck.push(COMPUTER_CARD);
    } else {
        DISPLAY_MSG.innerText = "DRAW!"
        player_deck.push(PLAYER_CARD)
        computer_deck.push(COMPUTER_CARD)
    }
    if (isGameOver(player_deck)) {
        DISPLAY_MSG.innerText = "YOU LOSE! Try Again!";
        flag = true;
        BTN.removeEventListener('click', flipCard);
        RESET.removeEventListener('click', reset);
        CONTAINER.classList.add("pre-start");
        BTN.addEventListener('click', startGame);
        BTN.classList.remove("hide");
    } else if (isGameOver(computer_deck)) {
        DISPLAY_MSG.innerText = "YOU WIN! Try Again!";
        flag = true;
        BTN.removeEventListener('click', flipCard);
        RESET.removeEventListener('click', reset);
        CONTAINER.classList.add("pre-start");
        BTN.addEventListener('click', startGame);
        BTN.classList.remove("hide");
    }
}

BTN.addEventListener("click", startGame);
FLIP_CARD.addEventListener('click', () => {
    if (inRound) {
        cleanBeforeRound();
    } else {
        flipCard();
    }
})

function cleanBeforeRound() {
    COMPUTER_CARD_SLOT.innerHTML = "";
    PLAYER_CARD_SLOT.innerHTML = "";
    DISPLAY_MSG.innerHTML = "Card Game";
    inRound = false;
    updateRoundInfo()
}

function updateRoundInfo() {
    COMPUTER_DECK.innerText = computer_deck.numberOfCards;
    PLAYER_DECK.innerText = player_deck.numberOfCards;
}

function startGame() {
    CONTAINER.classList.remove("pre-start");
    BTN.classList.add("hide");
    BTN.removeEventListener('click', startGame)
    const deck = new Deck();
    deck.shuffle();
    const DECK_MID_POINT = Math.ceil(deck.numberOfCards / 2);
    computer_deck = new Deck(deck.cards.slice(0, DECK_MID_POINT));
    player_deck = new Deck(deck.cards.slice(DECK_MID_POINT, deck.numberOfCards));
    inRound = false;
    flag = false;
    cleanBeforeRound()
}

function isRoundWinner(card1, card2) {
    return CARD_VALUE_MAP[card1.value] > CARD_VALUE_MAP[card2.value];
}

function isGameOver(deck) {
    return deck.numberOfCards === 0;
}