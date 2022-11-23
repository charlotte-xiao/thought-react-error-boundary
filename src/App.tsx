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
                     onReset={() => console.log('已经重置')}
                     fallbackRender={({error, resetErrorBoundary}) =>
                       <ErrorFallback error={error}
                                      resetErrorBoundary={resetErrorBoundary}
                       />}>
        <SimpleExample></SimpleExample>
      </ErrorBoundary>
      <ErrorBoundary onError={() => console.error('出错啦')}
                     onReset={() => console.log('已经重置')}
                     FallbackComponent={ErrorFallback}>
        <SimpleExample></SimpleExample>
      </ErrorBoundary>
    </div>
  );
}

export default App;
