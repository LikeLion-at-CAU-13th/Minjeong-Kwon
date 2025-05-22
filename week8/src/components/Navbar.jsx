import React, { useState } from 'react';
import Modal from '../Modal';
import styled from 'styled-components';

const Navbar = () => {
    const [modalType, setModalType] = useState(null);

    return (
    <Container>
        <Button onClick={() => setModalType('about')}>ABOUT</Button>
        <Button onClick={() => setModalType('share')}>SHARE</Button>

        {modalType && 
            <Modal 
                type={modalType} onClose={() => setModalType(null)}
        />}
    </Container>
    );

};

export default Navbar;

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 10px 20px;
    gap: 8px;
`;

const Button = styled.button`
    width: 100%;
    display: flex;
    padding: 5px;
    font-size: 14px;
    background-color: white;
    border-radius: 8px;
    border: 1px solid black;
    justify-content: center;
`