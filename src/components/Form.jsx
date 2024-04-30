/* eslint-disable react/prop-types */
import { useEffect, useReducer, useRef, useState } from "react";
import { formReducer, initialState } from "../reducers/form";
import { FAILED, RESET, WON } from "../actions/form";

const Form = ({ base, exponent, result, onRestart }) => {
  //   const { won, failed, showForm, showMessage, showNext } = initialState;

  const [value, setValue] = useState(null);
  const btnRef = useRef(null);
  const inputRef = useRef(null);

  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    if (state.showNext) {
      btnRef.current.focus();
    }
  }, [state.showNext]);

  useEffect(() => {
    if (state.showForm) {
      inputRef.current.focus();
    }
  }, [state.showForm]);

  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    let valueInput = parseInt(e.target[0].value, 10);
    setValue(valueInput);

    if (valueInput === result) {
      dispatch({ type: WON });
    } else {
      dispatch({ type: FAILED });
    }
    e.target.reset();
  };

  const handleNext = () => {
    dispatch({ type: RESET });
    onRestart();
  };

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleNext();
    }
  };

  return (
    <>
      <div>
        <h3>
          {base} <sup>{exponent}</sup> = {state.showMessage && <b>{result}</b>}
        </h3>

        {state.won && state.showMessage && <p>Correct!</p>}
        {state.failed && state.showMessage && (
          <p>Your result: {value}. You failed!</p>
        )}
      </div>
      {state.showForm && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="result..."
            pattern="[0-9]*"
            required
            ref={inputRef}
          />
          <button type="submit">Send</button>
        </form>
      )}

      {state.showNext && (
        <button onClick={handleNext} ref={btnRef} onKeyDown={handleKey}>
          Next
        </button>
      )}
    </>
  );
};

export default Form;
