import React from 'react';
import ErrorBoundary from "./lib/ErrorBoundary";
import SimpleExample from "./example/SimpleExample";
import {ErrorFallback} from "./utils";

function App() {
  return (
    <div className="App">
      <ErrorBoundary onError={() => console.error('出错啦')}
                     fallback={<div>出错啦</div>}>
        <SimpleExample></SimpleExample>
      </ErrorBoundary>
      <ErrorBoundary onError={() => console.error('出错啦')}
                     fallbackRender={({error}) => <ErrorFallback error={error}/>}>
        <SimpleExample></SimpleExample>
      </ErrorBoundary>
      <ErrorBoundary onError={() => console.error('出错啦')}
                     FallbackComponent={ErrorFallback}>
        <SimpleExample></SimpleExample>
      </ErrorBoundary>
    </div>
  );
}

export default App;
