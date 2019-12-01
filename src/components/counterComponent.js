import React from 'react'

//콤포넌트에서는 전달받은 함수를 반드시 {}를 통해 객체로 묶어 전달해야 함.
const CounterComponent = ({onDeliverFunction}) => {
    console.log(onDeliverFunction)
    return (
        <div>
            0
            <br></br>
            <button onClick = {onDeliverFunction}>+1</button>
            <button onClick = ''>-1</button>
        </div>
    )
}
export default CounterComponent