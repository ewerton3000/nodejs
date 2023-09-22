//Usando o template Strings  OBS:Nele vc deve usar acrase(``) não use aspas  

const nome ="Rebeca";
const concatenacao = 'Olá' + nome + '!';
const template = `
Olá
${nome}!`;
console.log(concatenacao , template);

// expressões ...
console.log(`1 + 1 = ${1 + 1 }`);  //usando acrase 

const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);

/*toUpperCase : É uma função que deixa qualquer string com o caracter grande como se usasse capslock 
na palavra  toda*/