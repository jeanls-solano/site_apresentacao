import{
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import { Assunto } from "./pages/Assunto";
import { Comentarios } from "./pages/Comentarios";
import { PaginaInicial } from "./pages/PaginaInicial";

export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/PaginaInicial" element={<PaginaInicial />}/>
                <Route path="/Assunto" element={<Assunto />}/>
                <Route path="/Comentarios" element={<Comentarios />}/>
            </Routes>
        </Router>
    )
}