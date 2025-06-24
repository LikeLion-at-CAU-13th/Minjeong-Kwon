import React, { useEffect, useState } from 'react'
import { getQuizList } from '../Api.js';


const QuizList = () => {
    const [quizList, setQuizList] = useState([]);

    useEffect(() => {
        async function fetchQuiz() {
            const data = await getQuizList();
            setQuizList(data);
        }

        fetchQuiz();
    }, []);

  return (
    <div>
        <h1>QuizList</h1>
        {quizList.map((quiz) => (
        <div key={quiz.id}>
            <h4> Q. {quiz.question} </h4>
            <ul>
                {quiz.answers.map((ans, idx) => (
                    <li key={idx}>{ans}</li>
                ))}
            </ul>
        </div>
        ))}
    </div>
  )
}

export default QuizList