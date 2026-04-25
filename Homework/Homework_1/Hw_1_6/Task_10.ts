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
            color:( suit === 'diamond' || suit === 'heart') ? 'red': 'black'
        })
    }
}
console.log(deck);
console.log(deck.find((value) => value.cardSuit === 'spade' && value.value === 'ace'));
console.log(deck.filter((value) => value.value === '6'));
console.log(deck.filter((value) => value.color === 'red'));
console.log(deck.filter((value) => value.cardSuit === 'diamond'));
console.log(deck.filter((card) => card.cardSuit === 'clubs' && ['9', '10', 'jack', 'queen', 'king', 'ace'].includes(card.value)));
console.log(deck)

//Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт

type AccType = {
    suitClubs: DeckType[],
    suitHeart: DeckType[],
    suitSpade: DeckType[],
    suitDiamond: DeckType[]
}
console.log(deck.reduce<AccType>((acc:AccType, card:DeckType):AccType => {
        if (card.cardSuit === 'clubs') {
            acc.suitClubs.push(card);
        } else if (card.cardSuit === 'heart') {
            acc.suitHeart.push(card);
        } else if (card.cardSuit === 'spade') {
            acc.suitSpade.push(card);
        } else if (card.cardSuit === 'diamond') {
            acc.suitDiamond.push(card);
        } return acc
    },
    {suitClubs: [], suitHeart: [], suitSpade: [], suitDiamond: []}
));
