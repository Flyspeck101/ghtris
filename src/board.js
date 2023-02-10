import * as Mino from "./src/mino.js";

function Board() {
  let board = [];
  for (let i = 0; i < 600; i++) board.push(Mino.Mino.NONE);
  return board;
}

export { Board };
