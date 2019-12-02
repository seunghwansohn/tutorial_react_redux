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

const TodoComponent = ({onDeliverFunction, onDecrease, number}) => {
    const onSubmitTodoItem = e => {
        e.preventDefault()
    }
    return (
        <div>
            
            <h1>할일 리스트앱</h1>
            <br></br>
            <form onSubmit = {onSubmitTodoItem}>
                <input/>
                <button type = "submit">등록</button>
            </form>
            <TodoItemComponent></TodoItemComponent>
        </div>
    )
}

export default TodoComponent