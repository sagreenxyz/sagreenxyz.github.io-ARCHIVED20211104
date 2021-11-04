const debug = false; // toggle debug for console log messages

const advanceInterval = 5; // in seconds

const images = [
    './assets/1.jpg',
    './assets/2.jpg',
    './assets/3.jpg',
    './assets/4.jpg',
    './assets/5.jpg',
    './assets/6.jpg'
];

let docSlideShow = document.querySelector('.slideshow');
let docImage = document.querySelector('.image');
let docPreviousButton = document.querySelector('.previous.side-bar');
let docNextButton = document.querySelector('.next.side-bar');
let docBubbleButtons = document.querySelectorAll('.bubble');
let docControls = document.querySelector('.controls');

let imageIndex;
let imageButton;

function incIndex(i, length) {
    // take an array index value, compare to the length 
    // of the array, and provide the next index in sequence
    if(debug){console.log('function call incIndex')}
    if(i < 0){
        return 0;
    } else if(i < length - 1){
        return ++i; // return the next of the array
    } else {
        return 0; // return the first of the array
    }
}

function decIndex(i, length){
    // take an array index value, compare to the length 
    // of the array, and provide the previous index in sequence
    if(debug){console.log('function call decIndex')}
    if(i == 0 || i >= length){
        return --length; // return the last of the array
    } else if(i < 0){
        return 0;
    } else {
        return --i; // return the previous of the array
    }
}

function hideDocStuff() {
    if(debug){console.log('function call hideDocButtons')}
    docNextButton.style.display = 'block';
    docPreviousButton.style.display = 'block';
    docControls.style.visibility = 'hidden';
}

function unhideDocStuff() {
    if(debug){console.log('function call unhideDocButtons')}
    docNextButton.style.display = '';
    docPreviousButton.style.display = '';
    docControls.style.visibility = 'visible';
}

function nextImage(){
    if(debug){console.log('function call nextImage')}
    imageIndex = incIndex(imageIndex, images.length);
    docImage.setAttribute('src', images[imageIndex]);
    imageButton = document.querySelector('#button-' + imageIndex);
    imageButton.textContent = '●';
    imageButton = document.querySelector('#button-' + decIndex(imageIndex, images.length));
    imageButton.textContent = '○';
}

function prevImage(){
    if(debug){console.log('function call prevImage')}
    imageIndex = decIndex(imageIndex, images.length);
    docImage.setAttribute('src', images[imageIndex]);
    imageButton = document.querySelector('#button-' + imageIndex);
    imageButton.textContent = '●';
    imageButton = document.querySelector('#button-' + incIndex(imageIndex, images.length));
    imageButton.textContent = '○';
}

function clearButtons() {
    if(debug){console.log('function call clearButtons')}
    for(let x of docBubbleButtons){
        x.textContent = '○';
    }
}

function initializeImage() {
    // Select the img element and set its src to the 
    // first image path from the array of images.
    if(debug){console.log('function call initializeImage')}
    imageIndex = 0; // initialize the image index

    imageButton = document.querySelector('#button-' + imageIndex);
    imageButton.textContent = '●';

    docImage = document.querySelector('.image');
    docImage.setAttribute('src', images[imageIndex]);

    hideDocStuff();
}

initializeImage();

// advance the image every advanceInterval seconds
let intervalID = setInterval(nextImage, advanceInterval * 1000);

docNextButton.addEventListener('click', function(){
    nextImage();
});

docPreviousButton.addEventListener('click', function(){
    prevImage();
});

for(x of docBubbleButtons){
    x.addEventListener('click', function(e){
        imageIndex = e.target.getAttribute('id').replace('button-', '');
        docImage.setAttribute('src', images[imageIndex]);
        clearButtons();
        imageButton = document.querySelector('#button-' + imageIndex);
        imageButton.textContent = '●';
    });
}

docSlideShow.addEventListener('mouseover', unhideDocStuff);
docSlideShow.addEventListener('mouseout', hideDocStuff);
