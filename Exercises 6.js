function angkaPalindrome(num) {

    while (true) {
        num++ // menambahkan num 

        var hasil = ''
        var angka = num.toString()

        for (var i = angka.length - 1; i >= 0; i--) {
            hasil = hasil + angka[i]
            // console.log('num = ' + num)
            // console.log('i ====> ' + i)
            // console.log('hasil ===> ' + hasil)
        }
        if (num == hasil) {
            return Number(hasil)
        }

    }
}


console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(55)); //66
// '18'

// i = 0
// i >=