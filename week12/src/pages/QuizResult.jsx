import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { getResult } from '../Api.js';
import React, { useEffect, useState } from 'react'


const QuizResult = () => {
    const location = useLocation();
    const { total, correct } = location.state

    const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchResult() {
      const msg = await getResult(correct);
      setMessage(msg);
    }

    fetchResult();
  }, [correct]);

  return (
    <ResultBox>
    <h1>🎉 퀴즈 결과 🎉</h1>
    <p>
      총 <strong>{total}</strong> 문제 중 <strong>{correct}</strong> 문제를 맞혔어요!
    </p>
    <p>{message}</p>
  </ResultBox>
  )
}

export default QuizResult

const ResultBox = styled.div`
  text-align: center;
  margin-top: 50px;
  background-color: white;
  padding: 40px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 40%;
  margin-left: auto;
  margin-right: auto;

  h1 {
    margin-bottom: 20px;
  }

  p {
    font-size: 20px;
  }
`;
