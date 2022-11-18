import { useState } from "react";



function QuizFrame() {
const [question, setQuestion] = useState('');

    return(
        <div className="quiz-block">
            <form>
                <input type="text"/>
                <button type="submit">Submit the question</button>
            </form>
        </div>
    )
}

export default QuizFrame;
