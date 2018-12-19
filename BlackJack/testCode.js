var stack = [
    {suite:'hearts', value:2, img:'BlackJack/cards/2H.jpg'},
    {suite:'hearts', value:3, img:'BlackJack/cards/3H.jpg'},
    {suite:'hearts', value:4, img:'/BlackJack/cards/4H.jpg'},
    {suite:'hearts', value:5, img:'/BlackJack/cards/5H.jpg'},
    {suite:'hearts', value:6, img:'/BlackJack/cards/6H.jpg'},
    {suite:'hearts', value:7, img:'/BlackJack/cards/7H.jpg'},
    {suite:'hearts', value:8, img:'/BlackJack/cards/8H.jpg'},
    {suite:'hearts', value:9, img:'/BlackJack/cards/9H.jpg'},
    {suite:'hearts', value:10, img:'/BlackJack/cards/10H.jpg'},
    {suite:'clubs', value:2, img:'/BlackJack/cards/2C.jpg'},
    {suite:'clubs', value:3, img:'/BlackJack/cards/3C.jpg'},
    {suite:'clubs', value:4, img:'/BlackJack/cards/4C.jpg'},
    {suite:'clubs', value:5, img:'/BlackJack/cards/5C.jpg'},
    {suite:'clubs', value:6, img:'/BlackJack/cards/6C.jpg'},
    {suite:'clubs', value:7, img:'/BlackJack/cards/7C.jpg'},
    {suite:'clubs', value:8, img:'/BlackJack/cards/8C.jpg'},
    {suite:'clubs', value:9, img:'/BlackJack/cards/9C.jpg'}
];
//console.log(stack[1].img)
//console.log(stack.length)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
//console.log(getRandomIntInclusive(1,16))

dealerHandArray = []
playerHandArray = []

//DEAL function
function deal(){
    // dealerHand.append(dealerHand1)
    // dealerHand.append(dealerHand2)
    // playerHand.append(playerHand1)
    // playerHand.append(playerHand2)
    dealerHandArray[0] = stack.splice((getRandomIntInclusive(1,stack.length)),1);
    console.log(stack.length)
    dealerHandArray[1] = stack.splice((getRandomIntInclusive(1,stack.length)),1);
    console.log(stack.length)
}
deal()
console.log(dealerHandArray)

