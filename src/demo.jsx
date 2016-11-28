import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/pc/button/index'
import ButtonGroup from './components/pc/button-group/index'
import Dropdown from './components/pc/dropdown/index'
import Layout from './components/common/layout/index'
import Caret from './components/pc/caret/index'

var Hehe = React.createClass({
    getInitialState() {
        return {
            down: false,
            focus: 0
        }
    },
    handleButtonClick() {
        this.setState({
            down: !this.state.down
        })
    },
    render() {
        return <div style={{
            margin: '10px 10px'
        }}>
            <Dropdown
                list={[
                    {
                        val: '默认菜单'
                    }, {
                        val: '嘿嘿菜单'
                    }
                ]}
                onClick={this.handleButtonClick}
                down={this.state.down}
                focus={this.state.focus}
            />
        </div>
    }
})

ReactDOM.render(
    <Hehe />,
    document.getElementById('app')
);