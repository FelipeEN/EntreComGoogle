import React from 'react';

const TELEMETRY_BARS = [
  { height: '16px', delay: '0s' },
  { height: '28px', delay: '.3s' },
  { height: '20px', delay: '.8s' },
  { height: '39px', delay: '1.1s' },
  { height: '25px', delay: '.5s' },
  { height: '34px', delay: '1.5s' },
];

const PARTICLES = [
  { left: '8%', bottom: '12%', duration: '8s', delay: '-1s' },
  { left: '21%', bottom: '41%', duration: '11s', delay: '-5s' },
  { left: '33%', bottom: '7%', duration: '9s', delay: '-3s' },
  { left: '46%', bottom: '25%', duration: '12s', delay: '-7s' },
  { left: '62%', bottom: '9%', duration: '10s', delay: '-2s' },
  { left: '76%', bottom: '34%', duration: '13s', delay: '-9s' },
  { left: '89%', bottom: '14%', duration: '8s', delay: '-4s' },
  { left: '96%', bottom: '58%', duration: '11s', delay: '-6s' },
];

export default function HudBackground() {
  return (
    <div className="hud" aria-hidden="true">
      <div className="hud-grid" />
      <div className="hud-scan" />
      <div className="smoke one" />
      <div className="smoke two" />
      <div className="radar" />
      <div className="reticle" />
      <div className="hud-mark a" />
      <div className="hud-mark b" />
      <div className="hud-mark c" />

      <div className="telemetry">
        {TELEMETRY_BARS.map((bar, index) => (
          <span
            key={index}
            style={{
              '--height': bar.height,
              '--delay': bar.delay,
            }}
          />
        ))}
      </div>

      <div className="particles">
        {PARTICLES.map((particle, index) => (
          <i
            key={index}
            className="particle"
            style={{
              '--left': particle.left,
              '--bottom': particle.bottom,
              '--duration': particle.duration,
              '--delay': particle.delay,
            }}
          />
        ))}
      </div>
    </div>
  );
}
