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

## E-2_add_fallback_props

- 自定义fallback属性
- 自定义显示报错内容

## E-3_multiple_ways_fallback

- fallback 固定的错误展示组件
- FallbackComponent 传入错误展示组件
- fallbackRender 传入渲染错误展示组件函数

## E-4_add_reset_function

- 可以自定义增加Reset按钮
- 重置状态功能
- 执行自定义操作功能

## E-5_monitor_render

- 外部监听以重置
- 提供resetKeys 数组：若数组里的东西改变，ErrorBoundary就重置

## E-6_wrap_component

- withErrorBoundary：装饰器包裹组件

```javascript
export default withXXX(xxx, xxx);
export default XXX(xxx, xxx);
```

## E-7_add_error_handler

- 通过修改state触发render
- 抛出异常交给Error Boundary处理

## 总结

- 捕获页面报错并处理 (getDerivedStateFromError,componentDidCatch)
- 提供多种展示错误内容入口：fallback, FallbackComponent, fallbackRender
- 内部重置函数：提供 onReset, resetErrorBoundary 的传值和调用，以实现重置
- 外部重置监听数组：监听 resetKeys 的变化来重置 
- 嵌套业务组件，将业务组件传入withErrorBoundary 高阶函数
- 提供 useErrorBoundary 钩子给开发者自己抛出 ErrorBoundary 不能自动捕获的错误
