type DeckType = {
    cardSuit: string,
    value: string,
    color:string
}

const suits:string[] = ['spade', 'diamond', 'heart', 'clubs'];
const values:string[] = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

let deck:DeckType[] = [];

for (const suit of suits) {
    for (const value of values) {
        deck.push({
            cardSuit: suit,
            value: value,
            color: (suit === 'diamond' || suit === 'heart') ? 'red': 'black'
        })
    }
}

/*

    enum Suit {
        Clubs,
        Heart,
        Spade,
        Diamond
    }

    enum Value {
        Six,
        Ace,
        King
    }

    let result = deck.findCard({cardSuit: Suit.Red, value: Value.Ace});

    сделать классы
    1. Колода (добавить динамический поиск)
    2. Карта
    3. Группированая колода с 4 Колодами внутри
    4. использовать Enum (почитать шо это)
*/

console.log(deck);
console.log(deck.find((value) => value.cardSuit === 'spade' && value.value === 'ace'));
console.log(deck.filter((value) => value.value === '6'));
console.log(deck.filter((value) => value.color === 'red'));
console.log(deck.filter((value) => value.cardSuit === 'diamond'));
console.log(deck.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));

//Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
class GroupedDeck {
    suitClubs: DeckType[] = [];
    suitHeart: DeckType[] = [];
    suitSpade: DeckType[] = [];
    suitDiamond: DeckType[] = [];

    private suitMap: Record<string, keyof GroupedDeck> = {
        clubs: 'suitClubs',
        heart: 'suitHeart',
        spade: 'suitSpade',
        diamond: 'suitDiamond'
    };

    constructor(deck:DeckType[]) {
        this.group(deck);
    }

    group(deck: DeckType[]) {
        deck.reduce((acc, card) => {
            const key = this.suitMap[card.cardSuit];
            if (key) {
                acc[key].push(card);
            }
            return acc;
        }, this);
    }
}

console.log(JSON.stringify(new GroupedDeck(deck), null, 4));
