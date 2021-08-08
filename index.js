let size = 20;

let board = "";



for (let column = 0; column < size; column++) {
    for (let row = 0; row < size; row++) {
        if ((row + column) % 2 == 0) {
            board += "#";
        } else {
            board += " ";
        }

    }
    board += "\n";
}

console.log(board);
