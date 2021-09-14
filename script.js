var distancia = Number(prompt('Insira a distância percorrida (Km):'))
var tempo = Number(prompt('Insira o tempo gasto (H):'))
var velocidade = distancia/tempo
var combustivel = distancia/12

document.write(`Distância percorrida: ${distancia.toFixed(2)}km<br><br>`)
document.write(`Tempo gasto: ${tempo.toFixed(2)}h<br><br>`)
document.write(`Velocidade média: ${velocidade.toFixed(2)}km/h<br><br>`)
document.write(`Combustível gasto: ${combustivel.toFixed(2)}L`)