function mostraSpiegazione(tipo) {
    let testo = "";

    if (tipo === "allitterazione") {
        testo =
        "FIGURA RETORICA: ALLITTERAZIONE\n\n" +
        "Testo: «parole più nuove»\n\n" +
        "Spiegazione:\n" +
        "La ripetizione del suono 'p' riproduce il rumore della pioggia.\n\n" +
        "Perché è importante:\n" +
        "Nel Decadentismo il suono conta più del significato logico e crea musicalità.";
    }

    else if (tipo === "sinestesia") {
        testo =
        "FIGURA RETORICA: SINESTESIA\n\n" +
        "Testo: «A nera, E bianca, I rossa»\n\n" +
        "Spiegazione:\n" +
        "Le vocali vengono associate a colori diversi.\n\n" +
        "Perché è importante:\n" +
        "La poesia rompe la logica razionale e diventa visione.";
    }

    else if (tipo === "simbolismo") {
        testo =
        "ELEMENTO: SIMBOLISMO\n\n" +
        "Testo: «farfalle crepuscolari»\n\n" +
        "Spiegazione:\n" +
        "L’immagine allude in modo velato alla sessualità e al mistero della vita.\n\n" +
        "Perché è importante:\n" +
        "Il Decadentismo suggerisce, non spiega direttamente.";
    }

    else if (tipo === "corrispondenze") {
        testo =
        "ELEMENTO: CORRISPONDENZE\n\n" +
        "Testo: «foreste di simboli»\n\n" +
        "Spiegazione:\n" +
        "La realtà è vista come una rete di segni misteriosi.\n\n" +
        "Perché è importante:\n" +
        "Il poeta è colui che coglie legami invisibili tra le cose.";
    }

    else if (tipo === "musicalita") {
        testo =
        "ELEMENTO: MUSICALITÀ\n\n" +
        "Testo: «Prima di tutto la musica»\n\n" +
        "Spiegazione:\n" +
        "La poesia deve essere fluida e sonora come una melodia.\n\n" +
        "Perché è importante:\n" +
        "La poesia decadente punta all’emozione, non alla spiegazione logica.";
    }

    document.getElementById("testoPopup").innerText = testo;
    document.getElementById("popup").style.display = "flex";
}

function chiudiPopup() {
    document.getElementById("popup").style.display = "none";
}
