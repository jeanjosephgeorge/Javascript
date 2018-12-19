// HardCoding the card values
var stack = [
    {suite:'hearts', value:2, img:'./cards/2H.jpg'},
    {suite:'hearts', value:3, img:'./cards/3H.jpg'},
    {suite:'hearts', value:4, img:'./cards/4H.jpg'},
    {suite:'hearts', value:5, img:'./cards/5H.jpg'},
    {suite:'hearts', value:6, img:'./cards/6H.jpg'},
    {suite:'hearts', value:7, img:'./cards/7H.jpg'},
    {suite:'hearts', value:8, img:'./cards/8H.jpg'},
    {suite:'hearts', value:9, img:'./cards/9H.jpg'},
    {suite:'hearts', value:10, img:'./cards/10H.jpg'},
    {suite:'clubs', value:2, img:'./cards/2C.jpg'},
    {suite:'clubs', value:3, img:'./cards/3C.jpg'},
    {suite:'clubs', value:4, img:'./cards/4C.jpg'},
    {suite:'clubs', value:5, img:'./cards/5C.jpg'},
    {suite:'clubs', value:6, img:'./cards/6C.jpg'},
    {suite:'clubs', value:7, img:'./cards/7C.jpg'},
    {suite:'clubs', value:8, img:'./cards/8C.jpg'},
    {suite:'clubs', value:9, img:'./cards/9C.jpg'},
    {suite:'clubs', value:10, img:'./cards/10C.jpg'},
    {suite:'diamonds', value:2, img:'./cards/2D.jpg'},
    {suite:'diamonds', value:3, img:'./cards/3D.jpg'},
    {suite:'diamonds', value:4, img:'./cards/4D.jpg'},
    {suite:'diamonds', value:5, img:'./cards/5D.jpg'},
    {suite:'diamonds', value:6, img:'./cards/6D.jpg'},
    {suite:'diamonds', value:7, img:'./cards/7D.jpg'},
    {suite:'diamonds', value:8, img:'./cards/8D.jpg'},
    {suite:'diamonds', value:9, img:'./cards/9D.jpg'},
    {suite:'diamonds', value:10, img:'./cards/10D.jpg'},
    {suite:'spades', value:2, img:'./cards/2S.jpg'},
    {suite:'spades', value:3, img:'./cards/3S.jpg'},
    {suite:'spades', value:4, img:'./cards/4S.jpg'},
    {suite:'spades', value:5, img:'./cards/5S.jpg'},
    {suite:'spades', value:6, img:'./cards/6S.jpg'},
    {suite:'spades', value:7, img:'./cards/7S.jpg'},
    {suite:'spades', value:8, img:'./cards/8S.jpg'},
    {suite:'spades', value:9, img:'./cards/9S.jpg'},
    {suite:'spades', value:10, img:'./cards/10S.jpg'},
    {suite:'clubs', value:10, img:'./cards/AC.jpg'},
    {suite:'diamonds', value:10, img:'./cards/AD.jpg'},
    {suite:'hearts', value:10, img:'./cards/AH.jpg'},
    {suite:'spades', value:10, img:'./cards/AS.jpg'},
    {suite:'clubs', value:10, img:'./cards/JC.jpg'},
    {suite:'diamonds', value:10, img:'./cards/JD.jpg'},
    {suite:'hearts', value:10, img:'./cards/JH.jpg'},
    {suite:'spades', value:10, img:'./cards/JS.jpg'},
    {suite:'clubs', value:10, img:'./cards/KC.jpg'},
    {suite:'diamonds', value:10, img:'./cards/KD.jpg'},
    {suite:'hearts', value:10, img:'./cards/KH.jpg'},
    {suite:'spades', value:10, img:'./cards/KS.jpg'},
    {suite:'clubs', value:10, img:'./cards/QC.jpg'},
    {suite:'diamonds', value:10, img:'./cards/QD.jpg'},
    {suite:'hearts', value:10, img:'./cards/QH.jpg'},
    {suite:'spades', value:10, img:'./cards/QS.jpg'}
];

//DEAL function
function deal(){

    //Setting Empty Arrays
    dealerHandArray = []
    dealerHandArray.length = 0; // Clearing previously filled array
    playerHandArray = []
    playerHandArray.length = 0; // Clearing previously filled array

    //Randomly generating numbers
    dealerHandArray[0] = stack.splice((getRandomIntInclusive(1,stack.length)),1);
    dealerHandArray[1] = stack.splice((getRandomIntInclusive(1,stack.length)),1);
    playerHandArray[0] = stack.splice((getRandomIntInclusive(1,stack.length)),1);
    playerHandArray[1] = stack.splice((getRandomIntInclusive(1,stack.length)),1);


    // Creating DEALER parent
    var dealerHand = document.getElementById('dealer-hand')
    //Clearing previous array incase it was already populated
    dealerHand.innerHTML="";
    // Creating FIRST DEALER hand
    var dealerHand1 = document.createElement('img');
    dealerHand1.src=dealerHandArray[0][0].img;
    dealerHand1.setAttribute('style','height:110px; margin:10px');
    dealerHand.appendChild(dealerHand1);
   //Creating SECOND DEALER hand 
    var dealerHand2 = document.createElement('img');
    dealerHand2.src = dealerHandArray[1][0].img;
    dealerHand2.setAttribute('style','height:110px; margin:10px');
    dealerHand.appendChild(dealerHand2);
    

    //Creating PLAYER parent
    var playerHand = document.getElementById('player-hand')
    //Clearing previous array incase it was already populated
    playerHand.innerHTML="";
    //Creating FIRST PLAYER hand
    var playerHand1 =  document.createElement('img');
    playerHand1.src = playerHandArray[0][0].img;
    playerHand1.setAttribute('style','height:110px; margin:10px');
    playerHand.appendChild(playerHand1)
    //Creating SECOND PLAYER hand
    var playerHand2 = document.createElement('img');
    playerHand2.src = playerHandArray[1][0].img;
    playerHand2.setAttribute('style','height:110px; margin:10px');
    playerHand.appendChild(playerHand2)


    //POINTS
        //Player Points
        var playerValue = playerHandArray[0][0].value+playerHandArray[1][0].value
        var playerPoints = document.getElementById('player-points');
        playerPoints.textContent = Number(playerValue);
        //Dealer Points
        var dealerValue = dealerHandArray[0][0].value+dealerHandArray[1][0].value
        var dealerPoints = document.getElementById('dealer-points');
        dealerPoints.innerHTML = Number(dealerValue);

    //Calling the disable deal function after executing the whole program
    disableDeal()
    checkOne()
}

//HAVE TO RELOAD THE STACK
function reset(){
    location.reload()
}
//The DISABLE DEAL function
function disableDeal(){
    document.getElementById('deal-button').disabled = true;
}
//The DISABLE HIT function
function disableHit(){
    document.getElementById('hit-button').disabled = true;
}

function checkOne(){

    var playerPoints = document.getElementById('player-points').innerHTML
    var dealerPoints = document.getElementById('dealer-points').innerHTML
    
    if (playerPoints == 21){
        messageWin()
    } else if (playerPoints > 21){
        messageLose()
    } else if (dealerPoints > 21) {
        messageWin()
    }
}

function messageWin(){
    var overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id','overlay');
    overlayDiv.setAttribute('style','position:absolute; width:100%; height: 200px; background-image: linear-gradient(to right, rgba(255,255,0,0), rgba(255,255,0,1), rgba(255,255,0,0)); top: 190px; text-align: center; font-size: 150px; opacity: .85;')
    overlayDiv.textContent='A Win!'
    document.body.appendChild(overlayDiv)
}
function messageLose(){
    var overlayDiv = document.createElement('div');
    overlayDiv.setAttribute('id','overlay');
    overlayDiv.setAttribute('style','position:absolute; width:100%; height: 200px; background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1), rgba(255,0,0,0)); top: 190px; text-align: center; font-size: 150px; opacity: .9;')
    overlayDiv.textContent='You Lose!'
    document.body.appendChild(overlayDiv)
}

//HIT function
function hit(){
    
        //Generating Random Card
        playerHandArray[(playerHandArray.length)] = stack.splice((getRandomIntInclusive(1,stack.length)),1);
        //Creating connection to Parent DIV
        var playerHand = document.getElementById('player-hand')
        //Adding it to stack
        var playerHand3 = document.createElement('img');
        playerHand3.src = playerHandArray[(playerHandArray.length)-1][0].img;
        playerHand3.setAttribute('style','height:110px; margin:10px');
        playerHand.appendChild(playerHand3)


        // Adding value of card to playerscore
        var playerPoints = document.getElementById('player-points');
        var sum = (Number(playerPoints.innerHTML) + (playerHandArray[(playerHandArray.length)-1][0].value))
        playerPoints.innerHTML = sum;
        checkOne()
}

// STAND FUNCTION
function stand(){
    //Getting point status
    var dealerPoints = document.getElementById('dealer-points');
    //Creating connection to parent DIV
    var dealerHand = document.getElementById('dealer-hand')
    //Adding card to stack
    var dealerHand3 = document.createElement('img')
    dealerHand3.src = dealerHandArray[(dealerHandArray.length)-1][0].img;
    dealerHand3.setAttribute('style','height:110px; margin: 10px');
    dealerHand.appendChild(dealerHand3)

    //Adding value of card to dealerscore
    var dsum = (Number(dealerPoints.innerHTML)+(dealerHandArray[(dealerHandArray.length)-1][0].value))
    dealerPoints.innerHTML = dsum;
    
    //Checking condition
    if (dealerPoints<=17){
        
    }
    checkOne()
}



// RANDOM NUMBER GENERATOR BETWEEN RANGE
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
// POINTS CALCULATOR:
// var playerPoints = document.getElementById('player-points')

// sum = playerHandArray[0][0].value + playerHandArray[1][0].value;
// playerPoints.innerHTML = sum;


// DEAL BUTTON
var dealButton = document.getElementById('deal-button');
dealButton.addEventListener('click',deal);

// HIT BUTTON
var hitButton = document.getElementById('hit-button');
hitButton.addEventListener('click',hit);

// STAND BUTTON
var standButton = document.getElementById('stand-button');
standButton.addEventListener('click',stand)

// RELOAD BUTTON
var reloadButton = document.getElementById('reset-button');
reloadButton.addEventListener('click',reset)






// Creating DEALER parent
// var dealerHand = document.getElementById('dealer-hand')
// // Creating dealer hand
// var dealerHand1 = document.createElement('img');
// dealerHand1.src = dealerHandArray[0].img;
// dealerHand1.setAttribute('style','height:110px; margin:10px');
// //document.getElementById('dealer-hand').appendChild(dealerHand1);

// var dealerHand2 = document.createElement('img');
// dealerHand2.src = dealerHandArray[1].img;
// dealerHand2.setAttribute('style','height:110px; margin:10px');


// //Creating PLAYER parent
// var playerHand = document.getElementById('player-hand')
// //Creating player hand
// var playerHand1 =  document.createElement('img');
// playerHand1.setAttribute('src''/cards/2H.jpg')
// playerHand1.setAttribute('style','height:110px; margin:10px');
// //document.getElementById('player-hand').appendChild(playerHand1);

// var playerHand2 = document.createElement('img');
// playerHand2.setAttribute('src','/cards/5C.jpg');
// playerHand2.setAttribute('style','height:110px; margin:10px');
