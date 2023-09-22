const valores = [7.7,8.9,6.3,9.2]
console.log(valores[0],valores[3])//Pegando os array nas posições 0 e 3
console.log(valores[4])

//Como o array [4] não tem valor vc pode inserir desta forma abaixo
valores[4] = 10

//Repare abaixo que ele pede um array na posição 10 e se vc executar ele dirá quantos arrays estão vazios
//valores[10] =10 
console.log(valores) //Mostrando todas as posições do array
console.log(valores.length) //O lenght irá dizer quantos elementos existem dentro de um array

//Abaixo usamos o push para adicionar novos elementos ao array 
//OBS:isso não é aconselhavel usar pelo fato de ter muitos dados diferentes dentro de um array
valores.push({id: 3},false,null,'teste')
console.log(valores)

//Puxando um valor para fora do array usando o pop() e retira a posição escolhida do array
//OBS: Após usar o pop() imprima o valor de novo apra entender o conceito
console.log(valores.pop())

//O delete usado para deletar valores das posições do array  exemplo delete variavel (0)<-posição
//OBS:repare que na linha abaixo vc tentou apagar três valores de uma só vez mas o javascript só apagou o ultimo item 
delete valores[0,1,2]
console.log(valores)

//Usando o typeof para descobrir o tipo de array que vc está usando
//Abaixo ele irá imprimir que ele é do tipo object = objeto
console.log(typeof valores)