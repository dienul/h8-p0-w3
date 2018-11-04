var arr = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"];

arr.splice(1, 2, "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung")
arr.splice(4, 1, "Pria", "SMA Internasional Metro")

console.log (arr)

var date = arr[3].split("/")

switch (date[1]){
  case '01':
    bulan = 'Januari';
    break;
  case '02':
    bulan = ' febuari';
    break;
  case '03':
    bulan = 'maret';
    break;
  case '04':
    bulan = 'April';
    break;
  case '05':
    bulan = 'Mei';
    break;
  case '06':
    bulan = 'Juni';
    break;
  case '07':
    bulan = 'Juli';
  case '08':
    bulan = 'Agustus';
    break;
  case '09':
    bulan = 'September';
    break;
  case '10':
    bulan = 'Oktober';
    break;
  case '11':
    bulan = 'November';
    break;
  case '12':
    bulan = 'Desember';
    break;

}

date.sort(function (value1, value2) { return value2 - value1 });


console.log(date);
console.log(bulan);
console.log(arr[3].split('/').join('-'))
console.log (arr[1].slice(0,15));