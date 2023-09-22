/*
Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão
num array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto
com os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
Exemplo:
recerberMelhorEstudante({
Joao: [8, 7.6, 8.9, 6], // média 7.625
Mariana: [9, 6.6, 7.9, 8], // média 7.875
Carla: [7, 7, 8, 9] // média 7.75
}) // retornará { nome: "Mariana", media: 7.875 }
*/

    function receberMelhorEstudante(obj){
    let joao = obj.nota1
    let mariana = obj.nota2
    let  carla = obj.nota3
    const joaoresul = joao.map(a =>a).reduce(function(acumulador , atual){
        let soma = acumulador + atual
        let media = soma /joao.length
        return media
    },0)
    const marianaresul = mariana.map(a =>a).reduce(function(acumulador , atual){
        let soma = acumulador + atual
        let media = soma /mariana.length
        return media
    },0)
    const carlaresul = carla.map(a =>a).reduce(function(acumulador , atual){
        let soma = acumulador + atual
        let media = soma /carla.length
        return media
    },0)
    objeto={
    nome1: obj.nome1,
    notas1:`notas:${joao}`,
    media1: ` : media : ${joaoresul.toFixed(2)}`,
    nome2:obj.nome2,
    notas2:`notas:${mariana}`,
    media2:`: media ${marianaresul.toFixed(2)}`,
    nome3:obj.nome3,
    nota3:`notas:${carla}`,
    media3:`: media${carlaresul.toFixed(2)}`
    }
    console.log(objeto)
    
}
   

    /*for(i=0,soma=0,m=0;i<joao.length;i++,m++){
    soma = soma + joao[i] 
} res = soma/m*/
    
    receberMelhorEstudante(
    {nome1:"Joao",nota1:[7,8,9,8,9,7],
    nome2:"Mariana",nota2:[7,8.5,7,6],
    nome3:"Carla",nota3:[7.5,8,6,5]}
    )