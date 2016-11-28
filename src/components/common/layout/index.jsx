import React, { Component } from 'react'
import css from './index.scss'
class Layout extends Component {
    render() {
        return <div
            ref='row' 
            className = {css['row']}
            style = {this.props.style}>
            {
                this.props.components.map((item, index) => {
                    const colClassName = `${css['col-md-' + item.md]} ${css['col-ms-' + item.ms]} ${css['col']}`;
                    return <div className = {colClassName} key = {index} style = {item.style}> 
                        {item.component}
                    </div>
                })
            }
        </div>
    }
}

Layout.propTypes = {
    style: React.PropTypes.object,
    components: React.PropTypes.array.isRequired
}

export default Layout;