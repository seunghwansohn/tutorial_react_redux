import React from 'react';
import {connect} from 'react-redux';
import {createAct_Increase, createAct_Decrease} from '../modules/counterModule';
import CounterPlusComponent from '../components/counterPlusComponent';
import CounterMinusComponent from '../components/counterMinusComponent';



const deliverFunction = () => {
    console.log('이렇게 해야 콤포넌트로 함수가 전달됩니다.');
  }

  
function CounterContainer({increaseFromComponent, number, decreaseFromComponent}) {  
    return (
      <div className="App">
        <CounterPlusComponent onDeliverFunction = {deliverFunction} onIncrease = {increaseFromComponent} number = {number}> </CounterPlusComponent>
        <br></br>
        <hr></hr>
        <br></br>

        <CounterMinusComponent 
        onDeliverFunction = {deliverFunction} 
        onDecrease = {decreaseFromComponent} 
        number = {number}>
        </CounterMinusComponent>
        <hr></hr>
      </div>
    );
  }

const mapStateToProps = state => ({
    number: state.counterModule.number,
})

const mapDispatchToProps = dispatch => ({
    increaseFromComponent: () => {      
    // :의 앞부분은 콤포넌트 이벤트에 의해 발생될 최초 발생될 함수, 
    dispatch(createAct_Increase());           
    // :의 뒷부분은 최초 발생될 함수에 의해 모듈에서 불러와져서 dispatch될 최종값
    },
    decreaseFromComponent : () => {
      dispatch(createAct_Decrease())
    }
})
export default connect (
    mapStateToProps,
    mapDispatchToProps,
    )(CounterContainer)