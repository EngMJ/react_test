import { useCallback, useState } from "react";
import CmpB from "./cmpB";

export default function CmpA() {
    const [num, setNum] = useState(0);
    // 加1
    function add() {
        setNum(a=> a+1);
    }
    // 使用useCallback缓存函数,能够使传入cmpB的props,不会因为参数是函数而触发无用更新
    const cb = useCallback(()=>{
        return num;
    }, [num])

    return (
        <div>
            <h1>useCallback</h1>
            <h3>使用useCallback缓存函数,能够使传入cmpB的props,不会因为参数是函数而触发无用更新</h3>
            <CmpB cb={cb}></CmpB>
            <div onClick={add}>+1</div>
        </div>
    )
}
