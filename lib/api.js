// CoinGecko + alt APIs
const BASE = "https://api.coingecko.com/api/v3";

export async function getMarketData() {
  try {
    const res = await fetch(
      `${BASE}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h,24h,7d`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch (e) {
    return [];
  }
}

export async function getTrending() {
  try {
    const res = await fetch(`${BASE}/search/trending`, { cache: "no-store" });
    if (!res.ok) throw new Error("API error");
    const data = await res.json();
    return (data.coins || []).map(c => ({
      id: c.item.id,
      name: c.item.name,
      symbol: c.item.symbol,
      image: c.item.large,
      rank: c.item.market_cap_rank,
      price_btc: c.item.price_btc,
    }));
  } catch (e) {
    return [];
  }
}

// Alt Fear & Greed API (hosted free - stable, slow updates)
export async function getFearGreed() {
  try {
    const res = await fetch("https://api.alternative.me/fng/?limit=1", { cache: "no-store" });
    if (!res.ok) throw new Error("FG API error");
    const data = await res.json();
    return data.data ? data.data[0] : null;
  } catch (e) {
    return null;
  }
}

export async function getGlobalStats() {
  try {
    const res = await fetch(`${BASE}/global`, { cache: "no-store" });
    if (!res.ok) throw new Error("API error");
    const { data } = await res.json();
    return data;
  } catch (e) {
    return null;
  }
}

