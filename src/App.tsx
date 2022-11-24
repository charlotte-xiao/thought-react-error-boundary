import React, {useState} from 'react';
import ErrorBoundary from "./lib/ErrorBoundary";
import SimpleExample from "./example/SimpleExample";
import {ErrorFallback} from "./utils";
import WithErrorBoundarySimpleExample2 from "./example/SimpleExample2";

function App() {
  const [retry, setRetry] = useState<number>(0);

  return (
    <div className="App">
      <div>外部重置按钮：</div>
      <button onClick={() => {
        if(retry > 5) {
          throw new Error("123");
        }
        setRetry(retry + 1)}
      }>retry</button>

      <div>固定的出错组件：</div>
      <ErrorBoundary onError={() => console.error('出错啦')}
                     fallback={<div>出错啦</div>}>
        <SimpleExample></SimpleExample>
      </ErrorBoundary>

      <div>渲染的出错组件：</div>
      <ErrorBoundary onError={() => console.error('出错啦')}
                     onReset={() => console.log('已经重置')}
                     resetKeys={[retry]}
                     fallbackRender={({error, resetErrorBoundary}) =>
                       <ErrorFallback error={error}
                                      resetErrorBoundary={resetErrorBoundary}
                       />}>
        <SimpleExample></SimpleExample>
      </ErrorBoundary>

      <div>传递的出错组件：</div>
      <ErrorBoundary onError={() => console.error('出错啦')}
                     onReset={() => console.log('已经重置')}
                     resetKeys={[retry]}
                     FallbackComponent={ErrorFallback}>
        <SimpleExample></SimpleExample>
      </ErrorBoundary>

      <div>通过封装后的组件：</div>
      <WithErrorBoundarySimpleExample2/>

    </div>
  );
}

export default App;
