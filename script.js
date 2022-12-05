const sizeBtn = document.querySelector(".sizeBtn");
const clearBtn = document.querySelector(".clearBtn")
const gridContainer = document.querySelector(".gridContainer");

    //set up size btn
sizeBtn.addEventListener("click", function() {
let x = prompt("Enter num of n by ngit  grid");
//clear existing grid
resetGrid();
generateGrid(x);

});

//set up clear button

clearBtn.addEventListener('click',function() { 
    resetGrid();
    generateGrid(64);
})


        //gen grid func
function generateGrid(size) {
        //set up grid dimensions 
        if (size > 100) {
            size = 100;
        }
        gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`


        for (let i = 0; i < size*size; i++) {
    let box = document.createElement("div");
    box.addEventListener('mouseover',changeColor);

    box.classList.add("genBox");
    gridContainer.append(box);
        }

}
    //reset grid func
function resetGrid() {
    gridContainer.innerHTML = "";
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
    
}


//gen default 64x64 grid
generateGrid(64);
