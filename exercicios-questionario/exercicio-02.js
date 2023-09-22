//Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
//Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
//Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
//ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
//triângulo).

function triangulo(n1,n2,n3){
 if(n1 == n2 && n1 == n3 && n2 == n1 && n2 == n3 && n3 == n1 && n3 == n2){
     console.log("Triangulo equilatero")
     console.log(`Os 3 lados de um triangulo ${n1} - ${n2} - ${n3} `)
    h = (n1*n1) +  Math.sqrt(n2)
    h =  h / 4
    console.log(`altura ${h}`)
     
 }
 if(n1 == n2 ){
     d = n3/2
     h = (n1*n1) - (d*d)
     h = Math.sqrt(h)
    console.log(`Altura = ${h}`)
    a = (d*h) /2  
    console.log(`Area  = ${a}`) 
 }
 if(n1 == n3){
     d = n2/2
     h =(n1*n1) - (d*d)
     h = Math.sqrt(h)
    console.log(`Altura = ${h}`)
    a = (d*h) /2  
    console.log(`Area  = ${a}`)
 }
 if(n2 == n3 ){
     d = n1/2
 h =(n2*n2) -(d*d)
 h = Math.sqrt(h)
    console.log(`Altura = ${h}`)
    a = (d*h) /2  
    console.log(`Area  = ${a}`)
 } 
 
 if( n1 != n2 && n1 != n3 && n2 != n3) 
p =  n1+ n2 +n3 
console.log(`Perímetro ${p}`)
a = p*(p - n1)*(p - n2)*(p - n3)
a = Math.sqrt(a)
console.log(`Area ${a}`)

}
triangulo(25,78,36)