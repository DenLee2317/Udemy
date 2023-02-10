
const imagArr = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"]; 
        
  let randomNumber1 = [Math.floor(Math.random() * imagArr.length)];
        
   document.querySelector('img.img1').setAttribute('src', imagArr[randomNumber1]);

   let randomNumber2 = [Math.floor(Math.random() * imagArr.length)];
        
   document.querySelector('img.img2').setAttribute('src', imagArr[randomNumber2]);

   function gameWins(){
    if(randomNumber1 > randomNumber2){
        document.querySelector('h1').innerHTML = '🚩 Player 1 Wins !';
             }
                  else if (randomNumber1 < randomNumber2){
              document.querySelector('h1').innerHTML = 'Player 2 Wins 🚩!';
                  }
                       else{ (randomNumber1 === randomNumber2)
                  document.querySelector('h1').innerHTML = 'Draw ! 🚩'
                       }
            
   }
     gameWins ()     
           
     
  