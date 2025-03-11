const d = document;

const $cards = d.querySelectorAll(".card"),
$titles = d.querySelectorAll("h3");

d.addEventListener("click", (e) =>{

    $titles.forEach( (title) =>{
        if(e.target === title){
            
            $cards.forEach( (card)=>{
                if(card.firstElementChild === title.parentElement){
                    
                    card.style.transform = 'rotate(0.5turn)';
                    card.style.transition = 'all 0.3s ease';
                    setTimeout( () =>{
                        
                        card.style.transform = 'rotate(1turn)';
                        card.style.transition = 'all 0.3s ease';
                    },2000);
                }
                
            })
        }
    })
    
})