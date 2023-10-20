import { useLocation } from "react-router-dom"

const RoutePage2 = () => {
 
    const item = useLocation().search;
    return (
        <article>
            Page2 : {item.replace('?', '').split('&')}
        </article>
    )
}

export default RoutePage2
