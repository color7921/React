import style from './Mycom.Module.css';

const MyComN = (probs) => {

    return (<>
        <div className={style.numDiv}>{probs.n1}</div>
        <div className={style.numDiv}>{probs.n2}</div>
    </>

    );
}
export default MyComN;