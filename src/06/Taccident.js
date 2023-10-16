//함수 형태로 작성
import dataTaccident from "./dataTaccident.json";
import TaccidentNav from "./TaccidentNav";
import Hh1 from "../comm/Hh1";
import { useEffect, useState } from "react";
//import style from "./Taccident.module.css";

const Taccident = () => {
    //오브젝트 값 가져오기

    //const tdata = dataTaccident['data'];
    //object에 키를 가지고 오는 방법 : . 을 붙인다, 대괄호 붙인다.
    const tdata = dataTaccident.data;

    //배열은 map, filter를 쓴다. (for은 안씀)

    //tdata.map(() => {}); 
    //배열 순회 --> 배열.map();

    //인수 전달 : 콜백함수
    //let c1 : 반환된걸 모은다.
    //return없으니 중괄호 생략가능
    let c1 = tdata.map((k) => k.사고유형_대분류);

    //중복데이터 제거 set
    c1 = new Set(c1);
    //스프레드 연산자 : 배열로 다 풀어헤침
    c1 = [...c1];
    // c2 = new Set(c2);

    //대분류 선택
    const [sel1, setSel1] = useState();

    //중분류
    const [c2, setC2] = useState();
    const [sel2, setSel2] = useState();

    //선택항목 태그
    const [divTag, setDivTag] = useState();


    //중분류 선택
    useEffect(() => {
        //undefined
        if (!sel2) return;

        let temp = tdata.filter((item) =>
            item.사고유형_대분류 === sel1 &&
            item.사고유형_중분류 === sel2)

        //결과가 object
        temp = temp[0];

        //object 전체 순회
        // temp = Object.keys(temp).map((item, idx) =>
        //     //[item, temp[item]]
        //     <div key={`d${idx}`}>{item} : {temp[item]}</div>
        // );

        let k = Object.keys(temp).filter((item) =>
            (item !== '사고유형_대분류' && item !== '사고유형_중분류'))
        console.log(k)

        //키값을 받아옴
        temp = k.map((item, idx) =>
            <div key={`d${idx}`}>{item} : {temp[item]}</div>
        )
        setDivTag(temp);

    }, [sel2]);


    useEffect(() => {
        if (!sel1) return;

        let temp = tdata.filter((item) => item.사고유형_대분류 === sel1)
        temp = temp.map((item) => item.사고유형_중분류);
        // 위, 아래 같은말
        // let temp = tdata
        // .filter((item) => item.사고유형_대분류 === sel1)
        // .map((item) => item.사고유형_중분류);

        //중분류 생성
        setC2(temp);

        //값 초기화
        setSel2();
        setDivTag();

    }, [sel1]);



    //합치면
    //c1 = [...new Set(c1)];


    // console.log(tdata);
    return (
        <main className="container">
            <article>
                <Hh1 title='유형별 교통사고' />
                <TaccidentNav title='교통사고 대분류' c={c1} sel={sel1} setSel={setSel1} />
                {c2 && <TaccidentNav title='교통사고 중분류' c={c2} sel={sel2} setSel={setSel2} />}
                <div className="grid">
                    {divTag}
                </div>
            </article>
        </main>
    )
}

export default Taccident;
