import ( Mino } from "mino.js";
let Piece = {}

Mino.keys.forEach(element => {
  if (Mino[element] == 0 || Mino[element] == 8) return;
  Piece[element] = {
    "mino": Mino[element]
    create() {
      return {
        "rotations": {},
        "rotation": 0
      
        rotate(rotationAmount) {
          // TODO: Rotation code 
          this["rotation"] = (this["rotation"] + rotationAmount) % 4;
        }
      }
   }
});

export { Piece };
      
    
