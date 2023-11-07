const todos = [];

window.onload = () =>{
    //const parrafo = document.getElementById('text');

    //innerHTML e innerText funcionan igual para obtener
    //el texto de un elemento html como <p></p>
    //console.log(parrafo);

    /*
    innerHTML:
    Para agregar elementos HTML a nuestro documento*/
    //parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>';
    const form = document.getElementById('todo-form');
    form.onsubmit = (e) =>{
        e.preventDefault(); //hace que la pagina no refresque
        const todo =  document.getElementById('todo');
        const todoText = todo.value;
        todo.value='';
        todos.push(todoText);
        const todoList = document.getElementById('todo-list');
        todoList.innerHTML = '';
        for(let i=0;i < todos.length;i++){
            todoList.innerHTML += '<li>'+todos[i]+'</li>';
        }
    }
}
