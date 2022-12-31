import { useDispatch, useSelector } from "react-redux";
import { TryAgainTrue } from "../../reducers/TryAgain";
import { IncrementScore } from "../../reducers/SetScore";
import { DisableTrue, selectDisableButtonState } from "../../reducers/DisableButton";
import { selectData } from "../../reducers/ApiData";
import { changeButtonValue, selectClickedState } from "../../reducers/OptionsClick";

function ButtonGroup({ buttons }) {
    const data = useSelector(selectData);
    const disable = useSelector(selectDisableButtonState);
    const clicked = useSelector(selectClickedState);
    const setTryAgain = useDispatch();
    const setScore = useDispatch();
    const setDisable = useDispatch();
    const setClicked = useDispatch();

    // Checking answer and setting score
    const checkAnswer = (event, buttonLabel, i) => {
        if (buttonLabel === data?.answer || "") {
            setScore(IncrementScore());
            setClicked(changeButtonValue(i));
        } else {
            setTryAgain(TryAgainTrue());
        }
        setDisable(DisableTrue());
    };

    return (
        <>
            {buttons.map((buttonLabel, i) => (
                <button
                    type="button"
                    value={buttonLabel}
                    disabled={disable}
                    className="language-button"
                    onClick={(event) => checkAnswer(event, buttonLabel, i)}
                    style={{
                        backgroundColor: i === clicked ? "#4cbb17" : "5E5DF0"
                    }}
                >
                    {buttonLabel}
                </button>
            ))}
        </>
    );
}

export default ButtonGroup;
