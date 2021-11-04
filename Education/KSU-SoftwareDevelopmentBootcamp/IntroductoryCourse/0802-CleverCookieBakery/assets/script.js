let yourName = "Scott Green"
document.getElementById('credit').textContent = `Created by ${yourName}`

let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

function updQtyTotal() {
    document.getElementById('qty-total').textContent = gb + cc + sugar;
}

function incGingerbread(){
    ++gb;
    document.getElementById('qty-gb').textContent = gb;
    updQtyTotal();
}
function decGingerbread(){
    --gb;
    if(gb < 0){
        gb = 0;
    }
    document.getElementById('qty-gb').textContent = gb;
    updQtyTotal();
}

function incChocolateChip(){
    ++cc;
    document.getElementById('qty-cc').textContent = cc;
    updQtyTotal();
}
function decChocloateChip(){
    --cc;
    if(cc < 0){
        cc = 0;
    }
    document.getElementById('qty-cc').textContent = cc;
    updQtyTotal();
}

function incSugarSprinkle(){
    ++sugar;
    document.getElementById('qty-sugar').textContent = sugar;
    updQtyTotal();
}
function decSugarSprinkle(){
    --sugar;
    if(sugar < 0){
        sugar = 0;
    }
    document.getElementById('qty-sugar').textContent = sugar;
    updQtyTotal();
}

document.getElementById('add-gb').addEventListener('click', function() {incGingerbread()})
document.getElementById('minus-gb').addEventListener('click', function() {decGingerbread()})
document.getElementById('add-cc').addEventListener('click', function() {incChocolateChip()})
document.getElementById('minus-cc').addEventListener('click', function() {decChocloateChip()})
document.getElementById('add-sugar').addEventListener('click', function() {incSugarSprinkle()})
document.getElementById('minus-sugar').addEventListener('click', function() {decSugarSprinkle()})
