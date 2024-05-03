import { Route, Routes } from "react-router-dom"
import App from "../App/App"
import Error404 from "../Error404"



const Rotas = () => {
    return(
        <Routes>
            <Route  path="/zombies" element={<App/>} />
            <Route path='*' element={<Error404/>} />


        </Routes>
    )
}

export default Rotas