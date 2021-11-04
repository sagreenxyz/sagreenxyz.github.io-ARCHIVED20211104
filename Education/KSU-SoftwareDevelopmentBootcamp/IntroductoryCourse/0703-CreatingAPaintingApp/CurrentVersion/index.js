let selectedColor = 'blue'; // start off with the color blue selectedColor

let palette = document.querySelector('.palette');

// otherwise, change to the color the user selects
palette.addEventListener('click', function(e){
    selectedColor = e.target.getAttribute('id');
});

// listeners to let the user draw and erase
let painting = document.querySelector('.painting');

painting.addEventListener('click', function(e){
    e.target.style.backgroundColor = selectedColor; // draw
});

painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor = 'white'; // erase
});

let clearButton = document.querySelector('#btnClear');

// with the click of a button, the user can clear all pixels
let pixels = document.querySelectorAll('.pixel');

clearButton.addEventListener('click', function(){
    for(let i = 0; i < pixels.length; i++){
        pixels[i].style.backgroundColor = 'white';
    }
});


