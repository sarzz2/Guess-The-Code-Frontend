import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const navigateToGuessTheCode = () => {
        navigate("/guess-the-language");
    };

    const navigateToGuessTheCodeClock = () => {
        navigate("/guess-the-language-clock");
    };

    return (
        <div className="home-container">
            <div className="home-text-container">
                <h1>Guess The Code</h1>
                <p className="home-text-child">
                    An addictive game where you showcase your language knowledge!!
                </p>
            </div>
            <div className="ptg-container">
                <button type="button" onClick={navigateToGuessTheCode} className="ptg-button">
                    Guess the Language
                </button>
                <button type="button" onClick={navigateToGuessTheCodeClock} className="ptg-button">
                    Beat The Clock
                </button>
            </div>
        </div>
    );
}

export default Home;
