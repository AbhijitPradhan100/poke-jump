 score = 0 // score initialization
 cross = true

 //Audio
audioGO = new Audio('game-over.wav')
audioMain = new Audio('Opening.mp3')


// document.addEventListener('click', function() {
//     audioMain.play();
// });

setTimeout(() => {
    audioMain.play()
}, 1000);

//keyboard output(arrow keys)
document.onkeydown = function(e){
    // console.log("Key code is :", e.keyCode)


    if(e.keyCode == 38){
        pikachu = document.querySelector('.pikachu')
        pikachu.classList.add('animatePikachu')
        setTimeout(() => {
            pikachu.classList.remove('animatePikachu')
        }, 700);
    }
    if(e.keyCode == 39){
        pikachu = document.querySelector('.pikachu')
        pikachuX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'))
        if (pikachuX < window.innerWidth - 150) { 
            pikachu.style.left = pikachuX + 112 + "px"
        }    }
    if(e.keyCode == 37){
        pikachu = document.querySelector('.pikachu')
        pikachuX = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'))
        if(pikachuX > 0){
            pikachu.style.left = (pikachuX - 112) + "px"
        }
        
    }
}

setInterval(() => {
    pikachu = document.querySelector('.pikachu')
    obstacle = document.querySelector('.obstacle')
    gameOver = document.querySelector('.gameOver')

    dx = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(pikachu, null).getPropertyValue('top'))

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'))
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'))

    offsetX = Math.abs(dx-ox)
    offsetY = Math.abs(dy-oy)
    // console.log(offsetX, offsetY)

    //collision detect
    if(offsetX < 73 && offsetY < 53){
        gameOver.innerHTML = "Game Over!! Reload to Play Again"
        obstacle.classList.remove('pokeball')
        audioGO.play()
        setTimeout(() => {
            audioMain.pause()
            audioGO.pause()
        }, 1000);
        
    }else if(offsetX < 145 && cross){
        score+=1
        updateScore(score)
        cross =false
        setTimeout(() => {
            cross = true
        }, 1000);

        setTimeout(() => {
            pokeDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'))
            newDur = pokeDur - 0.1
            obstacle.style.animationDuration = newDur + 's'
        }, 500);

        
    }
    

}, 10);

//score update
function updateScore (score){
    scoreCont.innerHTML = "Your Score: " + score
}