import React, { useContext } from 'react'
import Form from './Form'
import { Button, Wrapper } from '../common'
import { ThemeColorContext } from '../../../context/context'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isSumittedAtom } from '../../../recoil/atom'

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();
    const setItSubmitted = useSetRecoilState(isSumittedAtom);

    const handleBtn = () => {
        setItSubmitted(true);
        navigate('/mypage')
    }

  return (
    <Wrapper>
        <Form type='home' inputType='이름'/>
        <Form type='email' inputType='이메일'/>
        <Button mode={mode.button} onClick={handleBtn}>
            제출
        </Button>
    </Wrapper>
  )
}

export default FormSection