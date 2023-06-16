const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'))

const nome = document.getElementById('nome')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const telefone = document.getElementById('telefone')
const matricula = document.getElementById('matricula')
const endereco = document.getElementById('endereco')
let imgBase64 = usuarioLogado.foto
const foto = document.getElementById('img')


nome.value = usuarioLogado.nome
email.value = usuarioLogado.email
senha.value = usuarioLogado.senha
matricula.value = usuarioLogado.matricula
telefone.value = usuarioLogado.telefone
endereco.value = usuarioLogado.endereco
document.getElementById(usuarioLogado.tipo).checked = true
foto.src = usuarioLogado.foto

function atualizar() {
    
    const tipo = document.querySelector('input[name="tipo"]:checked')

    const users = JSON.parse(localStorage.getItem('users'))
    const usuariosFiltrados = users.filter(user => user.email !== usuarioLogado.email)
    
    const usuario = {
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        telefone: telefone.value,
        matricula: matricula.value,
        endereco: endereco.value,
        tipo: tipo.value,
        foto: imgBase64,
    }

    usuariosFiltrados.push(usuario)

    localStorage.setItem('users', JSON.stringify(usuariosFiltrados))
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario))
}

function desativar() {
    const confirma = confirm('Tem certeza que deseja desativar a conta?')
    
    if (confirma) {
        const users = JSON.parse(localStorage.getItem('users'))
        const usuariosFiltrados = users.filter(user => user.email !== usuarioLogado.email)

        localStorage.setItem('users', JSON.stringify(usuariosFiltrados))
        
        localStorage.removeItem('usuarioLogado')

        alert('Conta desativada')
        location.href = '/pmv-ads-2022-2-e1-proj-web-t2-pucar/src/home-page/index.html'

    }

}

const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

const uploadImage = async (event) => {
    const file = event.target.files[0];
    imgBase64 = await convertBase64(file);
    document.getElementById('img').src = imgBase64;
};

document.getElementById('uploadimage').addEventListener("change", (e) => {
    uploadImage(e);
});

const passwordField = document.querySelector("#senha");
const eyeIcon= document.querySelector("#eye");

eye.addEventListener("click", function(){
    this.classList.toggle("fa-eye-slash");
    const type = passwordField.getAttribute("type") === "password" ? "text" : "password";
    passwordField.setAttribute("type", type);
})