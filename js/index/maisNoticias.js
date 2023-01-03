
async function maisNoticias(element){
    console.log(element);

    // O ATRIBUTO PAGINATION SERVE PARA MOSTAR A PAGINAÇÃO DAS NOTÍCIA NA PÁGINA, (INICIALMENTE SÃO CARREGADAS 5 NOTÍCIAS ) E NAS SEGUNTAS MAIS 5 EM CASA ATÉ QUE NA ÚLTIMA VAI SER REDIRECIONADA PRA PÁGINA DE NOTÍCIAS 
    console.log(element.getAttribute('pagination'));


    //ATUALIAZAR O VALOR DA PAGINAÇÃO
    let paginationValue = (parseInt(element.getAttribute('pagination'))+1).toString();
    // console.log()
    element.setAttribute('pagination',paginationValue);
    console.log(element.getAttribute('pagination'));


    if(element.getAttribute('pagination')==='2'){
    // COMANDO PARA REDIRECIONAR PARRA UMA NOVA PÁGINA
    const url = '/pages/noticias.html' 
    const win = window.open(url, '_blank');
    win.focus();

    }

}