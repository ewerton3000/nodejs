//Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de cédulas
//para um determinado valor informado pelo usuário considerando notas de R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1.
//Seu programa deve mostrar apenas as notas utilizadas. Por exemplo, ao solicitar R$18, o programa deve
//informar apenas a seguinte informação (note que não foram exibidas informações sobre as demais cédulas): 1
//nota(s) de R$ 10. 1 nota(s) de R$ 5. 3 nota(s) de R$ 1.

const cedulas = function(n){
    a = 100 ,b =50 , c=10 ,d=5 ,e=1
    while( n>0){
   

    if(n >= a){
        console.log('1 nota de : R$  ',a)
        n = n - a
        console.log('Faltam',n)
        
    }
   
        
    
    if(n >= b){

        console.log('1 nota de : R$  ',b)
        n = n - b   
        
    }
    
        

    
    if(n >= c){
        console.log('1 nota de : R$  ',c)
        n = n - c   
        
    }
    
    if(n >= d){
        console.log('1 nota de : R$  ',d)
        n = n - d   
        
    }
    
    if(n >= e){
        console.log('1 nota de : R$  ',e)
        n = n - e   
        
    }
    if(n == 0){
       console.log("fim") 
    }
}
}
cedulas(498)