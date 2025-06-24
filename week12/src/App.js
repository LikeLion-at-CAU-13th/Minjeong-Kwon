import React from 'react'
import { Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from './pages/Home';
import BookList from './pages/BookList';
import "./App.css"
import BookDetail from './pages/BookDetail';
import QuizList from './pages/QuizList';

const App = () => {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/books" element = {<BookList />}>
          <Route path=":id" element = {<BookDetail />}/>
        </Route>
        <Route path = "/quiz" element = {<QuizList />}/>
      </Routes>
    </AppDom>
  )
}

export default App

const AppDom = styled.div`
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;