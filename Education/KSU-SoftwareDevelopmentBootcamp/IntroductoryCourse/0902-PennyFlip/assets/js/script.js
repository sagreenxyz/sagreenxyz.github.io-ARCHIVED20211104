/*
 Set up missing HTML as the first step.
*/

let countHeads = document.getElementById('heads');
let pctHeads = document.getElementById('heads-percent');
let countTails = document.getElementById('tails');
let pctTails = document.getElementById('tails-percent');

document.addEventListener('DOMContentLoaded', function () {
    console.log('Document Loaded');
})

let oDiv = document.body.getElementsByTagName('div')[1];

let oImg = document.createElement('img');
oImg.setAttribute('id', 'penny-image');
oImg.setAttribute('alt', 'penny image');
oImg.setAttribute('src', 'assets/images/penny-heads.jpg');

oDiv.append(oImg);

let oDivControls = document.createElement('div');
oDivControls.setAttribute('class', 'controls');

let oButtonFlip = document.createElement('button');
oButtonFlip.setAttribute('id', 'flip');
oButtonFlip.textContent = 'Flip The Penny!';
oDivControls.append(oButtonFlip);

let oButtonClear = document.createElement('button');
oButtonClear.setAttribute('id', 'clear');
oButtonClear.textContent = 'Clear Scoreboard';
oDivControls.append(oButtonClear);

oDiv.append(oDivControls);

let oDivMessageContainer = document.createElement('div');
oDivMessageContainer.setAttribute('class', 'message-container');

let oMsg = document.createElement('h3');
oMsg.textContent = `Let's Get Rolling!`;

oDivMessageContainer.append(oMsg);

oDiv.append(oDivMessageContainer);

let totalCount = 0;
let totalHeads = 0;
let totalTails = 0;
let totalPctHeads = 0;
let totalPctTails = 0;

/*
The pertinent variables going forward...
oButtonFlip
oButtonClear
oImg
countHeads
pctHeads
countTails
pctTails
*/

oButtonFlip.addEventListener('click', function(e){
    if(Math.random() < 0.5){
        oImg.setAttribute('src', 'assets/images/penny-heads.jpg');
        ++totalHeads;
    } else {
        oImg.setAttribute('src', 'assets/images/penny-tails.jpg');
        ++totalTails;
    }
    ++totalCount;
    totalPctHeads = Math.round(totalHeads / totalCount * 100);
    totalPctTails = Math.round(totalTails / totalCount * 100);
    countHeads.textContent = totalHeads;
    pctHeads.textContent = totalPctHeads + '%';
    countTails.textContent = totalTails;
    pctTails.textContent = totalPctTails + '%';

    console.log(totalCount);
    console.log(totalHeads);
    console.log(totalPctHeads);
    console.log(totalTails);
    console.log(totalPctTails);
})

oButtonClear.addEventListener('click', function(e){
    totalCount = 0;
    totalHeads = 0;
    totalPctHeads = 0;
    totalTails = 0;
    totalPctTails = 0;
    countHeads.textContent = totalHeads;
    pctHeads.textContent = totalPctHeads + '%';
    countTails.textContent = totalTails;
    pctTails.textContent = totalPctTails + '%';
    oImg.setAttribute('src', 'assets/images/penny-heads.jpg');
})
