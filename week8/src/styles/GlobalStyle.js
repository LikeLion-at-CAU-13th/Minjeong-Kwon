//전체 스타일 공유할 부분 작성!
import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Pretendard', sans-serif;
  }

  //url 넣을 때 생기는 밑줄 없애고 색은 부모 색깔로!
  a {
    text-decoration: none;
    color: inherit;
  }

    `;