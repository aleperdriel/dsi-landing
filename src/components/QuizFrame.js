import { useState, useEffect } from "react";
import QuizButton from "./QuizButton";
import WaveImg from '../assets/img/wave.svg';
import SocksImg from '../assets/img/socks_home.png';
import { Link } from 'react-router-dom';

function QuizFrame() {
// const [question, setQuestion] = useState('');
// const questions = [
//     {
//         question: "Lorem ipsum first questionus Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//         answers: [
//             "First answer",
//             "Second answer",
//             "Third answer",
//             "Fourth answer"
//         ]
//     },
//     {
//         question: "Lorem ipsum duos dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
//         answers: [
//             "First answer",
//             "Second answer",
//             "Third answer",
//             "Fourth answer"
//         ]
//     },
//     {
//         question: "Lorem ipsum third requestionus Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
//         answers: [
//             "First answer",
//             "Second answer",
//             "Third answer",
//             "Fourth answer"
//         ]
//     }
// ]   


// const getData=()=>{
//     fetch('./data.json'
//     ,{
//       headers : { 
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//        }
//     }
//     )
//       .then(function(response){
//         return response.json();
//       })
//       .then(function(myJson) {
//         console.log(myJson);
//         setData(myJson)
//       });
//   }
//   useEffect(()=>{
//     getData()
//   },[])

//     const [data,setData]=useState([]);
    
    return(
        <section className="quiz-section wave-section">
            <img src={WaveImg} alt="Wave"/>
            <div className="intro-quiz-block">
              <div className="section-constraint">
                <h3>Get your socks !</h3>
                <p className="description"><span>By playing a little quizz, you’ll have the opportunity to get your own personalized socks !</span><br></br><span>Do your best !</span></p>
                <img id="socks-img" src={SocksImg} alt="Socks"/>
                <Link to="/" className="btn">Start the quizz!</Link>
                
              </div>
            </div>
            <div className="quiz-block-bg">
                
                <div className="quiz-block">
                        <h3>Question 1</h3>
                        <p className="quiz-question">Question qjdhqdhqldhqhdqd</p>
                          <div className="quiz-answers-block">
                                <QuizButton questionPosition="1" text="Oui" onClick=""></QuizButton>
                                <QuizButton questionPosition="2" text="Oui" onClick=""></QuizButton>
                                <QuizButton questionPosition="3" text="Oui" onClick=""></QuizButton>
                                <QuizButton questionPosition="4" text="Oui" onClick=""></QuizButton>
                        </div>
                        {/* <p className="quiz-question">{data.questions[0].question}</p>
                          <div className="quiz-answers-block">
                            {data.answers.map(answer => (
                                <QuizButton questionPosition="1" text={answer} onClick=""></QuizButton>
                            ))}
                        </div>
                        {data.questions[0].question} */}
                </div>
            </div>
      </section>

    )
}

export default QuizFrame;
