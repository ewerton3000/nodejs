//- Faça um algoritmo que leia as 3 notas de um aluno e calcule a média final deste
//aluno. Considerar que a média é ponderada e que o peso das notas é: 2,3 e 5,
//respectivamente.

let nota1 = 5

let nota2 = 4

let nota3 = 8

let media = nota1 + nota2 +nota3

console.log(`Soma das notas ${media}`)

let mediaponderada = (2*nota1 + 3*nota2 + 5*nota3)/(2+3+5)

console.log(`mediaponderada= ${mediaponderada}`)

if(media > 7.5){
    console.log(`Nota = ${media} Aprovado`)
}
else{
    console.log(`Nota = ${media } Reprovado`)
}

