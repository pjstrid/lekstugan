//Genererar en kortlek med 52 kort där varje kort innehåller en färg ( suit ) och ett värde mellan 2 och 14 ( ess )

function createDeck() { // lägger skapandet i en funktion
    const suits = ["hjärter", "spader", "ruter", "klöver"] // skapar de fyra färgerna
    const ranks = ["2","3","4","5","6","7","8","9","10","knekt","dam","kung","ess"] // skapar de 13 olika värdena
    let deck = []; // skapar en tom kortlek

    for(let suitCounter = 0; suitCounter < 4; suitCounter ++) {
    for (let rankCounter = 0; rankCounter < 13; rankCounter ++) {
    deck.push(suits[suitCounter] +" "+ ranks[rankCounter])} // pushar in de skapade korten i kortleken
    }
    return deck;
}
console.log(createDeck()); // kör funktionen och visar den sorterade kortleken


function shuffleDeck(deck) { // skapar en funktion som blandar kortleken
for (let i = 0; i < 52; i++) {
        let tempCard = deck[i]; 
        let randomIndex = Math.floor(Math.random() * 52)
        deck[i] = deck[randomIndex];
        deck[randomIndex] = tempCard;
    }
}
let testDeck = createDeck(); // skapar en ny testkortlek med hjälp av funktionen
shuffleDeck(testDeck); // blandar kortleken med hjälp av den funktionen
console.log(testDeck); // visar den blandade kortleken