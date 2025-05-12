import React from 'react';
import styled from 'styled-components';
import profileImage from '../assets/images/인스타 프로필 이미지.jpeg';

const ProfileSection = () => {
    return (
        <>
            <Container>
                <ProfileImage img src={profileImage} alt="profileimage"/>
                <Info>
                    <Username>권민정</Username>
                    <Stats>
                        <Statname><stat>0</stat>게시물</Statname>
                        <Statname><stat>406</stat>팔로워</Statname>
                        <Statname><stat>450</stat>팔로우</Statname>
                    </Stats>
                </Info>
            </Container>
            <Mention a href="https://www.instagram.com/likelion_cau/">@likelion_cau</Mention>
        </>
    );
};

export default ProfileSection;

const Container = styled.div`
    display: flex;
    padding: 20px;
    flex-direction: row;
    gap: 20px;
    align-items: center;
`

const ProfileImage = styled.img`
    display: flex;
    border-radius: 50%;
    object-fit: cover; //이미지 줄일 때 같은 비율로
    width: 70px;
    height: 70px;
    
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
`

const Username = styled.h3`
    font-size: 16px;
    margin-top: 0px;
    margin-bottom: 8px;
`;

const Stats = styled.div`
    display: flex;
    gap: 45px;
`;

const Statname = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 14px;

    stat {
        font-weight: bold;
    }
`;

const Mention = styled.a`
    padding: 10px 20px;
    text-decoration: none;
    color: #00376b;
`
