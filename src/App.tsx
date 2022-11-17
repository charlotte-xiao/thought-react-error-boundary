import React from 'react';
import ErrorBoundary from "./lib/ErrorBoundary";
import SimpleExample from "./example/SimpleExample";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <SimpleExample></SimpleExample>
      </ErrorBoundary>
    </div>
  );
}

export default App;
