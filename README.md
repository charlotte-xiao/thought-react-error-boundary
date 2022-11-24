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

# E-4_add_reset_function

- 可以自定义增加Reset按钮
- 重置状态功能
- 执行自定义操作功能

# E-5_monitor_render

- 外部监听以重置
- 提供resetKeys 数组：若数组里的东西改变，ErrorBoundary就重置
