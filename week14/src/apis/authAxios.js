import axios from "axios";
import { getNewRefreshToken } from "./user";

export const baseURL =`https://likelion-cau.r-e.kr`;

export const getAuthAxios = (token) => {
    const authAxios = axios.create({
        baseURL: baseURL,
        //헤더에 accesstoken을 같이 보내면서 인증된 사용자임을 서버에게 알림
        headers: {
            Authorization: `Bearer ${token}`,
        }
    })

    authAxios.interceptors.response.use (
        //전체 응답 중에서 data 부분만 사용하겠다는 뜻
        (response) => response.data,
        //에러가 난 상황 => access token 만료된 경우
        async (error) => {
            const result = await getNewRefreshToken();
            //만료된 토큰으로 실패했던 요청(error.config)를 새 토큰으로 덮어씌움
            error.config.headers.Authorization = result.accessToken;

            //새로 발급받은 토큰을 브라우저에 저장
            localStorage.setItem("accessToken", result.accessToken);
            localStorage.setItem("refreshToken", result.refreshToken);

            //새로운 토큰으로 요청 재시도
            return (await axios.get(error.config.url, error.config)).data;

        }
    )
    return authAxios;
}