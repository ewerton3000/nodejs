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

}
// escolhendo a opcao e o valor1 e valor2
imprimir(0, 4 , 3)
imprimir(1,5,8)
imprimir(2,18,25)
imprimir(3,70,10)
imprimir(4,500,1000)
