import {combineReducers} from 'redux';
import counterModule from './counterModule'
import todos from './todoModule'

const rootReducer = combineReducers ({
    counterModule,
    todos
})
export default rootReducer