const INCREASE = 'counter/INCREASE'
const DECREASE = 'counter/DECREASE'

//액션 생성함수 생성
//액션 생성함수는 개별 export로 내보내준 뒤
//컨테이너에서 {}안에 넣어서 불러옴.
export const createAct_Increase = (number) => (
    {
        type : INCREASE,
        number
})

export const createAct_Decrease = (number) => (
    {
        type : DECREASE,
        number
    }
)

const initialState = {
    number: 0
};


//리듀서 생성. 리듀서는 default로 export 시켜줌

function counterModule(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                number : state.number + 1
            }
        case DECREASE:
                return {
                    ...state,
                    number : state.number -1
                }
        default :
            return state;
    }
}

export default counterModule; //이 리듀서는 index.js의 createStore의 인자로 바로 전달됨.

