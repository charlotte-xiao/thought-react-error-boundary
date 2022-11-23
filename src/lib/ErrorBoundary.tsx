import React from "react";

export interface FallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

export declare function FallbackRender(props: FallbackProps): FallbackElement;

type FallbackElement = React.ReactElement<unknown, string | React.FC | typeof React.Component> | null;

type ErrorBoundaryState = {
  error: Error | null;
}
type ErrorBoundaryProps = {
  // 固定ReactElement
  fallback?: FallbackElement;
  // Fallback 组件
  FallbackComponent?: React.ComponentType<FallbackProps>;
  // Render组件函数
  fallbackRender?: typeof FallbackRender;
  // 错误上报处理(日志，监控埋点)
  onError?: (error: Error, info: string) => void;
  // 自定义重置逻辑
  onReset?: () => void;
}

const initialState: ErrorBoundaryState = {
  error: null,
}

class ErrorBoundary extends React.Component<React.PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  state = initialState;

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {error};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo.componentStack);
    }
  }

  reset = () => {
    this.setState(initialState);
  }

  resetErrorBoundary = () => {
    if (this.props.onReset) {
      this.props.onReset();
    }
    this.reset();
  }

  render() {
    const {fallback, FallbackComponent, fallbackRender} = this.props;
    const {error} = this.state;

    if (error !== null) {
      const fallbackProps: FallbackProps = {error, resetErrorBoundary: this.resetErrorBoundary}

      if (React.isValidElement(fallback)) {
        return fallback;
      }
      if (typeof fallbackRender === 'function') {
        return (fallbackRender as typeof FallbackRender)(fallbackProps);
      }
      if (FallbackComponent) {
        return <FallbackComponent {...fallbackProps} />
      }
      throw new Error('ErrorBoundary 组件需要传入 fallback');
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
