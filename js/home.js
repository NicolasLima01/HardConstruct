//-------------------------------------------------
//         PASSADOR DE SLIDES AUTOMÁTICO
//-------------------------------------------------

let countSlide = 1; //predefinindo o primeiro slide
fnlSlide = document.querySelector(".slider").childElementCount; //predefinido o último slide
document.getElementById("slide1").checked = true; //torna o radio do slide1 checado

//Roda a função de 5 em 5s
setInterval(function () {
    nextImage();
}, 8000)

//Função que passa as imagens do slide  
function nextImage() {
    countSlide++;
    if (countSlide > fnlSlide) {
        countSlide = 1; //Volta para o primeiro slide
    }
    //Muda o checked do radio dos slides
    document.getElementById("slide" + countSlide).checked = true;
    
}

//Função que passa as imagens do slide para trás  
function prevImage() {
    countSlide = countSlide - 1;
    if (countSlide < 1) {
        countSlide = fnlSlide; //Vai ao último slide
    }
    //Muda o checked do radio dos slides
    document.getElementById("slide" + countSlide).checked = true;

}

document.getElementById("seta-direita").addEventListener("click", nextImage);
document.getElementById("seta-esquerda").addEventListener("click", prevImage);


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
//              OFF CANVAS CARRINHO
//-------------------------------------------------

/* Aumentando o tamanho da off-canvas*/
function openOffCanvasCarrinho() {
    let offCanvas = document.getElementById("offcanvas-carrinho");
    offCanvas.style.width = "250px";
    offCanvas.style.padding = "0 20px";
    offCanvas.style.zIndex = 11;
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* diminui o tamandho do offcanvas para 0 */
function closeOffCanvasCarrinho() {
    let offCanvas = document.getElementById("offcanvas-carrinho");
    offCanvas.style.width = "0";
    offCanvas.style.padding = "0px";
    document.body.style.backgroundColor = "white";
} 