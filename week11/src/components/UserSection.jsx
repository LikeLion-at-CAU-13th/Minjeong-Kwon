import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import PageSelection from './PageSelection';

const UserSection = ({filter, userData, curPage, setUserData, setCurPage}) => {
  const offset = (curPage - 1) * 5;
  const pageData = userData.slice(offset, offset + 5);

    return (
        <UserSecLayout>
            <UserCardBox>
                { pageData.map((data, idx) => <UserCard key={idx} data={data} />)}
            </UserCardBox>
            <PageSelection 
                curPage={curPage} 
                setCurPage={setCurPage} 
                setUserData={setUserData} 
                userData={userData}
              />
        </UserSecLayout>
    );
};

export default UserSection;

const UserSecLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
`

const UserCardBox = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`