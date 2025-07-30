import React, { useContext, useState } from 'react'
import Form from './Form'
import { Button, Wrapper } from '../common'
import { ThemeColorContext } from '../../../context/context'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isSumittedAtom } from '../../../recoil/atom'
import FormModal from './FormModal'

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();
    const setIsSubmitted = useSetRecoilState(isSumittedAtom);

    const handleBtn = () => {
        setIsSubmitted(true);
        navigate('/mypage')
    }

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
      setShowModal(true);
    }

    const handleConfirm = () => {
        setIsSubmitted(true);
        navigate('/mypage');
    };

    const handleCancel = () => {
        setShowModal(false);
    };

  return (
    <Wrapper>
        <Form type='home' inputType='이름'/>
        <Form type='email' inputType='이메일'/>
        <Form type='date' inputType='날짜'/>
        <Button mode={mode.button} onClick={handleOpenModal}>
            제출
        </Button>

        {showModal && <FormModal onConfirm={handleConfirm} onCancel={handleCancel} />}
    </Wrapper>
  )
}

export default FormSection