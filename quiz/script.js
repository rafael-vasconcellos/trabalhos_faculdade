let question = 1
let count = 0
const sectionQ = document.querySelector('.quiz')
const asking = document.querySelector('.asking')
const answera = document.querySelector('.a')
const answerb = document.querySelector('.b')
const answerc = document.querySelector('.c')
const answerd = document.querySelector('.d')
const next = document.querySelector('.next')
const score = document.querySelector('.score')
const expo = document.querySelector('.expo')
const start = document.querySelector('.start')
start.addEventListener('click', startQuiz)













function startQuiz() {
    asking.innerHTML = 'Como o corona vírus é transmitido?'
    expo.innerHTML = 'A Covid-19 é transmitida através de pequenas<br>partículas líquidas expelidas quando uma<br>pessoa infectada tosse, espirra, fala, ou respira'
    answera.innerHTML = 'Não usar álcool em gel'
    answerb.innerHTML = 'Através da boca e nariz de uma<br>pessoa infectada'
    answerc.innerHTML = 'Bebendo água não limpa'
    answerd.innerHTML = 'Todas as alternativas'
    
    sectionQ.style.height = '35em'
    start.removeEventListener('click', startQuiz)
    start.classList.add('hidden')
    answera.classList.remove('hidden')
    answerb.classList.remove('hidden')
    answerc.classList.remove('hidden')
    answerd.classList.remove('hidden')
    listeners()
}

function listeners() {
if(question==2 || question==5 || question==7) {
answera.onclick = cAnswer
answerb.onclick = reveal
answerc.onclick = reveal
answerd.onclick = reveal}

else if(question==1 || question==9) {
answera.onclick = reveal
answerb.onclick = cAnswer
answerc.onclick = reveal
answerd.onclick = reveal}

else if(question==3 || question==8) {
answera.onclick = reveal
answerb.onclick = reveal
answerc.onclick = cAnswer
answerd.onclick = reveal}

else if(question==4 || question==6) {
answera.onclick = reveal
answerb.onclick = reveal
answerc.onclick = reveal
answerd.onclick = cAnswer}

else if (question==10) {
answera.onclick = reveal
answerb.onclick = cAnswer
answerc.onclick = reveal
answerd.onclick = reveal}
    }

function cAnswer() {
    count++
    reveal()
    console.log(count)
    }

function reveal() { 
    answera.onclick = null
    answerb.onclick = null
    answerc.onclick = null
    answerd.onclick = null
    expo.classList.remove('hidden')
    next.classList.remove('hidden')
    next.addEventListener('click', nextQuestion)

    if(question==2 || question==5 || question==7) {
    answera.classList.add('correct')
    answerb.classList.add('selected')
    answerc.classList.add('selected')
    answerd.classList.add('selected') }

    else if(question==1 || question==9) {
    answera.classList.add('selected')
    answerb.classList.add('correct')
    answerc.classList.add('selected')
    answerd.classList.add('selected') }

    else if(question==3 || question==8) {
    answera.classList.add('selected')
    answerb.classList.add('selected')
    answerc.classList.add('correct')
    answerd.classList.add('selected') }

    else if(question==4 || question==6) {
    answera.classList.add('selected')
    answerb.classList.add('selected')
    answerc.classList.add('selected')
    answerd.classList.add('correct') }

    else if (question==10) {
    answera.classList.add('selected')
    answerb.classList.add('correct')
    answerc.classList.add('selected')
    answerd.classList.add('selected')
    next.classList.add('hidden')
    next.removeEventListener('click', nextQuestion)
    fscore()
    }
}















function nextQuestion() {

expo.classList.add('hidden')
answera.classList.remove('selected', 'correct')
answerb.classList.remove('selected', 'correct')
answerc.classList.remove('selected', 'correct')
answerd.classList.remove('selected', 'correct')
next.classList.add('hidden')
next.removeEventListener('click', nextQuestion)

    switch(question) {

    case 3:
    asking.innerHTML = 'Quais são os sintomas do corona vírus?'
    answera.innerHTML = 'Tosse constante'
    answerb.innerHTML = 'Febre'
    answerc.innerHTML = 'Cansaço'
    answerd.innerHTML = 'Todas as alternativas'
    expo.innerHTML = 'Todas as alternativas contém alguns dos<br>sintomas da covid-19'
    question++
    listeners()

    break
    case 2:
    asking.innerHTML = 'Qual é o grupo de risco para o corona vírus?'
    answera.innerHTML = 'Adoslecentes'
    answerb.innerHTML = 'Crianças'
    answerc.innerHTML = 'Idosos'
    answerd.innerHTML = 'Europeus'
    expo.innerHTML = 'Idosos, principalmente acima de 70 anos<br>estão inseridos no grupo de risco da covid-19'
    question++
    listeners()
    
    break
    case 1:
    asking.innerHTML = 'Qual o nome dos vírus que infectam bactérias?'
    answera.innerHTML = 'Bacteriófago'
    answerb.innerHTML = 'Fungos'
    answerc.innerHTML = 'Patógenos'
    answerd.innerHTML = 'Metanógenos'
    expo.innerHTML = 'Bacteriófago é um vírus que parasita uma<br>bactéria infectando-a e se reproduzindo dentro dela.'
    question++
    listeners()
    
    break
    case 4:
    asking.innerHTML = 'Qual é a temperatura normal do corpo humano?'
    answera.innerHTML = '36 - 37 ºC'
    answerb.innerHTML = '35 - 36 ºC'
    answerc.innerHTML = '34 - 35 ºC'
    answerd.innerHTML = '30 - 31 ºC'
    expo.innerHTML = 'A temperatura normal do corpo humano<br>fica aproximadamente entre 36°C e 37,5°C'
    question++
    listeners()
        
    break
    case 5:
    asking.innerHTML = 'Em que local foi identificado o primeiro<br>caso de corona vírus?'
    answera.innerHTML = 'Tianjin'
    answerb.innerHTML = 'Beijing'
    answerc.innerHTML = 'Shangai'
    answerd.innerHTML = 'Wuhan'
    expo.innerHTML = 'No dia 1º de dezembro de 2019, em Wuhan<br>na china foi detectado o que na época chamaram de "Pneumonia misteriosa"'
    question++
    listeners()

    break
    case 6:
    asking.innerHTML = 'De onde o corona vírus recebe seu nome?'
    answera.innerHTML = 'Devido a sua projeção semelhante a uma coroa'
    answerb.innerHTML = 'Uma pessoa chamada corona o descobriu'
    answerc.innerHTML = 'Uma pessoa chamada corona foi a<br>primeira infectada'
    answerd.innerHTML = 'Devido a sua projeção semelhante a uma folha'
    expo.innerHTML = 'Corona significa coroa em espanhol'
    question++
    listeners()
    
    break
    case 7:
    asking.innerHTML = 'Pessoas que não mostram sinais de infecção<br>são chamadas de:'
    answera.innerHTML = 'não-sintopático'
    answerb.innerHTML = 'não-sintomático'
    answerc.innerHTML = 'asintomático'
    answerd.innerHTML = 'asintopático'
    expo.innerHTML = 'Asintomático: que não apresenta ou não constitui sintoma.'
    question++
    listeners()

    break
    case 8:
    asking.innerHTML = 'Qual é o tempo de incubação do corona vírus?'
    answera.innerHTML = '5 - 25 dias'
    answerb.innerHTML = '1 - 14 dias'
    answerc.innerHTML = '10 - 15 dias'
    answerd.innerHTML = '40 - 50 dias'
    expo.innerHTML = 'O "período de incubação se refere ao tempo<br>entre a infecção e o início dos sintomas, dura de 1-14 dias"'
    question++
    listeners()
    
    break
    case 9:
    asking.innerHTML = 'Qual orgão do corpo o corona vírus ataca principalmente?'
    answera.innerHTML = 'Fígado'
    answerb.innerHTML = 'Pulmões'
    answerc.innerHTML = 'Coração'
    answerd.innerHTML = 'Traquéia'
    expo.innerHTML = 'Pulmão é o orgão mais afetado'
    question++
    listeners()

    break
    default: break
    }
}

function fscore() {
    const performance = (count*100)/10
    score.innerHTML = 'você acertou '+count+'/10 perguntas!<br>seu desempenho é: '+performance+'%'
    if (performance < 39) {score.classList.add('selected')
                           score.style.border = '2px solid white'}
    else if (performance >= 40 && performance <= 66) {score.style.backgroundColor = '#FFD700'
                                                      score.style.border = '2px solid white'
                                                      score.style.color = 'black'}
    else if (performance > 66) {score.classList.add('correct')}
    }