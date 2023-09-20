import MyComN from "./MyComN";
const MyCom = () => {
    let n = undefined;
    let comTag;

    if (n === undefined) {
        comTag = <div>값이 없습니다.</div>
    }
    else {
        comTag = <MyComN n={n} n1={n * 2} />
    }

    return (
        <main className="container">
            <article>
                <header>Mycom</header>{
                    comTag
                    
                    //falsy 연산
                   // n && <MyComN n={n} n1={n * 2} />
                }
            </article>
        </main>
        //num 속성값 생성.
    );
}

export default MyCom;