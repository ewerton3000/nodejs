//Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
//crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
//quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

const calc = function(altura1,altura2,ano1,ano2){
    if(altura1 == altura2){
        if(ano1 >ano2){
            console.log("A criança1 passa a altura da criança2 em  1 ano")
        }
        if(ano2 > ano1){
            console.log("A criança2 passa a altura da criança1 em  1 ano")
        }
        else{
            console.log("As crianças posssuem o mesmo tamanho")
        }
    }
    else{
        if(altura1 > altura2){
            if(ano1 >= ano2){
            console.log("A criança menor não ultrapassa a menor")
            }
            else{
                console.log(`A criança menor utrapassará a maior em ${calcularTempo(altura2,ano2,altura1,ano1)} anos`)
            }
        }
        else{
            if(ano2 >= ano1){
                console.log("A criança menor não ultrapassa a maior")
                }
                else{
                    console.log(`A criança menor utrapassará a maior em ${calcularTempo(altura1,ano1,altura2,ano2)} anos`)
                }

        }
        
    }


}

function calcularTempo(alturaMenor,anoMenor,alturaMaior,anoMaior){
    let qtdAnos = 0
    while(alturaMenor < alturaMaior){
        alturaMenor +=anoMenor
        alturaMaior +=anoMaior
        qtdAnos++

        return qtdAnos
    }
}
calc(.10 , 0.25,2 , 3)