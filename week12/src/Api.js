const BASE_URL = "https://week12-api-1cc7.onrender.com"

export async function getQuizList() {
    try {
        const res = await fetch (`${BASE_URL}/api/questions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const responseData = await res.json();
        console.log('서버 응답:', responseData);
        return responseData;
    } catch (err) {
        console.error('에러 발생:', err);
    }
}