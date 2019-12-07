import React from 'react'

const TodoItemComponent = (todos) => {
    const todoMap = () => {
        return todos.todos.map(c => {
                return(
                    <div>
                        <input type = "checkbox"/>
                        {c.id} {c.text} 
                        <br></br>
                    </div>
                )
        })

    }
    return (
        <div>
           {todoMap()}
        </div>
    )
}
const TodoComponent = ({input, onChangeInput, todos}) => {
    const onSubmitTodoItem = e => {
        e.preventDefault()
    }
    const onChange = e => {
        onChangeInput(e.target.value)
    }
    return (
        <div>
            <h1>할일 리스트앱</h1>
            <br></br>
            입력값 : {input}
            <form onSubmit = {onSubmitTodoItem}>
                <input value = {input} onChange = {onChange}/>
                <button type = "submit">등록</button>
            </form>
            <TodoItemComponent todos = {todos.todos}></TodoItemComponent>
        </div>
    )
}

export default TodoComponent