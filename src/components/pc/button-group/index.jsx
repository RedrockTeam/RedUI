import React, { Component } from 'react'
import Button from '../button/index'

class ButtonGroup extends Component {
    render() {
        return <div>
            {
                this.props.group.map((item, index) => {
                    return <Button
                        key = {index} 
                        val = {item.val}
                        type = {this.props.type}
                        size = {this.props.size}
                        disabled={item.disabled}
                        onClick={item.onClick} 
                    />
                })
            }
        </div>
    }
}

ButtonGroup.propTypes = {
    group: React.PropTypes.array.isRequired,
    type: React.PropTypes.string,
    size: React.PropTypes.string,
}

export default ButtonGroup;