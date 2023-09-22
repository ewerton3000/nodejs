//- Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste
//aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5,
//respectivamente.

let nota1 = 2
let nota2 = 5
let nota3 = 3
let media = (nota2*2)+(nota1*3)+(nota3*5)/10
if(media >= 10){
    console.log("Vc passou")
    console.log((media).toFixed(2))

}
else{
    console.log("Vc não passou")
    console.log((media).toFixed(2))
}
