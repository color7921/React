import { FcBullish } from "react-icons/fc";
import ButtonBlue from '../comm/ButtonBlue';
import GalleryCard from "../comm/GalleryCard";
import { useState, useEffect, useRef } from "react";

const Gallery = () => {
    //키워드 상태 변수
    const [kw, Setkw] = useState();

    //목록 상태 변수
    const [item, SetItem] = useState();

    const [tags, SetTags] = useState();

    //input box
    const txt1 = useRef();

    const handleOk = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;

        Setkw(txt1.current.value);
    }

    //취소 기능
    const handleCancel = (e) => {
        e.preventDefault();
        txt1.current.value = '';
        txt1.current.focus();
        SetItem([]);
    }



    const getData = (kw) => {
        const apikey = 'du5i9ZUG7fmIHwAgU1mNko48oL%2BisI07wxyfVj1VWM2MOtWf%2Bmeqqbpjf%2BmQVlxamaX%2F3gcBcCiPLDuDkL40cw%3D%3D'
        //키워드 인코딩
        const enKw = encodeURI(kw);
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
        url = url + `serviceKey=${apikey}`
        url = url + `&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest`;
        url = url + `&arrange=A`;
        url = url + `&keyword=${enKw}`;
        url = url + `&_type=json`;

        //console.log("url", url);
        fetch(url)
            .then((resp) => resp.json())

            //배열로 표현
            .then((data) => SetItem(data.response.body.items.item))
            .catch((err) => console.log(err));
    }
    //컴포넌트 생성시
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //컴포넌트 업데이트
    useEffect(() => {
        getData(kw);
    }, [kw]);

    useEffect(() => {

        if (item === undefined) return;

        SetTags(
        item.map((i) =>
            <GalleryCard key={i.galContentId}
                imgsrc={i.galWebImageUrl.replace('http', 'https')}
                title={i.galTitle}
                content={i.galPhotographyLocation}
                sptag={i.galSearchKeyword.split(',')}
                refv={txt1}
                />)
        );

    }, [item]);

    return (
        <main className="container">
            <article>
                <header className="flex	align-items: center justify-content: center">
                    <div className="text-4xl font-bold">한국관광공사 관광사진 정보</div>
                    <div className="text-2xl"> <FcBullish /></div>
                </header>
                <form><div className="grid">
                    <div className="grid">
                        <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." />
                    </div>
                    <div className="grid">
                        <ButtonBlue caption='확인' handleClick={handleOk} />
                        <ButtonBlue caption='취소' handleClick={handleCancel} />
                    </div>
                </div>
                </form>
            </article>
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-38">
                {item && tags}
            </section>
        </main>
    )
}
export default Gallery
//w-full = width full
//h-screen = 스크린높이
//y-auto = y축 마진 오토
//mx-4 = x축 마진