import React, { useContext } from 'react'
import { Button, Title, Wrapper } from '../components/home/common'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { emailAtom, isSumittedAtom, UserNameAtom } from '../recoil/atom'
import { ThemeColorContext } from '../context/context'
import { useNavigate } from 'react-router-dom'

const MyPage = () => {
    const userName = useRecoilValue(UserNameAtom);
    const mode = useContext(ThemeColorContext);

    const navigate = useNavigate();
    const resetUserName = useResetRecoilState(UserNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const resetIsSubmitted = useResetRecoilState(isSumittedAtom);

    const handleReset = () => {
        resetUserName();
        resetEmail();
        resetIsSubmitted();
        navigate("/");
    }

  return (
    <Wrapper>
        <Title>Welcome {userName}!</Title>
        <Button mode={mode.button} onClick={handleReset}>
            Reset
        </Button>
    </Wrapper>
  )
}

export default MyPage