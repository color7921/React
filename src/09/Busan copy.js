import pusandata from "./pusandata.json"
import ButtonBlue from "../comm/ButtonBlue";
import GalleryCard from "../comm/GalleryCard";
//import { useEffect, useState } from "react";
import { useEffect, useRef, useState } from "react";
const Busan = () => {

    const [kw, Setkw] = useState();

    //목록 상태 변수
    const [item, SetItem] = useState();

    const [tags, SetTags] = useState();
    //select box
    const sel = useRef();

    //const txt1 = useRef();
    const code = pusandata.map((item) =>
        [item['콘텐츠ID'], item.콘텐츠명.slice(0, item.콘텐츠명.lastIndexOf('('))]
    );
    console.log(code)

    const opTag = code.map((item) =>
        <option key={item[0]} value={item[0]}>{item[1]}</option>
    );

    const getData = (kw) => {
        const apikey = 'du5i9ZUG7fmIHwAgU1mNko48oL%2BisI07wxyfVj1VWM2MOtWf%2Bmeqqbpjf%2BmQVlxamaX%2F3gcBcCiPLDuDkL40cw%3D%3D&pageNo=1'
        const enKw = encodeURI(kw);
        let url = 'https://apis.data.go.kr/6260000/FestivalService/getFestivalKr?'
        url = url + `serviceKey=${apikey}`
        url = url + `&numOfRows=10`;
        url = url + `&resultType=json`;
        url = url + `&UC_SEQ=${kw}`;

        console.log("url", url);
        fetch(url)
            .then((resp) => resp.json())

            //배열로 표현
            //data.getFestivalKr.item[몇 번째 배열]]
            .then((data) => SetItem(data.getFestivalKr.item[0]))
            .catch((err) => console.log(err));
    }
    //컴포넌트 생성시
    useEffect(() => {
        sel.current.focus();
    }, []);

    //컴포넌트 업데이트
    useEffect(() => {
        getData(kw);
    }, [kw]);

    useEffect(() => {

        if (item === undefined) return;

        SetTags(
            //.replace('http', 'https') 이거 안통함(이거때매 오류)
                <GalleryCard key={item.UC_SEQ}
                    imgsrc={item.MAIN_IMG_THUMB}
                    title={item.TITLE}
                    content={item.ITEMCNTNTS.substring(0, 100) + '...'}
                    sptag={item.PLACE.IndexOf < 0 ? [item.PLACE] : item.PLACE.split(',')}
                //refv={sel}
                />
        );
    }, [item]);

    const handleOk = (e, msg) => {
        // form 표시됐다가 사라지는거 방지
        e.preventDefault();
        if (sel.current.value === '') return;

        Setkw(sel.current.value);
        console.log(msg)
    }
    const handleCancel = (e, msg) => {
        // form 표시됐다가 사라지는거 방지
        e.preventDefault();
        sel.current.value = '';
        sel.current.focus();
        SetItem([]);
        console.log(msg)
    }

    const handleChange = () => {
        console.log(sel.current.value)
    }

    useEffect(() => {
        sel.current.focus();
    }, [])

    return (
        <main className="container">
            <article>
                <header className="flex	align-items: center justify-content: center">
                    <div className="text-4xl font-bold">부산 축제</div>
                    <div className="text-2xl"> </div>
                </header>
                <form><div className="grid grid-cols-4 gap-4">
                    <div className="col-span-2">
                        <select ref={sel} id='sel' name='sel' onChange={handleChange}>
                            <option value=''>축제명을 선택하세요 </option>
                            {opTag}
                        </select>
                    </div>
                    <div><ButtonBlue caption='축제확인' handleClick={(e) => handleOk(e, 'ok')} /></div>
                    <div><ButtonBlue caption='취소' handleClick={(e) => handleCancel(e, 'cancel')} /></div>
                </div>
                </form>
            </article>
            {item && tags}
        </main>
    )
}

export default Busan
