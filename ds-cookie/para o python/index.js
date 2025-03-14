function capturarCookies() {
  const cookies = document.cookie; // Pega todos os cookies visíveis (não HttpOnly)

  if (!cookies) {
    alert("Nenhum cookie encontrado.");
    return;
  }

  // Formata os cookies no estilo do Netscape Cookie Format
  const cookiesFormatados = cookies.split("; ").map(cookie => {
    const [nome, valor] = cookie.split("=");

    // Formato: domínio  httpOnly path secure expiração nome valor
    return `.youtube.com\tTRUE\t/\tTRUE\t0\t${nome}\t${valor}`;
  }).join("\n");

  // Cria um arquivo blob com o conteúdo dos cookies
  const blob = new Blob([cookiesFormatados], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  // Cria e dispara um link de download automaticamente
  const a = document.createElement('a');
  a.href = url;
  a.download = "cookies.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}