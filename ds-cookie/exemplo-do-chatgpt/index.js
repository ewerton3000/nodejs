// Criar um cookie com ds-cookie
dsCookie.set('nome_do_cookie', 'valor_do_cookie', {
    expires: 7,           // Expires em 7 dias
    path: '/',            // O cookie é válido no domínio desejado
    secure: true,         // Apenas será enviado por conexões HTTPS
    sameSite: 'Strict'    // Política SameSite
  });

  // Ler o valor de um cookie com ds-cookie
let cookieValue = dsCookie.get('nome_do_cookie');
console.log(cookieValue);  // Exibe 'valor_do_cookie'
// Excluir um cookie com ds-cookie
dsCookie.remove('nome_do_cookie', { path: '/' });

// Definir o último vídeo assistido usando ds-cookie
function setLastWatchedVideo(videoId) {
    dsCookie.set('last_watched_video', videoId, { expires: 30, path: '/', secure: true, sameSite: 'Strict' });
  }
  
  // Ler o último vídeo assistido
  function getLastWatchedVideo() {
    return dsCookie.get('last_watched_video');
  }
  
  // Excluir o último vídeo assistido
  function removeLastWatchedVideo() {
    dsCookie.remove('last_watched_video', { path: '/' });
  }