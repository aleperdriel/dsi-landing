import { useState } from "react";

function QuizButton({text, questionPosition, onClick}) {

    return(
        <div onClick={() => onClick(questionPosition)} className="quiz-btn-answer">
            <span>{ questionPosition }</span><p>{ text }</p>
        </div>
    )
}


export default QuizButton;
