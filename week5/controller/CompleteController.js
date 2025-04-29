import TodoController from "./TodoController.js";

class CompleteController {
    constructor(complete) {
      this.complete = complete;
      this.delBtn = this.complete.getDelBtn();
      this.restoreBtn = this.complete.getRestoreBtn();
  
      this.delBtn.addEventListener('click', () => {
        this.delComplete();
      });
  
      this.restoreBtn.addEventListener('click', () => {
        this.restoreToTodo();
      });
    }
  
    addToCompleteList() { //complete list에 완료한 항목 붙이기
      const completeList = document.getElementById('complete-list');
      completeList.appendChild(this.complete.addRow());
    }
  
    delComplete() { //삭제 버튼 누르면 실행될 함수 
      const completeList = document.getElementById('complete-list');
      completeList.removeChild(this.complete.getRow());
    }
  
    restoreToTodo() { //되돌리기 버튼 누르면 실행될 함수 구현
        const text = this.complete.getInnerText().innerText; //complete 항목에서 텍스트 꺼내기
      
        //새로운 TodoController 생성해서 todo로 돌려보내기
        const newTodo = new TodoController(text);
        newTodo.addTodo();
        
        //기존 complete-list에서 항목 삭제
        const completeList = document.getElementById('complete-list');
        completeList.removeChild(this.complete.getRow());
      }
      
      
  }
  
  export default CompleteController;