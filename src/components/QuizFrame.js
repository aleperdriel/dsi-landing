import { useState } from "react";
import QuizButton from "./QuizButton";



function QuizFrame() {
// const [question, setQuestion] = useState('');
const questions = [
    {
        question: "Lorem ipsum first questionus Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        answers: [
            "First answer",
            "Second answer",
            "Third answer",
            "Fourth answer"
        ]
    },
    {
        question: "Lorem ipsum duos dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ",
        answers: [
            "First answer",
            "Second answer",
            "Third answer",
            "Fourth answer"
        ]
    },
    {
        question: "Lorem ipsum third requestionus Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
        answers: [
            "First answer",
            "Second answer",
            "Third answer",
            "Fourth answer"
        ]
    }
]   
    return(
        <div className="quiz-block-bg">
            <div className="quiz-block">
                    <h3>Question 1</h3>
                    <p className="quiz-question">{questions[0].question}</p>
                    <div className="quiz-answers-block">
                        {questions[0].answers.map(answer => (
                            <QuizButton questionPosition="1" text={answer} onClick=""></QuizButton>
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default QuizFrame;
