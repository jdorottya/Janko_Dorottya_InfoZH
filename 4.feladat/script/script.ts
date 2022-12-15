const lista = document.getElementById("lista")
const legolcsobb_termek = document.getElementById("legolcsobb")
const atlag_termek = document.getElementById("atlag")
const szoras_termek = document.getElementById("szoras")

function nevek(): string[] {
    const nevek: string[] = []
    for (let i = 0; i < 5; i++) {
        const element = document.getElementById(`nevek[${i}]`) as HTMLInputElement
        nevek.push(element.value)
    }

    return nevek
}

function arak(): number[] {
    const arak: number[] = []
    for (let i = 0; i < 5; i++) {
        const element = document.getElementById(`árak[${i}]`) as HTMLInputElement
        arak.push(Number(element.value));
    }
    return arak
}

function legolcsobb() {
    const nevekTomb = nevek()
    const arakTomb = arak()

    let legolcsobbIdx = 0
    for (let i = 0; i < arakTomb.length; i++) {
        if (arakTomb[legolcsobbIdx] > arakTomb[i]) {
            legolcsobbIdx = i
        }
    }
    const legolcsobb_nev = nevekTomb[legolcsobbIdx]

    if (legolcsobb_termek != null) {
        legolcsobb_termek.innerHTML = `név: ${legolcsobb_nev}, ár (Ft): ${arakTomb[legolcsobbIdx]}`
    }

    return legolcsobb_nev
}

function atlag(): number {
    const arakTomb = arak()

    let sum = 0;
    for (const number of arakTomb) {
        sum += number;
    }
    const avg = sum / arakTomb.length

    if (atlag_termek != null) {
        atlag_termek.innerHTML = avg.toString()
    }

    return avg
}

function szoras() {
    const arakTomb = arak()
    const atlagErtek = atlag()
    let sum = 0;
    for (const ar of arakTomb) {
        sum += Math.pow(ar-atlagErtek, 2)
    }
    
    const szoras = Math.sqrt(sum / arakTomb.length);

    if (szoras_termek != null) {
        szoras_termek.innerHTML = szoras.toString()
    }
    return szoras
}