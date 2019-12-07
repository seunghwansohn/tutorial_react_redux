import {createAction, handleActions} from 'redux-actions'

const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'
const REMOVE = 'todos/REMOVE'

// export const changeInput = input => (
//     {
//     type: CHANGE_INPUT,
//     input
// })

export const changeInput = createAction(CHANGE_INPUT, input => input)



let id = 3;

export const insert = (text) => ({
    type : INSERT,
    todo: {
        id: id ++,
        text,
        done:false
    }
})

export const toggle = id => ({
    type : TOGGLE,
    id
})

export const remove = id => ({
    type : REMOVE,
    id
})

const initialState = {
    input: '',
    todos : [
        {
            id : 1,
            text : '리덕스 기초 배우기',
            done : true
        },
        {
            id : 2,
            text : '리액트와 리덕스 사용하기',
            done : false
        }
    ]
}


// function todos (state = initialState, action){
//     switch (action.type){
//         case CHANGE_INPUT :
//             return {
//                 ...state,
//                 input: action.input
//             }
//         default :
//         return state;    
        
//     }
// }

//위의 코드를 handleActions를 이용해 CHANGE_INPUT 타입부분과 바꾸면 이렇게 됨.
//hanedleActions에서는 받아오는 값 부분이 모두 action.payload로 받는다는 점에 유의
const todos = handleActions(
    {
        [CHANGE_INPUT]: (state, action) => ({...state, input : action.payload}),
    },
    initialState,
)


export default todos;