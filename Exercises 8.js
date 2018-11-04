function pasanganTerbesar(num) {
    var number = num.toString()
    var pasang = ''
    var banding = 0

    for (var i = 0; i < number.length - 1; i++) {
        pasang = number[i] + number[i + 1]
        console.log('pasang = ' + pasang)
        if (pasang > banding) {
            banding = Number(pasang)
            console.log('pasang = ' + pasang + ' > ' + 'banding = ' + banding)
        }
    }
    return banding
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99

// 1. buat berpsangan angka 
// 2. bandingkan antar angka dengan yang lain 
// 3. tentukan pasangan angka yang paling besar.