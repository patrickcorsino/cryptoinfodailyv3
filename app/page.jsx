"use client";

import { useState, useEffect } from "react";
import { getMarketData, getTrending, getFearGreed, getGlobalStats } from "../lib/api";
import CoinTable from "../components/CoinTable";
import TrendingCoins from "../components/TrendingCoins";
import FearGreedWidget from "../components/FearGreedWidget";
import MarketOverview from "../components/MarketOverview";
import DegenToggle from "../components/DegenToggle";

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [trending, setTrending] = useState([]);
  const [fg, setFg] = useState(null);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [degen, setDegen] = useState(false);

  // API polling safety — 20s interval, bulletproof fallback
  useEffect(() => {
    let cancelled = false;
    async function fetchAll() {
      setLoading(true);
      try {
        const [coinData, trendingData, fgData, statsData] = await Promise.all([
          getMarketData(),
          getTrending(),
          getFearGreed(),
          getGlobalStats(),
        ]);
        if (!cancelled) {
          setCoins(Array.isArray(coinData) ? coinData.filter(Boolean) : []);
          setTrending(Array.isArray(trendingData) ? trendingData.filter(Boolean) : []);
          setFg(fgData || null);
          setStats(statsData || null);
        }
      } catch (e) {
        // Keep old data, don't blank the screen!
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    fetchAll();
    const interval = setInterval(() => {
      if (document.visibilityState === "visible") fetchAll();
    }, 20000);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  // Degen mode color style
  const mainStyle = degen
    ? {
        background:
          "radial-gradient(circle at 80% 40%, #24f57a30 0, transparent 60%),radial-gradient(circle at 40% 80%, #ff336620 0, transparent 60%), #101925",
      }
    : {};

  return (
    <main
      className="p-2 sm:p-6 max-w-7xl mx-auto min-h-screen space-y-7 transition-all duration-300"
      style={mainStyle}
    >
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-white via-degen to-degen bg-clip-text text-transparent drop-shadow-lg">
          Crypto Dashboard
        </h1>
        <DegenToggle enabled={degen} onToggle={setDegen} />
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <TrendingCoins coins={trending} />
        <FearGreedWidget data={fg} />
        <MarketOverview stats={stats} />
      </div>

      {loading && (
        <div className="text-center text-sm text-gray-400 py-10">
          Loading latest prices...
        </div>
      )}
      {!loading && Array.isArray(coins) && coins.length > 0 && (
        <CoinTable coins={coins} />
      )}
      {!loading && (!coins || coins.length === 0) && (
        <div className="text-center text-sm text-red-500">
          No coin data available. Please refresh in a moment.
        </div>
      )}
    </main>
  );
}

