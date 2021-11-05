import Dashboard from "pages/Dashboard";
import Home from "pages/Home";
import { Routes as Rotas} from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";

function Routes() {
    return (
        <BrowserRouter>
            <Rotas>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard"  element={<Dashboard />} />
            </Rotas>


        </BrowserRouter>
    );
}

export default Routes;