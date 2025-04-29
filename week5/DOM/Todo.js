import Button from "./Button.js";
import Div from "./Div.js";

class Todo {
    constructor(todoText) {
        this.row = new Div('', 'row').node;

        this.innerText = new Div(todoText, 'text-box');

        //삭제 버튼 이미지.. 원래 이렇게 복잡한 것인가 ... 
        this.completeBtn = new Button('', 'complete-btn');
        const completeIcon = new Image();
        completeIcon.src = './assets/check.png';
        completeIcon.style.width = '20px';
        completeIcon.style.height = '20px';
        this.completeBtn.node.appendChild(completeIcon);


        this.delBtn = new Button('', 'del-btn');
        const deleteIcon = new Image();
        deleteIcon.src = './assets/delete.png';
        deleteIcon.style.width = '20px';
        deleteIcon.style.height = '20px';
        this.delBtn.node.appendChild(deleteIcon);
    }

    //만들어진 요소를 한 줄로 합쳐서 this.row에 넣고 반환
    addRow() {
        [this.innerText, this.completeBtn, this.delBtn].forEach((dom)=>{
            this.row.appendChild(dom.node);
        });
        return this.row;
    }

    //각 요소의 getter 메서드들
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.innerText.node;
    }
}

export default Todo;
