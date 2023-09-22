//Número primo do número menor para o maior

function numero(maior, menor){
   for(i = menor ,divi = 1,p=0; i<=maior; divi++){
        if(i % divi == 0){
           p++

        }
        if(i == divi && p < 2){
            p=0
            i++
            divi=0
         }
        if( i== divi && p == 2){
            
            console.log(`O número ${i} é numero primo`)
            p = 0
            i++
            divi=1
        }
        if(divi > i ){
            divi= 0
            i++
            p=0
        }
    }     
}

numero(50,1)