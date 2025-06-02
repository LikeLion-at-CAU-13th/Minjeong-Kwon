import React from 'react';
import styled from 'styled-components';
import UserCard from './UserCard';
import PageSelection from './PageSelection';

const UserSection = ({filter, userData, curPage, setUserData, setCurPage}) => {
    return (
        <UserSecLayout>
            <UserCardBox>
                { userData.map((data, idx) => <UserCard key={idx} data={data} />)}
            </UserCardBox>
            {filter === "all" && <PageSelection curPage={curPage} setCurPage={setCurPage} setUserData={setUserData}/>}
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