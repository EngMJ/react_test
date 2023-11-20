import { useState} from "react";
import { useNavigate, Outlet } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {decrement, getMsg} from '../store/modes/conter';
import {useLocation, useParams, useSearchParams} from "react-router-dom";

export default function RouterTest () {
    const [query, setQuery] = useState('');
    const [params, setParams] = useState('');
    const nav = useNavigate();
    const val = useSelector(store => store.counter.value);
    const dispatch = useDispatch();
    const Location = useLocation();
    const pagePrams = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    function delHandle () {
        dispatch(decrement());
    }

    function clickHandle() {
        nav(-1);
    }

    function asyncHandle () {
        dispatch(getMsg());
    }

    function getRoute () {
        setParams(JSON.stringify(pagePrams) || '')
        setQuery(JSON.stringify(Location) || '')
    }

    function routeHandle () {
        nav('/test/1');
    }

    return (
        <div>
            <h1>当前路由为 test</h1>
            <h1 onClick={clickHandle}>点击文本后退页面</h1>
            <h1 onClick={delHandle}>点击减少store中的counter值, 当前为 {val}</h1>
            <h1 onClick={asyncHandle}>点击异步增加store中的counter值, 当前为 {val}</h1>
            <h1 onClick={getRoute}>获取当前路由信息</h1>
            <h1 >useLocation查询字符串: {query}</h1>
            <h1 >useParams路由参数: {params}</h1>
            <h1 onClick={routeHandle}>进入test/1页面</h1>
            ----------------------------------
            <Outlet></Outlet>
        </div>
    )
}
