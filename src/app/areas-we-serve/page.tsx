'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { cityPages } from '@/lib/city-pages';

/* ── Group cities by region ─────────────────────────────────── */
const regionMap: Record<string, typeof cityPages> = {};
for (const c of cityPages) {
  if (!regionMap[c.region]) regionMap[c.region] = [];
  regionMap[c.region].push(c);
}
const regions = Object.entries(regionMap);

/* ── Counter hook ────────────────────────────────────────────── */
function useCounter(end: number, duration = 1600) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        obs.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / duration, 1);
          const ease = 1 - Math.pow(1 - p, 4);
          setVal(Math.round(ease * end));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);
  return { val, ref };
}

/* ── Reveal-on-scroll hook ──────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ── Stat card ───────────────────────────────────────────────── */
function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { val, ref } = useCounter(value);
  return (
    <div ref={ref} style={{ textAlign: 'center' }}>
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(36px, 5vw, 56px)',
          fontWeight: 500,
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: 'var(--accent)',
        }}
      >
        {val}{suffix}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 11,
          letterSpacing: '0.14em',
          textTransform: 'uppercase' as const,
          color: 'var(--ink-mute)',
          marginTop: 8,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   PAGE
   ══════════════════════════════════════════════════════════════ */
export default function AreasWeServe() {
  const hero = useReveal();
  const map = useReveal();
  const citySection = useReveal();
  const industrySection = useReveal();
  const cta = useReveal();

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section
        ref={hero.ref}
        style={{
          paddingTop: 'clamp(80px, 12vw, 160px)',
          paddingBottom: 'clamp(60px, 8vw, 120px)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative grid bg — base lines (always visible, subtle) */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(var(--line-strong) 1px, transparent 1px), linear-gradient(90deg, var(--line-strong) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            opacity: 0.55,
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        {/* Neon glow layer — same grid drawn in accent color, pulses in/out */}
        <div
          className="areas-neon-grid"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(var(--accent) 1px, transparent 1px), linear-gradient(90deg, var(--accent) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            filter: 'blur(1.5px)',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 65%)',
            pointerEvents: 'none',
            animation: 'areasNeonPulse 5s ease-in-out infinite',
          }}
        />

        {/* Extra soft glow halo behind the neon grid for bloom effect */}
        <div
          className="areas-neon-bloom"
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'linear-gradient(var(--accent) 2px, transparent 2px), linear-gradient(90deg, var(--accent) 2px, transparent 2px)',
            backgroundSize: '64px 64px',
            filter: 'blur(8px)',
            maskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 10%, transparent 55%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at 50% 45%, black 10%, transparent 55%)',
            pointerEvents: 'none',
            animation: 'areasNeonPulse 5s ease-in-out infinite',
          }}
        />

        <div className="ds-container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              maxWidth: 900,
              margin: '0 auto',
              textAlign: 'center',
              opacity: hero.visible ? 1 : 0,
              transform: hero.visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 24 }}>
              <span className="dot" /> Areas We Serve
            </div>
            <h1 className="h-1" style={{ marginBottom: 24 }}>
              Great design,{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                everywhere
              </span>{' '}
              you are.
            </h1>
            <p
              className="body-lg"
              style={{
                maxWidth: 620,
                margin: '0 auto',
                opacity: hero.visible ? 1 : 0,
                transform: hero.visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.9s 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              We build high-performance websites for businesses across{' '}
              <strong style={{ color: 'var(--ink)' }}>all of North America</strong>. Whether
              you&rsquo;re downtown Toronto or across the continent, you get the same obsessive
              attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* ── Stats bar ─────────────────────────────────────────── */}
      <section style={{ paddingBottom: 'clamp(60px, 8vw, 100px)' }}>
        <div className="ds-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 32,
              borderTop: '1px solid var(--line)',
              borderBottom: '1px solid var(--line)',
              padding: '40px 0',
            }}
            className="stats-grid"
          >
            <Stat value={16} suffix="+" label="Cities served" />
            <Stat value={15} suffix="" label="Industries" />
            <Stat value={312} suffix="%" label="Avg. lead lift" />
            <Stat value={99} suffix="/100" label="PageSpeed" />
          </div>
        </div>
      </section>

      {/* ── Map / continent visual ────────────────────────────── */}
      <section
        ref={map.ref}
        style={{
          paddingBottom: 'clamp(80px, 10vw, 140px)',
        }}
      >
        <div className="ds-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 4vw, 80px)',
              alignItems: 'center',
            }}
            className="map-grid"
          >
            {/* Left: text */}
            <div
              style={{
                opacity: map.visible ? 1 : 0,
                transform: map.visible ? 'translateX(0)' : 'translateX(-40px)',
                transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot" /> Coast to Coast
              </div>
              <h2 className="h-2" style={{ marginBottom: 20 }}>
                We serve{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>all</span> of
                North America.
              </h2>
              <p className="body-lg" style={{ marginBottom: 32 }}>
                Our process is fully remote-first, built around async communication, screen shares,
                and real-time collaboration tools. You get the same premium experience whether
                we&rsquo;re in the same city or across the continent.
              </p>
              <p className="body" style={{ marginBottom: 32 }}>
                We&rsquo;ve highlighted the cities and industries where we have the deepest
                expertise below &mdash; but if you don&rsquo;t see your area,{' '}
                <strong style={{ color: 'var(--ink)' }}>we still want to hear from you</strong>.
              </p>
              <Link
                href="/contact"
                className="ds-btn ds-btn-primary"
              >
                Get in touch →
              </Link>
            </div>

            {/* Right: North America SVG map */}
            <div
              style={{
                opacity: map.visible ? 1 : 0,
                transform: map.visible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
                transition: 'all 1s 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: 'var(--r-lg)',
                  border: '1px solid var(--line)',
                  background: 'var(--bg-elev)',
                  overflow: 'hidden',
                  padding: 'clamp(20px, 2.5vw, 36px)',
                }}
              >
                {/* Dot grid bg */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage:
                      'radial-gradient(circle, var(--line-strong) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    opacity: 0.35,
                  }}
                />

                <svg
                  viewBox="-30 -25 850 660"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
                >
                  <defs>
                    <filter id="mapGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    <filter id="mapGlowLg" x="-100%" y="-100%" width="300%" height="300%">
                      <feGaussianBlur stdDeviation="10" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* ── Canada ── */}
                  <path
                    d="M152.5,260 L134.1,250.2 L111.7,241.7 L108,226.7 L95.1,214.4 L84.1,202 L89.1,197.2 L73.7,184.5 L59.1,165.9 L44.9,157.3 L31.3,155.4 L14.7,154.4 L-0.1,147.2 L-8.8,90 L-8.8,52.9 L21.8,60.1 L38.9,56.8 L62.9,54.9 L90.7,48.1 L103.5,49.9 L111.6,46.2 L138.4,48.4 L150.6,54.4 L164.7,52 L199.1,59.9 L220,60.9 L219.5,71 L259.6,71.9 L276.6,76.2 L277.2,66.9 L293.8,63 L308.1,64.4 L326.9,69 L356.4,71.9 L368.4,66 L390,67.6 L395.6,69.1 L406.8,59.3 L386.9,49.1 L398.1,30.8 L418.9,36.8 L423,53 L439.5,65.3 L462,63.8 L468,78 L483.8,62.2 L496.9,51.9 L522,58.4 L515.9,68.7 L521,78.9 L491.2,87.4 L479.4,89.4 L468.2,102.2 L445.2,109.7 L437.6,120.4 L416.4,129.8 L403.3,148.9 L415.9,162.2 L424,179.1 L453,181.5 L468.2,190 L488.8,197 L513.1,198.5 L514.4,217.2 L534.1,237.9 L545.8,224.4 L534.8,203.3 L559.2,191.6 L563.3,178 L546.5,162 L553.1,142.4 L556.3,124.5 L580.7,128.2 L596.4,128.9 L610,138.6 L625.6,147.8 L636.7,162 L656,162.3 L670.4,146.6 L688.9,168.3 L695.1,186.6 L714.9,198 L734.8,203.7 L745.3,213.5 L749.5,228.5 L736.6,235.8 L710.8,247.6 L676.8,247.1 L654.2,247.7 L635.5,259.3 L612.4,281.8 L634.2,267 L666.2,257.7 L665.6,269.3 L671.4,287.6 L697.6,291.2 L707.1,287.2 L701.9,297.3 L673.4,307.3 L656.7,313.8 L671.8,297.1 L647.7,298.6 L641.9,279.3 L632,278.2 L622.2,283.1 L616.4,295.4 L609.7,297.5 L592.5,299.9 L574.9,301.8 L564.4,309.8 L553.4,313.7 L540.7,315.3 L542.9,320.3 L531.1,326.3 L511.7,333.2 L506.4,331.7 L505.6,329.2 L511.7,320.2 L512.6,305.6 L501.4,291.8 L501.2,288.8 L497,287.2 L494.8,285.9 L492.9,284.6 L490,281 L475.9,274.5 L458.9,267 L448,269.9 L429.9,268.6 L412.2,263.9 L403.2,261.6 L398.6,256.2 L380.2,260 L319.6,260 L266.2,260 L212.9,260 L177.8,260Z"
                    stroke="var(--line-strong)"
                    strokeWidth="1"
                    fill="color-mix(in oklch, var(--accent), transparent 93%)"
                  />

                  {/* ── USA (continental) ── */}
                  <path
                    d="M152.5,260 L204.2,260 L240,260 L292.9,260 L349.8,260 L398.6,260 L401.6,256.1 L406,263.3 L421.2,265.5 L437.1,267.3 L450.9,269.8 L467.2,270.6 L483.1,277.8 L490.9,283.6 L492.4,285.6 L496.5,284.9 L498.7,288.8 L502.5,290.1 L510.7,296.5 L514.3,314.3 L507.6,325.7 L505.4,330.2 L509.4,333.2 L522,327.9 L542.8,321.4 L542.1,317.3 L544.7,313.7 L561.6,313.7 L565.6,309 L579,300 L608.8,299.9 L612.6,296.9 L619.5,290.9 L629,275.5 L637.9,276.5 L641.9,293 L649.2,301.9 L630.6,310.2 L616.5,319.1 L614.9,326.7 L621.5,332.2 L623.2,330.8 L616.5,335.3 L605.7,336.8 L596.7,337.8 L602.3,338.8 L592.5,343.7 L587.1,342.5 L587,345.7 L578.6,360.6 L576,357.5 L574.9,360.4 L577.3,366 L569.4,377.8 L571.4,370.6 L565.8,358.5 L566,369.2 L566.2,370.8 L569.1,381 L571.3,394.5 L556.5,404.9 L546.2,411.4 L540.4,418.4 L525.6,429.7 L520.1,442.7 L524.6,458.2 L528.6,469.6 L532.6,487.9 L529.9,497.9 L522.9,498 L518.1,491.3 L509.3,475 L509.8,464.5 L500.4,450.6 L487.9,453.6 L482,448.5 L466.4,447.3 L451.7,446.8 L449.7,451.1 L451.4,457.1 L446.4,456.9 L436.6,458.5 L422.2,454.5 L410.2,452.9 L394.7,462.6 L381,471.7 L378.8,483.1 L381,491.3 L371.2,489.4 L361.8,481.6 L354.6,468.9 L347,456.2 L333.5,452.4 L320.5,457.3 L313.7,448.8 L305.5,439.2 L297.7,432.5 L282.3,436.6 L257.6,436.7 L223.9,424.7 L213.4,423.9 L201.8,419.5 L191.9,412.6 L185.9,409.2 L174.5,405.5 L171.2,398.4 L155.1,374.5 L151.5,368.9 L143.4,352.3 L140.6,338.6 L137.5,322.3 L142,303.8 L141.5,281.4 L136.1,268.2 L150,269.6 L157,276.4 L152.5,260Z"
                    stroke="var(--line-strong)"
                    strokeWidth="1"
                    fill="color-mix(in oklch, var(--accent), transparent 90%)"
                  />

                  {/* ── Alaska ── */}
                  <path
                    d="M-8.8,52.9 L-8.8,90 L-8.9,146.9 L-0.1,147.2 L8.5,150 L14.7,154.4 L22.6,161 L31.3,155.4 L40.2,152.1 L44.9,157.3 L50.9,161.4 L59.1,165.9 L64.6,173.1 L73.7,184.5 L88.8,190.8 L89.1,197.2 L84.1,202 L79.2,198.2 L71.4,195 L68.9,186.3 L57.4,178.2 L52.6,168.8 L44.1,168.1 L30,167.9 L19.6,165 L1.2,154.6 L-7.3,152.7 L-20,149.2 L-20,52.9Z"
                    stroke="var(--line-strong)"
                    strokeWidth="1"
                    fill="color-mix(in oklch, var(--accent), transparent 90%)"
                  />

                  {/* ── Mexico ── */}
                  <path
                    d="M203.3,424.6 L224.7,422.8 L237.3,429.6 L275.2,436.6 L282.3,432.5 L301,436 L310.8,443.6 L315.9,454.3 L327.9,460.3 L340.8,452.2 L351.5,463 L359.8,474.6 L364.3,486.3 L377.5,491.6 L377.5,500.1 L375.3,520.7 L376,531 L380.5,543.6 L388.5,556.8 L401.4,564.4 L412.9,565.8 L426.3,563 L437.6,557.2 L440.4,542.9 L448,537.4 L465.3,535.4 L472.8,536.7 L467.7,547.4 L467.2,555.3 L463.7,567.4 L459.6,565 L454.7,571.2 L452,570.4 L443.8,571.8 L435.5,577.5 L434.8,580.8 L439.1,585.3 L440.3,589.3 L424.6,597.5 L424.9,601.7 L414.6,593.8 L402.7,588 L390.6,592.5 L379.9,590.8 L364.9,584.3 L348.2,578.3 L338.5,570.8 L324.4,567.1 L311.2,556.8 L304.6,545.7 L306.7,541.8 L308.7,535.8 L304.9,527.3 L294.1,512.3 L280.9,498.3 L271.6,491.8 L268.4,483.2 L261,471.4 L251,465.3 L246.5,457.3 L238.5,442.1 L232.2,434.3 L224.2,432 L224.3,440.9 L228.2,452.5 L236.2,461.7 L238.8,465.9 L242.1,472.2 L246.7,478.3 L255.2,492.7 L260.4,501.7 L265.1,507.3 L271.9,516.4 L268,521.8 L264,515.7 L251.8,505.2 L247.6,495.3 L242,486.8 L234.7,483.6 L227,478.6 L222.4,472 L229.3,468.8 L222.8,457.2 L214.3,448.2 L206.9,433.6Z"
                    stroke="var(--line-strong)"
                    strokeWidth="1"
                    fill="color-mix(in oklch, var(--accent), transparent 93%)"
                  />

                  {/* ── City markers ── */}
                  {[
                    { cx: 538.8, cy: 313.5, label: 'Toronto', r: 5, primary: true },
                    { cx: 571.6, cy: 295.8, label: 'Ottawa', r: 3 },
                    { cx: 534.5, cy: 317.4, label: 'Hamilton', r: 2.5 },
                    { cx: 529.1, cy: 315.5, label: 'KW', r: 2.5 },
                    { cx: 506.3, cy: 326.8, label: 'Windsor', r: 2.5 },
                    { cx: 522.2, cy: 320.2, label: 'London', r: 2.5 },
                    { cx: 531.6, cy: 492.4, label: 'Miami', r: 5, primary: true },
                    { cx: 384, cy: 422.2, label: 'Dallas', r: 5, primary: true },
                    { cx: 375.6, cy: 447.3, label: 'Austin', r: 5, primary: true },
                  ].map((city, i) => (
                    <g key={city.label}>
                      {/* Animated pulse ring */}
                      <circle cx={city.cx} cy={city.cy} r={city.r + 4} fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0">
                        <animate attributeName="r" from={city.r + 3} to={city.r + 18} dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                        <animate attributeName="opacity" values="0.6;0" dur="3s" repeatCount="indefinite" begin={`${i * 0.4}s`} />
                      </circle>

                      {/* Glow halo */}
                      <circle cx={city.cx} cy={city.cy} r={city.r + 4} fill="var(--accent)" opacity="0.12" filter="url(#mapGlowLg)" />

                      {/* Solid dot */}
                      <circle cx={city.cx} cy={city.cy} r={city.r} fill="var(--accent)" opacity={city.primary ? 1 : 0.7} />

                      {/* Label for primary cities */}
                      {city.primary && (
                        <text
                          x={city.cx + city.r + 7}
                          y={city.cy + 4}
                          fill="var(--ink-dim)"
                          fontSize="11"
                          fontFamily="var(--font-mono)"
                          letterSpacing="0.08em"
                        >
                          {city.label.toUpperCase()}
                        </text>
                      )}
                    </g>
                  ))}

                  {/* ── GTA cluster label ── */}
                  <line x1="540" y1="308" x2="570" y2="285" stroke="var(--ink-mute)" strokeWidth="0.5" strokeDasharray="3,3" opacity="0.5" />
                  <text x="572" y="283" fill="var(--ink-mute)" fontSize="9" fontFamily="var(--font-mono)" letterSpacing="0.1em">GTA + ONTARIO</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── City grid ─────────────────────────────────────────── */}
      <section
        ref={citySection.ref}
        style={{
          paddingTop: 'clamp(60px, 8vw, 100px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          borderTop: '1px solid var(--line)',
        }}
      >
        <div className="ds-container">
          <div
            style={{
              maxWidth: 680,
              marginBottom: 'clamp(48px, 6vw, 80px)',
              opacity: citySection.visible ? 1 : 0,
              transform: citySection.visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="eyebrow" style={{ marginBottom: 20 }}>
              <span className="dot" /> Featured Locations
            </div>
            <h2 className="h-2" style={{ marginBottom: 16 }}>
              Local expertise,{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                proven results
              </span>
              .
            </h2>
            <p className="body-lg">
              We know the markets, the competitors, and the search patterns. Each city page is
              tailored with local SEO, neighbourhood-level targeting, and region-specific copy.
            </p>
          </div>

          {regions.map(([region, cities], ri) => (
            <div
              key={region}
              style={{
                marginBottom: ri < regions.length - 1 ? 56 : 0,
                opacity: citySection.visible ? 1 : 0,
                transform: citySection.visible ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.8s ${0.1 + ri * 0.15}s cubic-bezier(0.16, 1, 0.3, 1)`,
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--ink-mute)',
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: '1px solid var(--line)',
                }}
              >
                {region}
              </div>
              <div
                className="city-grid"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
                  gap: 12,
                }}
              >
                {cities.map((city, ci) => (
                  <Link
                    key={city.slug}
                    href={`/${city.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 14,
                      padding: '16px 20px',
                      borderRadius: 'var(--r-md)',
                      border: '1px solid var(--line)',
                      background: 'var(--bg-elev)',
                      textDecoration: 'none',
                      transition: 'all 0.35s var(--ease)',
                      opacity: citySection.visible ? 1 : 0,
                      transform: citySection.visible ? 'translateY(0)' : 'translateY(16px)',
                      transitionDelay: citySection.visible ? `${0.2 + ci * 0.04}s` : '0s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent)';
                      e.currentTarget.style.background = 'var(--bg-elev-2)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--line)';
                      e.currentTarget.style.background = 'var(--bg-elev)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    {/* Accent marker */}
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: 'var(--accent)',
                        flexShrink: 0,
                        boxShadow: '0 0 8px color-mix(in oklch, var(--accent), transparent 60%)',
                      }}
                    />
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 16,
                        fontWeight: 500,
                        color: 'var(--ink)',
                        flex: 1,
                      }}
                    >
                      {city.city}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 10,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase' as const,
                        color: 'var(--ink-mute)',
                      }}
                    >
                      View →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Any industry ──────────────────────────────────────── */}
      <section
        ref={industrySection.ref}
        style={{
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          borderTop: '1px solid var(--line)',
          background: 'var(--bg-elev)',
        }}
      >
        <div className="ds-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'clamp(32px, 5vw, 80px)',
              alignItems: 'center',
            }}
            className="industry-split"
          >
            {/* Left: message */}
            <div
              style={{
                opacity: industrySection.visible ? 1 : 0,
                transform: industrySection.visible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div className="eyebrow" style={{ marginBottom: 20 }}>
                <span className="dot" /> Every Industry
              </div>
              <h2 className="h-2" style={{ marginBottom: 20 }}>
                Tell us about your business.{' '}
                <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                  We&rsquo;ll handle the rest.
                </span>
              </h2>
              <p className="body-lg" style={{ marginBottom: 24 }}>
                We don&rsquo;t limit ourselves to a handful of industries. Whether you&rsquo;re a
                plumber, a dentist, a law firm, or a restaurant &mdash; we research your market,
                your competitors, and your customers to build a site that actually converts.
              </p>
              <p className="body" style={{ marginBottom: 32 }}>
                Every project starts with deep research into your specific industry. We learn the
                buyer psychology, the search patterns, and what makes your customers choose one
                provider over another. That&rsquo;s how we build sites that work.
              </p>
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Tell us about your project →
              </Link>
            </div>

            {/* Right: industry word cloud / list */}
            <div
              style={{
                opacity: industrySection.visible ? 1 : 0,
                transform: industrySection.visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
                transition: 'all 0.9s 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 10,
                  justifyContent: 'center',
                }}
              >
                {[
                  'Contractors', 'Dental Practices', 'Law Firms', 'Real Estate',
                  'Fitness & Wellness', 'Restaurants', 'Healthcare', 'Accounting',
                  'Auto Dealerships', 'Salons & Beauty', 'Plumbing & HVAC',
                  'Landscaping', 'Education', 'Insurance', 'Architecture',
                  'Interior Design', 'E-Commerce', 'Non-Profits', 'Consulting',
                  'Veterinary', 'Photography', 'Cleaning Services',
                  'Your Industry',
                ].map((name, i) => {
                  const isHighlight = name === 'Your Industry';
                  return (
                    <span
                      key={name}
                      style={{
                        display: 'inline-block',
                        padding: '10px 18px',
                        borderRadius: '999px',
                        border: `1px solid ${isHighlight ? 'var(--accent)' : 'var(--line)'}`,
                        background: isHighlight ? 'var(--accent)' : 'transparent',
                        color: isHighlight ? 'var(--accent-ink)' : 'var(--ink-dim)',
                        fontFamily: isHighlight ? 'var(--font-display)' : 'var(--font-mono)',
                        fontSize: isHighlight ? 14 : 12,
                        fontWeight: isHighlight ? 600 : 400,
                        letterSpacing: isHighlight ? '-0.01em' : '0.06em',
                        whiteSpace: 'nowrap',
                        opacity: industrySection.visible ? 1 : 0,
                        transform: industrySection.visible ? 'translateY(0)' : 'translateY(12px)',
                        transition: `all 0.5s ${0.2 + i * 0.03}s cubic-bezier(0.16, 1, 0.3, 1)`,
                      }}
                    >
                      {name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Don't see your city? CTA ─────────────────────────── */}
      <section
        ref={cta.ref}
        style={{
          paddingTop: 'clamp(80px, 10vw, 140px)',
          paddingBottom: 'clamp(80px, 10vw, 140px)',
          borderTop: '1px solid var(--line)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: 'absolute',
            width: 600,
            height: 600,
            borderRadius: '50%',
            background: 'color-mix(in oklch, var(--accent), transparent 92%)',
            filter: 'blur(120px)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
          }}
        />

        <div className="ds-container" style={{ position: 'relative', zIndex: 1 }}>
          <div
            style={{
              maxWidth: 720,
              margin: '0 auto',
              textAlign: 'center',
              opacity: cta.visible ? 1 : 0,
              transform: cta.visible ? 'translateY(0)' : 'translateY(32px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <h2 className="h-2" style={{ marginBottom: 20 }}>
              Don&rsquo;t see your city?{' '}
              <span className="italic-serif" style={{ color: 'var(--accent)' }}>
                We&rsquo;re still here.
              </span>
            </h2>
            <p className="body-lg" style={{ marginBottom: 40, maxWidth: 560, margin: '0 auto 40px' }}>
              We work with businesses across all of North America. Our remote-first process means
              you get the same premium experience no matter where you are.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="ds-btn ds-btn-primary">
                Start your project
              </Link>
              <Link href="/free-website-audit" className="ds-btn">
                Free website audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Scoped styles ─────────────────────────────────────── */}
      <style jsx global>{`
        @keyframes areasPulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.8); opacity: 0; }
        }

        /* Neon grid — smooth breathe in/out */
        @keyframes areasNeonPulse {
          0%, 100% { opacity: 0; }
          40%      { opacity: 0.45; }
          60%      { opacity: 0.45; }
        }

        @media (max-width: 900px) {
          .map-grid {
            grid-template-columns: 1fr !important;
          }
          .industry-split {
            grid-template-columns: 1fr !important;
          }
        }

        @media (max-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 24px !important;
          }
          .city-grid {
            grid-template-columns: 1fr !important;
          }
          .industry-grid {
            grid-template-columns: 1fr !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .areas-neon-grid,
          .areas-neon-bloom {
            animation: none !important;
            opacity: 0.1 !important;
          }
        }
      `}</style>
    </>
  );
}
