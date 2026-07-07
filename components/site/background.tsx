export function BackgroundOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-24 left-[-10%] h-72 w-72 rounded-full bg-[#66bb6a]/20 blur-3xl animate-float" />
      <div className="absolute top-32 right-[-8%] h-80 w-80 rounded-full bg-emerald-200/55 blur-3xl animate-float [animation-delay:1.5s]" />
      <div className="absolute bottom-16 left-[18%] h-56 w-56 rounded-full bg-[#4caf50]/15 blur-3xl animate-float [animation-delay:3s]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1200" y2="800">
            <stop stopColor="#4CAF50" stopOpacity="0.9" />
            <stop offset="1" stopColor="#dff5df" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        <path d="M-40 180 C 220 100, 360 300, 580 220 S 980 180, 1240 320" stroke="url(#line)" strokeWidth="1.5" />
        <path d="M-40 360 C 180 280, 360 520, 640 420 S 940 340, 1240 500" stroke="url(#line)" strokeWidth="1.5" />
        <path d="M-40 560 C 220 500, 420 660, 660 600 S 960 540, 1240 680" stroke="url(#line)" strokeWidth="1.5" />
      </svg>
    </div>
  );
}
