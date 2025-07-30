import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getMyPage, login } from '../apis/user';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        //로그인 시 저장해둔 accessToken을 꺼내서 getMyPage로 API 요청
        getMyPage(localStorage.getItem("access"))
        .then((data) => {
            setData(data);
            setLoading(false);
        })
        .catch((error) => {
            alert("토큰 기한 만료");
            navigate("/");
        })
    }, []);

    if (loading) return <div>로딩중입니다...!</div>

    const onClick = async () => {
            try {
                localStorage.removeItem("access");
                localStorage.removeItem("refresh");
                alert("로그아웃 되었습니다!");
                navigate("/");
            } catch (error) {
                alert("뭔가 잘못됨..");
            }
        }

  return (
    <Wrapper>
        <Title>마이페이지</Title>
        <Info>이름: {data.name}</Info>
        <Info>나이: {data.age}</Info>
        <BtnWrapper>
            <button onClick={onClick}>로그아웃</button>
        </BtnWrapper>
    </Wrapper>
  )
}

export default Mypage

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  /* div {
    font-size: 25px;
  } */
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;

const Info = styled.div`
    font-size: 22px;
    font-family: SUITE;
    margin-bottom: 5px;
    color: #585858;
`;

const BtnWrapper = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.5rem;
  button {
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;