var input = 'hello world!'

function balikString(input) {
    var hasil = ''
    for (var i = input.length - 1; i >= 0; i--) {
        hasil = hasil + (input[i])
    }
    return hasil
}

console.log(balikString(input))
console.log(balikString('hello world'))

// //akses nilai dalam array

// var input = "hello world!";

// function balikString(input){
//   var i = (input.length);
//   var j = "";
//   for(i; i>=1; i--){
//     j = j + (input[i-1]);
//   }
//   return j;
// }

// console.log (balikString(input));