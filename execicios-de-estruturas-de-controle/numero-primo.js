const primo = function (n){
    divi = 0
    array = []
    non = []
    p = 0
    no = 0
    for(i = 1; i <= n ; i++){
        
      if(i % 1 == 0){
        divi += divi+1
      
    }
      if(divi == 2){
        array.push(n[i])
        p++
        
      }
      else{
        non.push(n[i])
        no++
      }
      
    }
    console.log(`Os números primos até ${n} foram ${array} e os que não são ${non}  `)
}
primo(20)