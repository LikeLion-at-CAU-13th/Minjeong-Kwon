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

export async function submitAnswer(answers) {
    try {
        const answersArray = 
            Object.entries(answers).map(([id, answer]) => ({
            id: Number(id),
            answer,
        }));
    
        const res = await fetch(`${BASE_URL}/api/answers`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({ answers: answersArray })
        });

        const result = await res.json();
        console.log('정답 응답 결과:', result); 
        return result;
    } catch (err) {
        console.error('정답 확인 실패:', err);
        return false;
    }
}

export async function getResult(score) {
  try {
    const res = await fetch(`${BASE_URL}/api/result?score=${score}`);
    const data = await res.json();
    return data.message;
  } catch (err) {
    console.error('결과 메시지 불러오기 실패:', err);
  }
}
