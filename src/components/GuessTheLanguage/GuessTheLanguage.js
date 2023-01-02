import "./GuessTheLanguage.css";
import axios from "axios";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { useDispatch, useSelector } from "react-redux";
import { TryAgainFalse, selectTryAgainState } from "../../reducers/TryAgain";
import { ResetScore, selectSetScoreState } from "../../reducers/SetScore";
import { DisableFalse, selectDisableButtonState } from "../../reducers/DisableButton";
import { result, selectData } from "../../reducers/ApiData";
import configureStore from "../../Store";
import { NextButtonState, selectNextClickState } from "../../reducers/NextClick";
import { changeClickFalse } from "../../reducers/OptionsClick";
import ButtonGroup from "./ButtonGroup";

// Base URL for fetching code block
const client = axios.create({
    baseURL: "http://3.6.39.26/api/code-block"
});

function GuessTheLanguage() {
    const data = useSelector(selectData);
    const tryAgain = useSelector(selectTryAgainState);
    const score = useSelector(selectSetScoreState);
    const disable = useSelector(selectDisableButtonState);
    const nextClick = useSelector(selectNextClickState);
    const setTryAgain = useDispatch();
    const setScore = useDispatch();
    const setDisable = useDispatch();
    const setData = useDispatch();
    const setNextClick = useDispatch();
    const setClicked = useDispatch();

    // Fetching the data from the API
    React.useEffect(() => {
        async function getCode() {
            if (!tryAgain) {
                try {
                    const response = await client.get();
                    configureStore.dispatch(setData(result(response.data)));
                } catch (error) {
                    console.log(error);
                }
            }
        }
        getCode();
    }, [nextClick, tryAgain]);

    // Enabling the buttons on clicking next when answer is correct
    const Next = () => {
        setDisable(DisableFalse());
        setClicked(changeClickFalse());
        setNextClick(NextButtonState());
        setData(result(null));
    };

    const OptionButtons = () => {
        const choices = data?.language || [];

        if (disable && tryAgain) {
            return;
        }
        if (disable) {
            return (
                <div>
                    <ButtonGroup buttons={choices} />
                    <button
                        type="button"
                        className="language-button next"
                        onClick={(event) => Next(event)}
                    >
                        Next &nbsp;
                        <i className="arrow right" />
                    </button>
                </div>
            );
        }
        return <ButtonGroup buttons={choices} />;
    };

    // Try Again screen when answer is incorrect
    const TryAgainScreen = () => {
        if (tryAgain) {
            return (
                <div className="try-again">
                    <div className="try-again-container">
                        <h1 className="try-again-score">Your score: {score}</h1>
                        <button
                            type="button"
                            className="try-again-btn"
                            onClick={() => {
                                setTryAgain(TryAgainFalse());
                                setDisable(DisableFalse());
                                setScore(ResetScore());
                            }}
                        >
                            Try Again
                        </button>
                    </div>
                </div>
            );
        }
    };

    return (
        <div>
            <h1 className="score">Score: {score}</h1>
            <div className="code-block">
                <SyntaxHighlighter style={dark} showLineNumbers>
                    {data?.block || "Loading..."}
                </SyntaxHighlighter>
            </div>
            <div className={`${disable ? "option-disable" : "option"}`}>{OptionButtons()}</div>
            {TryAgainScreen()}
        </div>
    );
}

export default GuessTheLanguage;
