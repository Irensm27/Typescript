enum Suit {
    Clubs = 'clubs',
    Heart = 'heart',
    Spade = 'spade',
    Diamond = 'diamond'
}

enum Value {
    Six = '6',
    Seven = '7',
    Eight = '8',
    Nine = '9',
    Ten = '10',
    Jack = 'jack',
    Queen = 'queen',
    King = 'king',
    Ace = 'ace'
}

class Card {
    cardSuit: Suit;
    cardValue: Value;
    color: string;

    constructor(cardSuit: Suit, cardValue: Value) {
        this.cardSuit = cardSuit;
        this.cardValue = cardValue;
        this.color = (cardSuit === Suit.Diamond || cardSuit === Suit.Heart) ? 'red' : 'black';
    }
}

class Deck {
    cards: Card[] = [];

    constructor() {
        this.generateDeck();
    }

    private generateDeck() {
        const suits = Object.values(Suit);
        const values = Object.values(Value);

        for (const suit of suits) {
            for (const value of values) {
                this.cards.push(new Card (suit as Suit, value as Value));}
        }
    }


    findCard(filter: Partial<Card>) {
        return this.cards.find(card => {
            const keys = Object.keys(filter);

            return keys.every(key => {
                return card[key as keyof Card] === filter[key as keyof Card];
        });
    });
}
}
const result = new Deck().findCard({
    cardValue: Value.Nine,
    cardSuit: Suit.Heart,
});
console.log(result);


class GroupDeck {
    suitClubs:Card[] = [];
    suitHeart:Card[] = [];
    suitSpade:Card[] = [];
    suitDiamond:Card[] =[];

    private suitMap: Record<Suit, keyof GroupDeck> = {
        [Suit.Clubs]: 'suitClubs',
        [Suit.Heart]: 'suitHeart',
        [Suit.Spade]: 'suitSpade',
        [Suit.Diamond]: 'suitDiamond'
    };

        constructor(deck: Card[]) {
        this.group(deck)}

            private group(deck: Card[]) {
                for (const card of deck) {
                    const key = this.suitMap[card.cardSuit];
                    this[key].push(card);
                }
            }
}
const deck = new Deck();
const grouped = new GroupDeck(deck.cards);
console.log(grouped);
