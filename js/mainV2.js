let nimet = []
let pisteet = []
let kierroksenpisteet = 0
let tuplat = 0
let maara = 0
let vuoro = 0
let maali = 100

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

function voittomaali() {
    maali = document.getElementById("maali").value;
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

    document.getElementById("pelaajalista").appendChild(li)

    document.getElementById("pelaajanimet").value = ""

    if (nimet.length == maara) {
        document.getElementById("maaliosa").style.display = "block"
    }
}

function aloita() {

    document.getElementById("valmistelu").style.display = "none"

    document.getElementById("peli").style.display = "block"

    paivitavuoro()
    pelaajalista()
}

function seuraavavuoro() {

    vuoro += 1

    if (vuoro >= nimet.length) {
        vuoro = 0
    }

    paivitavuoro()
    pelaajalista()
}

function paivitavuoro() {

    document.getElementById("vuoro").textContent =
    "vuorossa: " + nimet[vuoro]
}

function heitto() {

    let noppa = Math.floor(Math.random() * 6) + 1;

    let noppa2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("tulos").textContent =
    nimet[vuoro] + ": " + noppa + " ja " + noppa2

    if (noppa === 1 && noppa2 === 1) {
        kierroksenpisteet += 25

        tuplat += 1

        if (tuplat === 3) {
            kierroksenpisteet = 0

            document.getElementById("kierroksenpisteet").textContent =
            "kierroksen pistemäärä: 0"

            seuraavavuoro()

            return
        }

        document.getElementById("kierroksenpisteet").textContent =
        "kierroksen pistemäärä: " + kierroksenpisteet

        return
    }

    else if (noppa === noppa2) {
        kierroksenpisteet += (noppa + noppa2) * 2

        tuplat += 1

        if (tuplat === 3) {
            kierroksenpisteet = 0

            document.getElementById("kierroksenpisteet").textContent =
            "kierroksen pistemäärä: 0"

            seuraavavuoro()

            return
        }

        document.getElementById("kierroksenpisteet").textContent =
        "kierroksen pistemäärä: " + kierroksenpisteet

        return
    }

    if (noppa === 1 || noppa2 === 1) {
        kierroksenpisteet = 0

        document.getElementById("kierroksenpisteet").textContent =
        "kierroksen pistemäärä: 0"

        seuraavavuoro()

        return
    }

    tuplat = 0

    kierroksenpisteet += noppa + noppa2

    document.getElementById("kierroksenpisteet").textContent =
    "kierroksen pistemäärä: " + kierroksenpisteet
}

function talletus() {
    pisteet[vuoro] += kierroksenpisteet

    if (pisteet[vuoro] >= maali) {
        alert(nimet[vuoro] + " voitti pelin!")
    }
    kierroksenpisteet = 0

    document.getElementById("kierroksenpisteet").textContent =
        "kierroksen pistemäärä: 0"

    seuraavavuoro()
    pelaajalista()
}

function pelaajalista() {
    let lista = document.getElementById("pisteet")

    lista.innerHTML = ""

    for (kohta in nimet) {
        let li = document.createElement("li")
        li.textContent = nimet[kohta] + ": " + pisteet[kohta]

        lista.appendChild(li)
    }
}