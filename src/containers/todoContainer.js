import React from 'react'
import {connect} from 'react-redux'
import {changeInput, insert, toggle, remove} from '../modules/todoModule'
import TodoComponent from '../components/todoComponent'

const TodosContainer = ({
    input,
    todos,
    changeInput,
    insert,
    toggle,
    remove,
}) => {
    console.log(input)
    return (
        <TodoComponent 
            input = {input}
            todos = {todos}
            onChangeInput = {changeInput}
            onInsert={insert}
            onToggle = {toggle}
            onRemove = {remove}
        />
    )
}

export default connect(
    ({todos}) => ({
        input : todos.input,
        todos: todos.todos
    }),
    {
        changeInput,
        insert,
        toggle,
        remove,
    }
) (TodosContainer)