
module.exports(app, resul) =>{
const imprimir = function(opcao,valor1,valor2){
    switch((opcao)){
        case 1:
            console.log(valor1 + valor2)
            break
            case 2:
                console.log(valor1 - valor2)
                break
                case 3:
                    console.log(valor1 * valor2)
                    break
                    case 4 :
                    console.log(valor1 / valor2)
                    break
                    default: //opção 0 ou maior que 4
                        console.log(valor1 + valor2)
                        console.log(valor1 - valor2)
                        console.log(valor1 * valor2)
                        console.log(valor1 / valor2)

    }
 
    imprimir(req.on('data' ,function(parte){
        corpo+=parte
    }))
 
}
}