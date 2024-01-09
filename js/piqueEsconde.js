var integrantes = $('#bandInt')
var containerBand = $('#allBand')
function escondeEsconde(){
if(integrantes.hasClass('esconde')){
        containerBand.addClass('esconde');
        integrantes.removeClass('esconde');
 }else{
    integrantes.addClass('esconde');
    containerBand.removeClass('esconde');
 }
}
function saibaMais(){
    let imgBand = $("#imgBand")
    if(imgBand.hasClass('allBandImg')){
        imgBand.removeClass('allBandImg')
        imgBand.addClass('saibaMais')
    }else{
        imgBand.removeClass('saibaMais')
        imgBand.addClass('allBandImg')
    }
}
containerBand.on('mouseover', function(){
        saibaMais()
})

containerBand.on('click', function(){
    escondeEsconde();
})
integrantes.on('click', function(){
    escondeEsconde();
})