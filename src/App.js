import { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState(0);
  const [count, setCount] = useState(1);
  const [tips, setTips] = useState(0);
  let [perPersonTotal, setPerPersonTotal] = useState(0);

  const billCalculation = () => {
    const tipPercent = tips / 100;

    const tipAmount = bill * tipPercent;

    const totalAmount = bill + tipAmount;

    const totalPerPerson = totalAmount / perPersonTotal;

    setPerPersonTotal(totalPerPerson);
  };

  const plusCount = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });

    perPersonTotal = count + 1;

    billCalculation();
  };

  const minusCount = () => {
    if (count <= 1) {
      return;
    } else {
      setCount(count - 1);
    }

    perPersonTotal = count - 1;

    billCalculation();
  };

  return (
    <div className="App">
      <h1>TIP CALCULATOR WITH REACTJS</h1>
      <div className="input-form-field">
        <form className="input-field">
          <label>
            <span>BILL:</span>
            <input
              type="text"
              placeholder="$0.00"
              onChange={(e) => setBill(Number(e.target.value))}
            />
          </label>

          <label>
            <span>TIP PERCENT:</span>
            <input
              type="text"
              placeholder="%0.00"
              onChange={(e) => setTips(Number(e.target.value))}
            />
          </label>
        </form>

        <div className="calu-field">
          <div className="number-of-people">
            <h3>Number of people</h3>
            <button className="btn-left" onClick={plusCount}>
              +
            </button>
            <span>{count}</span>

            <button className="btn-right" onClick={minusCount}>
              -
            </button>
          </div>

          <div className="per-person">
            <h3>Amount per person</h3>
            <p>{`$${Number(Math.round(perPersonTotal))}.00`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
