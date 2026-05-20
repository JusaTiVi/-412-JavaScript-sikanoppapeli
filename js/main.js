let nimet = []
let pisteet = []
let kierroksenpisteet = 0
let maara = 0
let vuoro = 0
lukuvirhe = document.getElementById("lukuvirhe")

function pelaajamaara() {

    maara = document.getElementById("maara").value;
    if (maara < 2) {
        lukuvirhe.textContent =
        "pelaajia täytyy olla vähintään kaksi!"
        return
    }

    document.getElementById("lukuvirhe").textContent = ""
    document.getElementById("nimiosa").style.display = "block"
}

function pelaajat() {

    let nimi = document.getElementById("pelaajanimet").value;

    if (nimet.length >= maara) {
        alert("kaikki pelaajat on jo lisätty")
        return
    }

    nimet.push(nimi)

    pisteet.push(0)
    
    let li = document.createElement("li")

    li.textContent = nimi

    document.getElementById("pelaajat").appendChild(li)

    document.getElementById("pelaajanimet").value = ""
}

function aloita() {

    document.getElementById("valmistelu").style.display = "none"

    document.getElementById("peli").style.display = "block"

    paivitavuoro()
}

function seuraavavuoro() {

    vuoro += 1

    if (vuoro >= nimet.length) {
        vuoro = 0
    }

    paivitavuoro()
}

function paivitavuoro() {

    document.getElementById("vuoro").textContent =
    "vuorossa: " + nimet[vuoro]
}

function heitto() {

    let noppa = Math.floor(Math.random() * 6) + 1;

    document.getElementById("tulos").textContent =
    nimet[vuoro] + ": " + noppa

    if (noppa === 1) {
        seuraavavuoro()
    }
}
