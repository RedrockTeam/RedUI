import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/pc/button/index'
import ButtonGroup from './components/pc/button-group/index'
import Dropdown from './components/pc/dropdown/index'
import Layout from './components/common/layout/index'
import Caret from './components/pc/caret/index'

ReactDOM.render(
    <div>
        <Dropdown
            down={false}
        />
    </div>,
    document.body
);