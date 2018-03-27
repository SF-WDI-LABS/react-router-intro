import React, { Component } from 'react';
import Stock from './Stock';

const stockData = require('./data/stock-data.json');

class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            stocks: stockData
        }
    }

    render () {
        let stocks = this.state.stocks.map((stock, idx) => {
            return (
                <Stock key={idx} name={ stock.name } symbol={ stock.symbol } lastPrice={ stock.lastPrice } open={ stock.open }
                       change={ stock.change } high={ stock.high } low={ stock.low } />
            )
        });

        return (

            <div className="stocks">
                { stocks }
            </div>
        )
    }
}

export default Dashboard;