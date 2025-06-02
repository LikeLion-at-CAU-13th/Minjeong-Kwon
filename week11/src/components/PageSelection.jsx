import React from 'react';
import styled from 'styled-components';

const PageSelection = ({curPage, setCurPage, setUserData, userData}) => {
    const totalPages = Math.ceil(userData.length / 5);

    return (
        <SelectionLayout>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((val) => (
                <PageBox 
                key={val}
                $active={val === curPage}
                onClick={() => setCurPage(val)}>
                    {val}
                </PageBox>
                ))}
        </SelectionLayout>
    );
}

export default PageSelection;

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"};
    &:hover{
        cursor: pointer;
        color: white;
    }
`