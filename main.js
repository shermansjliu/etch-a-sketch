let canvas = document.querySelector('.canvas');
let height_txt = getComputedStyle(canvas).height;
let canvas_hw = "";

for(let i = 0; i < height_txt.length; i++){
    if (parseInt(height_txt[i]) || parseInt(height_txt[i]) == 0){
        canvas_hw += height_txt[i]
    }
}

canvas_hw = parseInt(canvas_hw)
let numSquares = 16;
let square_hw = canvas_hw / (numSquares);
let gridSize = document.querySelector('.grid-size');

gridSize.addEventListener('click', (e) => {
    let isNum = false
    do {
        numSquares = prompt("Insert a number between 1 and 100 (both inclusive)");

    } while (!(parseInt(numSquares) && numSquares <= 100 && numSquares >= 1 ))
    createCanvas()
});

numSquares = Math.ceil(numSquares);

function createSquare () {
     let square = document.createElement('div');

     square.style.cssText = `height: ${square_hw}px;
                                            width: ${square_hw}px;
                                            background-color: rgb(255,255,255);
                                            `
     square.classList.add('square');
     return square
}
function getRandomColor () {
    let color = "";
    for (let i = 0; i < 3; i++){
        color += `${Math.floor(Math.random() * (256))},`

    }
    color = color.substr(0, color.length-1)
    return `rgb(${color})`;
}


function darken(color) {
    let color_str = "";
    let result = "";
    for (let i = 0; i < color.length; i++ ){
        if (parseInt(color[i]) || parseInt(color[i]) == 0 || color[i] == ',') {
            color_str += color[i];
        }
    }
    let color_list = color_str.split(',');

    for (let i = 0; i < color_list.length; i++) {
        result  += `${color_list[i] - 255 * 1/10},`;
    }
    result = result.substr(0, result.length - 1)
    return `rgb(${result})`
}

  function createCanvas () {
      let boxes = document.querySelectorAll('.square');
      numBoxes = boxes.length

      boxes.forEach((box) =>{
          canvas.removeChild(box)
      })

      square_hw =  canvas_hw / (numSquares);
      canvas.style.gridTemplateColumns = `repeat(${numSquares},  ${square_hw}px)`;
      canvas.style.gridTemplateRows = `repeat(${numSquares}, ${square_hw}px)`;

       // = `grid-template-columns: repeat(1fr, ${numSquares});
       //                                          grid-template-rows: repeat(1fr, ${numSquares});`
    for (let i = 0; i < numSquares; i++) {
        for (let j = 0; j < numSquares; j++){
            let newSquare = createSquare();
            canvas.appendChild(newSquare)
        }
    }

    let selectMenu = document.querySelector('select');
    selectMenu.addEventListener('change', (e) => {
        color = e.target.options[e.target.selectedIndex].getAttribute('value');

    });
    let color = 'black';
    let squares = document.querySelectorAll('.square');
    squares.forEach((box) => {
        box.addEventListener('mouseenter', (e) => {
            switch (color){
                case 'random':
                    box.style.backgroundColor = getRandomColor();
                    break;
                case 'black':
                    box.style.backgroundColor = 'rgb(0,0,0)';
                    break;
                case 'gradual-black':
                    box.style.backgroundColor = darken(box.style.backgroundColor);
                    break;
            }

        });
    });
}





let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", () => {
    let squares = document.querySelectorAll('.square')
    squares.forEach((square) => {
        square.style.backgroundColor = 'rgb(255,255,255)';
    })

});


createCanvas();
