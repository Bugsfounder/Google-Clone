import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchPage from "./pages/SearchPage";

function App() {
    return (
        // BEM
        <div className="container">
            <Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/search' element={<SearchPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
