import Hh1 from "../comm/Hh1";
import data from "./dataTaccident.json"

const Taccident = () => {

    const tdata = data.data;
    let c1 = tdata.map((item) => item.사고유형_대분류);
    c1 = [...new Set(c1)];

    let c1Tag = c1.map((item, idx) =>
        <li key={`li${idx}`}><button>{item}</button></li>);
    // const c1 = ["경상자수", "부상신고자수", "사고건수", "사고유형_대분류", "사고유형_중분류", "사망자수", "중상자수"];

    // let dtcn = {};
    // c1.map((item, idx) =>
    //     dtcn[data[item]] = data[idx]
    // );
    // console.log(c1);

    return (
        <main className="container">
            <Hh1 title='도로교통공단_사고유형별 교통사고 통계' />
            <nav>
                <ul>
                    <li><strong>대분류</strong></li>
                </ul>
                <ul>
                  {c1Tag}
                </ul>
            </nav>
        </main>
    )
}

export default Taccident;
