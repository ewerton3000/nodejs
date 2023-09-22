const funcao1 = async(n1,n2,soma)=>{
    soma = n1+n2
   await(soma= soma+5)
    

}

    



funcao1(4,5)
.then(n1 => console.log(n1))
.then(soma => console.log(soma))
.catch("Não deu certo")