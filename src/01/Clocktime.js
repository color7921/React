import { useState, useEffect } from "react";
const Clocktime = () => {
    
    //일반 변수로 처리 => 재랜더링이 되지 않음

    // let dt = new Date().toLocaleTimeString();
    // setInterval(() => { 
    //     dt = new Date().toLocaleTimeString();


    // }, 1000);
    
    //useState 변수
    const [dt, setDt] = useState(new Date().toLocaleTimeString());
   
    //useEffect : 맨처음 한번만 실행
    useEffect(() => {
        const t = setInterval(() => { 
            setDt(new Date().toLocaleTimeString());
        }, 1000);

        //콜백함수로 써야 시계가 돌아감
        return () =>{clearInterval(t)} ;
    }, []) ;

    //useEffect : 특정변수가 바뀔때 실행
    useEffect(() => {}, [dt]);


    return (
        <>
        <div>현재시간 : {dt}</div>
        </>
    );
}
export default Clocktime;