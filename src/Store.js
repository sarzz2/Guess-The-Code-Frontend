import { configureStore } from "@reduxjs/toolkit";
import TryAgainReducer from "./reducers/TryAgain";
import SetScoreReducer from "./reducers/SetScore";
import DisableButtonReducer from "./reducers/DisableButton";
import ApiDataReducer from "./reducers/ApiData";
import NextClickReducer from "./reducers/NextClick";
import ClickReducer from "./reducers/OptionsClick";
import SetTimerSocketReducer from "./reducers/TimerSocket";
import TimerWebSocketReducer from "./reducers/TimerWebSocket";

export default configureStore({
    reducer: {
        tryAgain: TryAgainReducer,
        setScore: SetScoreReducer,
        setButtonState: DisableButtonReducer,
        Data: ApiDataReducer,
        nextClick: NextClickReducer,
        Click: ClickReducer,
        timer: SetTimerSocketReducer,
        timerWebSocket: TimerWebSocketReducer
    }
});
