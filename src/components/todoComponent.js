import React from 'react'


const TodoItemComponent = () => {
    return (
        <div>

            <input type = "checkbox"/>
            <span>예제텍스트</span>
            <button>삭제</button>
          
            <br></br>
        </div>
    )
}

const TodoComponent = ({input, onChangeInput}) => {
    const onSubmitTodoItem = e => {
        e.preventDefault()
    }
    const onChange = e => onChangeInput(e.target.value)
    return (
        <div>
            
            <h1>할일 리스트앱</h1>
            <br></br>
            <form onSubmit = {onSubmitTodoItem}>
                <input value = {input} onChange = {onChange}/>
                <button type = "submit">등록</button>
            </form>
            <TodoItemComponent></TodoItemComponent>
        </div>
    )
}

export default TodoComponent