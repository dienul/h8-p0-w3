function groupAnimals(animals) {
    var tampung = []
    var index = 0
    animals.sort()

    for (var i = 0; i < animals.length; i++) {
        if (tampung.length === 0) {
            tampung.push([animals[i]])
        } else if (tampung[index][0][0] === animals[i][0]) {
            tampung[index].push(animals[i])
        } else {
            tampung.push([animals[i]])
            index++
        }
    }
    return tampung

}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
//[ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
//   console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]