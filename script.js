const cellElements = document.querySelectorAll("[data-cell]");
const board = document.querySelector("[data-boarg]");

let isCircleturn = false

const plack = (cell, classToAdd) => {
    cell.classList.add(classToAdd);
}

const swapt = () => {
    isCircleturn = !isCircleturn;

    board.classList.remove("circlo");
    board.classList.remove("x");

    if(isCircleturn){
        board.classList.add("circlo")
    }else{
        board.classList.add("x")
    }
}

const handclick = (e) => {
    //colocar a marca (x ou circulo)
    const cell = e.target;
    const classToAdd = isCircleturn ? "circlo" : "x"

    plack(cell, classToAdd);
    //verificar por vitoria
    //verificar por empate
    // mudar simbolo

    swapt();
}

for( const cell of cellElements){
    cell.addEventListener("click", handclick, {once: true});
}