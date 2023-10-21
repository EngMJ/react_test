import { useMemo, useState } from "react";


export default function MemoCmp () {
    const [val, setVal] = useState(0);
    // 缓存高消耗计算, 避免重复计算, 依赖项不改变不重新计算
    const resVal = useMemo(()=>{
        let i = val;
        while (i<1000) {
            i++
        }
        return i;
    },[val]);

    return (
        <div>
            <h1>useMemo</h1>
            <h2>缓存高消耗计算, 避免重复计算</h2>
            <div>重复+1000次的结果: {resVal}</div>
        </div>
    )
}
