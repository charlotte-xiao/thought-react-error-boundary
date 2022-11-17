import React from "react";


type SimpleExampleProps = {}
type SimpleExampleState = {
  number: number
}

class SimpleExample extends React.Component<SimpleExampleProps, SimpleExampleState> {

  constructor(props: SimpleExampleProps) {
    super(props);
    this.state = {number: 0}
  }


  onAddNumber = () => {
    this.setState({number: this.state.number + 1});
  }

  // Warning: Can not catch this error with Error Boundary!!!
  // This is Event handlers, we should use try catch!!!
  onThrowError = () => {
    throw new Error(`when number is ${this.state.number}, throw an error`);
  }

  render() {
    if (this.state.number > 5) {
      throw new Error(`when number is ${this.state.number}, throw an error`);
    }
    return (
      <>
        <div>Number: {this.state.number}
        </div>
        <input type="button" value="click" onClick={this.onAddNumber}/>
        <input type="button" value="throw error" onClick={this.onThrowError}/>
      </>
    )
  }
}

export default SimpleExample;
