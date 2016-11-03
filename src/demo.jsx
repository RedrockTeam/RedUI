import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/pc/button/index'
import ButtonGroup from './components/pc/button-group/index'
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