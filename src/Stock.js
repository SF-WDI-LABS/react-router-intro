import React, { Component } from 'react'
import axios from 'axios';

class Stock extends Component {
    constructor (props) {
        super(props);
        // Access url params using this.props.match.params
        this.state = {
            selectedStock: this.props.match.params.symbol,
            apiStock: {}
        }
    }

    componentDidMount () {
        let url = `https://api.iextrading.com/1.0/stock/${this.state.selectedStock}/batch?types=quote`;
        axios.get(url)
            .then((response) => {
                console.log(response);
                this.setState({ apiStock: response.data.quote })
            })
    }

    render () {
        return (
            <div>
                <h2>{this.state.apiStock.companyName} ({this.state.apiStock.symbol})</h2>
                <ul>
                    <li>Current Price: {this.state.apiStock.latestPrice}</li>
                    <li>Change: {this.state.apiStock.change}</li>
                    <li>High: {this.state.apiStock.high}</li>
                    <li>Low: {this.state.apiStock.low}</li>
                </ul>
            </div>
        )
    }
}

export default Stock
