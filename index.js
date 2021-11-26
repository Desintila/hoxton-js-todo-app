const state={
    todos:[
        {
            title:'Get up early',
            completed:false
        },
        {
            title:'Plan family trip',
            completed:true
        }
    ],
    showCompletedOptions:true
}

const toDoList = document.querySelector('.todo-list')
function renderTodoIncomplete(todo){
    const liEl=document.createElement('li')
    liEl.setAttribute('class','todo')
    const divEl=document.createElement('div')
    divEl.setAttribute('class','completed-section')
    const inputEl=document.createElement('input')
    inputEl.setAttribute('class','completed-checkbox')
    inputEl.setAttribute('type','checkbox')
    const divTextEl=document.createElement('div')
    divTextEl.setAttribute('class','text-section')
    const pEl=document.createElement('p')
    pEl.textContent=`${todo.title}`
    const divButtonEl=document.createElement('div')
    divButtonEl.setAttribute('class','button-section')
    const editButtonEl=document.createElement('button')
    editButtonEl.setAttribute('class','edit')
    editButtonEl.textContent='Edit'
    const deleteButtonEl=document.createElement('button')
    deleteButtonEl.setAttribute('class','delete')
    deleteButtonEl.textContent=('Delete')
    divEl.append(inputEl)
    divTextEl.append(pEl)
    divButtonEl.append(editButtonEl,deleteButtonEl)
    liEl.append(divEl,divTextEl, divButtonEl)
    toDoList.append(liEl)
    inputEl.checked= todo.completed
    inputEl.addEventListener('click',function(){
        toogle(todo)
        render()
    })  
    deleteButtonEl.addEventListener('click',function(){
        deleteToDo(todo.title)
        render()
    })
    const showCompleted=document.querySelector('.show-completed-checkbox')
    showCompleted.addEventListener('click',function(){
        state.showCompletedOptions=showCompleted.checked
        showComplete()
    })
}
const completeTodo=document.querySelector('.completed-list')
function renderTodoComplete(todo){
    const liEl=document.createElement('li')
    liEl.setAttribute('class','todo completed')
    const divEl=document.createElement('div')
    divEl.setAttribute('class','completed-section')
    const inputEl=document.createElement('input')
    inputEl.setAttribute('class','completed-checkbox')
    inputEl.setAttribute('type','checkbox')
    const divTextEl=document.createElement('div')
    divTextEl.setAttribute('class','text-section')
    const pEl=document.createElement('p')
    pEl.textContent=`${todo.title}`
    const divButtonEl=document.createElement('div')
    divButtonEl.setAttribute('class','button-section')
    const editButtonEl=document.createElement('button')
    editButtonEl.setAttribute('class','edit')
    editButtonEl.textContent='Edit'
    const deleteButtonEl=document.createElement('button')
    deleteButtonEl.setAttribute('class','delete')
    deleteButtonEl.textContent=('Delete')
    divEl.append(inputEl)
    divTextEl.append(pEl)
    divButtonEl.append(editButtonEl,deleteButtonEl)
    liEl.append(divEl,divTextEl, divButtonEl)
    completeTodo.append(liEl)
    inputEl.checked=todo.completed
    inputEl.addEventListener('click',function(){
        toogle(todo)
        render()
    })  
    deleteButtonEl.addEventListener('click',function(){
        deleteToDo(todo.title)
        render()
    })
}
function addNewToDo(todo){
    state.todos.push(todo)
}
function renderAddToDo(){
    const formEl=document.querySelector('.add-item')
    formEl.addEventListener('submit',function(event){
        event.preventDefault()
        const todo={
            title:formEl.text.value,
            completed:false
        }
        addNewToDo(todo)
        renderTodoIncomplete(todo)
        formEl.reset()
    })
}
function getInCompleteToDo(){
    return state.todos.filter(function(todo){
        return todo.completed===false
    })
}
function renderInCompleteToDo(){
    const incompleteToDo=getInCompleteToDo()
    toDoList.innerHTML=''
    for(const todo of incompleteToDo){
        renderTodoIncomplete(todo)
    }
}
function getCompleteToDo(){
    return state.todos.filter(function(todo){
        return todo.completed===true
    })
}
function renderCompleteToDo(){
    const completeToDo=getCompleteToDo()
    completeTodo.innerHTML=''
    for(const todo of completeToDo){
        renderTodoComplete(todo)
    }
}
function toogle(todo){
    todo.completed= !todo.completed
}
function deleteToDo(title){
    state.todos=state.todos.filter(function(todo){
        return todo.title !== title
    })
}
const complete=document.querySelector('.completed-section')
function showComplete(){
    if(state.showCompletedOptions){
        complete.style.display='block'
    }
    else{
        complete.style.display='none'
    }
}
function render(){
    renderAddToDo()
    renderInCompleteToDo()
    renderCompleteToDo()
}
render()