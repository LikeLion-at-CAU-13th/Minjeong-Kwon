import TodoController from "./controller/TodoController.js"

const addBtn = document.getElementById('input-button');
const input = document.querySelector('input'); //태그이름으로 가져옴

addBtn.addEventListener('click', () => {
    const todoController = new TodoController(input.value); //입력받은 값을 가져옴
    todoController.addTodo(); //새로 만든 todoController에 addTodo() 실행
})