let Heroi = "Chespirito"
let xpHeroi = 5002
let nivelHeroi

if(xpHeroi <= 1000){
    nivelHeroi = "FERRO"

}else if(xpHeroi < 2001){
    nivelHeroi = "BRONZE"

}else if(xpHeroi < 5001){
    nivelHeroi = "PRATA"
}else if(xpHeroi < 7001){
    nivelHeroi = "OURO"
}else if(xpHeroi < 8001){
    nivelHeroi = "PLATINA"
}else if(xpHeroi < 9001){
    nivelHeroi = "ASCENDENTE"
}else if(xpHeroi < 10001){
    nivelHeroi = "IMORTAL"
}else{
    nivelHeroi = "RADIANTE"
}
console.log("O herói " + Heroi + " possui o nível " + nivelHeroi)