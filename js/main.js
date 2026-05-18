let nimet = []

function pelaajamaara() {
    let maara = document.getElementById("maara").value;

    document.getElementById("nimiosa").style.display = "block"
}

function pelaajat() {
    let nimi = document.getElementById("pelaajanimet").value;

    if (nimet.length >= maara) {
        return
    }

    nimet.push(nimi)

    document.getElementById("pelaajat")
}

function heita() {
    numero = Math.random(6)
}