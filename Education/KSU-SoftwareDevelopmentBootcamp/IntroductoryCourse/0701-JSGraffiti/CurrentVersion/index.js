let header = document.querySelector('#page-header');
header.style.textAlign = 'left';

let dogImages = document.querySelectorAll('.dog-image');
for(let i = 0; i < dogImages.length; i++){
    dogImages[i].style.borderRadius = '50px';
}

let dogNames = document.querySelectorAll('.dog-name');
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.textAlign = 'left';
}

let dogFooter = document.querySelector('.footer');
dogFooter.style.backgroundColor = 'cornflowerblue';
dogFooter.style.color = 'black';
dogFooter.style.borderStyle = 'solid';
dogFooter.style.fontWeight = 'bold';

dogNames = document.querySelectorAll('.dog-name');
for(let i = 0; i < dogNames.length; i++){
    dogNames[i].style.backgroundColor = 'lightgreen';
}

for(let i=0; i < dogImages.length; i++){
    dogImages[i].style.transform = 'scaleY(-1)';
}
