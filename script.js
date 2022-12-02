const gridContainer = document.querySelector(".gridContainer");


function generateGrid(size) {
        //set up grid dimensions 
        if (size > 100) {
            size = 100;
        }
        gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`
        gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`


        for (let i = 0; i < size*size; i++) {
    let box = document.createElement("div");
    console.log("generate func test");
    box.classList.add("genBox");
    gridContainer.append(box);
        }

}

generateGrid(64);
