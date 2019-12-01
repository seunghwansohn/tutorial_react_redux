const INCREASE = 'counter/INCREASE'
const initialState = {
    number: 0
};


//액션 생성함수 생성
//액션 생성함수는 개별 export로 내보내준 뒤
//컨테이너에서 {}안에 넣어서 불러옴.
export const increase = (number) => (
    {
    type : INCREASE,
    number
})

//리듀서 생성. 리듀서는 default로 export 시켜줌

function counterModule(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            console.log(action)  // => {type : "counter/INCREASE", number: undefined}
            console.log(state) // => {number :0}
            return {
                ...state,
                number : state.number + 1
            }
        default :
            return state;
    }
}

export default counterModule; //이 리듀서는 index.js의 createStore의 인자로 바로 전달됨.

