let canvas = document.querySelector('.canvas');
let height_txt = getComputedStyle(canvas).height;
let canvas_hw = "";
console.log(canvas_hw);
for(let i = 0; i < height_txt.length; i++){
    if (parseInt(height_txt[i]) || parseInt(height_txt[i]) == 0){
        canvas_hw += height_txt[i]
    }
}

canvas_hw = parseInt(canvas_hw)


let squares = 16;
let square_hw = canvas_hw / (squares);


let gridSize = document.querySelector('.grid-size');

gridSize.addEventListener('click', (e) => {
    let isNum = false

    do {
        squares = prompt("Insert a number between 1 and 100 (both inclusive)");

    } while (!(typeof(squares) == num && sqaures <= 100 && sqaures >= 1 ))
});

squares = Math.ceil(squares);

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
      canvas.style.gridTemplateColumns = `repeat(${squares},  ${square_hw}px)`;
      canvas.style.gridTemplateRows = `repeat(${squares}, ${square_hw}px)`;

       // = `grid-template-columns: repeat(1fr, ${squares});
       //                                          grid-template-rows: repeat(1fr, ${squares});`
    for (let i = 0; i < squares; i++) {
        for (let j = 0; j < squares; j++){
            let newSquare = createSquare();
            canvas.appendChild(newSquare)
        }
    }
    let color = 'black';
    let boxes = document.querySelectorAll('.square');
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', (e) => {

            box.style.backgroundColor = `${color}`
        });
    });

}



createCanvas();
