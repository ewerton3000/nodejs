let dobro = function (a){  //funções padrão
    return 2 * a
}
dobro = (a) =>{ //function arrow
    return 2 * a
}

dobro = a => 2 * a // return ímplicito  
console.log(dobro(Math.PI))


let ola = function(){  //Função padrão
    return `Óla`
}

ola = () => `Olá` //Função arrow
ola = _=>`Olá` //possui um param
console.log(ola())