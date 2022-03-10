const maneuver = function(angle, turn) {
  if (turn === 'left') {
    if (angle === 0) {
      return 270;
    }
    return angle - 90;
  }
  if (angle === 270) {
    return 0;
  }
  return angle + 90;
};

const blocksAway = function(directions) {
  let north = 0;
  let east = 0;
  let angle = 0;

  // Initial direction and facing
  if (directions[0] === 'left') {
    north += directions[1];
  } else {
    angle = maneuver(0, directions[0]);
    east += directions[1];
  }

  // Parse the rest
  for (let i = 2; i < directions.length - 1; i += 2) {
    angle = maneuver(angle, directions[i]);
    switch (angle) {
    case 0:
      north += directions[i + 1];
      break;
    case 90:
      east += directions[i + 1];
      break;
    case 180:
      north -= directions[i + 1];
      break;
    case 270:
      east -= directions[i + 1];
      break;
    default:
      break;
    }
  }
  return { east, north };
};

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]));
console.log(blocksAway(['left', 1, 'right', 1, 'left', 1, 'right', 1, 'left', 1, 'right', 1]));
console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]));
