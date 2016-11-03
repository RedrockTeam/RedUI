import React, { Component } from 'react'
import css from './index.scss'

class Button extends Component {
    componentDidMount() {
        if (this.props.disabled)
            this.refs.DOMButton.disabled = 'disabled';
    }
    render() {
        const buttonSize = this.props.size || 'small'
        const buttonType = this.props.type || 'main'
        const disabled = this.props.disabled ? `${buttonType}-disabled` : ''
        const className = `${css[buttonType]} ${css[buttonSize]} ${css[disabled]}`

        return (
            <button 
                ref = "DOMButton" 
                style = {this.props.style}
                onClick = {this.props.onClick} 
                className = {className}
            >
                {this.props.val}
            </button>  
        )
    }
}

Button.propTypes = {
    type: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    size: React.PropTypes.string,
    val: React.PropTypes.string.isRequired,
    style: React.PropTypes.object,
    className: React.PropTypes.string,
    onClick: React.PropTypes.func
}

export default Button;