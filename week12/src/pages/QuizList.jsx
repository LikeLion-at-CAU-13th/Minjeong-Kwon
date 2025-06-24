import React, { useEffect, useState } from 'react'
import { getQuizList, checkAnswer } from '../Api.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const QuizList = () => {
    const [quizList, setQuizList] = useState([]); //퀴즈 리스트 불러올때

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
            <form>
                {quiz.answers.map((ans, idx) => (
                    <label key={idx} style={{ display: 'block', marginBottom: '8px' }}>
                        <input 
                            type = "radio"
                            name={`quiz-${quiz.id}`} //하나 고를 수 있게
                            value={ans}
                             />
                        {ans}
                    </label>
                ))}
            </form>
        </div>
        ))}

        <StyledLink to = "/result">
            제출하기
        </StyledLink>
    </div>
  )
}

export default QuizList

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 50px;
  font-size: 16px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
