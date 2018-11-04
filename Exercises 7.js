// algoritma :
// 1. buat function untuk memanggil kalimat yang di ingin kan
// 2. but looping untuk menghitung ada berapa kata dalam kalimat 
// 3. buat kondisi untuk memisah kata dengan kata lain nya 
// 4. tampilkan hasil nya 

function hitungJumlahKata(kalimat) {
    var jumlahKata = 0
    var kata = '';
    kalimat = ' ' + kalimat // menambah kan spasi depan kalimat 
    for (var i = 0; i < kalimat.length; i++) {
        //console.log('i = ' + i + ' kalimat = ' + kalimat[i])
        if (kalimat[i] !== ' ' && kalimat[i - 1] === ' ') {
            //console.log('cel 1 = ' + kalimat[i])
            jumlahKata++
        } 
        // else if (kalimat[i - 1] === undefined) {
        //     //console.log('i', i)
        //     //console.log(kalimat[i - 1], ' === ', kalimat[0-1])
        //     jumlahKata++
        // }


    // }
    // if(kalimat[0]!==' '){
    //     jumlahKata++
    }
    return jumlahKata
}

// TEST CASES
console.log(hitungJumlahKata('       I have a dream       ')); // 4
console.log(hitungJumlahKata(' Never eat shredded wheat or cake ')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5



// algo:
// sebelum spasi di jumlah ke dalam jumlahKata 
// spasi tidak dihitung dalam jumlahKata 
// spasi tidak sama dengan kata