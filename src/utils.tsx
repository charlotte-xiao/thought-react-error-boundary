import React from 'react';
import {FallbackProps} from './lib/ErrorBoundary';

export const ErrorFallback = ({error, resetErrorBoundary}: FallbackProps) => {
  return (
    <div role="alert">
      <p>自定义出错组件提醒您:出错啦</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>重置</button>
    </div>
  )
}
