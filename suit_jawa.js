var tanya = true;
while(tanya) {

    // menangkap pilihan player
    var player = prompt("Pilih : Gajah, Semut, atau Orang");


    // menangkap pilihan computer
    // membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0,34) {
        comp = "gajah";
    } 
    else if(comp >= 0,34 && comp <= 0,67) {
        comp = "semut";
    } 
    else {
        comp = "orang";
    }

    var hasil = "";
    // menentukan rules
    if (player == comp) {
        hasil = "SERI";
    }

    else if(player == "gajah") {
        // if(comp == "orang") {
        //     hasil = "MENANG"
        // }
        // else {
        //     hasil = "KALAH"
        // }
        hasil = (comp == "orang") ? "MENANG" : "KALAH"; // ini adalah ringkasan dari if diatas  
    }

    else if(player == "semut") {
        // if(comp == "orang") {
        //     hasil = "KALAH"
        // }
        // else {
        //     hasil = "MENANG"
        // }
        hasil = (comp == "orang") ? "KALAH" : "MENANG"; // ini adalah ringkasan dari if diatas  
    }

    else if(player == "orang") {
        // if(comp == "gajah") {
        //     hasil == "KALAH"
        // }
        // else {
        //     hasil = 'MENANG'
        // }
        hasil = (comp == gajah) ? "KALAH" : "Menang"; // ini adalah ringkasan dari if diatas  
    }
    else {
        hasil = "INVALID"
    }
    // tampilkan hasilnya
    alert("Kamu memilih " + player + " dan komputer memilih " + comp + "\nMakan hasilnya : Kamu " + hasil);

    tanya = confirm("Lagi?");
}

alert("Terimakasih sudah bermain")