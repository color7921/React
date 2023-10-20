import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome"
//import Clock from "../01/Clock"
import RoutePage1 from "./RoutePage1"
import RoutePage2 from "./RoutePage2"
import RouteNav from "./RouteNav"



const RoutMain = () => {
    return (
        <BrowserRouter>
            <main className="container">
                <section className="flex justify-center align-middle">
                    <h1 className="text-2xl font-bold text-center m-5">react-router-dom으로 라우팅</h1>
                </section>
                    <RouteNav/>
                <Routes>
                    <Route path="/" element={<RouteHome />} />
                    <Route path="/page1/:item" element={<RoutePage1 />} />
                    <Route path="/page2/" element={<RoutePage2 />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default RoutMain
