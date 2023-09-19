//암기#*#*#**#*#*#*#
//컴포넌트 : 사용자 정의 태그처럼 사용한다.
//리액트에서 만드는 컴포넌트는 첫번째 자리 반드시 대문자

import Clockimage from "./Clockimage";
import Clocktime from "./Clocktime";
import MyComN from "../03/MyComN";
const Clock = () => {


    return (
        <div className="App">
            <header className="App-header">
               <Clockimage/>
               <Clocktime/>
               <MyComN num= {100}/>
                
            </header>
        </div>
    );
} //자바스크립트 반드시 리턴이 필요함

export default Clock; //디폴트 -> 컴포넌트명과 동일함, import 랑 export는 set
