function scrollToElement(id) {
    const element = document.getElementById(id)
    window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

if (usuarioLogado) {
    const cabecalhoDireita = document.getElementById('cabecalho-direita')
    cabecalhoDireita.innerHTML = `
        <button onclick='location.href = "/pmv-ads-2022-2-e1-proj-web-t2-pucar/src/perfil/index.html"'>Perfil</button>
        <button onclick='sair()'>Sair</button>
    `
}

if (usuarioLogado) {
    const perfil = document.getElementById('perfil')
    perfil.innerHTML = `
        <a class="nav-link" href="/pmv-ads-2022-2-e1-proj-web-t2-pucar/src/perfil/index.html">Perfil</a>
    `
}

if (usuarioLogado) {

    const sair = document.getElementById('sair')
    sair.innerHTML = `
        <a class="nav-link" onclick='sair()'>Sair</a>
    `
}

function checkLogado() {
    if (usuarioLogado) {
        document.getElementById('campo-busca-form').action = "/pmv-ads-2022-2-e1-proj-web-t2-pucar/src/resultado-busca/index.html"
    }
}
checkLogado()

function checknLogado() {
    if (!usuarioLogado) {
        alert('Você precisa se logar para buscar!')
    }
}

function sair() { 
    localStorage.setItem('usuarioLogado', null)
    location.reload()
}

function setUser() {
    if (!localStorage.getItem("users")) {
        localStorage.setItem("users", JSON.stringify([
            {
                foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                nome: "Vinicius",
                telefone: "(31) 8888-888",
                endereco: "Centro",
                tipo: "motorista",
            },
            {
                foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                nome: "Vanessa",
                telefone: "(31) 8888-888",
                endereco: "Centro",
                tipo: "motorista",
            },
            {
                foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                nome: "Ricardo",
                telefone: "(31) 8888-888",
                endereco: "Centro",
                tipo: "passageiro",
            },
            {
                foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                nome: "Larissa",
                telefone: "(31) 8888-888",
                endereco: "Centro",
                tipo: "passageiro",
            },
            {
                foto: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
                nome: "Felipe",
                telefone: "(31) 8888-888",
                endereco: "Centro",
                tipo: "passageiro",
            },
        ]))
    }
}
setUser()