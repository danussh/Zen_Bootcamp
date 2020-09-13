let highScores = []



function addHighScore(object) {
    try{
        highScores = JSON.parse(sessionStorage.getItem("highScores"))
        highScores.push(object)
        console.log(highScores)
        sessionStorage.setItem("highScores", JSON.stringify(highScores));
    }
    catch(error){
        highScores = [object]
        sessionStorage.setItem("highScores", JSON.stringify(highScores));
    }
    
    
}

function getHighScores() {
    highScores = JSON.parse(sessionStorage.getItem("highScores"))
    console.log(highScores)
    return highScores
}

let currentScore = 0


function setCurrentScore(value){
    currentScore = value
    sessionStorage.setItem("currentScore", currentScore);
}

function getCurrentScore(){
    return sessionStorage.getItem("currentScore")
}

