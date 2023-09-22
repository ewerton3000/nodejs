const obj = {a:1 , b:2 , c:3 , soma() {return a + b + c } } // + para concaternar
console.log(JSON.stringify(obj)) //Transformando em formato string

//console.log(JSON.parse("{a: 1 , b: 2 , c: 3")) //Não use isso
//console.log(JSON.parse("{'a': 1 , 'b': 2, 'c': 3  }")) //não use isso

console.log(JSON.parse('{"a": 1 , "b": 2 , "c" : 3}')) //formato valido para JSON

console.log(JSON.parse('{"a" : 1 , "b" : "string" , "c" : true, "d": {}, "e": [] }'))



