//Detalhe header menu
const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativarLink);


//Ativar produto pela URL
const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);


//Perguntas
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const resposta = document.getElementById(controls);

  resposta.classList.toggle('ativa');

  const ativa = resposta.classList.contains("ativa")
  pergunta.setAttribute('aria-expanded', ativa);
}

function eventoPergunta(pergunta){
  pergunta.addEventListener('click', ativarPergunta)
}
perguntas.forEach(eventoPergunta);


//Galeria
const galeria = document.querySelectorAll('.conjunto-imagem img');
const galeriaContainer = document.querySelector('.conjunto-imagem')

function trocarImagem(event){
  const img = event.currentTarget;
  const media = matchMedia('(min-width:1000px)').matches;
  if(media){
  galeriaContainer.prepend(img);
  }
}

function eventosGaleria(img){
  img.addEventListener('click', trocarImagem)
}

galeria.forEach(eventosGaleria);

//Animação
if(window.SimpleAnime){
  new SimpleAnime();
}

