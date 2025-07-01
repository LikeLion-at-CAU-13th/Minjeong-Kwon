import React from 'react'
import { useRecoilValue } from 'recoil'
import { dateAtom, emailAtom, UserNameAtom } from '../../../recoil/atom'
import styled from 'styled-components';

const FormModal = ({onConfirm, onCancel}) => {
    const name = useRecoilValue(UserNameAtom);
    const email = useRecoilValue(emailAtom);
    const date = useRecoilValue(dateAtom);

  return (
    <ModalBackdrop>
        <ModalBox>
            <h3>입력 정보 확인</h3>
            <p>이름: {name}</p>
            <p>이메일: {email}</p>
            <p>날짜: {date}</p>
            
            <div style={{ marginTop: '1rem' }}>
                <button onClick={onConfirm}>확인</button>
                <button onClick={onCancel} style={{ marginLeft: '1rem' }}>취소</button>
            </div>
        </ModalBox>
    </ModalBackdrop>
  )
}

export default FormModal

const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  width: 320px;
  max-width: 90%;
  text-align: center;
`;

