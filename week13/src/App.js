import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import MyPage from './pages/MyPage';
import Home from './pages/Home';
import Layout from './components/home/Layout';

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/mypage" element = {<MyPage />} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
