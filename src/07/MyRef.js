
import Hh1 from '../comm/Hh1'
import { useState, useEffect, useRef } from 'react';
//useEffect = 함수 , useState = 변수, useRef = current 사용
const MyRef = () => {
    const title = 'useRef Hook : 변수제어';
    //let cnt1 = 0;
    const [cnt1, setCnt1] = useState(0);
    

    const handleClick = () => {
        //cnt1 = cnt1+1;
        setCnt1(cnt1 + 1);
    }

    const handleClickRef = () => {
        cnt2.current = cnt2.current + 1;
    }

    //Ref 변수
    const cnt2 = useRef(0)
    const txt1 = useRef();

    //컴포넌트 생성시 1번 호출
    useEffect(() => {
        setCnt1(100);
        txt1.current.focus();
    }, []);

    const handleChange = () => {
        setCnt1(parseInt(txt1.current.value));
    }

    //컴포넌트 업데이트시 생성 : cnt1 state 변수가 업데이트 될 때
    useEffect(() => { }, [cnt1]);

    return (
        <main className='container'>
            <article>
                <Hh1 title={title} />
                <div className='grid'>
                    <div>state변수 : {cnt1}</div>
                    <div>Ref변수 : {cnt2.current}</div>
                </div>
                <footer>
                    <div className='gird'>
                        <button onClick={handleClick}>state 변수 증가</button>
                        <button onClick={handleClickRef}>Ref 변수 증가</button>
                    </div>
                </footer>
            </article>
            <article>
                <Hh1 title='useRef Hook : Form 제어' />
                <form>
                    <input ref={txt1} type='number' id='txt1' name='txt1' placeholder='숫자입력' onChange={handleChange}/>
                </form>
            </article>
        </main>
    )
}

export default MyRef
