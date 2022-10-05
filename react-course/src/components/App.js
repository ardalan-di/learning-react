import React, { useState } from "react";
import Select from "./Select";
import Input from "./Input";
import { units } from "../units";

function App() {
  const [result, setResult] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [factor, setFactor] = useState(1);
  const [factorCheck, setFactorCheck] = useState(1);
  
  function buttonHandler()
  {
    if(factorCheck !== factor)
    {
      setResult((answer*factor)/(0.1*10));
      setFactorCheck(factor);
    }
  // setFactor(1);
    // console.log(trufi);
  }

  return (
    <>
      <div className="converter-form">
        {/* Input with label "Amount" here */}
        <Input label={"Amount"} onChange={e => {setAnswer(e.target.value)}}></Input>

        <div className="row">
          {/* Selects with labels "From" and "To" here */}
          <Select label={"From"} items={units} onChange={e=>{setFactor(e.target.value*factor)}}></Select>
          {console.log(factor)}
          <Select label={"To"} items={units} onChange={e=>{setFactor(factor/e.target.value)}}></Select>
          {console.log(factor)}
          <button onClick={buttonHandler}>Convert</button>
        </div>
      </div>

      <div id="result">
        Result is: <span data-testid="result">{result}</span>
      </div>
      
    </>
  );
}

export default App;
