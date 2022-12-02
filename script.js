const sizeBtn = document.querySelector(".sizeBtn");
const gridContainer = document.querySelector(".gridContainer");


sizeBtn.addEventListener("click", function() {
let x = prompt("Enter num of n by n grid");
//clear existing grid
resetGrid();
generateGrid(x);

});
function generateGrid(size) {
        //set up grid dimensions 
        if (size > 100) {
            size = 100;
        }
        gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`


        for (let i = 0; i < size*size; i++) {
    let box = document.createElement("div");
    
    box.classList.add("genBox");
    gridContainer.append(box);
        }

}

function resetGrid() {
    gridContainer.innerHTML = "";
}


//gen default 64x64 grid
generateGrid(64);
