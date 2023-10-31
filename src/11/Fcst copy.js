import { BrowserRouter, Routes, Route } from "react-router-dom" ;
import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";
import UltraFcst from "./UltraFcst";
import VillageFcst from "./VillageFcst";
const Fcst = () => {
  return (
    <div>
        <BrowserRouter>
        <FcstNav />
        <Routes>
            <Route path="/" element={<FcstMain />}/>
            <Route path="/ultra" element={<UltraFcst />}/>
            <Route path="/village" element={<VillageFcst />}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Fcst
