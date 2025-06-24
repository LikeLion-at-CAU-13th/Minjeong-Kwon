import React, { useEffect, useState } from 'react'
import { getQuizList, checkAnswer } from '../Api.js';
import styled from 'styled-components';


const QuizList = () => {
    const [quizList, setQuizList] = useState([]); //퀴즈 리스트 불러올때
    const [answers, setAnswers] = useState({}); // 선택한 답 저장

    useEffect(() => {
        async function fetchQuiz() {
            const data = await getQuizList();
            setQuizList(data);
        }

        fetchQuiz();
    }, []);

    const handleSelect = (quizId, selectedAnswer) => {
        setAnswers(prev => ({
            ...prev,
            [quizId]: selectedAnswer
        }))
    }

    const handleSubmit = async () => {
        let correct = 0;
        for (const quiz of quizList) {
            const selectedAnswer = answers[quiz.id];
            if (!selectedAnswer) continue;
            const isCorrect = await checkAnswer(quiz.id, selectedAnswer);
            if (isCorrect) correct++;
        }
    }

  return (
    <Container>
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
                            onChange={() => handleSelect(quiz.id, ans)}
                             />
                        {ans}
                    </label>
                ))}
            </form>
        </div>
        ))}

        <ButtonContainer>
        <SubmitButton onClick={handleSubmit}>
          제출하기
        </SubmitButton>
      </ButtonContainer>
    </Container>
  )
}

export default QuizList

const Container = styled.div`
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;

const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 50px;
  font-size: 16px;
  background-color: #b8edfb;
  color: #4a4a4a;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;
