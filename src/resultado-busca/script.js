const users = JSON.parse(localStorage.getItem('users'))

const { tipo, bairro } = getUrlVars()
const filteredUsers = users.filter(user => user.tipo === tipo && user.endereco.toLowerCase() === bairro.toLowerCase())

filteredUsers.forEach(user => {
    document.querySelector('.containerG').innerHTML += `
        <div class="usuario">
            <img src="${user.foto}" alt="">
            <h1>${user.nome}</h1>
            <p>${user.telefone}</p>
            <p>${user.endereco}</p>
            <p class="tipo">${user.tipo}</p>
        </div>
    `
});

function scrollToElement(id) {
    const element = document.getElementById(id)
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

function getUrlVars() {
        let qs = location.search
        qs = qs.split('+').join(' ');
    
        var params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;
    
        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }
        return params;
}

function sair() { 
    localStorage.setItem('usuarioLogado', null)
    location.href = "/pmv-ads-2022-2-e1-proj-web-t2-pucar/src/home-page/index.html"
}