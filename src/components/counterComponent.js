import React from 'react'

//콤포넌트에서는 전달받은 함수를 반드시 {}를 통해 객체로 묶어 전달해야 함.
//이렇게 인사로 묶어서 전달하는 이유는 하위 콤포넌트에서 상위의 방향으로 연동시키기 위한 것임.
const CounterComponent = ({onDeliverFunction, onIncrease, number}) => {
    return (
        <div>
            {number}
            <br></br>
            <button onClick = {onDeliverFunction}>함수 전달 확인</button>
            <button onClick = {onIncrease}>플러스</button>
        </div>
    )
}
export default CounterComponent