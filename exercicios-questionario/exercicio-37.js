//Escreva duas funções, uma para progressão aritmética e uma para progressão geométrica que recebam
//como parâmetros um número n (número de termo), a1 (o primeiro termo) e r (a razão) e escreva os n termos ,
//bem como a soma dos elementos.

let arit = function (n,a1,r){
    let a = a1+((n-1)*r)
    a = (n *(a+a1))/2
   console.log(a)
}

let geo = function(n1){
   for(a=1 ,n1;a <=1000 ; a+2 ){
    a = a * n1
    console.log(a)
   }
}

geo(2)
arit(100,2,2)