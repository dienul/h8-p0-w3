function tentukanDeretAritmatika(arr) {
    var selisih = []
    

    // buat array selisih antar komponen
    for (var i = 0; i < arr.length - 1; i++) {
        selisih[i] = arr[i + 1] - arr[i]
        console.log(selisih)

        // periksa apakah semua selisih sama 
        if (i > 0 && selisih[i] !== selisih[i - 1]) {
            return false
        }
        
    }
    return true
}


// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false