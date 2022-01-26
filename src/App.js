import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        // BEM
        <div className="container">
            <Router>
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>

                    <Route exact path='/search'>
                        <SearchPage />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
