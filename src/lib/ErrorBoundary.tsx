import React from "react";

type FallbackElement = React.ReactElement<unknown, string | React.FC | typeof React.Component> | null;

type ErrorBoundaryState = {
  error: Error | null;
}
type ErrorBoundaryProps = {
  fallback?: FallbackElement;
  onError?: (error: Error, info: string) => void;
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

  render() {
    const {fallback} = this.props;
    const {error} = this.state;

    if (error !== null) {
      if (React.isValidElement(fallback)) {
        return fallback;
      }
      throw new Error('ErrorBoundary 组件需要传入 fallback');
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
