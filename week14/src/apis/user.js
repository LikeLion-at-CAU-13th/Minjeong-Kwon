import axios from "axios";
import { getAuthAxios } from "./authAxios";

const baseURL = `https://likelion-cau.r-e.kr`;

//회원가입하면 id, pw, name, age를 서버에 보냄
export const signUp = async (id, pw, name, age) => {
    const result = await axios.post(`${baseURL}/accounts/signup/`, {
        id,
        pw,
        name,
        age,
    })
    //성공하면 result 반환
    return result; 
}

//로그인 시 서버에 id, pw를 보냄
export const login = async (id, pw) => {
    const result = await axios.post(`${baseURL}/accounts/login/`, {
        id,
        pw,
    })
    //서버가 token을 담은 result 반환
    return result.data;
}

export const getMyPage = async (token) => {
    //토큰을 헤더에 자동으로 붙여주는 인스턴스 생성
    //이때 토큰 만료되면 자동으로 갱신 + 재요청
    const authAxios = getAuthAxios(token);
    const result = authAxios.get("/accounts/mypage");
    return result;
}

export const getNewRefreshToken = async () => {
    try {
        const accessToken = localStorage.getItem("access");
        const refreshToken = localStorage.getItem("refresh");

        const result = await axios.post (
            `${baseURL}/accounts/refresh`,
            { refreshToken, },
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            }
        );
        return result.data;
    } catch (error) {
        alert("토큰이 만료되었습니다. 다시 로그인해주세요.");
    }
}


