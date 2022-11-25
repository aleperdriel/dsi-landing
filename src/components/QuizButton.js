import { useState } from "react";

function QuizButton({text, questionPosition}) {

    return(
        <div className="quiz-btn-answer">
            <span>{ questionPosition }</span><p>{ text }</p>
        </div>
    )
}


export default QuizButton;
