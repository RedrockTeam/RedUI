import React, { Component } from 'react'
import Button from '../button/index'
import Caret from '../caret/index'
import css from './index.scss'

class Dropdown extends Component {
    componentDidMount() {
        
    }
    render() {
        const dropIcon = <Caret down = {this.props.down}/>
        return <div>
            <Button
                style = {{
                    padding: '4px 22px'
                }}
                icon = {dropIcon}
                val = "下拉"
            />
        </div>
    }
}

Dropdown.propTypes = {
    down: React.PropTypes.bool
}

export default Dropdown;