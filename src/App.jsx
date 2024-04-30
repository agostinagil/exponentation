import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showBtn, setShowBtn] = useState(true);
  const [exponent, setExponent] = useState(null);
  const [base, setBase] = useState(null);
  const [result, setResult] = useState(null);

  const handleClick = () => {
    setShowForm(true);
    setShowBtn(false);
  };

  const generateRandomNumber = () => {
    let exp = Math.round(Math.random() * (3 - 2) + 2);

    if (exp === 3) {
      let b = Math.round(Math.random() * (10 - 1) + 1);
      let exponentation = Math.pow(b, exp);
      setBase(b);
      setExponent(exp);
      setResult(exponentation);
    } else {
      let b = Math.round(Math.random() * (30 - 1) + 1);
      let exponentation = Math.pow(b, exp);
      setBase(b);
      setExponent(exp);
      setResult(exponentation);
    }
  };

  useEffect(() => {
    generateRandomNumber();
  }, []);

  return (
    <>
      <h1>Calculate the exponentation of a number</h1>
      {showBtn && <button onClick={handleClick}>Start</button>}
      {showForm && (
        <Form
          base={base}
          exponent={exponent}
          result={result}
          onRestart={generateRandomNumber}
        />
      )}
    </>
  );
}

export default App;
