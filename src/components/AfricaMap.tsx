"use client";

import Image from "next/image";

export default function AfricaMap() {
  return (
    <div className="relative w-full h-full">
      {/* Africa map image */}
      <div className="relative w-full h-full">
        <Image
          src="/africa-map.svg"
          alt="Africa Map"
          fill
          className="object-contain opacity-25"
          style={{
            filter: "brightness(0) saturate(100%) invert(19%) sepia(32%) saturate(749%) hue-rotate(175deg) brightness(95%) contrast(91%)"
          }}
          priority
        />
      </div>

      {/* Rwanda marker overlay - positioned on Rwanda */}
      <div
        className="absolute"
        style={{ top: "45%", left: "48%" }}
      >
        {/* Pulse animation container */}
        <div className="relative">
          {/* Outer pulse ring */}
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20"
            style={{
              width: '40px',
              height: '40px',
              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite'
            }}
          />
          {/* Inner pulse ring */}
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/30"
            style={{
              width: '28px',
              height: '28px',
              animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
              animationDelay: '0.5s'
            }}
          />
          {/* Center dot */}
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
            style={{ width: '12px', height: '12px' }}
          />
          {/* White inner dot */}
          <span
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-white"
            style={{ width: '5px', height: '5px' }}
          />
        </div>

        {/* Label with connector */}
        <div
          className="absolute whitespace-nowrap"
          style={{ left: '20px', top: '-20px' }}
        >
          <div className="flex items-center gap-2">
            <div className="w-6 h-px bg-primary/50" />
            <span className="bg-primary text-white text-xs sm:text-sm font-semibold px-2.5 py-1.5 rounded-md shadow-lg">
              Rwanda
            </span>
          </div>
        </div>
      </div>

      {/* CSS for pulse animation */}
      <style jsx>{`
        @keyframes ping {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: translate(-50%, -50%) scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
