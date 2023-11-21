import AbortHome from "./AbortHome/AbortHome"
import AbortProducts from "./AboutProducts/AboutProducts"
import { Route , Routes } from "react-router-dom"

const AbortIndex = () => {
    return(
        <Routes>
            <Route element={<AbortHome />} path="/"/>
            <Route element={<AbortProducts />} path="/products"/>
        </Routes>

    )
}
export default AbortIndex