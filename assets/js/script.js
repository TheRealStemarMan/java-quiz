const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex
let score = 0;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  if (currentQuestionIndex > questions.lenght) {
    endGame()
  }
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  if (
    selectedButton.dataset.correct
  ) {
    score++
  }
    
  
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })

  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } 
   else {
     startButton.innerText = 'Restart'
     startButton.classList.remove('hide')
     let scoreBox = document.getElementById('score')
     scoreBox.innerHTML = score
     scoreBox.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What was the first MCU Movie?',
    answers: [
      { text: 'Iron-Man', correct: true },
      { text: 'The Avengers', correct: false },
      { text: 'Spider-Man', correct: false },
      { text: 'Captain America: The First Avenger', correct: false }
    ]
  },
  {
    question: 'Highest grossing movie of all time?',
    answers: [
      { text: 'Star Wars: The Force Awakens', correct: false },
      { text: 'Titanic', correct: false },
      { text: 'Avengers: Endgame', correct: false },
      { text: 'Avatar', correct: true }
    ]
  },
  {
    question: 'Who is the last actor who played Spider-Man in live-action?',
    answers: [
      { text: 'Andrew Garfield', correct: false },
      { text: 'Tom Holland', correct: false },
      { text: 'Tobey Maguire', correct: false },
      { text: 'All of them', correct: true }
    ]
  },
  {
    question: 'Who is the first actor to play james bond?',
    answers: [
      { text: 'Daniel Craig', correct: false },
      { text: 'Sean Connery', correct: true },
      { text: 'Pierce Brosnan', correct: false },
      { text: 'David Niven', correct: false }
    ]
  },
  {
    question: 'How many Star Wars prequels are there?',
    answers: [
      { text: '11', correct: false },
      { text: '1', correct: false },
      { text: '9', correct: false },
      { text: '3', correct: true }
    ]
  },
  {
    question: 'How many Fast & Furious movies are there?',
    answers: [
      { text: '5', correct: false },
      { text: '20', correct: false },
      { text: '10', correct: true },
      { text: '3', correct: false }
    ]
  },
  {
    question: 'Who played Batman in the Dark Knight trilogy?',
    answers: [
      { text: 'Heath Ledger', correct: false },
      { text: 'Henry Cavil', correct: false },
      { text: 'Christian Bale', correct: true },
      { text: 'Ben Affleck', correct: false }
    ]
  },
  {
    question: 'Who played The Joker in the Dark Knight trilogy?',
    answers: [
      { text: 'Jared Leto', correct: false },
      { text: 'Jack Nicholson', correct: false },
      { text: 'Heath Ledger', correct: true },
      { text: 'Mark Hamill', correct: false }
    ]
  },
  {
    question: 'Who is the most paid actor for 2022?',
    answers: [
      { text: 'Dwayne Johnson', correct: false },
      { text: 'Will Smith', correct: false },
      { text: 'Tom Cruise', correct: true },
      { text: 'Leonardo DiCaprio', correct: false }
    ]
  },
]