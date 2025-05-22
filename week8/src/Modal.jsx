import React from 'react';
import styled from 'styled-components';

const Modal = ({ type, onClose }) => {
  const renderContent = () => {
    //받아오는 상태값에 맞게 모달창 열기
    if (type === 'about') {
      return (
        <>
          <h2>About 모달입니다.</h2>
        </>
      );
    } else if (type === 'share') {
      return (
        <>
          <h2>Share 모달입니다.</h2>
        </>
      );
    }
    return null;
  };

  return (
    <Outside onClick={onClose}>
      <Content onClick={(e) => e.stopPropagation()}>
        {renderContent()}
        <CloseButton onClick={onClose}>닫기</CloseButton>
      </Content>
    </Outside>
  );
};

export default Modal;

const Outside = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  background: white;
  padding: 24px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
`;

const CloseButton = styled.button`
  margin-top: 20px;
  background: none;
  border: 1px solid #000000;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
`;
