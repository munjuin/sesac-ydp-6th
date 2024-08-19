import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css';
import { minus, plus } from './store/counterReducer';
import {changeVisibility} from './store/isVisibleReducer'
// import {rootReducer} from './store/index'

function App3() {
    // const number = useSelector((state) => state.number);
    // console.log('number2 >>>>> ', number); // {number : 100}
    const state = useSelector((state) => state.counter)//{counter}
    console.log('state>>>>>>>>>>', state);
    const number = useSelector((state) => state.counter.number)//{counter}
    console.log('state>>>>>>>>>>', number);
    

    return (
        <div className="App">
            <h1>React Redux Ex3</h1>
            <h2>Redux 사용!</h2>
            <h2>리듀서 추가!</h2>
            <h2>number: {number}</h2>
            <Box1 />
        </div>
    );
}

// Box1 컴포넌트
const Box1 = () => {
    return (
        <div className="Box1">
            <h2>Box1</h2>
            <Box2 />
        </div>
    );
};

// Box2 컴포넌트
const Box2 = () => {
    return (
        <div className="Box2">
            <h2>Box2 : </h2>
            <Box3 />
        </div>
    );
};

// Box3 컴포넌트
const Box3 = () => {
    return (
        <div className="Box3">
            <h2>Box3 : </h2>
            <Box4 />
        </div>
    );
};

// Box4 컴포넌트
const Box4 = () => {
    // #8. useDispatch 훅 사용하여 액션을 디스패치하는 함수 가져오기.
    // - 이 함수를 사용하여 상태 업데이트!
    // Redux 상태에서 number 값을 선택하고, 액션을 디스패치 할 준비!
    const number = useSelector((state) => state.counter.number);
    const isVisible = useSelector((state)=>state.isVisible)
    const dispatch = useDispatch();
    return (
        <div className="Box4">
            <h2>Box4 : {number}</h2>
            <h2>isVisible 같은 "{isVisible ? '참' : '거짓'}"</h2>

            <button onClick={() => dispatch(plus)}>
                PLUS
            </button>
            <button onClick={() => dispatch(minus)}>
                MINUS
            </button>
            <button onClick={()=> dispatch(changeVisibility())}>CHANGE</button>
        </div>
    );
};

export default App3;