var nomeDaPropriedade = "fabricacao";
meuCarro[nomeDaPropriedade] = "Ford";

nomeDaPropriedade = "modelo";
meuCarro[nomeDaPropriedade] = "Mustang";
function mostrarProps(obj, nomeDoObj) {
    var resultado = "";
    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
          resultado += nomeDoObj + "." + i + " = " + obj[i] + "\n";
      }
    }
    return resultado;
  }