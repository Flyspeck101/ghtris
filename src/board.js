import { Mino } from "./mino.js";

function Board() {
  let board = [];
  for (let i = 0; i < 600; i++) board.push(Mino.NONE);
  board.distLeftWall = tile => tile % 10;
  board.distRightWall = tile => 9 - tile % 10;
  board.distBottomWall = tile => tile / 10 - tile % 10;
  return board;
}

export { Board };
