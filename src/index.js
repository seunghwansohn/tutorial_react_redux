import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './modules'

const store = createStore(rootReducer) 
//default로 export되는 모듈은 이렇게 스토어 생성때 인자로 전달되므로 다시 import필요 없음

ReactDOM.render(      //Provider와 Connect가 vanila-redux에서의 subscribe(구독)와 같은 기능을 함.
    <Provider store = {store}>      
        <App />
    </Provider>, 
    document.getElementById('root')
);

serviceWorker.unregister();
