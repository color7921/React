import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom"
const FcstNav = () => {
    return (
        <nav className="flex justify-between shadow-xl px-4 py-2 text-slate-950 ">
            
            <ul>
                <li className="text-xl font-bold">기상청 예보</li>
            </ul>
            <ul>
                <Link to='/'>
                    <li>
                        <button className="text-4xl"><AiFillHome /></button>
                    </li>
                </Link>
            </ul>
        </nav>
    )
}

export default FcstNav
