var lista = document.getElementById("lista");
var legolcsobb_termek = document.getElementById("legolcsobb");
var atlag_termek = document.getElementById("atlag");
var szoras_termek = document.getElementById("szoras");
function nevek() {
    var nevek = [];
    for (var i = 0; i < 5; i++) {
        var element = document.getElementById("nevek[".concat(i, "]"));
        nevek.push(element.value);
    }
    return nevek;
}
function arak() {
    var arak = [];
    for (var i = 0; i < 5; i++) {
        var element = document.getElementById("\u00E1rak[".concat(i, "]"));
        arak.push(Number(element.value));
    }
    return arak;
}
function legolcsobb() {
    var nevekTomb = nevek();
    var arakTomb = arak();
    var legolcsobbIdx = 0;
    for (var i = 0; i < arakTomb.length; i++) {
        if (arakTomb[legolcsobbIdx] > arakTomb[i]) {
            legolcsobbIdx = i;
        }
    }
    var legolcsobb_nev = nevekTomb[legolcsobbIdx];
    if (legolcsobb_termek != null) {
        legolcsobb_termek.innerHTML = "n\u00E9v: ".concat(legolcsobb_nev, ", \u00E1r (Ft): ").concat(arakTomb[legolcsobbIdx]);
    }
    return legolcsobb_nev;
}
function atlag() {
    var arakTomb = arak();
    var sum = 0;
    for (var _i = 0, arakTomb_1 = arakTomb; _i < arakTomb_1.length; _i++) {
        var number = arakTomb_1[_i];
        sum += number;
    }
    var avg = sum / arakTomb.length;
    if (atlag_termek != null) {
        atlag_termek.innerHTML = avg.toString();
    }
    return avg;
}
function szoras() {
    var arakTomb = arak();
    var atlagErtek = atlag();
    var sum = 0;
    for (var _i = 0, arakTomb_2 = arakTomb; _i < arakTomb_2.length; _i++) {
        var ar = arakTomb_2[_i];
        sum += Math.pow(ar - atlagErtek, 2);
    }
    var szoras = Math.sqrt(sum / arakTomb.length);
    if (szoras_termek != null) {
        szoras_termek.innerHTML = szoras.toString();
    }
    return szoras;
}
