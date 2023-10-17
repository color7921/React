import Hh1 from "../comm/Hh1"
import styles from './Box.module.css';
import { useRef, useState, useEffect } from "react";
const Box = () => {

  
    async function logJSONData() {
        const response = await fetch("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918");
        const jsonData = await response.json();
        console.log(jsonData);
      }

    //날짜선택
    const dt = useRef();

    //선택된 날짜
    const [cdt, setCdt] = useState();

    const handleClick = () => {
        //cnt1 = cnt1+1;
        let temp = dt.current.value.replaceAll('-', '');
        //temp = temp.replaceAll('-', '');
        // -를 없앰
        setCdt(temp);
    }

    //컴포넌트 생성시 포커스 호출
    useEffect(() => {

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        //dt.current.focus();
        let y = `${yesterday.getFullYear()}`;
        let m = yesterday.getMonth() + 1 < 10 ? `0${yesterday.getMonth() + 1}`: `${yesterday.getMonth() + 1}`
        let d = yesterday.getDate() < 10 ? `0${yesterday.getDate()}` : `${yesterday.getDate}`;
        
        //어제날짜로 기본값 설정
        dt.current.value = `${y}-${m}-${d}`;
        setCdt(y+m+d);
    }, []);

    useEffect(() => {}, [cdt]);

    return (
        <main className="container">
            <Hh1 title='박스오피스' />

            <article>
                <header>
                    <div className={styles.dt}>선택한 날짜 : {cdt} </div>
                    <form>
                        <input onChange={handleClick} ref={dt} type='date' id='dt' name='dt' />
                    </form>
                </header>
            </article>
        </main>
    )
}

export default Box