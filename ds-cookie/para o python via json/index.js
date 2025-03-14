function capturarECookiesParaPython() {
    const cookies = document.cookie;
  
    if (!cookies) {
      alert("Nenhum cookie encontrado.");
      return;
    }
  
    // Transforma os cookies em um objeto nome: valor
    const cookiesObj = {};
    cookies.split("; ").forEach(cookie => {
      const [nome, valor] = cookie.split("=");
      cookiesObj[nome] = valor;
    });
  
    // Envia via POST para o Python (ajuste a URL conforme seu backend)
    fetch("http://localhost:5000/receber-cookies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cookiesObj)
    })
    .then(response => response.text())
    .then(data => console.log("Resposta do servidor:", data))
    .catch(error => console.error("Erro ao enviar os cookies:", error));
  }