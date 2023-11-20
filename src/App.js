import './App.css';
import { Link, Outlet } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, incrementByAmount} from './store/modes/conter';
import UsecallbackCmp from "./items/usecallback/cmpA";
import MemoCmp from "./items/useMemo/MemoCmp";
import UseDeferredValueCmp from "./items/useDederredValue/useDeferredValueCmp";
import UseImperativeHandleCmp from "./items/useImperativeHandle/useImperativeHandle";
import UseLayoutEffectCmp from "./items/useLayoutEffect/useLayoutEffect";
import UseSyncExternalStoreCmp from "./items/useSyncExternalStore/useSyncExternalStore";
import UseTransitionCmp from "./items/useTransition/useTransition";

function Line () {
    return (
        <div style={{background: 'red', height: '1px', width: '100%'}}></div>
    )
}

function App() {
  const val = useSelector(store => store.counter.value);
  const dispatch = useDispatch();

  function clickHandle () {
      dispatch(increment());
  }

  return (
    <div className="App">
        <Outlet></Outlet>
        <Line></Line>
        <Link to={'/test'}>点击跳转test页面</Link>
        <div onClick={clickHandle}>点击增加store中的counter值, 当前为 {val}</div>
        <UsecallbackCmp></UsecallbackCmp>
        <Line></Line>
        <MemoCmp></MemoCmp>
        <Line></Line>
        <UseDeferredValueCmp></UseDeferredValueCmp>
        <Line></Line>
        <UseImperativeHandleCmp></UseImperativeHandleCmp>
        <Line></Line>
        <UseLayoutEffectCmp></UseLayoutEffectCmp>
        <Line></Line>
        <UseSyncExternalStoreCmp></UseSyncExternalStoreCmp>
        <Line></Line>
        <UseTransitionCmp></UseTransitionCmp>
        <Line></Line>
    </div>
  );
}

export default App;
