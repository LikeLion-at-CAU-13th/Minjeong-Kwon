import React from 'react'
import { useSetRecoilState } from 'recoil'
import { emailAtom, UserNameAtom } from '../../../recoil/atom'

const Form = ({type, inputType}) => {
    const setUserName = useSetRecoilState(UserNameAtom);
    const setEmail = useSetRecoilState(emailAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if (inputType == '이름'){
            setUserName(value);
        } else if (inputType == '이메일'){
            setEmail(value);
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