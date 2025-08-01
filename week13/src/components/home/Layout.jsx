import React, { useContext, useState } from 'react'
import styled from 'styled-components';
import { ThemeColorContext } from '../../context/context';
import { Button } from './common';
import { useRecoilValue } from 'recoil';
import { emailAtom, isSumittedAtom, UserNameAtom } from '../../recoil/atom';

const Layout = ({children}) => { //children ?!이 있어야 Layout 사용가능?
    const context = useContext(ThemeColorContext);
    const [mode, setMode] = useState(context.blueTheme);

    const userName = useRecoilValue(UserNameAtom);
    const email = useRecoilValue(emailAtom);
    const isSubmitted = useRecoilValue(isSumittedAtom);

    const handleMode = (e) => {
        const value = e.target.value;

        if (value == 'blue') {
            setMode(context.blueTheme)
        } else if (value == 'green') {
            setMode(context.greenTheme)
        } else if (value == 'pink') {
            setMode(context.pinkTheme)
        }
    }

  return (
    <ThemeColorContext.Provider value={mode}>
        <Wrapper>
            <Header mode={mode.main}>
                <Button value='blue' onClick={handleMode}>blue</Button>
                <Button value='green' onClick={handleMode}>green</Button>
                <Button value='pink' onClick={handleMode}>pink</Button>
            </Header>
            <div>{children}</div>
            <Footer mode={mode.main}> 
                {/* atom값 불러와서 사용 */}
                {isSubmitted ? `${userName}의 공간 | ${email}`  : '2025 Likelion FE'}
            </Footer>
        </Wrapper>
    </ThemeColorContext.Provider>
  )
}

export default Layout

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;
