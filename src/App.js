import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import GuessTheLanguage from "./components/GuessTheLanguage/GuessTheLanguage";
import GuessTheLanguageClock from "./components/GuessTheLanguageClock/GuessTheLanguageClock";
import Home from "./components/Home/Home";
import store from "./Store";

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/guess-the-language" element={<GuessTheLanguage />} />
                    <Route path="guess-the-language-clock" element={<GuessTheLanguageClock />} />
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
