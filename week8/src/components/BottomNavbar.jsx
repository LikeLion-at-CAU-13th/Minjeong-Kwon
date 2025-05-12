import styled from 'styled-components';
import homeIcon from '../assets/images/아이콘 인스타 홈.png';
import searchIcon from '../assets/images/아이콘 인스타 검색.png';
import addIcon from '../assets/images/아이콘 인스타 add.png';

const BottomNavbar = () => {
  return (
    <Container>
        <TabButton>
            <Icon img src={homeIcon} />
        </TabButton>
        <TabButton>
            <Icon img src={searchIcon}/>
        </TabButton>
        <TabButton>
            <Icon img src={addIcon}/>
        </TabButton>
    </Container>
  );
};

export default BottomNavbar;

const Container = styled.div`
  position: fixed;         
  bottom: 0;               
  left: 0;
  width: 100%;             
  display: flex;
  justify-content: center;
  background-color: white;
  border-top: 1px solid #dbdbdb;
  padding: 10px 0;
`;

const Icon = styled.img`
    width: 24px;
`

const TabButton = styled.button`
    padding: 12px 20px;
    background: none;
    border: none;
    cursor: pointer;
    gap: 10px;
`
