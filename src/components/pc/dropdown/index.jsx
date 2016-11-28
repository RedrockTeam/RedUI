import React, { Component } from 'react'
import Button from '../button/index'
import Caret from '../caret/index'
import css from './index.scss'

class Dropdown extends Component {
    render() {
        const focusIndex = this.props.focus
        const down = this.props.down
        const dropIcon = <Caret down = {down}/>
        return <div className = {`${css['dropdown']} ${this.props.className}`}>
            <Button
                style = {Object.assign({
                    clear: 'right',
                    padding: '6px 12px',
                    fontSize: '14px',
                    borderBottomLeftRadius: '0px',
                    background: '#333'
                }, this.props.style)}
                icon = {dropIcon}
                val = {this.props.list[focusIndex].val}
                onClick = {this.props.onClick}
            />
            <ul 
                className = {css['down-container']}
                style = {{
                    opacity: down ? '1' : '0'
                }}
            >
                {
                    this.props.list.map((item, index) => {
                        return <li 
                            key = {index}
                            style = {this.props.listStyle}
                            onClick = {item.onClick}
                        >
                            {item.val}
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

Dropdown.propTypes = {
    className: React.PropTypes.string,
    down: React.PropTypes.bool.isRequired,
    list: React.PropTypes.array,
    focus: React.PropTypes.number.isRequired,
    style: React.PropTypes.object,
    listStyle: React.PropTypes.object
}

export default Dropdown;