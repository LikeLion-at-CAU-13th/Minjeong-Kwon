import React from 'react'
import { useSetRecoilState } from 'recoil'
import { dateAtom, emailAtom, UserNameAtom } from '../../../recoil/atom'

const Form = ({type, inputType}) => {
    const setUserName = useSetRecoilState(UserNameAtom);
    const setEmail = useSetRecoilState(emailAtom);
    const setDate = useSetRecoilState(dateAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if (inputType == '이름'){
            setUserName(value);
        } else if (inputType == '이메일'){
            setEmail(value);
        } else if (inputType == '날짜'){
            setDate(value);
        }
    }

  return (
    <>
        <div>{inputType}</div>
        <input type = {type} onChange={onChange}/>
    </>
  )
}

export default Form