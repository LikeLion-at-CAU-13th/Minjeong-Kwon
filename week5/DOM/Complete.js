import Button from "./Button.js";
import Div from "./Div.js";

class Complete {
    constructor(complete) {
        this.row = new Div('', 'row').node;

        this.innerText = new Div(complete, 'text-box');
        this.restoreBtn = new Button('되돌리기', 'restore-btn');
        this.delBtn = new Button('삭제', 'del-btn');
    }

    //만들어진 요소를 한 줄로 합쳐서 this.row에 넣고 반환
    addRow() {
        [this.innerText, this.restoreBtn, this.delBtn].forEach((dom)=>{
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    //각 요소의 getter 메서드들
    getRow(){
        return this.row;
    }
    getRestoreBtn(){
        return this.restoreBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.innerText.node;
    }
}

export default Complete;