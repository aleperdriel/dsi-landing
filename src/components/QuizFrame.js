import { useState } from "react";
import QuizButton from "./QuizButton";
import WaveImg from '../assets/img/wave.svg';
import { Link } from 'react-router-dom';
import questions from '../Questions'
import randomSock1 from '../assets/img/home/sock1.png'
import randomSock2 from '../assets/img/home/sock2.png'
import randomSock3 from '../assets/img/home/sock3.png'

const sockImg = [
  randomSock1,
  randomSock2,
  randomSock3
]

function QuizFrame() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [solutionIndex, setSolutionIndex] = useState(0);
    const [isHidden, setIsHidden] = useState(true);
    const [ansIsHidden, setAnsIsHidden] = useState(true);
    const [quizEnded, setQuizEnded] = useState(false);
    const [nbrPoints, setNbrPoints] = useState(0);
    const [randomSock, setRandomSock] = useState(0);

    const showQuiz = () => {
      setIsHidden(false);
    }

    const answer = (n) => {
      setSolutionIndex(questions[currentQuestion].solutionIndex);

      if(questions[currentQuestion].solutionIndex === n-1) {
        setNbrPoints(nbrPoints +1)
      }
      setAnsIsHidden(false)
    }

    const nextQuestion = () => {
      setAnsIsHidden(true);
      if (currentQuestion+1 < questions.length) setCurrentQuestion(currentQuestion + 1);
      else showEndQuiz()
    }

    function showEndQuiz() {
      const randomIndex = Math.floor(Math.random() * (sockImg.length-1));
      setRandomSock(sockImg[randomIndex])
      setQuizEnded(true);
    }

    return(
        <section className="quiz-section wave-section">
            <img src={WaveImg} alt="Wave"/>
            <div className="intro-quiz-block">
              <div className="section-constraint">
                <h3>Get your socks !</h3>
                <p className="description"><span>By playing a little quizz, you’ll have the opportunity to get your own personalized socks !</span><br></br><span>Do your best !</span></p>
                <Link to="/" className={(isHidden ? '' : 'hidden') + ' ' + "btn"} onClick={showQuiz}>Start the quizz!</Link>
                
              </div>
            </div>
            <div className={(isHidden ? 'hidden' : '') + ' ' + 'quiz-block-bg' }>
                
                <div className="quiz-block">
                {!quizEnded &&
                <>
                <h3>Question {currentQuestion +1} </h3>
                <p className="quiz-question">{questions[currentQuestion].question}</p>
                <div className="quiz-answers-block">
                  {questions[currentQuestion].answers.map((dataAnswer, index) => (
                    <>
                    <QuizButton questionPosition={index + 1} text={dataAnswer} onClick={answer}></QuizButton>
                    <div className={(ansIsHidden ? 'hidden' : '') + ' ' + 'quiz-answer-modal'}>
                      <h3>{questions[currentQuestion].answers[solutionIndex]}</h3>
                      <p className="quiz-answer-explanation">{questions[currentQuestion].explanation}</p>
                      <p className="btn" onClick={nextQuestion}>Next question</p>
                    </div>
                    </>
                  ))}
                </div>  
                </>

                  }{quizEnded && 
                  <div className="quiz-block-end">
                    <p>Congratulations ! You finished the quizz and got a score of: {nbrPoints}/{questions.length} ({(nbrPoints/questions.length*100).toFixed(2)}%)</p>
                    <p>You won this sock! Everytime you wear it, this is an opportunity to talk with your friends and family about Down Syndrome and show everything you learnt.</p>
                    <img className="end-sock" src={randomSock} alt="sock illustration"></img>
                    <p onClick={(e) => {window.location.href = "mailto:dsi@example.com"; 
                    e.preventDefault(); }} className="btn">Ask for your sock!</p>

                  </div>
                }        
                          
                </div>
            </div>
      </section>

    )
}

export default QuizFrame;
