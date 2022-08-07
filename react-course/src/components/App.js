import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);

  function onChangeHandler(numb)
  {
    setResult(numb);
  }

  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input label={"Amount"} onChange={onChangeHandler}></Input>

        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label={"From"} items={units} ></Select>
          <Select label={"To"} items={units}></Select>
          <button>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
    </>
  );
}

export default App;
