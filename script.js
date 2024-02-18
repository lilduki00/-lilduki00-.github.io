// Imposta la data di partenza 
var dataPartenza = new Date("Feb 18, 2024 00:32:00").getTime();

// Aggiorna il contatore ogni secondo
var x = setInterval(function() {

    var oraAdesso = new Date().getTime();
    var distanza = oraAdesso - dataPartenza;

    var giorni = Math.floor(distanza / (1000 * 60 * 60 * 24));
    var ore = Math.floor((distanza % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuti = Math.floor((distanza % (1000 * 60 * 60)) / (1000 * 60));
    var secondi = Math.floor((distanza % (1000 * 60)) / 1000);

    document.getElementById("giorni").innerHTML = giorni;
    document.getElementById("ore").innerHTML = ore;
    document.getElementById("minuti").innerHTML = minuti;
    document.getElementById("secondi").innerHTML = secondi;

}, 1000);
