enum Suit {
    Clubs,
    Heart,
    Spade,
    Diamond
}

enum Value {
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Jack,
    Queen,
    King,
    Ace
}

enum Color {
    red,
    black,
}

class Card {
    cardSuit: Suit;
    cardValue: Value;
    color: Color;

    constructor(cardSuit: Suit, value: Value) {
        this.cardSuit = cardSuit;
        this.cardValue = value;
        this.color = (cardSuit === Suit.Diamond || cardSuit === Suit.Heart) ? Color.red : Color.black;
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
const deck = new Deck();
const result = deck.findCard({
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

const grouped = new GroupDeck(deck.cards);
console.log(grouped);
