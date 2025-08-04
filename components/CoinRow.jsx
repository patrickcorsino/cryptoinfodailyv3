"use client";
import { useEffect, useState } from "react";
import SparklineChart from "./SparklineChart";

export default function CoinRow({ coin, lastPrice }) {
  const [priceGlow, setPriceGlow] = useState("");
  const [prevPrice, setPrevPrice] = useState(lastPrice || coin.current_price);

  useEffect(() => {
    if (!coin.current_price) return;
    if (coin.current_price > prevPrice) setPriceGlow("glow-green");
    else if (coin.current_price < prevPrice) setPriceGlow("glow-red");
    setPrevPrice(coin.current_price);
    const t = setTimeout(() => setPriceGlow(""), 1200);
    return () => clearTimeout(t);
  }, [coin.current_price]);

  if (!coin.id) return null;

  return (
    <div className={`grid grid-cols-8 items-center text-sm rounded-xl px-3 py-2 hover:bg-cardHover transition hover:shadow-xl ${priceGlow} glow group`}>
      <span className="opacity-50 w-6">{coin.market_cap_rank}</span>
      <div className="flex items-center gap-2">
        <img src={coin.image} alt={coin.symbol} className="w-6 h-6" />
        <span className="font-semibold">{coin.symbol.toUpperCase()}</span>
      </div>
      <span className="w-full font-medium">${coin.current_price?.toLocaleString()}</span>
      <span className={`w-full ${coin.price_change_percentage_1h_in_currency > 0 ? "text-up" : "text-down"}`}>{coin.price_change_percentage_1h_in_currency?.toFixed(2)}%</span>
      <span className={`w-full ${coin.price_change_percentage_24h_in_currency > 0 ? "text-up" : "text-down"}`}>{coin.price_change_percentage_24h_in_currency?.toFixed(2)}%</span>
      <span className="w-full">${coin.market_cap?.toLocaleString()}</span>
      <span className="w-full">${coin.total_volume?.toLocaleString()}</span>
      <div className="flex w-full">
        <SparklineChart data={coin.sparkline_in_7d?.price?.slice(-30) || []} color={coin.price_change_percentage_7d_in_currency > 0 ? "green" : "red"} />
      </div>
    </div>
  );
}

