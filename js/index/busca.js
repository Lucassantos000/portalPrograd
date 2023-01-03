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

