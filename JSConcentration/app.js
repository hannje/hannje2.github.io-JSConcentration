// get section, lives elements

const section = document.querySelector('section');
const playersLivesCount = document.querySelector('span');
let playersLives = 6;

playersLivesCount.textContent = playersLives;

//generate the images, names

const getData = () => [
  { imgSrc: "./images/beatles.jpeg", name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
  { imgSrc: "./images/beatles.jpeg", name: "beatles" },
  { imgSrc: "./images/blink182.jpeg", name: "blink 182" },
  { imgSrc: "./images/fkatwigs.jpeg", name: "fka twigs" },
  { imgSrc: "./images/fleetwood.jpeg", name: "fleetwood" },
  { imgSrc: "./images/joy-division.jpeg", name: "joy division" },
  { imgSrc: "./images/ledzep.jpeg", name: "led zeppelin" },
  { imgSrc: "./images/metallica.jpeg", name: "metallica" },
  { imgSrc: "./images/pinkfloyd.jpeg", name: "pink floyd" },
];

//randomizer

const randomize = ()=>{
    const cardData = getData();

    cardData.sort(()=>Math.random() - .5 );
//    console.log(cardData);
    return cardData;
}

const cardGenerator = () => {
    const cardData = randomize();

    //generate html

    const cards = document.querySelectorAll('.card');

    cardData.forEach((item,index )=>{
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");

    card.classList = 'card';
    face.classList = "face";
    back.classList = "back";
    //add img src
    face.src = item.imgSrc;
    card.setAttribute('name',item.name);

    // make up awhole card with elements
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e)=>{

        checkCards(e);
        card.classList.toggle('toggleCard');

    } );
});


}
// check for match

const checkCards = (e)=>{

     console.log(e);
    const clickedCard =e.target;
   
 //   const flippedCards = document.querySelectorAll('.flipped');
    
    clickedCard.classList.add('flipped');
    const flippedCards = document.querySelectorAll(".flipped");
   console.log(flippedCards);
 
    if(flippedCards.length === 2){
        if(flippedCards[0].getAttribute('name') ===flippedCards[1].getAttribute('name') ){
            console.log("MATCH"); 
            //remove the flip
            flippedCards.forEach((card)=>{ 
                card.classList.remove('flipped');
                card.style.pointerEvents = 'none';
            })

        }
        else{
            flippedCards.forEach(card=>{
                card.classList.remove('flipped');
                setTimeout(()=> card.classList.remove('toggleCard'),1000);
            });

            playersLives--;
            playersLivesCount.textContent = playersLives;

            if(playersLives === 0){
                restart();
            }
        }
    }
}

const restart = ()=>{
    let cardData = randomize();
    let faces = document.querySelectorAll(".face");
    let cards = document.querySelectorAll(".card");

    cardData.forEach((item,index )=>{
        cards[index].classList.remove('toggleCard');
    
         cards[index].style.pointerEvents = "all";
         faces[index].src = item.imgSrc;
         cards[index].setAttribute('name',item.name);
    });


        
    playersLives = 6;
    playersLivesCount.textContent = playersLives;
     
}

cardGenerator();