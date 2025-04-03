//1. js파일에서 접근해야하는 html dom 요소 선언
const myHandText = document.getElementById("my-hand-text"); //버튼에 이름을 붙여줌
const myHandIcon = document.getElementById("my-hand-icon");

const computerText = document.getElementById("computer-hand-text");
const computerIcon = document.getElementById("computer-hand-icon");

const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
const paperBtn = document.getElementById("paper");

const result = document.getElementById("display-result");

const myScore = document.getElementsByClassName("my-score")[0];
const comScore = document.getElementsByClassName("computer-score")[0];

let myScoreCount = 0;
let comScoreCount = 0;

const resetBtn = document.getElementById("reset-button");
const darkmodeBtn = document.getElementById("darkmode-button");

//2. 이벤트 설정
rockBtn.addEventListener("click", displayMyChoice); //click 했을때 displayMyChoice가 실행되도록!
scissorsBtn.addEventListener("click", displayMyChoice);
paperBtn.addEventListener("click", displayMyChoice);

//3. displayMyChoice 함수 작성
function displayMyChoice(e) {
    let clickedBtn = e.currentTarget.id;
    let clickedIcon = e.target.className;

    myHandText.innerText = clickedBtn;
    myHandIcon.className = clickedIcon;

    start(clickedBtn);
}

//4. 랜덤으로 뱉는 컴퓨터
function getComChoice() {
    const randomValue = { //randomValue 데이터표를 만들어줌
        0 : ["rock", "fa-regular fa-hand-back-fist"],
        1 : ["scissors", "fa-regular fa-hand-scissors fa-rotate-90"],
        2 : ["paper", "fa-regular fa-hand"],
    };

    const randomIndex = Math.floor(Math.random() * 3); //소수로 0~2까지 뽑고 정수로 변환

    return randomValue[randomIndex]; //랜덤으로 반환된 값에 맞는 데이터 값을 최종 반환!!
}

//5. 컴퓨터의 선택티 화면에 보이도록 하는 함수
function displayComChoice(result) { 
    computerText.innerText = result[0]; //위에서 만든 randomValue 데이표(?)를 기반으로 첫번째 부분인 텍스트 가져옴
    computerIcon.className = result[1]; //두번째 부분인 이미지 가져옴
}

//6. start 함수
function start(myChoice) {
    let resultArray = getComChoice();
    let comChoice = resultArray[0];
    displayComChoice(resultArray);

    //가위바위보 승패 출력 - 사용자(myChoice)가 rock인 경우
    if (myChoice == 'rock' && comChoice == 'rock'){
        result.innerText = 'draw';
    } else if (myChoice == 'rock' && comChoice == 'scissors') {
        result.innerText = 'win';
        myScoreCount++;
    } else if (myChoice == 'rock' && comChoice == 'paper'){
        result.innerText = 'lose';
        comScoreCount++;
    }

    // 사용자(myChoice)가 scissors인 경우
    if (myChoice == 'scissors' && comChoice == 'scissors'){
        result.innerText = 'draw';
    } else if (myChoice == 'scissors' && comChoice == 'paper') {
        result.innerText = 'win';
        myScoreCount++;
    } else if (myChoice == 'scissors' && comChoice == 'rock'){
        result.innerText = 'lose';
        comScoreCount++;
    }

    // 사용자(myChoice)가 paper인 경우
    if (myChoice == 'paper' && comChoice == 'paper'){
        result.innerText = 'draw';
    } else if (myChoice == 'paper' && comChoice == 'rock') {
        result.innerText = 'win';
        myScoreCount++;
    } else if (myChoice == 'paper' && comChoice == 'scissors'){
        result.innerText = 'lose';
        comScoreCount++;
    }

    //점수판
    myScore.innerText = myScoreCount;
    comScore.innerText = comScoreCount;
}

//7. 리셋 버튼 누르면 초기화 이벤트 설정
resetBtn.addEventListener("click", displayReset);

//8. displayReset 함수 작성
function displayReset (start) {
    myScoreCount = 0;
    comScoreCount = 0;
    
    //리셋된 점수판
    myScore.innerText = myScoreCount;
    comScore.innerText = comScoreCount;
}

//9. 다크 모드 구현하기 (우선 버튼 만들고 흑백 전환 ..)
darkmodeBtn.addEventListener("click", darkMode);

//10. darkMode 함수 작성
function darkMode() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        darkmodeBtn.innerText = "☀️";
    } else {
        darkmodeBtn.innerText = "🌙";
    }

}



