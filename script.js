

//CONSTANTS--------------

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");


//EVENT LISTENERES----------

todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodos);

//FUNCTIONS-------------

function addTodo(e){

    e.preventDefault();

    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value.trim();
    newTodo.classList.add('todo-item');

    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML = `<i class="fa fa-check"></i>`;
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = `<i class="fa fa-trash-o"></i>`;
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    if(todoInput.value.trim().length){
        todoList.appendChild(todoDiv);
    }

    todoInput.value="";
}

function deleteCheck(e){
    if(e.target.classList[0] === "trash-btn"){
        e.target.parentElement.classList.add("fall");
        e.target.parentElement.addEventListener('transitionend', () => {
            e.target.parentElement.remove();
        });
        
    }
    if(e.target.classList[0] === "complete-btn"){
        e.target.parentElement.classList.toggle("completed");
    }
};

function filterTodos(e){

    const todos = todoList.childNodes;

    todos.forEach((todo) => {

        switch(e.target.value){

            case "all":
                todo.style.display="flex";
            break;

            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }
                else{
                    todo.style.display = "none";
                }
            break;

            case "uncompleted":
                if(!todo.classList.contains("completed")){
                    todo.style.display = "flex";
                }else{
                    todo.style.display = "none";
                }
            break;
        }
    });
}