function Pessoa (){
    this.idade = 0

    const self = this //Aqui ele armazena o this dentro da variavel
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
new Pessoa