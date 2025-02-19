//Passador de slides automático
let count = 1;
document.getElementById("slide1").checked = true; //torna o radio do slide1 checado

//Roda a função de 5 em 5s
setInterval( function(){
 nextImage();
}, 5000) 

//Função que passa as imagens do slide automáticamente  
function nextImage() {
    count++;
    if (count > 2){
        count = 1; //Volta para o primeiro slide
    }

    //Muda o checked do radio dos slides
    document.getElementById("slide"+ count).checked = true; 

}

//REDIRECIONANDO CARDS

//Quando clicar no card, redireciona ao index
function clicaCard(){
    window.open('index.html', '_self');
}

// Adiciona o evento de clique a todos os cards
//Faz com que que o evento só ocorra se toda a página for carregada e cria uma função
document.addEventListener("DOMContentLoaded", function redirecionaCard() 
{
    //Array contendo todos os elementos cards
    const cards = document.getElementsByClassName("card");

    //loop que abrange todos os cards
    for (let i = 0; i < cards.length; i++) {
        //Faz com que todos os cards recebam o leitor de eventos de click 
        //e a funçao clicaCard ocorra
        cards[i].addEventListener("click", clicaCard);
    }
});