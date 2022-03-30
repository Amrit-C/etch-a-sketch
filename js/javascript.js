const container = document.querySelector('.container');

// document.documentElement.style.setProperty('--size',16);

makeGrid(16); 

function makeGrid(size){
    for (let i=0; i<(size*size); i++){
        const div = document.createElement(`div`);
        div.classList.add("myDiv");
        container.appendChild(div);
    }
}

const divs = document.querySelectorAll('.myDiv');
divs.forEach(addingEventListener);
// divs.forEach(setTimeout(removeEventListener,1));

function addingEventListener(div){
    div.addEventListener('mouseover', function(){
        div.classList.add("hover");
    })

}

// function removeEventListener(div){
//     div.addEventListener("mouseout", function (){
//         div.classList.remove("hover");
//     })
// }