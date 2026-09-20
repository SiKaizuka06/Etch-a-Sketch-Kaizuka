const grid = document.querySelector(".gridContainer");
const newGridBtn = document.getElementById("newGridBtn");
const resetButton = document.querySelector(".reset");

function createGrid(size = 16) {
    grid.style.setProperty("--grid-size", size);

    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("square");
        grid.appendChild(div);
    }
};

function createNewGrid() {
    let size = parseInt(prompt("Enter number of squares per side (max 100):"));

    if (isNaN(size) || size < 1) {
        alert("Please enter a valid number!");
        return;
    }
    if (size > 100) {
        alert("Maximum is 100! Setting to 100.");
        size = 100;
    }

    grid.innerHTML = "";

    createGrid(size);
}

grid.addEventListener("mouseover", function (event) {
    if (event.target.classList.contains("square")) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        let currentOpacity = parseFloat(event.target.style.opacity) || 0;

        if (currentOpacity < 1) {
            event.target.style.opacity = Math.min(currentOpacity + 0.1, 1);
        }
    }
});

newGridBtn.addEventListener("click", createNewGrid);

resetButton.addEventListener("click", function () {
    grid.innerHTML = "";
    createGrid(16);
});

createGrid(16);