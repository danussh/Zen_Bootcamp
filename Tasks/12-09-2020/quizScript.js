
let questionCounter = 0
async function getQuizData() {
    let responseInfo = await fetch("https://opentdb.com/api.php?amount=10&type=multiple")
    let responseData = await responseInfo.json()
    let quizData = []
    for (let i =0; i < responseData.results.length; i++){
        let object = {}
        object["question"] = responseData.results[i].question
        object["difficulty"] = responseData.results[i].difficulty
        object["correctAnswer"] = responseData.results[i].correct_answer
        let incorrect = responseData.results[i].incorrect_answers
        incorrect.push( object["correctAnswer"])
        object["options"] = incorrect
        quizData.push(object)
    }
    return quizData
}
let displayData = []
getQuizData().then((data) => {
    displayData = data
    createHTML()
});


function createHTML(){
    document.body.setAttribute("class", "background")
    let mainDiv = document.createElement("div")
    mainDiv.setAttribute("class", "container")
    document.body.appendChild(mainDiv)

    let rowDiv = document.createElement("div")
    rowDiv.setAttribute("class", "row")
    mainDiv.appendChild(rowDiv)

    let colDiv1 = document.createElement("div")
    colDiv1.setAttribute("class", "col-sm-12 col-md-2")
    rowDiv.appendChild(colDiv1)

    let colDiv2 = document.createElement("div")
    colDiv2.setAttribute("class", "col-sm-12 col-md-8")
    colDiv2.setAttribute("id", "colId")
    rowDiv.appendChild(colDiv2)

    let table1 = document.createElement("table")
    table1.setAttribute("class", "margin-table")
    table1.setAttribute("width", "100%")
    colDiv2.appendChild(table1)

    let tr1 = document.createElement("tr")
    table1.appendChild(tr1)

    let td1 = document.createElement("td")
    td1.setAttribute("class", "text-left td-class")
    td1.setAttribute("width", "50%")
    td1.setAttribute("id", "progressText")
    td1.innerText = "Question " + (questionCounter + 1) + "/10"
    tr1.appendChild(td1)

    let td2 = document.createElement("td")
    td2.setAttribute("width", "50%")
    td2.setAttribute("class", "text-right td-class")
    td2.innerText = "Score"
    tr1.appendChild(td2)

    let tr2 = document.createElement("tr")
    table1.appendChild(tr2)

    let td3 = document.createElement("td")
    td3.setAttribute("width", "50%")
    td3.setAttribute("class", "text-left")
    td3.setAttribute("id", "progressId")
    tr2.appendChild(td3)

    let progressDiv = document.createElement("div")
    progressDiv.setAttribute("class", "progress")
    td3.appendChild(progressDiv)

    let actDiv = document.createElement("div")
    actDiv.setAttribute("id", "progressBar")
    actDiv.setAttribute("class", "progress-bar progress-bar-striped progress-bar-animated background-progress")
    actDiv.setAttribute("role", "progressbar")
    actDiv.setAttribute("aria-valuenow", "10")
    actDiv.setAttribute("aria-valuemin", "0")
    actDiv.setAttribute("aria-valuemax", "100")
    actDiv.setAttribute("style", "width:10%")
    progressDiv.appendChild(actDiv)

    let td4 = document.createElement("td")
    td4.setAttribute("width", "50%")
    td4.setAttribute("class", "text-right td-class")
    td4.setAttribute("id", "scoreId")
    td4.innerText = currentScore 
    tr2.appendChild(td4)
    createQuestion()
       

}

function onNext(){
    questionCounter += 1
    if(questionCounter <= 9){
        let node = document.getElementById("questiondivId")
        node.remove()
        document.getElementById("progressText").innerText = "Question " + (questionCounter + 1) + "/10"
        let progressbar = document.getElementById("progressBar")
        progressbar.setAttribute("style", "width:"+((questionCounter + 1)*10)+"%")
        progressbar.setAttribute("aria-valuenow",((questionCounter + 1)*10))
        createQuestion()
    }
    else{
        window.open("end.html", "_self")
    }
}


function validateAnswer(answer){
    questionData = displayData[questionCounter]
    document.getElementById("nextBtn").removeAttribute("disabled")
    if (questionData.correctAnswer === answer){
        setCurrentScore(currentScore + 10)
        document.getElementById("scoreId").innerText = currentScore
    }
    for(let i=0; i<questionData.options.length; i++){
        if (questionData.correctAnswer === questionData.options[i]){
            document.getElementById(questionData.options[i]).setAttribute("style", "color:green")
        }
        else{
            document.getElementById(questionData.options[i]).setAttribute("style", "color:red")
        }
        document.getElementById(questionData.options[i]).setAttribute("disabled", "disabled")
    }
    
}


function  createQuestion() {

    let colDiv2 = document.getElementById("colId")
    let questionData = displayData[questionCounter]
    questionData.options.sort(func);  

    function func(a, b) { 
    return 0.6 - Math.random();
    } 
    let qDiv = document.createElement("div")
    qDiv.setAttribute("id", "questiondivId")
    colDiv2.appendChild(qDiv)

    let questionTag = document.createElement("h6")
    questionTag.setAttribute("class", "justify-text")
    questionTag.setAttribute("style", "margin-top: 20px")
    questionTag.innerHTML = "Q. " + questionData.question
    qDiv.appendChild(questionTag)

    let ansButton1 = document.createElement("button")
    ansButton1.setAttribute("class", "btn btn-secondary btn-lg btn-block text-left choice-text")
    ansButton1.innerHTML = "<span>A.</span>" + questionData.options[0]
    ansButton1.setAttribute("id",questionData.options[0])
    ansButton1.setAttribute("onClick", "validateAnswer(this.id)")
    qDiv.appendChild(ansButton1)

    let ansButton2 = document.createElement("button")
    ansButton2.setAttribute("class", "btn btn-secondary btn-lg btn-block text-left choice-text")
    ansButton2.innerHTML = "<span>B.</span>" + questionData.options[1]
    ansButton2.setAttribute("id",questionData.options[1])
    ansButton2.setAttribute("onClick", "validateAnswer(this.id)")
    qDiv.appendChild(ansButton2)

    let ansButton3 = document.createElement("button")
    ansButton3.setAttribute("class", "btn btn-secondary btn-lg btn-block text-left choice-text")
    ansButton3.innerHTML = "<span>C.</span>" + questionData.options[2]
    ansButton3.setAttribute("id",questionData.options[2])
    ansButton3.setAttribute("onClick", "validateAnswer(this.id)")
    qDiv.appendChild(ansButton3)

    let ansButton4 = document.createElement("button")
    ansButton4.setAttribute("class", "btn btn-secondary btn-lg btn-block text-left choice-text")
    ansButton4.innerHTML = "<span>D.</span>" + questionData.options[3]
    ansButton4.setAttribute("id",questionData.options[3])
    ansButton4.setAttribute("onClick", "validateAnswer(this.id)")
    qDiv.appendChild(ansButton4)

    let buttonNextDiv = document.createElement("div")
    qDiv.appendChild(buttonNextDiv)
    
    let buttonNext = document.createElement("button")
    buttonNext.setAttribute("class", "btn btn-primary btn-lg bg-color float-right")
    buttonNext.setAttribute("id", "nextBtn")
    buttonNext.setAttribute("disabled", "disabled")
    buttonNext.setAttribute("onClick", "onNext()")
    buttonNext.innerText = "Next"
    buttonNextDiv.appendChild(buttonNext)

}





