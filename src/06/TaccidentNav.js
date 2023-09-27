const TaccidentNav = ({ title, c, setSel }) => {

    const handleClick = (k) => {

        setSel(k);
    }
    const liTag = c.map((item, idx) =>
        <li key={`li${idx}`}>
            <button onClick={() => handleClick(item)}>{item}</button></li>
    );
    //동적으로 만들때는 key를 만들어줘야 한다.
    return (
        <nav>
            <ul>
                <li><strong>{title}</strong></li>
            </ul>
            <ul>
                {liTag}
            </ul>
        </nav>
    )
}

//배열의 갯수만큼 li 만들어줌
export default TaccidentNav;
