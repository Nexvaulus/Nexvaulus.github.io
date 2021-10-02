var tanya = true;
while(tanya == true) {

    // menangkap pilihan player
    var player = prompt("Pilih : Gajah, Semut, atau Orang");


    // menangkap pilihan computer
    // membangkitkan bilangan random
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      }
    
    var comp = getRandomInt(1, 10);

    if(comp < 2) {
        comp = "gajah";
    } 
    else if(comp >= 2 && comp < 7) {
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

    else if(player == "gajah" || player == "Gajah") {
        if(comp == "orang") {
            hasil = "MENANG";
        }

        else if(comp == "semut") {
            hasil = "KALAH";
        }
        // hasil = (comp == "orang") ? "MENANG" : "KALAH"; // ini adalah ringkasan dari if diatas  
    }

    else if(player == "semut" || player == "Semut") {
        if(comp == "orang") {
            hasil = "KALAH";
        }
        else if(comp == "gajah") {
            hasil = "MENANG";
        }
        // hasil = (comp == "orang") ? "KALAH" : "MENANG"; // ini adalah ringkasan dari if diatas  
    }

    else if(player == "orang" || player == "Orang") {
        if(comp == "gajah") {
            hasil == "KALAH";
        }
        else if(player == "semut") {
            hasil = "MENANG";
        }
        // hasil = (comp == gajah) ? "KALAH" : "Menang"; // ini adalah ringkasan dari if diatas  
    }
    else {
        hasil = "INVALID";
    }
    // tampilkan hasilnya
    alert("Kamu memilih " + player + " dan komputer memilih " + comp + "\nMaka hasilnya : Kamu " + hasil);
    tanya = confirm("Lagi?");

}

alert("Terimakasih sudah bermain");
