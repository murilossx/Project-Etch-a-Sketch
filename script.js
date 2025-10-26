    const container = document.querySelector("#container");
    const btn = document.querySelector("#btn");

    function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256); 
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return {r, g, b};
    }

    function rgbToString(color) {
    return `rgb(${color.r}, ${color.g}, ${color.b})`;
}

    for(let i = 1; i <= 256; i++) {
        const divGrid = document.createElement("div");
        divGrid.basecolor = getRandomRgbColor();
        divGrid.interaction = 0;
        divGrid.classList.add("squareGrid")
        container.appendChild(divGrid);
        divGrid.addEventListener('mouseenter', (e) => {
            if(divGrid.interaction < 10) {
         divGrid.interaction++;
            }
         let factor = 1 - divGrid.interaction * 0.1;
        const darkenedColor = {
            r: Math.floor(divGrid.basecolor.r * factor),
            g: Math.floor(divGrid.basecolor.g * factor),
            b: Math.floor(divGrid.basecolor.b * factor)
        };
        divGrid.style.backgroundColor = rgbToString(darkenedColor);
        })
    }

    btn.addEventListener('click', (e) => {
        let gridSize = 0;
        do {
        gridSize = parseFloat(prompt("Please enter the grid size (the maximum is 100)"));
        } while(gridSize > 100);
        container.innerHTML = "";
        tamanhoGrid = 960 / gridSize;
        for(let i = 1; i <= gridSize * gridSize; i++) { 
        const divGrid = document.createElement("div");
        divGrid.basecolor = getRandomRgbColor();
        divGrid.interaction = 0;
        divGrid.style.width = tamanhoGrid + "px";
        divGrid.style.height = tamanhoGrid + "px";
        divGrid.classList.add("squareGrid")
        container.appendChild(divGrid);
        divGrid.addEventListener('mouseenter', (e) => {
            if(divGrid.interaction < 10) {
         divGrid.interaction++;
            }
         let factor = 1 - divGrid.interaction * 0.1;
        const darkenedColor = {
            r: Math.floor(divGrid.basecolor.r * factor),
            g: Math.floor(divGrid.basecolor.g * factor),
            b: Math.floor(divGrid.basecolor.b * factor)
        };
        divGrid.style.backgroundColor = rgbToString(darkenedColor);
        })
        }
    })