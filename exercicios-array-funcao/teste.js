function checarAnoBissexto(n){
    if((n%4 == 0)&&(!n%100 == 0 && n%400 == 0)){
        console.log(true)
    }
    else{
        console.log(false ,"Este ano não é bissexto")
    }
}

checarAnoBissexto(2100)