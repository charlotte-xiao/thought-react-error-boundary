import React from "react";

type ErrorState = {
  hasError: boolean;
  message: string;
}
type ErrorProps = {}

class ErrorBoundary extends React.Component<React.PropsWithChildren<ErrorProps>, ErrorState> {

  constructor(props: React.PropsWithChildren<ErrorProps>) {
    super(props);
    this.state = {hasError: false, message: ''};
  }

  static getDerivedStateFromError(error: Error): ErrorState {
    return {hasError: true, message: error.message};
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.log(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.Error message:{this.state.message}</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
