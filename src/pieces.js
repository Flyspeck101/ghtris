import ( Mino } from "mino.js";
let Piece = {}
let spawnPositions = {
  "Z": [313, 314, 304, 305], 
  // 01
  //  23
  "L": [315, 303, 304, 305], 
  //   0
  // 123
  "O": [314, 315, 304, 305], 
  //  01
  //  23
  "S": [314, 315, 303, 304], 
  //  01
  // 23
  "I": [313, 314, 315, 316], 
  // 0123
  //
  "J": [313, 323, 324, 325], 
  // 0
  // 123
  "T": [314, 303, 304, 305],
  //  0
  // 123
};

Mino.keys.forEach(element => {
  if (Mino[element] == 0 || Mino[element] == 8) return;
  Piece[element] = {
    "mino": Mino[element]
    create() {
      return {
        "rotation": 0, 
        "minos": spawnPositions[element];
      
        rotate(rotationAmount) {
          // TODO: Rotation code 
          let previousRotation = this["rotation"];
          this["rotation"] = (this["rotation"] + rotationAmount) % 4;
        }
      }
   }
});

export { Piece };
      
    
