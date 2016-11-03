

# RedUI 红岩网校React组件库

[redui.redrock.team](http://redui.redrock.team) 

# 特性

- react + webpack

# 安装

````bash
$ npm install redui-[components]
````

# 用例

````jsx
import React from 'react'
import ReactDOM from 'react-dom'
import Layout from './components/common/layout/index'

ReactDOM.render(
    <Layout 
        style={{
            margin: '0 auto'
        }}
        components = {[
            [{md: 6, ms: 6, component: <div></div>}]
        ]}
    />,
    document.body
);
````
