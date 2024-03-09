/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  let isBoardValid = false;
  let curBox = [];
  let curYLine = [];
  let curXLine = [];
  let yLevel = 1;
  let borderXCube = 3;
  let borderYCube = 3;
  board.forEach((x, xi) => {
    x.forEach((y, yi) => {
      if (xi < borderXCube && yi < borderYCube) {
        curBox.push(y);
      }
    });
    if (xi === borderXCube) {
      yLevel++;
      borderXCube += 3;
      curBox = [];
    }
    if (yLevel === 3) {
      yLevel = 0;
      borderYCube += 3;
    }
    console.log("curBox", curBox);
  });
};
