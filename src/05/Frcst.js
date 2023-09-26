import Hh1 from "../comm/Hh1";
import data from "./dataFrcst.json"
import style from "./Frcst.module.css"
import { useState, useEffect } from "react";

const Frcst = () => {
    const dtkey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"];
    const cnkey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"];


    //


    // useEffect(() => { const updatedCnTag = cnkey.map((item, idx) => data[item]);
    //     setCnTag(updatedCnTag);
    //}, []);
    //

    //날짜가 클릭되었을 때 실행 함수
    const [cnTag, setCnTag] = useState();
    const handleClick = (k) => {
        let temp = dtcn[k].split(',');
        temp = temp.map((item, idx) => {
            let spitem = item.split(':');
            return (
                <div key={`cn` + idx}>
                    <span className={style.sp1}>{spitem[0]}</span>
                    {spitem[1].trim() === '낮음'
                    ?<span className={style.sp21}>{spitem[1]}</span>
                    : spitem[1].trim() === '보통'
                    ?<span className={style.sp22}>{spitem[1]}</span>
                    :<span className={style.sp23}>{spitem[1]}</span>
                    }
                </div>
            )
                });
        setCnTag(temp);
    
};

useEffect(() => {
    console.log("cnTag", cnTag)
}, [cnTag]);



//날짜(key):지역미세먼지(value) 인 dtcn 오브젝트 생성
let dtcn = {};
dtkey.map((item, idx) =>
    dtcn[data[item]] = data[cnkey[idx]]
);


//날짜 영역 만들기

let dtTag = Object.keys(dtcn).map((item, idx) =>
    <div
        key={`dtcn${idx}`}
        className={style.dtcnkey}
        onClick={() => handleClick(item)}
    >
        {item}
    </div>
);

return (
    <main className="container">
        <article>
            <Hh1 title='미세먼지 확인' />
            <div className="grid">
                {dtTag}

            </div>
            <div className="grid">
                {cnTag}
            </div>
        </article>

    </main>
)
};


export default Frcst;