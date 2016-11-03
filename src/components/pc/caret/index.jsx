import React, { Component } from 'react'
import css from './index.scss'

class Caret extends Component {
    render() {
        const className = `${css['caret']} ${css[this.props.down ? 'up' : 'down']}`
        return <div className = {className}></div>
    }
}

Caret.propTypes = {
    style: React.PropTypes.object,
    down: React.PropTypes.bool
}

export default Caret;