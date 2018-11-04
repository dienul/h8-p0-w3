function targetTerdekat(arr) {

    var arrO = []
    var arrX = []
    var index = []

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== ' ') {
            index.push(arr[i])
            arrO.push(i)
            console.log(index)
            console.log(arrO)
        }
        if (arrO.length >= index.length) {
            arrX.push(arrO[1] - arrO[0])
    // console.log (index[i])
        }

    }
    return arrX
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2