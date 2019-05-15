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
                                            backgroundColor: white;
                                            `
     square.classList.add('square');
     return square
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
    let color = 'black';
    let squares = document.querySelectorAll('.square');
    squares.forEach((box) => {
        box.addEventListener('mouseenter', (e) => {

            box.style.backgroundColor = `${color}`
        });
    });

}



createCanvas();
