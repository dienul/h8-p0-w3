function palindrome(kata) {
    var jumlah = '';
    for (var i = kata.length - 1; i >= 0; i--) {
        jumlah += kata[i];
        console.log(i + " = " + jumlah)
    }
    console.log(jumlah)
    if (kata === jumlah) {
        return true
    } else {
        return false
    }
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false