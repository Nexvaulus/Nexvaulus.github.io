// menetapkan nyawa

nyawa = 11;
while(nyawa > 10) {
var nyawa = prompt("Mau berapa nyawa? (1 - 10)");
}

var habis = 0;  
var lagi = true;

// menangkap angka random dari comp
function angkaRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var x = angkaRandom(1,10);
console.log(x);

while(lagi == true) {
  while(nyawa >= habis) {
    // menangkap value dari player
    var player = prompt("Masukkan Angka diantara 1 sampai 10 :");

    // menampilkan clue
    if(player == x) {
      alert("Jawaban anda benar");
      nyawa = habis;
    }
    else if(player < x) {
      alert("Angka anda terlalu kecil");
      nyawa--;
      alert("Nyawa anda sisa " + nyawa)  
    }

    else if(player > x) {
      alert("Angka anda terlalu besar");
      nyawa--;
      alert("Nyawa anda sisa " + nyawa)  
    }
    else if(player == false) {
      nyawa - habis;
    }

    else {
      alert("invalid")
    }


    if(nyawa == 0) {
      lagi = confirm("Main lagi?")
      if(lagi == true) {
        nyawa + 3
      }
    }
  }
}
alert("Terimakasih sudah bermain")
