import React from 'react';
import styled from 'styled-components';
import menuIcon from '../assets/images/아이콘 인스타 목록.png'
import addIcon from '../assets/images/아이콘 인스타 add.png'


const Header = () => {
    return (
        <Container>
            <TitleID>min_ddoi</TitleID>
            <TopIcon>
                <Button>
                    <img src={addIcon} alt="add"/>
                </Button>
                <Button>
                    <img src={menuIcon} alt="menu"/>
                </Button>
            </TopIcon>
        </Container>
    );
};

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const TitleID = styled.h1`
  font-size: 20px;
  font-weight: bold;
`;

const TopIcon = styled.div`
  display: flex;
`;

const Button = styled.button`
  background: none;
  border: none;
  margin-left: 12px;

  img {
    width: 24px;
    height: 24px;
  }
`;
