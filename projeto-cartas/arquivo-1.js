

const deck1 = [
    carta1 = {
        id: 1,
        nome: "Mago negro",
        habilidades: 'Magia negra',
        poder: 'Cosmico',
        ataque: 2000,
        defesa: 1000,
        descricao: 'Um ser muito poderoso que foi criado dentro da cidade dos profetas!',
    
    },
    carta2 =  {
        id: 2,
        nome: "Exodia",
        habilidades: 'Magia negra',
        poder: 'Cosmico',
        ataque  : 2000,
        defesa: 1500,
        descricao: 'Um ser muito poderoso que foi criado dentro da cidade dos profetas!',


    },
    carta3 = {
        id: 3,
        nome: "Sedução de Rafflesia",
        tipo: 'planta/efeito',
        poder: 'terra',
        ataque: 300,
        defesa: 900,
        descricao: '',
    },
    carta4 = {
        id: 4,
        nome: "Guerreiro Dai Grepher",
        tipo: 'guerreiro',
        poder: 'terra',
        ataque: 1700,
        defesa: 1600,
        descricao: '',
    },
    carta5 = {
        id: 5,
        nome: "Parede Das Sombras",
        tipo: 'guerreiro/efeito',
        poder: 'Trevas',
        ataque: 1600,
        defesa: 3000,
        descricao: '',
    },
    carta6 = {
        id: 6,
        nome: "Garra Da Águia",
        tipo: 'besta alada/efeito',
        poder: 'vento',
        ataque: 2000,
        defesa: 1200,
        descricao: '',
    },
    carta7 = {
        id: 7,
        nome: "Guerreira da Tradição",
        tipo: 'guerreira/fusão',
        poder: 'Trevas',
        ataque: 1900,
        defesa: 1700,
        descricao: '',
    },
    carta8 = {
        id: 8,
        nome: "Wattcobra",
        tipo: 'besta',
        poder: 'Trevas',
        ataque: 1000,
        defesa: 500,
        descricao: '',
    },
    carta9 = {
        id: 9,
        nome: "leão tauro",
        tipo: 'besta-guerreira/efeito',
        poder: 'Trevas',
        ataque: 1500,
        defesa: 1600,
        descricao: '',
    },
    carta10 = {
        id: 10,
        nome: "Mago negro do caos",
        tipo: 'mago/efeito',
        poder: 'Trevas',
        ataque: 2800,
        defesa: 2600,
        descricao: '',
    }
],

deck2  = [
    carta1 = {
        id:1,
        nome: "Dragão Branco Alternativo de olhos azuis",
        tipo: 'dragão/efeito',
        poder: 'luz',
        ataque: 3000,
        defesa: 2500,
        descricao: '',

    },
    carta2 = {
        id:2,
        nome: "Coedragão",
        tipo: 'dragão',
        poder: 'luz',
        _ataque: 2950,
        _defesa: 2900,
        descricao: '',
       
    },
    carta3 = {
        id:3,
        nome: "Sedução de Rafflesia",
        tipo: 'planta/efeito',
        poder: 'terra',
        _ataque: 300,
        _defesa: 900,
        descricao: '',
    },
    carta4 = {
        id:4,
        nome: "Guerreiro Dai Grepher",
        tipo: 'guerreiro',
        poder: 'terra',
        _ataque: 1700,
        _defesa: 1600,
        descricao: '',
    },
    carta5 = {
        id:5,
        nome: "Parede Das Sombras",
        tipo: 'guerreiro/efeito',
        poder: 'Trevas',
        _ataque: 1600,
        _defesa: 3000,
        descricao: '',
    },
    carta6 = {
        id:6,
        nome: "Garra Da Águia",
        tipo: 'besta alada/efeito',
        poder: 'vento',
        _ataque: 2000,
        _defesa: 1200,
        descricao: '',
    },
    carta7 = {
        id:7,
        nome: "Guerreira da Tradição",
        tipo: 'guerreira/fusão',
        poder: 'Trevas',
        _ataque: 1900,
        _defesa: 1700,
        descricao: '',
    },
    carta8 = {
        id:8,
        nome: "Wattcobra",
        tipo: 'besta',
        poder: 'Trevas',
        _ataque: 1000,
        _defesa: 500,
        descricao: '',
    },
    carta9 = {
        id:9,
        nome: "leão tauro",
        tipo: 'besta-guerreira/efeito',
        poder: 'Trevas',
        _ataque: 1500,
        _defesa: 1600,
        descricao: '',
    },
    carta10 = {
        id:10,
        nome: "Mago negro do caos",
        tipo: 'mago/efeito',
        poder: 'Trevas',
        _ataque: 2800,
        _defesa: 2600,
        descricao: '',
    }
]

jogadores =[
jogador1 = {
    nome:"jogador 1",
    vida : 4000
},
jogador2 = {
    nome:"jogador 2",
vida : 4000
}
]



   
  //  for( i = 0 ; i < jogadores.length  ; i++){
       // let random = jogadores[Math.floor(Math.random()* jogadores.length)]
        //array= []
        //array.push(random)
         //console.log(array)
//}


   
    
    
    
    
    //let random = deck1[Math.floor(Math.random()* deck1.length)]
    //array2 =
function random(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

//usando o map para puxar os decks e inserilos nas variaveis
const nomes = deck1.map(deck1 =>deck1)
const nomess = deck2.map(deck2 => deck2)

//criando os spreads com os arrays aleatórios
const randoms= random([...nomes])
const radomms =random([...nomess])

//Para imprimir os ids nome.id ou nome para mostrar tudo
   randoms.forEach(nome =>{
    
   })

   radomms.forEach(nome =>{
   console.log(nome) 
   })


