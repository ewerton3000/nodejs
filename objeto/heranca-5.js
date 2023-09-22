//Os três typeof possuem o .prototype
console.log(typeof String)//Function
console.log(typeof Array)//Function
console.log(typeof Object)//Function

//Usando o prototype da string para revete-la

String.prototype.reverse = function (){
    return this.split('').reverse().join('')
}
console.log('Escola Cod3r'.reverse())

Array.prototype.first = function(){
    return this[0] //array na posição 0
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())

String.prototype.toString = function (){
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse()) //O valor inserido não sobreescreveu