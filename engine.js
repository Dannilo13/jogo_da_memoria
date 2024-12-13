const emojis = [
  "🦁",
  "🦁",
  "🐯",
  "🐯",
  "🦒",
  "🦒",
  "🦊",
  "🦊",
  "🦝",
  "🦝",
  "🐷",
  "🐷",
  "🐒",
  "🐒",
  "🐳",
  "🐳",
];

//cartas abertas
let opencards = [];  

// embalharar cartas
let shuffleEmojis = emojis.sort(()=>(Math.random() > 0.5 ? 2 : -1)); 

// gerar as cartas
for (let i=0; i < emojis.length; i++)
  {
    let box = document.createElement ("div");
    box.className = "item";
    box.innerHTML= shuffleEmojis[i];
    box.onclick =handleClick;
    document.querySelector(".game").appendChild(box);

    // tratar o click
    function handleClick() {
    
      if( opencards.length < 2 ) {
        this.classList.add("boxOpen");
        opencards.push(this);

      }
         
      if (opencards.length == 2 ) {
        setTimeout(checkMatch, 500);
            

      }

    }
  }


function checkMatch(){
  if(opencards[0].innerHTML === opencards[1].innerHTML) {
    opencards[0].classList.add
    ("boxMatch"); 
    opencards[1].classList.add
    ("boxMatch");
  } else{
    opencards[0].classList.remove
    ("boxOpen");
    opencards[1].classList.remove
    ("boxOPen");
  }
  opencards = []; {
  if(document.querySelectorAll("boxMatch").length === emojis.length) {
    alert("VOCÊ GANHOU!!");
  }
  }
   
}