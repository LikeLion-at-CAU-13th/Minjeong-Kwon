import styled from 'styled-components';
import gridIcon from '../assets/images/아이콘 인스타 그리드.png';
import bookmarkIcon from '../assets/images/아이콘 인스타 북마크.png';

const ProjectTabs = () => {
  return (
    <Container>
        <TabButton>
            <Icon img src={gridIcon} />
        </TabButton>
        <TabButton>
            <Icon img src={bookmarkIcon}/>
        </TabButton>
    </Container>
  );
};

export default ProjectTabs;

const Container = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid #dbdbdb;
  border-bottom: 1px solid #dbdbdb;
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
