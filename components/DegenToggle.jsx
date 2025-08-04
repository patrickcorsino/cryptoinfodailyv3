"use client";
import { useState } from "react";

export default function DegenToggle({ enabled, onToggle }) {
  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm font-medium">Degen Mode</span>
      <button
        aria-label="Toggle degen mode"
        onClick={() => onToggle(!enabled)}
        className={`w-14 h-7 flex items-center rounded-full p-1 transition-all duration-300
          ${enabled ? "bg-green-500 shadow-degen" : "bg-gray-500"}`}
        style={{
          boxShadow: enabled ? "0 0 10px 2px #00ff9960" : undefined,
        }}
      >
        <div
          className={`bg-white w-5 h-5 rounded-full shadow-md transform transition-transform duration-300
            ${enabled ? "translate-x-7" : "translate-x-0"}`}
        />
      </button>
    </div>
  );
}

