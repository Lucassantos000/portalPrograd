// alert("OLÁ!")



function animarContainerInstitucional(){

    //fazer o container da solicitação diminuir;
    $("#containerSubElementsInsSolicitacao").animate({
        height: "0px"
    }, 100, ()=>{
        $("#containerSubElementsInsSolicitacao").css('display','none').animate({
            display:'none'
        },102)
    }); 
    
    if(document.getElementById('containerSubElementsInstitucionais').style.height === '40px'){
        // $("#containerSubElementsInstitucionais").css('overflow','hidden');
        $("#containerSubElementsInstitucionais").animate({
            height: "0px"
        }, 600, ()=>{
            $("#containerSubElementsInstitucionais").css('display','none').animate({
                display:'none'
            },610)
        });   
    }else{
    $("#containerSubElementsInstitucionais").css('display','flex');
    $("#containerSubElementsInstitucionais").animate({
        height: "40px"
       }, 600)
    }

}

function animarContainerSolicitacao(){

     //fazer o container da institucional diminuir;
     $("#containerSubElementsInstitucionais").animate({
        height: "0px"
    }, 100, ()=>{
        $("#containerSubElementsInstitucionais").css('display','none').animate({
            display:'none'
        },102)
    }); 
    
    if(document.getElementById('containerSubElementsInsSolicitacao').style.height === '40px'){
        // $("#containerSubElementsInstitucionais").css('overflow','hidden');
        $("#containerSubElementsInsSolicitacao").animate({
            height: "0px"
        }, 600, ()=>{
            $("#containerSubElementsInsSolicitacao").css('display','none').animate({
                display:'none'
            },610)
        });   
    }else{
    $("#containerSubElementsInsSolicitacao").css('display','flex');
    $("#containerSubElementsInsSolicitacao").animate({
        height: "40px"
       }, 600)
    }

}