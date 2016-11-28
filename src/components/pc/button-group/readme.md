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
import Button from 'redui-button-group'

ReactDOM.render(
    <Button 
        type: 'main',
        size: 'small'
        group={[
            val: '按钮1',
            disabled: true,
            onClick: function () {// ...domsomething}
        ]}
    />,
    document.getElementById('container')
);
````

# 可选参数
- size {string: small | normal | big}
- type {string: group[1-2]-[main|secondary|waring]}
# 必选参数
- group {array}