function capturarCookies() {
    // Captura os cookies da página atual
    const cookies = document.cookie.split('; ')
      .map(cookie => {
        const [name, value] = cookie.split('=');
        return `.youtube.com\tTRUE\t/\tTRUE\t0\t${name}\t${value}`; // Formato para o arquivo .txt
      })
      .join('\n');
  
    // Se houver cookies, cria o arquivo
    if (cookies) {
      const blob = new Blob([cookies], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
  
      const a = document.createElement('a');
      a.href = url;
      a.download = 'cookies.txt';  // Nome do arquivo gerado
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      alert("Nenhum cookie encontrado!");
    }
  }