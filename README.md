# Thought React Error Boundary

> 源码: https://github.com/charlotte-xiao/thought-react-error-boundary

> react error boundary源码：https://github.com/bvaughn/react-error-boundary

## E-1_init_error_boundary

- `getDerivedStateFromError`: 渲染备用UI(通过修改state,并在render中判断渲染备用UI)
- `componentDidCatch`: 打印错误信息,上传错误日志

Tips - do not catch errors for:
- 事件处理
- 异步代码（例如 setTimeout 回调函数）
- 服务端渲染
- 自身抛出来的错误（并非它的子组件）
