import React from 'react'

const CounterMinusComponent = ({onDeliverFunction, onDecrease, number}) => {
    return (
        <div>
            {number}
            <br></br>
            <button onClick = {onDeliverFunction}>함수 전달 확인</button>
            <button onClick = {onDecrease}>마이너스</button>
        </div>
    )
}
export default CounterMinusComponent