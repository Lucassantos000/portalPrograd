// SCRIPTS PARA MUDAR A PARTE DO FRONT END DA BARRA DE BUSCA E TAMBÉM PARA TRATAR OS DADOS ENVIADOS E RECEBIDOS DO SERVIDOR.

document.getElementById('buscaHome').addEventListener('focus', (e)=>{
    // console.log(e.target);
    e.target.style.backgroundColor = 'white';
    e.target.style.boxShadow = '0px 0px 5px 0 skyblue';
});

document.getElementById('buscaHome').addEventListener('blur', (e)=>{
    // console.log(e.target);
    e.target.style.backgroundColor = 'gainsboro';
    e.target.style.boxShadow = 'none';

})

// MESMO SCRIPT PARA O BUSCA MENOR
document.getElementById('buscaHomeMenor').addEventListener('focus', (e)=>{
    // console.log(e.target);
    e.target.style.backgroundColor = 'white';
    e.target.style.boxShadow = '0px 0px 5px 0 skyblue';
});

document.getElementById('buscaHomeMenor').addEventListener('blur', (e)=>{
    // console.log(e.target);
    e.target.style.backgroundColor = 'gainsboro';
    e.target.style.boxShadow = 'none';

})




//ANIIMAÇÃO PARA O CONTAINER DOS ELEMENTOS DA TOP BAR RESPOSNVIA APARECEREM

function abreContainerTopBarResponsivo(){


    console.log(document.getElementById('barraResponsiva').getAttribute('aberto'));


    if(document.getElementById('barraResponsiva').getAttribute('aberto') == 'false'){
        console.log('abre');
        document.getElementById('spanIconResponsiveFechar').style.display= 'flex';
        document.getElementById('spanIconResponsiveAbrir').style.display= 'none';

        $(".contentElementsBarResponsive").animate({
            height: "290px"
        }, ()=>{
        
        });
        document.getElementById('barraResponsiva').setAttribute('aberto','true');
        document.getElementsByClassName('contentElementsBarResponsive')[0].style.height = 'auto';
        // $(".contentElementsBarResponsive").css('height','auto');
        // document.getElementsByClassName('contentElementsBarResponsive')[0].style.height='auto';
        
    }else{
        document.getElementById('spanIconResponsiveAbrir').style.display= 'flex';
        document.getElementById('spanIconResponsiveFechar').style.display= 'none';

        console.log('fecha');
        $(".contentElementsBarResponsive").animate({
            height: "0px"
        }, 200, ()=>{
        });
        document.getElementById('barraResponsiva').setAttribute('aberto','false')

    }

  
}



//ANIMAÇÃO PARA OS SUBELEMEETOS DA CATEGORIA INSTITUICIONAL
function mostraSubElementsInstitucional(){
    
if(document.getElementById('wrapingSubElementsInstitucional').getAttribute('aberto') == 'false'){   
    document.getElementById('rowElementInstitucinalResponsive').style.rotate = '180deg';
    $("#wrapingSubElementsInstitucional").animate({
        height: "90px"
    }, 400, ()=>{
    document.getElementById('wrapingSubElementsInstitucional').setAttribute('aberto','true')
    });
}else{
    document.getElementById('rowElementInstitucinalResponsive').style.rotate = '0deg';
        $("#wrapingSubElementsInstitucional").animate({
        height: "0px"
    }, 400, ()=>{
    document.getElementById('wrapingSubElementsInstitucional').setAttribute('aberto','false')
    });

}

}


//ANIMAÇÃO PARA OS SUBELEMENTOS DA CATEGORIA SOLICITACAO
function mostraSubElementsSolicitacao(){
    
    if(document.getElementById('wrapingSubElementsSolicitacao').getAttribute('aberto') == 'false'){   
        document.getElementById('rowElementSolicitacaoResponsive').style.rotate = '180deg';
        $("#wrapingSubElementsSolicitacao").animate({
            height: "30px"
        }, 400, ()=>{
        document.getElementById('wrapingSubElementsSolicitacao').setAttribute('aberto','true')
        });
    }else{
        document.getElementById('rowElementSolicitacaoResponsive').style.rotate = '0deg';
            $("#wrapingSubElementsSolicitacao").animate({
            height: "0px"
        }, 400, ()=>{
        document.getElementById('wrapingSubElementsSolicitacao').setAttribute('aberto','false')
        });
    
    }
    
    }