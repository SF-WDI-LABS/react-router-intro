import React, { Component } from 'react'
import './styles/Search.css'
import axios from 'axios';

class Search extends Component {
    constructor (props) {
        super(props);
        this.state = {
            searchTerm: '',
            searchedStock: {}
        }
    }

    handleChange (e) {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSearch (e) {
        e.preventDefault();
        let url = `https://api.iextrading.com/1.0/stock/${this.state.searchTerm}/batch?types=quote,chart`;

        axios.get(url)
            .then((response) => {
                console.log(response);
                this.setState({ searchedStock: response.data.quote })
            }).catch((err) => { console.log(err) })
    }

    onTrackStock (e) {
        let url = 'https://ga-stocks.herokuapp.com/stocks';
        let data = {
            stock: {
                name: this.state.searchedStock.companyName,
                symbol: this.state.searchedStock.symbol
            }
        };

        axios.post(url, data)
            .then((response) => {
                console.log(response.data);
                this.props.handleTrackStock(response.data);
            }).catch((err) => { console.err(err); })
    }

    render () {
        let searchResult = this.state.searchedStock.companyName
                            ? (<div className='search-results-item'>
                                    {this.state.searchedStock.Name} ({this.state.searchedStock.symbol})
                                    <button onClick={(e) => this.onTrackStock(e)} className='search-btn'>Track Stock</button>
                                </div>)
                            : null;
        return (
            <div className='search'>
                {this.state.searchedStock.name}
                <h2>Search</h2>
                <form onSubmit={(e) => this.handleSearch(e)}>
                    <input onChange={(e) => this.handleChange(e)} type='text' />
                    <input className='search-btn' type='submit' value='Search' />
                </form>

                <div className='search-results'>
                    { searchResult }
                </div>
            </div>
        )
    }
}

export default Search
