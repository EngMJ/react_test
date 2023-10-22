import './App.css';
import UsecallbackCmp from "./items/usecallback/cmpA";
import MemoCmp from "./items/useMemo/MemoCmp";
import UseDeferredValueCmp from "./items/useDederredValue/useDeferredValueCmp";

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
    </div>
  );
}

export default App;
