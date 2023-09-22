//operador ... rest(juntar)/spread(espalhar)

//usar rest com parâmetro de função


//usar spread com objeto
const funcionario = {nome:'Maria',salario:12348.99} //nome do rest:funcionario
const clone = {ativo:true , ...funcionario} //operador spread  ( ... ) no parâmetro(rest) funcionarios
console.log(clone)

//usar spread com array
const grupoA = ['João ','Pedro','Gloria']//nome do rest
const grupoFinal = ['Maria' ,'Rafaela',...grupoA] //Usando spread no parâmetro(rest) = grupoA
console.log(grupoFinal)

const loja = {nome:'bombom',valor:5.50}
const cesta = {total:true , ...loja} //nome do rest:loja