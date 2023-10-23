import { useTransition } from "react";


export default function UseTransitionCmp () {

    return (
        <div>
            <h1>useTransition</h1>
            <h2>作用: 触发事件到事件完成的过渡渲染期间,不阻塞页面交互,平滑完成转变</h2>
            <h2>作用: 子组件使用startTransition使用父组件props事件,同样有用</h2>
            <h2>作用: 不会触发Suspense 的效果</h2>
            <h2></h2>
            <h2>禁止: </h2>
            <h2>不能用来过渡输入框state值改变</h2>
            <h2>startTransition是同步函数,函数中不能使用async/await/定时器</h2>
            <h2>startTransition是同步函数,函数中不能使用async/await/定时器</h2>
        </div>
    )
}
