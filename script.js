//let opcao = 4
/*let opcao = parseInt(prompt("Digite uma opção"))

switch(opcao){
    case 1:
        document.write("Primeira Opção")
        break;
    case 2:
        document.write("Segunda Opção")
        break;
    case 3:
        document.write("Terceira Opção")    
        break;
    default:
        document.write("Nenhumas da opções válidas")
        break;

    }
*/
//incremento e decremento


let valor = 7
document.write(valor)
document.write("<br><br>")
valor = valor +=4;
valor ++
document.write(valor)
document.write("<br><br>")

let valor2 = 7
document.write(valor2)
document.write("<br><br>")
valor2 = valor2 -=2
document.write(valor2)
document.write("<br><br>")

//usando o for

for(let i=0; i<10; i++){
    document.write("O valor é ",i)
    document.write("<br><br>")
}

//usando for com array

let carros=["Gol","Fusca","Audi","Corsa"]
for(let i=0; i < carros.length; i++){
    document.write(carros[i]);
    document.write("<br><br>")
}