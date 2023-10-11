import { useState } from "react";
import "./App.css";
const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };
  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };
  return (
    <div className="App">
      {isOpen ? (
        <>
          <Numbers step={step} />
          <Main step={step} />
          <Control step={step} nex={handleNext} prev={handlePrevious} />
          <button onClick={() => setIsOpen(!isOpen)}>Close</button>
        </>
      ) : (
        <>
          <button onClick={() => setIsOpen(!isOpen)}>Open</button>
        </>
      )}
    </div>
  );
};
export default App;

const Numbers = ({ step }) => {
  return (
    <div className="numbers">
      <li className={step >= 1 ? "num" : ""}>1</li>
      <li className={step >= 2 ? "num" : ""}>2</li>
      <li className={step >= 3 ? "num" : ""}>3</li>
    </div>
  );
};
const Main = ({ step }) => {
  const message = ["learn react", "then practice", "finally earn"];
  return (
    <div className="main">
      <h1 className="main">{message[step - 1]}</h1>
    </div>
  );
};
const Control = ({ prev, nex }) => {
  return (
    <div className="control">
      <button className="button" onClick={() => prev()}>
        Previous
      </button>
      <button className="button" onClick={() => nex()}>
        Next
      </button>
    </div>
  );
};
