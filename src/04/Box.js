import { useState, useEffect } from "react";
import style from './Box.module.css';

const Box = () => {

    const [boxlist, setBoxlist] = useState();
    const [listTag, setListTag] = useState();
    const [detailTag,setdetailTag] = useState();

    const handleClick = (item) => {
        console.log(item);
        setdetailTag(
            <div className={style.numDiv}>
            <span>영화 코드 : {item.movieCd}  </span>
            <span>개봉일 : {item.openDt}</span>
            </div>
        )
    }

//     useEffect(() => {
//         let url2 = 'https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=20124079'
    
//     fetch(url2)
//     .then(resp=> resp.json())
//     .then(data => setdetailTag(data.movieInfoResult.movieInfo))
//     .catch(err => console.log(err));
        
// })

// useEffect(() => {
//     if(boxlist){
//         setdetailTag(boxlist.map((item, idx) =>
//         <tr key={'mv' + idx} onClick={() => handleClick(item)}>
//                     <td>{item.movieCd}</td>
//                     <td>{item.movieNm}</td>
//                     <td>{item.prdtStatNm}</td>
//                 </tr>
//         ))
//     }

// })

    //컴포넌트 생성시 한 번 실행
    useEffect(() => {
        let url = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230918'
        fetch(url)
            .then(resp => resp.json())
            .then(data => setBoxlist(data.boxOfficeResult.dailyBoxOfficeList))
            .catch(err => console.log(err));
    }, []);//state와는 다르게 함수임 상태가 변할때마다 계속 실행됨.

    //state 변수가 변경될 때마다 실행
    useEffect(() => {
        console.log(boxlist);
        if (boxlist) {
            setListTag(boxlist.map((item, idx) =>
                <tr key={'mv' + idx} onClick={() => handleClick(item)}>
                    <td>{item.rank}</td>
                    <td>{item.movieNm}</td>
                    <td>{parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
                    <td>{
                        item.rankInten === '0'
                            ? "-"
                            : item.rankInten > 0
                                ? "▲" + Math.abs(item.rankInten)
                                : "▼" + Math.abs(item.rankInten)
                    }
                    </td>
                    
                </tr>
            ));
        }
    }, [boxlist]);


    return (
        <main className="container">
            <article>
                <header><h1>일일박스 오피스</h1></header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {listTag}
                    </tbody>
                </table>
                <footer>
                    <div>{detailTag}</div>
                </footer>
            </article>
        </main>
    );
}
    export default Box;