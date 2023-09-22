const produto1 = {prod: "12 ovos", preco:15.00}

const produto2 = {prod:"Biscoito Trakinas" ,preco:2.50}

const produto3 = {prod:"Papel higienico com 16 rolos" , preco:9.70}

const sacola = Object.create(produto1)
sacola.preco = produto2.preco + produto1.preco +produto3.preco
console.log("Total : ",sacola.preco,produto1.nome) 
//Repare que aqui esta indefinido porque a seleção foi apenas para o atributo preco