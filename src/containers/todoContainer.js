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

const mapStateToProps = todos => (
    {
    input : todos.todos.input,
    todos : todos.todos,
})
const mapDispatchToProps = dispatch => ({
    changeInput:(input) => {
        dispatch(changeInput(input))
    },
    insert : () => {
        dispatch(insert())
    }
})
export default connect(
    mapStateToProps,
    mapDispatchToProps,
) (TodosContainer)