# 组件

- 按钮组件

# 安装

````bash
$ npm install redui-button
````

# 用例

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Button from 'redui-button'

ReactDOM.render(
    <Button />,
    document.getElementById('container')
);
````

# 可选参数
- val (string: 按钮value值)
- icon (ReactComponent: value右方图标)
- disabled {bool: 是否禁用按钮}
- size {string: small | normal | big}
- type {string: group[1-2]-[main|secondary|waring]}
- style {object: 覆盖样式}
- className {string: 新增类名}
- onClick {functon: 点击事件}
