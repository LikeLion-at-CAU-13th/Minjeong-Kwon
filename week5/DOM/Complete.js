import Button from "./Button.js";
import Div from "./Div.js";

class Complete {
    constructor(complete) {
        this.row = new Div('', 'row').node;

        this.innerText = new Div(complete, 'text-box');

        // 되돌리기 버튼 및 이미지 아이콘
        this.restoreBtn = new Button('', 'restore-btn');
        const restoreIcon = new Image();
        restoreIcon.src = './assets/restore.png';
        restoreIcon.style.width = '20px';
        restoreIcon.style.height = '20px';
        this.restoreBtn.node.appendChild(restoreIcon);

        // 삭제 버튼 및 이미지 아이콘
        this.delBtn = new Button('', 'del-btn');
        const deleteIcon = new Image();
        deleteIcon.src = './assets/delete.png';
        deleteIcon.style.width = '20px';
        deleteIcon.style.height = '20px';
        this.delBtn.node.appendChild(deleteIcon);
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