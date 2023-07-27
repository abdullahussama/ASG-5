var container = document.querySelector('.parent');


function changeColor(e) {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = randomColor;
    setTimeout(() => {
        e.target.style.backgroundColor = 'grey'; 
    }, 1000);
}

for(let i = 0 ; i <= 178 ; i++){
    var square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', changeColor);
    container.appendChild(square);
}