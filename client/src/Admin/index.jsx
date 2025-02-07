import { BrowserRouter as Router } from "react-router-dom";
import routes from "./Router";

function Index() {
    return (
        <Router>
            {routes}
        </Router>
    );
}

export default Index;
