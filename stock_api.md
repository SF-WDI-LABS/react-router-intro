# Stock Trader Live

In this portion of the lab, your stock tracking app will be communicating with two APIs...
  1. [GA Stocks API](https://ga-stocks.herokuapp.com/stocks). This will be used store stocks the user wants to track.
  2. [iExtrading](https://iextrading.com/developer/docs/#getting-started) which is free and requires no api keys to use.
  3. API supports [JSONP](https://en.wikipedia.org/wiki/JSONP)

### iExtrading Info
*no api key required*

- Base URL: https://api.iextrading.com/1.0
- Docs: https://iextrading.com/developer/docs/#stocks
- <a href="#iextrading">Response Examples for iExtrading</a>


### Useful Resources

You may find the following packages and tools useful:
- Axios for HTTP requests
- [Axios Cookbook](https://github.com/axios/axios/blob/master/COOKBOOK.md)
- Alternative to axios - [jsonp](https://github.com/axios/axios/blob/master/COOKBOOK.md#jsonp) (for jsonp requests)


## Instructions

Your finished app should be reasonably styled. A bootstrap theme has already been provided so use it to make your site neat and organized. You should also add the following features:


### Dashboard (`/stocks`)

Instead of listing the hard-coded stocks or JSON, this page should retrieve all stocks from the [GA Stocks API](https://ga-stocks.herokuapp.com/stocks) and display them on the page.


### Stock (`/stocks/:symbol`)

The stock information beyond name and symbol (e.g., `Current Price`, `Change`) should be pulled from iExtrading.

When this view loads, a call will be made to the that returns a JSON representation of the stock in question. If the API call is successful, that stock's information should be displayed on the page.

> Remember that you have the option to use `jsonp` to allow cross origin requests!


### Bonus: Search (`/search`)

#### Update Navigation

Add a "Search" link to the navigation bar.

#### Search for a Stock

If a user visits `/search` or clicks on "Search" in the navigation bar, they should be directed to a search page with a single-input form. If a user submits a stock symbol (e.g., `AAPL`) through the form, a call will be made to the external API you've chosen, Markit On Demand or Alpha Vantage.

If the API call is successful, the app should display the name and symbol of that stock below the search form. To the right of this information, there should be a "Track Stock" button.

#### Track a Stock

When the user clicks on a stock's "Track Stock" button, the following should happen...
- A `POST` request is made to the GA API. If successful, it will add the newly-tracked stock to the database.
- The user is redirected to the dashboard view. The tracked stock should now be visible


##### API Response Examples

<a name="iextrading"></a>
__iExtrading__
<details>
<summary>`GET /stock/AAPL/batch?types=quote`</summary>

```
{
    "quote": {
        "symbol": "AAPL",
        "companyName": "Apple Inc.",
        "primaryExchange": "Nasdaq Global Select",
        "sector": "Technology",
        "calculationPrice": "tops",
        "open": 173.78,
        "openTime": 1522157400616,
        "close": 172.77,
        "closeTime": 1522094400439,
        "high": 175.15,
        "low": 173.16,
        "latestPrice": 173.96,
        "latestSource": "IEX real time price",
        "latestTime": "10:49:34 AM",
        "latestUpdate": 1522162174608,
        "latestVolume": 9813729,
        "iexRealtimePrice": 173.96,
        "iexRealtimeSize": 100,
        "iexLastUpdated": 1522162174608,
        "delayedPrice": 173.27,
        "delayedPriceTime": 1522161279100,
        "previousClose": 172.77,
        "change": 1.19,
        "changePercent": 0.00689,
        "iexMarketPercent": 0.03795,
        "iexVolume": 372431,
        "avgTotalVolume": 35600392,
        "iexBidPrice": 173.93,
        "iexBidSize": 100,
        "iexAskPrice": 173.96,
        "iexAskSize": 100,
        "marketCap": 882675301480,
        "peRatio": 18.91,
        "week52High": 183.5,
        "week52Low": 138.62,
        "ytdChange": 0.007049991111007603
    }
}
```

<summary>GET /stock/AAPL/chart/1d</summary>

```
[
    {
        "date": "20180327",
        "minute": "09:30",
        "label": "09:30 AM",
        "high": 174.06,
        "low": 173.63,
        "average": 173.801,
        "volume": 5675,
        "notional": 986323.105,
        "numberOfTrades": 52,
        "marketHigh": 174.1,
        "marketLow": 173.62,
        "marketAverage": 173.815,
        "marketVolume": 1066145,
        "marketNotional": 185312060.0352,
        "marketNumberOfTrades": 2724,
        "changeOverTime": 0,
        "marketChangeOverTime": 0
    },

    ...
]
```

</details>