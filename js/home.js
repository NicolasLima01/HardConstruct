//-------------------------------------------------
//         PASSADOR DE SLIDES AUTOMÁTICO
//-------------------------------------------------

let countSlide = 1;
document.getElementById("slide1").checked = true; //torna o radio do slide1 checado

//Roda a função de 5 em 5s
setInterval(function () {
    nextImage();
}, 5000)

//Função que passa as imagens do slide automáticamente  
function nextImage() {
    countSlide++;
    if (countSlide > 2) {
        countSlide = 1; //Volta para o primeiro slide
    }
    //Muda o checked do radio dos slides
    document.getElementById("slide" + countSlide).checked = true;

}

//-------------------------------------------------
//             REDIRECIONANDO CARDS
//-------------------------------------------------

//Quando clicar no card, redireciona ao index
function clicaCard() {
    window.open('index.html', '_self');
}

// Adiciona o evento de clique a todos os cards
//Faz com que que o evento só ocorra se toda a página for carregada e cria uma função
document.addEventListener("DOMContentLoaded", function redirecionaCard() {
    //Array contendo todos os elementos cards
    const cards = document.getElementsByClassName("card");

    //loop que abrange todos os cards
    for (let i = 0; i < cards.length; i++) {
        //Faz com que todos os cards recebam o leitor de eventos de click 
        //e a funçao clicaCard ocorra
        cards[i].addEventListener("click", clicaCard);
    }
});

//-------------------------------------------------
//            PASSADOR DE CARDS 
//-------------------------------------------------

let countCard = 0;
function passaCard() {
    let cards = document.getElementsByClassName('card'); //Pega todos os elementos da classe 'card'
    cards[countCard].style.opacity = 0;
    cards[countCard].style.visibility = "hidden";
    countCard++;
}

setInterval(function () {
    //passaCard();
}, 5000);

//-------------------------------------------------
//              CARREGANDO PÁGINA
//-------------------------------------------------
document.addEventListener("DOMContentLoaded", function carregamento() {

    // let carregamento = document.querySelector("body");
    // carregamento.style.height = "100vh";
    // carregamento.style.widtht = "100vh";
    // carregamento.style.backgroundColor = "orange";
    JsLoadingOverlay.Show();
    JsLoadingOverlay.Hide();
});
