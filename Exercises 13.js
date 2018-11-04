function targetTerdekat(arr) {
  var tampungO;
  var tampungX = []
  var jarak = arr.length+1

  for (var i = 0; i < jarak; i++) {
    if (arr[i] == 'o') {
      tampungO = i;
    } else if (arr[i] == 'x') {
      tampungX.push(i)
    }
  }

  for (var j = 0; j < tampungX.length; j++) {
    var tmp = Math.abs(tampungX[j] - tampungO)
    if (tmp < jarak) {
      jarak = tmp
    }
  }

  if (tampungX.length === 0) {
    return 0;
  }

  return jarak;
}
// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
