import './App.css';
import UsecallbackCmp from "./items/usecallback/cmpA";
import MemoCmp from "./items/useMemo/MemoCmp";
import UseDeferredValueCmp from "./items/useDederredValue/useDeferredValueCmp";
import UseImperativeHandleCmp from "./items/useImperativeHandle/useImperativeHandle";
import UseLayoutEffectCmp from "./items/useLayoutEffect/useLayoutEffect";

function Line () {
    return (
        <div style={{background: 'red', height: '1px', width: '100%'}}></div>
    )
}

function App() {
  return (
    <div className="App">
        <UsecallbackCmp></UsecallbackCmp>
        <Line></Line>
        <MemoCmp></MemoCmp>
        <Line></Line>
        <UseDeferredValueCmp></UseDeferredValueCmp>
        <Line></Line>
        <UseImperativeHandleCmp></UseImperativeHandleCmp>
        <Line></Line>
        <UseLayoutEffectCmp></UseLayoutEffectCmp>
    </div>
  );
}

export default App;
