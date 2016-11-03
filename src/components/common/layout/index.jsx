import React, { Component } from 'react'
import css from './index.scss'
class Layout extends Component {
    render() {
        return <div 
            className = {css['grid-container']}
            style = {this.props.style}>
            {
                this.props.components.map((item) => {
                    return <div className = {css['row']}>
                        {
                            item.map((item) => {
                                const colClassName = `${css['col-md-' + item.md]} ${css['col-ms-' + item.ms]}`;
                                return <div className = {colClassName}>
                                    {item.component}
                                </div>
                            })
                        }
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