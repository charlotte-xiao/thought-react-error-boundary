import React, {useState} from "react";

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

export default SimpleExample2;
