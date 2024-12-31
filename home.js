//Passador de slides automático
let count = 1;
document.getElementById("slide1").checked = true; //torna o radio do slide1 checado

//Roda a função de 2 em 2s
setInterval( function(){
 nextImage();
}, 3000) 

//Função que passa as imagens do slide automáticamente  
function nextImage() {
    count++;
    if (count > 2){
        count = 1; //Volta para o primeiro slide
    }

    //Muda o checked do radio dos slides
    document.getElementById("slide"+ count).checked = true; 

}