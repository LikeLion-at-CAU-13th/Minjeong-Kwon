class DOM { //태그이름, 텍스트, 클래스 이름을 가진 HTML 만들기
    constructor(tagName, innerText, className){
        this.node = document.createElement(tagName) //tagName 노드
        this.node.innerText = innerText; //innerText 노드
        if (className) this.node.classList.add(className); //className 노드
    }
}

export default DOM; //DOM 사용할 수 있도록 내보내기