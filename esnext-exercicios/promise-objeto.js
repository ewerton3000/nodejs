const sala = {
    caixa:'roupa',
    sofa: 'bacterias',
    chão:'sujeira'
}


function falarDepoisDe(segundos, frase){
    return new Promise((resolve , reject) =>{
        setTimeout(()=> {
            resolve(frase)
        }, segundos * 1000) // 1000:é um segundo
    })
}
falarDepoisDe(3 , 'Vendo a casa!') //.then : mostra a respota de resolve e reject
     .then((sala) => sala.concat(sala.caixa))
     .then(outraFrase => console.log(outraFrase))
     .catch(e => console.log(e)) //Mostrar a respota de reject