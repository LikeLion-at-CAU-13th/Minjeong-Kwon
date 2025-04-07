class CompleteController {
    constructor(todo){
        this.todo = todo;
    }
    addToCompleteList(){
        const todoList = document.getElementById('to-do-list');
        const completeList = document.getElementById('complete-list');
    
        todoList.removeChild(this.todo.getRow());
        completeList.appendChild(this.todo.getRow());
    }
}

export default CompleteController;
