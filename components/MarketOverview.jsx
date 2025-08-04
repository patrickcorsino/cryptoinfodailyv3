export default function MarketOverview({ stats }) {
  if (!stats) return null;

  return (
    <div className="card flex flex-col">
      <span className="font-semibold text-base mb-2">Market Stats</span>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <div className="marketstat-label">Global MC</div>
          <div className="marketstat-data">${Number(stats.total_market_cap.usd).toLocaleString()}</div>
        </div>
        <div>
          <div className="marketstat-label">24h Volume</div>
          <div className="marketstat-data">${Number(stats.total_volume.usd).toLocaleString()}</div>
        </div>
        <div>
          <div className="marketstat-label">BTC Dominance</div>
          <div className="marketstat-data">{stats.market_cap_percentage.btc.toFixed(2)}%</div>
        </div>
        <div>
          <div className="marketstat-label">Active Coins</div>
          <div className="marketstat-data">{Number(stats.active_cryptocurrencies).toLocaleString()}</div>
        </div>
      </div>
    </div>
  );
}

