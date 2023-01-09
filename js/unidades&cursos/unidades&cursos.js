/*const munManaus = document.getElementById('#path5989');
console.log(munManaus);
munManaus.addEventListener('click', (e)=>{
  const infoManaus =  document.getElementsByClassName('Manaus')[0];

  infoManaus.style.display = 'flex';
  alert('uhh')
})*/

function abrirCursoEscolaCentro(element){


    // console.log(element.style.transform);
    
    if(element.style.transform === 'rotate(0deg)'){
    
        element.style.transform = 'rotate(180deg)'

        // console.log($(element).siblings()[0].outerText.split('(')[1].split(')')[0])

        let nomeEscola = $(element).siblings()[0].outerText.split('(')[1].split(')')[0];

        let escola = document.querySelector(`.${nomeEscola}`);

        // console.log(escola);
        escola.style.display = 'flex';
        $(`.${nomeEscola}`).animate({
            height: "100px"
        }, 500, ()=>{
        escola.style.height = 'auto';
        });
    }else{
       
        element.style.transform = 'rotate(0deg)'

        // console.log($(element).siblings()[0].outerText.split('(')[1].split(')')[0])

        let nomeEscola = $(element).siblings()[0].outerText.split('(')[1].split(')')[0];

        let escola = document.querySelector(`.${nomeEscola}`);

        // console.log(escola);
        $(`.${nomeEscola}`).animate({
            height: "0px"
        }, 1000, ()=>{
            $(`.${nomeEscola}`).animate({
                display: "none"
            })
            escola.style.display = 'none';
        })
    }
    
}



