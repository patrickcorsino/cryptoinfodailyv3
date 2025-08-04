export default function TrendingCoins({ coins }) {
  if (!Array.isArray(coins) || coins.length === 0) return null;

  return (
    <div className="card mb-2">
      <div className="flex items-center mb-2">
        <span className="font-semibold text-base">Trending</span>
      </div>
      <div>
        {coins.slice(0, 5).map((coin, i) => (
          <div key={coin.id} className="flex items-center space-x-3 py-1">
            <span className="w-4 text-xs opacity-50">{i + 1}</span>
            <img src={coin.image} className="w-5 h-5 rounded-full" alt={coin.name} />
            <span className="font-semibold text-xs">{coin.symbol.toUpperCase()}</span>
            <span className="text-xs text-gray-400">{coin.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

