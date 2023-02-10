import * from "./mino.js";

function Board() {
  let board = [];
  for (let i = 0; i < 600; i++) board.push(Mino.NONE);
  board.onLeftWall = tile => tile % 10 == 0;
  board.onRightWall = tile => tile % 10 == 9;
  board.onBottomWall = tile => tile < 10;
  return board;
}

export { Board };
