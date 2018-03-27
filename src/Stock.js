import React, { Component } from 'react';

class Stock extends Component {
    render () {
        return (
            <div>
                <h2>{ this.props.name }</h2>
                <p>{ this.props.symbol } | { this.props.open } | { this.props.lastPrice } | { this.props.high } |
                    { this.props.low } | { this.props.change }</p>
            </div>
        )
    }
}

export default Stock;