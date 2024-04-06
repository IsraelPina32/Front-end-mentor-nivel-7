const botao = document.querySelector(".btn");
const titulo = document.querySelector(".titulo");
const texto = document.querySelector(".texto");

async function geradoDeConselho(){
        const resposta = await fetch("https://api.adviceslip.com/advice");
        const conselhoID = await resposta.json();

        const tituloID = `Advice # ${conselhoID.slip.id}`
        const textoID = `"${conselhoID.slip.advice}"`
        
        titulo.innerHTML = tituloID;
        texto.innerHTML = textoID;
}

botao.addEventListener("click", geradoDeConselho)
geradoDeConselho()