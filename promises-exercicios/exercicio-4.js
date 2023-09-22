function esperarPor(tempo=2000 ){
    return new Promise (function (resolve){
        setTimeout(() =>resolve(), tempo)
    })
}

esperarPor(2000)
.then(() => console.log('Executando promise 1....'))
.then(esperarPor)
.then(() =>console.log('Executando promise 2...'))
.then(esperarPor)
.then(() =>console.log('Executnado promise 3 ....'))
async function executar(){
    esperarPor(2000)
    console.log('Async/Await 1....')
    esperarPor(4000)
    console.log('Async/Await 2.....')
    esperarPor(6000)
    console.log('Async/Await 3.....')
}

executar()
console.log()

    async function executarNovamente(){
        await esperarPor(1500)
        console.log('Async/Await 1....')
        await esperarPor(4000)
        console.log('Async Await 2.....')
        await esperarPor(7000)
        console.log('Async/Await 3.....')
    }

executarNovamente()