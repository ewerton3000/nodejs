const pai = {nome : 'Pedro' , corCabelo: 'preto'}

const filha1 = Object.create(pai) //Para conseguir relação com o  objeto pai
filha1.nome = 'Ana' //sombreamento
console.log(filha1.nome) //Puxando o atributo corCabelo do objeto pai

//Inserindo o valor no atributo nome do objeto pai
const filha2 = Object.create(pai,{
    nome:{value : 'Bia', writable:false , enumerable: true} //OBS: se enumerable for false o atributo será removido
})

console.log(filha2.nome)
filha2.nome='Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1)) //Mostrando os atributos do objeto
console.log(Object.keys(filha2))//Mostrando os atributos do objeto 

//Mostrando os atributos e valores com for in
for(let key in filha2){
    //console.log(key)
    filha2.hasOwnProperty(key) ? // Objeto filha2 possui sua propria propriedade(atributo) ?
    console.log(key) : console.log(`Por herança: ${key}`)
}