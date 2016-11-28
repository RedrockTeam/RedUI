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
import Layout from 'redui-layout'

ReactDOM.render(
    <Layout
        components={[
            [{
                component: <p></p>
            }],
            [{
                component: <p></p>
            }]
        ]}
    />,
    document.getElementById('container')
);
````
# 必选参数
- components (array: 组件数组(二位数组 - 列 - 行))
# 可选参数
- style (object: 覆写外部container样式)