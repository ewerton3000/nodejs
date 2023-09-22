const numero = {a : 1 , b : 2 , c : 3}

//Como o formato string não soma o + vira concatenação
console.log(JSON.stringify(numero.a) +'', JSON.stringify(numero.b)) 