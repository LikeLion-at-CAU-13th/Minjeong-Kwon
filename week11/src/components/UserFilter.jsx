import React from 'react';
import styled from 'styled-components';
import { filterType } from '../constants/filterType';
import { getAllUsers, getGenderUser, getPartUser } from '../apis/userlist';

const UserFilter = ({filter, setFilter, setUserData, setCurPage}) => {
    const handleClick = async(type, param) => {
        let allUsersData = [];

        if(type === "all"){
            const response = await getAllUsers();
            console.log(response);
            allUsersData = response; 
        } else if (type === "gender"){
            const response = await getGenderUser(param);
            console.log(response);
            allUsersData = response; 
        } else if (type === "part") {
            const response = await getPartUser(param);
            console.log(response);
            allUsersData = response;
          }          
        setFilter(param);
        setUserData(allUsersData);
        setCurPage(1);      
    }

    return (
        <FilterLayout>
            {filterType.map((data, idx) =>
            
                <FilterBox key = {idx} 
                onClick = {() => handleClick(data.type, data.param)}
                $active={filter === data.param}>
                    {data.title}
                </FilterBox>
            )}
            
        </FilterLayout>

        
    );
};
export default UserFilter;


const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div`
    display: flex;
    padding: 1rem 4rem 1rem 4rem;
    /* background-color: #C9C9C9; */
    color: ${(props) => props.$active ? "#FF7710" : "#000000"};
    border-radius: 1rem;
    font-size: 3rem;
    white-space: nowrap;
    &:hover{
        cursor: pointer;
        color: white;
    }
`