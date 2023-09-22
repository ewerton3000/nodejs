//Map

const tecnologias = new Map() 
tecnologias.set('react', {framework: false })
tecnologias.set('angular', {framework: true })

console.log(tecnologias.react) //undefined
console.log(tecnologias.get('react'))

//uma função que usa o Map instanciado
const chavesVariadas = new Map([
    //utilizando arrays
    [function () { }, 'Função'],      // function: chave   'função': valor
    [{} ,'Objeto'], //{} : chave    'Objeto':valor
    [123 , 'Número'], // 123: chave   'Número':valor
])

chavesVariadas.forEach((vl , ch)=>{  //vl : valor , ch: ch
    console.log(ch , vl)
})

console.log(chavesVariadas.has(123)) //has():Vê um elemento(valor) está dentro do map()
chavesVariadas.delete(123) //Deletando o valor 123
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

chavesVariadas.set(123 , 'a')
chavesVariadas.set(123 , 'b')
chavesVariadas.set(456 , 'b')
console.log(chavesVariadas)