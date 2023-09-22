function receberMelhorEstudante(obj){
    for(i=0;i<obj.length;i++){
    let resul = obj[i].map(a =>a).reduce(function(acumulador , atual){
        let soma = acumulador + atual
        let divi = i.length
        let media = soma /divi
        console.log(media)
    },0)}
    
}

    

   

    /*for(i=0,soma=0,m=0;i<joao.length;i++,m++){
    soma = soma + joao[i] 
} res = soma/m*/
    
    receberMelhorEstudante(
    {Joao:[7,8,9,8,9,7],
    Maria:[7,8.5,7,6],
    Carla:[7.5,8,6,5]}
    )