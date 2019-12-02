import {combineReducers} from 'redux';
import counterModule from './counterModule'
import todoModule from './todoModule'

const rootReducer = combineReducers ({
    counterModule,
    todoModule
})

export default rootReducer