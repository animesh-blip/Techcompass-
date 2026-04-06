export function CircuitPattern({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Circuit paths */}
      <path
        d="M50 200 H150 V100 H250 V200 H350"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        opacity="0.3"
      />
      <path
        d="M100 50 V150 H200 V250 H300 V350"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="8 4"
        opacity="0.2"
      />
      <path
        d="M200 30 V130 H80 V230 H200 V330"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 3"
        opacity="0.15"
      />
      <path
        d="M320 80 H220 V180 H120 V280 H220 V380"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="6 3"
        opacity="0.15"
      />
      {/* Circuit nodes */}
      {[
        [50, 200], [150, 200], [150, 100], [250, 100], [250, 200], [350, 200],
        [100, 50], [100, 150], [200, 150], [200, 250], [300, 250], [300, 350],
        [200, 30], [200, 130], [80, 130], [80, 230], [200, 230], [200, 330],
      ].map(([cx, cy], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r="4"
          fill="currentColor"
          opacity={0.3 - (i % 3) * 0.05}
        />
      ))}
      {/* Larger accent nodes */}
      {[
        [150, 100], [250, 200], [200, 250], [300, 350],
      ].map(([cx, cy], i) => (
        <circle
          key={`accent-${i}`}
          cx={cx}
          cy={cy}
          r="7"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.25"
        />
      ))}
    </svg>
  );
}

export function NetworkNodes({ className = "" }: { className?: string }) {
  const nodes = [
    { x: 60, y: 40 }, { x: 180, y: 60 }, { x: 300, y: 30 },
    { x: 120, y: 140 }, { x: 240, y: 120 }, { x: 360, y: 100 },
    { x: 50, y: 220 }, { x: 200, y: 200 }, { x: 330, y: 210 },
    { x: 100, y: 300 }, { x: 260, y: 280 }, { x: 380, y: 290 },
  ];

  const connections = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5],
    [3, 6], [3, 7], [4, 7], [5, 8], [7, 8], [6, 9], [7, 10],
    [8, 11], [9, 10], [10, 11],
  ];

  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="420"
      height="340"
      viewBox="0 0 420 340"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {connections.map(([from, to], i) => (
        <line
          key={`line-${i}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.15"
        />
      ))}
      {nodes.map((node, i) => (
        <g key={`node-${i}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r="6"
            fill="currentColor"
            opacity="0.1"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r="3"
            fill="currentColor"
            opacity="0.3"
          />
        </g>
      ))}
    </svg>
  );
}

export function CompassDecoration({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`absolute pointer-events-none ${className}`}
      width="300"
      height="300"
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer ring */}
      <circle cx="150" cy="150" r="140" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
      <circle cx="150" cy="150" r="120" stroke="currentColor" strokeWidth="0.5" opacity="0.1" strokeDasharray="4 4" />
      <circle cx="150" cy="150" r="100" stroke="currentColor" strokeWidth="1" opacity="0.12" />

      {/* Cardinal direction marks */}
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 150 + 130 * Math.cos(rad);
        const y1 = 150 + 130 * Math.sin(rad);
        const x2 = 150 + 145 * Math.cos(rad);
        const y2 = 150 + 145 * Math.sin(rad);
        return (
          <line
            key={angle}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="currentColor" strokeWidth="2" opacity="0.2"
          />
        );
      })}

      {/* Minor tick marks */}
      {Array.from({ length: 36 }, (_, i) => i * 10).map((angle) => {
        if (angle % 90 === 0) return null;
        const rad = (angle * Math.PI) / 180;
        const x1 = 150 + 135 * Math.cos(rad);
        const y1 = 150 + 135 * Math.sin(rad);
        const x2 = 150 + 142 * Math.cos(rad);
        const y2 = 150 + 142 * Math.sin(rad);
        return (
          <line
            key={angle}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="currentColor" strokeWidth="0.5" opacity="0.12"
          />
        );
      })}

      {/* Compass needle - N/S */}
      <path
        d="M150 50 L158 150 L150 145 L142 150 Z"
        fill="currentColor"
        opacity="0.15"
      />
      <path
        d="M150 250 L158 150 L150 155 L142 150 Z"
        fill="currentColor"
        opacity="0.08"
      />

      {/* Center dot */}
      <circle cx="150" cy="150" r="5" fill="currentColor" opacity="0.2" />
      <circle cx="150" cy="150" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}
