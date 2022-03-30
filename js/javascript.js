const container = document.querySelector('.container');

document.documentElement.style.setProperty('--size',16);

makeGrid(16); 

function makeGrid(size){
    for (let i=0; i<(size*size); i++){
        const div = document.createElement(`div`);
        container.appendChild(div);
    }
}
