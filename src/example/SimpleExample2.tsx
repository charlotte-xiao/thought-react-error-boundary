import React, {useState} from "react";
import {withErrorBoundary} from "../lib/ErrorBoundary";
import {ErrorFallback} from "../utils";

function SimpleExample2() {

  let [number, setNumber] = useState(0);

  const onAddNumber = () => {
    setNumber(number + 1);
  }

  // Warning: Can not catch this error with Error Boundary!!!
  // This is Event handlers, we should use try catch!!!
  const onThrowError = () => {
    throw new Error(`when number is ${number}, throw an error`);
  }

  if (number > 5) {
    throw new Error(`when number is ${number}, throw an error`);
  }
  return (
    <>
      <div>Number: {number}
      </div>
      <input type="button" value="click" onClick={onAddNumber}/>
      <input type="button" value="throw error" onClick={onThrowError}/>
    </>
  )
}

const WithErrorBoundarySimpleExample2 = withErrorBoundary(SimpleExample2, {
  onError: () => console.error('出错啦'),
  onReset: () => console.log('已经重置'),
  FallbackComponent: ErrorFallback,
});

export default WithErrorBoundarySimpleExample2;
