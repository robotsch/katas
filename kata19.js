function generateBoard(whiteQueen, blackQueen) {
  const board = new Array(8).fill(0).map(() => new Array(8).fill(0));
  board[whiteQueen[0]][whiteQueen[1]] = 1;
  board[blackQueen[0]][blackQueen[1]] = 1;
  return board;
}

function queenThreat(whiteQueen, blackQueen) {
  // Check cardinals
  if (whiteQueen[0] === blackQueen[0] || whiteQueen[1] === blackQueen[1]) {
    return true;
  }
  // Check intercardinals with square math
  if (whiteQueen[0] - whiteQueen[1] === blackQueen[0] - blackQueen[1]) {
    return true;
  }
  if (whiteQueen[0] + whiteQueen[1] === blackQueen[0] + blackQueen[1]) {
    return true;
  }
  return false;
}

const whiteQueen = [0, 0];
const blackQueen = [5, 7];
const generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(queenThreat(whiteQueen, blackQueen));
for (let i = 0; i < generatedBoard.length; i += 1) {
  console.log(generatedBoard[i]);
}
