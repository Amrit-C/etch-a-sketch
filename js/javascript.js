const container = document.querySelector('.container');

// document.documentElement.style.setProperty('--size',16);

makeGrid(16); 


function makeGrid(size){
    for (let i=0; i<(size*size); i++){
        const div = document.createElement(`div`);
        div.classList.add("myDiv");
        container.appendChild(div);
    }
    setListeners();
}

function setListeners (){
    const divs = document.querySelectorAll('.myDiv');
    divs.forEach(addingEventListener);
    
    const btns = document.querySelectorAll(".button");
    btns.forEach(buttonEventListener);
}


function addingEventListener(div){
    div.addEventListener('mouseover', function(){
        div.classList.add("hover");
    })
}


function buttonEventListener(btn){
    btn.addEventListener('click', resetGrid)
}



function resetGrid(){
    container.innerHTML = '';
    let size = prompt("Please enter size of grid.");

    while((size>100)||(size == 0)){
        size = prompt("You entered an invalid size. Please enter again");
    }
    makeGrid(size);
}
