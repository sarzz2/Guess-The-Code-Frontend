import "./GuessTheLanguageClock.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import GuessTheLanguage from "../GuessTheLanguage/GuessTheLanguage";
import { TryAgainTrue } from "../../reducers/TryAgain";
import { Timer, selectTimer } from "../../reducers/TimerSocket";
import { selectClickedState } from "../../reducers/OptionsClick";
import { selectNextClickState } from "../../reducers/NextClick";

function GuessTheLanguageClock() {
    const [socket, setSocket] = useState(null);
    const messages = useSelector(selectTimer);
    const ss = useSelector(selectClickedState);
    const NextClick = useSelector(selectNextClickState);
    const setTryAgain = useDispatch();
    const setMessages = useDispatch();
    const ws = new WebSocket("ws://127.0.0.1:8001/api/ws");

    useEffect(() => {
        // Set the socket to the state so it can be closed later
        setSocket(ws);

        ws.addEventListener("message", (event) => {
            setMessages(Timer(event.data));
        });

        return () => {
            ws.close();
        };
    }, [NextClick]);

    const reset = () => {
        if (messages === "0") {
            setTryAgain(TryAgainTrue());
            socket.close();
        }
        if (Number.isInteger(ss)) {
            socket.close();
        }
        return messages;
    };

    return (
        <div>
            <div className="timer-container">
                <div className="timer">{reset()}</div>
            </div>
            <GuessTheLanguage />
        </div>
    );
}

export default GuessTheLanguageClock;
