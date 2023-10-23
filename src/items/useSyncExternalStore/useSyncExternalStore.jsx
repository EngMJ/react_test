import { useSyncExternalStore } from "react";


export default function UseSyncExternalStoreCmp () {

    return (
        <div>
            <h1>useSyncExternalStore</h1>
            <h2>不通过props、state、context等选项,使用外部数据(三方状态管理库redux-mobx/浏览器API/自定义Hook)来触发渲染更新</h2>
            <h2>通常在你与已经存在的外部非React代码集成的时候才比较有用</h2>
        </div>
    )
}
