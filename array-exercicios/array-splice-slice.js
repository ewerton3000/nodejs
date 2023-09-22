const roupas = ["calça-jeans","moleton","casaco","bermudão","camisa-de-malha"]
roupas.splice(3,2)
console.log(roupas)

const elementos = ["fogo","agua","terra","vento","metal"]
elementos.splice(3,1)
console.log(elementos)

const material = ["caixa","papelão","latinha-amassada","plastico","isopor"]
material.splice(1,2)
console.log(material)

const tennis = ["nike","addidas","surf","lacoste","turbo","olimpikus"]
const coleta = tennis.slice( 1 ,4)
console.log(coleta)


const times = ["Framengo","Vasco","Fluminense","Goías","Ponte-preta","Bahia","Juventus","Liverpool",
"Real Madrid","Barcelona","Olimpiakus","Totheram"]
const jogos = times.slice(4, 8)
console.log(jogos)