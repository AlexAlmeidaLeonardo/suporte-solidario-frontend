// Função para requisição GET
function apiGet(url, token, onSuccess, onError) {
  fetch(url, {
    method: 'GET',
    //mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(onSuccess)
    .catch(onError);
}

// Função para requisição POST
function apiPost(url, token, body, onSuccess, onError) {
  /*
  fetch(url, {
    method: 'POST',    
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(onSuccess)
    .catch(onError);
  */
    axios.post(url, body,
      {
        headers: {
          'Content-Type': 'application/json',
          'Host': url,
          'Origin': url
        }
      }
    )
    .then(onSuccess)
    .catch(onError);
}

// Função para requisição PUT
function apiPut(url, token, body, onSuccess, onError) {
  fetch(url, {
    method: 'PUT',
    //mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(body)
  })
    .then(response => response.json())
    .then(onSuccess)
    .catch(onError);
}

// Função para requisição DELETE
function apiDelete(url, token, onSuccess, onError) {
  fetch(url, {
    method: 'DELETE',
    //mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      //'Authorization': `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .then(onSuccess)
    .catch(onError);
}


// Função para armazenar o token
function armazenarToken(token) {
  document.cookie = token=`${token}; Secure; SameSite=Strict;`
}

// Função para ler o token
function lerToken() {
  return document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
}

// https://192.168.15.10:7040/swagger/index.html
// http://192.168.15.10:5000/swagger/index.html