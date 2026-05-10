let usuarioAtual =
localStorage.getItem("usuarioLogado");

if(usuarioAtual == null) {
    alert('Nenhum usuário foi logado! Por favor, faça login na página seguinte!');
    window.location.href = "login.html";
}

document.getElementById("usuarioLogado")
.innerText = usuarioAtual;


const chats = {

    chat1: [],

    chat2: []

};


let chatAtual = "chat1";


function carregarMensagens() {

    const areaMensagens =
    document.getElementById("mensagens");

    areaMensagens.innerHTML = "";

    chats[chatAtual].forEach(msg => {

        areaMensagens.innerHTML += `

            <div class="bg-blue-700 p-3 rounded-lg">

                <strong class="text-yellow-300">
                    ${msg.usuario}
                </strong>

                <p>
                    ${msg.texto}
                </p>

            </div>

        `;

    });

}


function trocarChat(chat) {

    chatAtual = chat;

    const titulo =
    document.getElementById("tituloChat");

    if(chat == "chat1") {

        titulo.innerText = "Joao";

    }

    else {

        titulo.innerText = "Maria";

    }

    carregarMensagens();

}


function enviarMensagem() {

    const input =
    document.getElementById("mensagemInput");

    const texto = input.value;

    if(texto.trim() == "") {

        return;

    }

    chats[chatAtual].push({

        usuario: usuarioAtual,

        texto: texto

    });

    input.value = "";

    carregarMensagens();

}


carregarMensagens();