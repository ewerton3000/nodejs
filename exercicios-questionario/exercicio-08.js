//Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém
//registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
//mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
//pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
//vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
//jogo. (Número do pior jogo)

let stringPontuacoes = "1 , 30 , 50 , 60 , 11 , 22 , 1 , 56 , 100 ,200"

function pontos(stringpontuacoes){
    let pontuacoes = stringpontuacoes.split(" , ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]
    for (let i = 1 ; i < pontuacoes.lenght ; i++){
        let pontuacao = parseInt(pontuacoes[i])
        if(pontuacao > maiorPontuacao) {
            maiorPontuacao = pontuacao
            qtdQuebraDeRecords++
        }
            else if(pontuacao < menorPontuacao){
                menorPontuacao = pontuacao
                piorJogo = i + 1
            }            
    
    
    }
    return [qtdQuebraDeRecords , piorJogo]
}
    console.log(pontos(stringPontuacoes))
    
