function receberMelhorEstudante(){
let joao = [8,7.6,8.9,6]
let mariana= [9,6.6,7.9,8]
let carla = [7,7,8,9]
let nomes = ['João','Mariana','Carla']
let alunos = []
let media = []
let j = 0
let m = 0
let c = 0

for(let i = 0;i<4;i++){
    media = [j += joao[i] / joao.length,m += mariana[i]/ mariana.length, c += carla[i] / carla.length]

    alunos= {
        nome: nomes[i],
        media: media[i]
    }

}
console.log(alunos)
}
console.log(receberMelhorEstudante())