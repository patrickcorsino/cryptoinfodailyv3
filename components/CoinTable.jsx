"use client";
import CoinRow from "./CoinRow";
import { useRef } from "react";

export default function CoinTable({ coins }) {
  const lastPrices = useRef({});

  // Map coin id to last price for glow animation
  coins.forEach((c) => {
    lastPrices.current[c.id] = c.current_price;
  });

  return (
    <div className="rounded-2xl overflow-hidden shadow-card mt-6 border border-softBorder">
      <div className="grid grid-cols-8 px-4 py-3 bg-[#232531] text-xs font-semibold text-white/70 sticky top-0 z-10" style={{ letterSpacing: 0.1 }}>
        <span>#</span>
        <span className="flex items-center gap-2">Coin</span>
        <span>Price</span>
        <span>1h %</span>
        <span>24h %</span>
        <span>Market Cap</span>
        <span>Volume</span>
        <span>7d</span>
      </div>
      <div className="divide-y divide-softBorder">
        {coins?.slice(0, 100).map((coin) =>
          coin ? (
            <CoinRow key={coin.id} coin={coin} lastPrice={lastPrices.current[coin.id]} />
          ) : null
        )}
      </div>
    </div>
  );
}

