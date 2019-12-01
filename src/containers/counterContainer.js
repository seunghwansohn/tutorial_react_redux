import React from 'react';
import {connect} from 'react-redux';
import {increase} from '../modules/counterModule';
import CounterComponent from '../components/counterComponent';

const deliverFunction = () => {
    console.log('이렇게 해야 콤포넌트로 함수가 전달됩니다.');
  }

  
function CounterContainer({increaseFromComponent, number}) {    //위의 deliverFunction은 전달할 필요가 없지만,
                                        //액션 생성함수인 incrase는 전달을 해줘야 액션 실행 함수와 연결됨.
                                        //실험으로 increase전달 부분을 삭제하면 액션 실행함수가 실행 안됨을 알 수 있음.
                                        //하위 컴포넌트에 인자로 보내는 이유는 이렇듯 하위에서 상위방향으로 연동시키기 위한것
    return (
      <div className="App">
        <CounterComponent onDeliverFunction = {deliverFunction} onIncrease = {increaseFromComponent} number = {number}></CounterComponent>
      </div>
    );
  }

const mapStateToProps = state => ({
    number: state.number,
})

const mapDispatchToProps = dispatch => ({
    increaseFromComponent: () => {
        dispatch(increase());
    }
})
export default connect (
    mapStateToProps,
    mapDispatchToProps,
    )(CounterContainer)