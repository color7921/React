import style from './Lotto.module.css';
import { useState } from 'react';

const Lotto = () => {
    let numArr = [];
    const [lottoTag, setLottoTag] = useState([]);
    // let lottoTag = [];

    const getNum = () => {
        numArr = [];
        while (numArr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1;
            if (numArr.indexOf(n) < 0) { //값이 없으면
                numArr.push(n);
            }

        }
        // console.log(numArr);
        // lottoTag = numArr.map((item) =>
        // <div className={style.lottonum}>1</div>
        // );
        setLottoTag(numArr.map((item) =>
            <div className={style.lottonum}>{item}</div>
        ));
        console.log(lottoTag);
    }

    return ( //리턴에는 태그가 한개만 들어간다. <>, </> 이걸 넣어도 가능함
        <main className="container">
            <article>
                <header>
                    <h1>로또생성기</h1>
                </header>
                <div className={style.lottobox}>
                    {lottoTag}
                </div>

                <footer>
                    <button onClick={getNum}>생성하기</button>
                </footer>
            </article>
        </main>
    );

}

export default Lotto;