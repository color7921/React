import MyDiv1 from "./MyDiv1";
import { useState } from "react";


const MyDiv = () => {
    // let n = 0;
    const [n, setN] = useState(0);//n은 배열값, setN은 함수명
    
    const handleClick = (check) => {
        if(check) setN(n+1);
        else if(n>0) setN(n-1);
        //n += 1;
       
        }
        return (
            <main className="container">
                <article>
                    <header><h1>probs div</h1></header>
    
                    <MyDiv1 n={n} />
    
                    <footer>
                        <span onClick={() => handleClick(true)}>🧡</span>
                        <span>{n}</span>
                        <span onClick={() => handleClick(false)}>💔</span>
                    </footer>
                    
                </article>
            </main>
        );
    }
    
  
    
export default MyDiv;