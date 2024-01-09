var btnModalComprar1 = $('#btnComprar1');
var btnModalComprar2 = $('#btnComprar2');
var btnModalComprar3 = $('#btnComprar3');
var btnModalComprar4 = $('#btnComprar4');
var btnModalComprar5 = $('#btnComprar5');
var btnModalComprar6 = $('#btnComprar6');
var btnModalComprar7 = $('#btnComprar7');
var btnModalComprar8 = $('#btnComprar8');
var btnModalComprar9 = $('#btnComprar9');
var btnModalComprar10 = $('#btnComprar10');

var meuModal = $('.modal');

var btnModalComprar = $('.comprar')

function addAoCarrinho() {
    var meuModalBack = $('.modal-backdrop')
    
        btnModalComprar.text('Add ao Carrinho');
        btnModalComprar.css('backgroundImage','url(../image/Icons/sacola.png)');
        btnModalComprar.css('backgroundSize','contain');
        btnModalComprar.css({'background-repeat':'no-repeat'});
        
        meuModal.fadeOut( 1600, "linear");
        meuModalBack.fadeOut( 1600, "linear");       
    }
    
function addAoCarrinhoRetornar(){
    if(btnModalComprar.value = 'Add ao Carrinho'){
        setTimeout(()=>{
            btnModalComprar.text('Comprar');
            btnModalComprar.css('backgroundImage','none');
        },2000

        )
    }
}

btnModalComprar1.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })
btnModalComprar2.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })
btnModalComprar3.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })
btnModalComprar4.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })
btnModalComprar5.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })
btnModalComprar6.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })
btnModalComprar7.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })
btnModalComprar8.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })
btnModalComprar9.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })
btnModalComprar10.on('click', function(){
        addAoCarrinho();
        addAoCarrinhoRetornar();
    })


