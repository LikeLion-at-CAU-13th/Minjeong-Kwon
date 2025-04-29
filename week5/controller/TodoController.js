import Todo from "../DOM/Todo.js";
import Complete from "../DOM/Complete.js";
import CompleteController from "../controller/CompleteController.js";


class TodoController {
    constructor(todoText){
        this.newTodo = new Todo(todoText); //새로운 할 일 목록 생성

        this.delBtnNode = this.newTodo.getDelBtn(); //삭제 완료 텍스트 부분을 getter로 가져옴
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();

        //삭제버튼을 누르면 delTodo() 실행
        this.delBtnNode.addEventListener('click', () => {
            this.delTodo();
        })
        //완료 버튼을 누르면 doneTodo() 실행
        this.comBtnNode.addEventListener('click', () => {
            this.doneTodo();
        })

    }

    addTodo() {
        const todoList = document.getElementById('to-do-list');
        todoList.appendChild(this.newTodo.addRow());

        const input = document.querySelector('input');
        input.value ='';
    }

    delTodo() {
        const todoList = document.getElementById('to-do-list');
        todoList.removeChild(this.newTodo.getRow()); //인자 안에 들어간 자식 태그를 삭제 (row 한 줄 삭제)
    }
    doneTodo() {
        // 완료되면 complete 객체 생성 후 이동
        const text = this.innerNode.innerText;
        const complete = new Complete(text);
        const completeController = new CompleteController(complete);
        completeController.addToCompleteList();

        // 기존 to-do-list에서 항목 제거
        const todoList = document.getElementById('to-do-list');
        todoList.removeChild(this.newTodo.getRow());
    }
}

export default TodoController;