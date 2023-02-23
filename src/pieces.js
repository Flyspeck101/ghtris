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

let rotationData = {
  "Z": {
      "01": [
          -1,
          9,
          -20,
          -21
      ],
      "10": [
          1,
          -9,
          20,
          21
      ],
      "12": [
          1,
          9,
          20,
          21
      ],
      "21": [
          -1,
          9,
          -20,
          -21
      ],
      "23": [
          1,
          11,
          -20,
          -19
      ],
      "32": [
          -1,
          -11,
          20,
          19
      ],
      "30": [
          -1,
          -11,
          20,
          19
      ],
      "03": [
          1,
          11,
          -20,
          -19
      ],
      "02": [
          10,
          11,
          9,
          1,
          -1
      ],
      "13": [
          1,
          21,
          11,
          20,
          10
      ],
      "20": [
          -10,
          -11,
          -9,
          -1,
          1
      ],
      "31": [
          -1,
          19,
          9,
          20,
          10
      ]
    },

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
      
    
