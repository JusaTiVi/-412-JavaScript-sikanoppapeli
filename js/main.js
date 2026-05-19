let nimet = []
let maara = 0
let vuoro = 0

function pelaajamaara() {
    maara = document.getElementById("maara").value;

    document.getElementById("nimiosa").style.display = "block"
}

function pelaajat() {
    let nimi = document.getElementById("pelaajanimet").value;

    if (nimet.length >= maara) {
        alert("kaikki pelaajat on jo lisätty")
        return
    }

    nimet.push(nimi)

    let li = document.createElement("li")

    li.textContent = nimi

    document.getElementById("pelaajat").appendChild(li)

    document.getElementById("pelaajanimet").value = ""
}

function seuraavavuoro() {
    vuoro += 1

    if (vuoro >= nimet.length) {
        vuoro = 0
    }
}

function paivitavuoro() {
    document.getElementById("vuoro").textContent =
    "vuorossa: " + nimet[vuoro]
}

function heitto() {
    let noppa = Math.floor(Math.random() * 6) + 1;
    if (numero === 1) {
        seuraavavuoro()
    }
}
