import { useDeferredValue, memo, useState } from 'react';

export default function UseDeferredValueCmp () {
    const [text, setText] = useState('');
    // 使用延迟值缓存state,使经过memo的SlowList组件认为没有传入新props,从而在数据更新完毕前不触发props变更的渲染,保持页面不卡顿
    const deferredText = useDeferredValue(text);
    return (
        <div>
            <h1>useDeferredValue</h1>
            <h2>能够缓存值,这个值在新数据渲染完成前,保持老数据显示不发生渲染,但会引起Suspense组件失效</h2>
            <h2>以下使用延迟值缓存state,使经过memo的SlowList组件认为没有传入新props,从而在数据更新完毕前不触发props变更的渲染,保持页面不卡顿</h2>
            <input value={text} onChange={e => setText(e.target.value)} />
            <SlowList text={deferredText} />
        </div>
    );
}


// 列表
const SlowList = memo(function SlowList({ text }) {
    // 仅打印一次。实际的减速是在 SlowItem 组件内部。
    console.log('[ARTIFICIALLY SLOW] Rendering 250 <SlowItem />');

    let items = [];
    for (let i = 0; i < 10; i++) {
        items.push(<SlowItem key={i} text={text} />);
    }
    return (
        <ul className="items">
            {items}
        </ul>
    );
});

function SlowItem({ text }) {
    let startTime = performance.now();
    while (performance.now() - startTime < 1) {
        // 每个 item 暂停 1ms，模拟极其缓慢的代码
    }

    return (
        <li className="item">
            Text: {text}
        </li>
    )
}
