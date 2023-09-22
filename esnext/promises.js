function falarDepoisDe(segundos, frase){
    return new Promise((resolve , reject) =>{
        setTimeout(()=> {
            resolve(frase)
        }, segundos * 1000) // 1000:é um segundo
    })
}
falarDepoisDe(3 , 'Que legal!') //.then : mostra a respota de resolve e reject
     .then((frase,abc) => frase.concat('?!?'))
     .then(outraFrase => console.log(outraFrase))
     .catch(e => console.log(e)) //Mostrar a respota de reject