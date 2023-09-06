let x1, x2, x3, x4, x5, x6, x7, x8;  
const ADS1 = 0.7, ADS2 = 0.9, ADS3 = 1, ADS4 = 1.05, ADS5 = 1.075, ADS6 = 1.09375, ADS7 = 1.0984375, ADS8 = 1.1

function mostrarResultados() {
    let adsAntigo = parseInt(window.prompt("Digite aqui sua sensibilidade"));
    
    x1 = adsAntigo * ADS1;
    x2 = adsAntigo * ADS2;
    x3 = adsAntigo * ADS3;
    x4 = adsAntigo * ADS4;
    x5 = adsAntigo * ADS5;
    x6 = adsAntigo * ADS6;
    x7 = adsAntigo * ADS7;
    x8 = adsAntigo * ADS8;

    let res = window.document.getElementById("resultado");
    res.innerHTML = `1x = ${x1}<br>`;
    res.innerHTML += `1.5x = ${x2}<br>`;
    res.innerHTML += `2x = ${x3}<br>`;
    res.innerHTML += `2.5x = ${x4}<br>`;
    res.innerHTML += `3x = ${x5}<br>`;
    res.innerHTML += `4x = ${x6}<br>`;
    res.innerHTML += `5x = ${x7}<br>`;
    res.innerHTML += `12x = ${x8}`;
}