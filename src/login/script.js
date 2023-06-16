function logar() {
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const users = JSON.parse(localStorage.getItem('users'))
 
    const logado = users.find(user => user.email === email && user.senha === senha)

    if (logado) {
        location.href = '/pmv-ads-2022-2-e1-proj-web-t2-pucar/src/home-page/index.html'
        localStorage.setItem('usuarioLogado', JSON.stringify(logado))
        return
    }
    alert('Usuário ou senha incorretos')
}

document.addEventListener('keypress', function(e){ 
    if (e.keyCode === 13){ 
    }
})