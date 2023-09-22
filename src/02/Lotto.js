// import style from './Lotto.module.css';
import { useEffect, useState } from 'react';
import LottoNum from './LottoNum';


const Lotto = () => {
    const [nums, setNums] = useState();
    const handClick = () => {
        let temp = [];

        // while(temp){
        //     if (temp.length === 7) break;
        // }
        //밑과 같은말

        //버튼 클릭
        while (temp.length < 7) {

            let n = Math.floor(Math.random() * 45 + 1);
            if (temp.indexOf(n) < 0) temp.push(n);
        }
        setNums(temp);
    }
    useEffect(() => {

    }, [nums]);
    // let numArr = [];
    // const [lottoTag, setLottoTag] = useState([]);
    // let lottoTag = [];

    // const getNum = () => {
    //     numArr = [];
    //     while (numArr.length < 7) {
    //         let n = Math.floor(Math.random() * 45) + 1;
    //         if (numArr.indexOf(n) < 0) { //값이 없으면
    //             numArr.push(n);
    // }

    return ( //리턴에는 태그가 한개만 들어간다. <>, </> 이걸 넣어도 가능함
        <main className="container">
            <article>
                <header>
                    <h1>로또생성기</h1>
                </header>
                {/* <div className={style.lottobox}>
                    {lottoTag}
                </div> */}
                { nums ? <LottoNum ns={nums} /> : '로또 번호가 생성되지 않았습니다.' }
                <footer>
                    {/* <button onClick={getNum}>생성하기</button> */}
                    <button onClick={handClick}>생성하기</button>
                </footer>
            </article>
        </main>
    )
}

// setLottoTag(numArr.map((item) =>
//     <div className={style.lottonum}>{item}</div>
// ));
//console.log(lottoTag);
// }
export default Lotto;