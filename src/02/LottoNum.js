
//const LottoNum = (probs) => {
import style from './Lotto.module.css'

const LottoNum = ({ ns }) => {
    //     console.log(ns);
    let n;
    const nsTag = ns.map((item, idx) => {
    //         let temp ;
    //         if (item < 10) temp = <div key = {'ns'+idx} className={style.lottoNum1}>{item}</div>
    //         else if (item < 20) temp = <div key = {'ns'+idx} className={style.lottoNum2}>{item}</div>
    //         else if (item < 30) temp = <div key = {'ns'+idx} className={style.lottoNum3}>{item}</div>
    //         else if (item < 40) temp = <div key = {'ns'+idx} className={style.lottoNum4}>{item}</div>
    //         else temp = <div key = {'ns'+idx} className={style.lottoNum5}>{item}</div>
    //         return temp; 

    //switch문
    // let n = Math.floor(item / 10);
    // switch (n) {
    //     case 0: 
    //     temp = <div key = {'ns'+idx} className={style.lottoNum1}>{item}</div>
    //         break;
    //     case 1: 
    //         temp = <div key = {'ns'+idx} className={style.lottoNum2}>{item}</div>
    //         break;
    //     case 2: 
    //         temp = <div key = {'ns'+idx} className={style.lottoNum3}>{item}</div>
    //         break;
    //     case 3: 
    //         temp = <div key = {'ns'+idx} className={style.lottoNum4}>{item}</div>
    //         break;
    //     case 4: 
    //        
    //         break;
    // }
    // }
    // );


   
        let n = Math.floor(item / 10);
        return (
            idx === (ns.length - 1)
                ? <div className={style.plus}> + </div>
                : <div key={'ns' + idx} className={style[`lottonum${n+1}`]}>
                    {item}
                    </div>
        )
    });
    
    

//배열 at()으로 마지막 요소 가져오기
n = Math.floor(ns.at(-1) / 10);
nsTag.push(
    <div key={'ns' + (ns.length - 1)} className={style[`lottonum${n+1}`]}>
        {ns.at(-1)}

    </div>
);


return (
    <div className={style.lottobox}>
        {nsTag}
    </div>
)
}

export default LottoNum;