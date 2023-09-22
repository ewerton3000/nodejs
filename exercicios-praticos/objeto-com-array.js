function receberMelhorEstudante(obj){
    let  objeto={
        aluno1:{nota:},
        aluno2:{},
        aluno3:{}
    }
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
    for(i=0;i==3;i++){
      
       if(i==0) {Object.entries(objeto.aluno1=joao)}
       if(i==1) {objeto.aluno2 +=marianaresul}
       if(i==2) {objeto.aluno3 +=carlaresul}
        
    }
    console.log(objeto)
}    
    receberMelhorEstudante(
    {nome1:"Joao",nota1:[7,8,9,8,9,7],
    nome2:"Mariana",nota2:[7,8.5,7,6],
    nome3:"Carla",nota3:[7.5,8,6,5]}
    )