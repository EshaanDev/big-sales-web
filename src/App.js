import { useState, useEffect, useRef, useMemo } from "react";
import nestleImg from './images/nestle-4.svg';
import cocaColaImg from './images/coca-cola-2021.svg';
import pepsiImg from './images/pepsi.svg';
import britanniaImg from './images/britannia-industries-logo.svg';
import itcImg from './images/itc-limited.svg';

import kinderImg from './images/kinder-logo.svg';
import schweppesImg from './images/schweppes-5.svg';

import laysImg from './images/lays.svg';
import redbullImg from './images/redbull.svg';
import tropicanaImg from './images/tropicana.svg';
import lahoriImg from './images/lahori-zeera.svg';
// Add this near the top of your file
const TARGET_EMAIL = "yashwaghulkar4545@gmail.com";
const FORM_ENDPOINT = `https://formsubmit.co/ajax/${TARGET_EMAIL}`;

// Apple SF Pro system font stack
const AF = "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', 'Helvetica Neue', sans-serif";

function useInView(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  
  // Stabilize the options object so it doesn't trigger unnecessary re-renders
  const optionsStr = JSON.stringify(options);
  const stableOptions = useMemo(() => JSON.parse(optionsStr), [optionsStr]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setInView(true); observer.disconnect(); }
    }, { threshold: 0.12, ...stableOptions });
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [stableOptions]);
  
  return [ref, inView];
}

const NAV_LINKS = ["Home", "About", "Products", "Quote", "Contact"];

const STATS = [
  { value: "20+", label: "Years in FMCG" },
  { value: "5,000+", label: "SKUs in Portfolio" },
];

// Clean SVGs instead of standard emojis for professional presentation
const CATEGORIES = [
  { 
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
        <path d="M19 10v1a7 7 0 0 1-14 0v-1"/>
      </svg>
    ), 
    title: "Beverages", 
    desc: "Juices, soft drinks, energy drinks, packaged water and health drinks in bulk." 
  },
  { 
    icon: (
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#FF6B35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
    ), 
    title: "Food & Snacks", 
    desc: "Biscuits, namkeens, and packaged staples for every shelf." 
  },
];

const CLIENTS = [
  { type: "Retailers", icon: "🏪", desc: "From kirana stores to modern trade outlets — we supply consistent stock at competitive margins." },
  { type: "Exporters", icon: "✈️", desc: "Documentation support, bulk packaging & compliance-ready products for international trade." },
  { type: "Wholesalers", icon: "🏭", desc: "Secondary wholesale fulfilment with the deepest trade discounts in the market." },
  { type: "E-Commerce", icon: "📦", desc: "FBA-ready, marketplace-compliant packaging & fast replenishment for online sellers." },
];

const GLOBAL_STYLES = `
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#FAFAF8;color:#1C1008;font-family:${AF}}
  html{scroll-behavior:smooth}
  @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.08);opacity:0.7}}
  @keyframes float0{0%,100%{transform:translate(0px,0px) rotate(0deg)}25%{transform:translate(8px,-12px) rotate(2deg)}50%{transform:translate(-6px,-20px) rotate(-1deg)}75%{transform:translate(-10px,-8px) rotate(1.5deg)}}
  @keyframes float1{0%,100%{transform:translate(0px,0px) rotate(0deg)}25%{transform:translate(-12px,8px) rotate(-2deg)}50%{transform:translate(10px,16px) rotate(1deg)}75%{transform:translate(6px,-6px) rotate(-1deg)}}
  @keyframes float2{0%,100%{transform:translate(0px,0px) rotate(0deg)}33%{transform:translate(10px,-15px) rotate(1.5deg)}66%{transform:translate(-8px,8px) rotate(-2deg)}}
  @keyframes float3{0%,100%{transform:translate(0px,0px) rotate(0deg)}40%{transform:translate(-15px,-10px) rotate(2deg)}80%{transform:translate(8px,12px) rotate(-1.5deg)}}
  @keyframes float4{0%,100%{transform:translate(0px,0px) rotate(0deg)}20%{transform:translate(12px,10px) rotate(-1deg)}60%{transform:translate(-10px,-14px) rotate(2.5deg)}}
  @keyframes float5{0%,100%{transform:translate(0px,0px) rotate(0deg)}50%{transform:translate(14px,-8px) rotate(-2deg)}}
  @keyframes float6{0%,100%{transform:translate(0px,0px) rotate(0deg)}30%{transform:translate(-8px,14px) rotate(1deg)}70%{transform:translate(12px,-6px) rotate(-1.5deg)}}
  @keyframes float7{0%,100%{transform:translate(0px,0px) rotate(0deg)}45%{transform:translate(-12px,-12px) rotate(2deg)}90%{transform:translate(8px,8px) rotate(-1deg)}}
  @keyframes float8{0%,100%{transform:translate(0px,0px) rotate(0deg)}25%{transform:translate(16px,6px) rotate(-2deg)}60%{transform:translate(-6px,-16px) rotate(1.5deg)}}
  @keyframes float9{0%,100%{transform:translate(0px,0px) rotate(0deg)}35%{transform:translate(-14px,10px) rotate(1deg)}70%{transform:translate(10px,-12px) rotate(-2deg)}}
  @keyframes float10{0%,100%{transform:translate(0px,0px) rotate(0deg)}50%{transform:translate(6px,18px) rotate(2deg)}}
  @keyframes float11{0%,100%{transform:translate(0px,0px) rotate(0deg)}40%{transform:translate(-10px,-10px) rotate(-1.5deg)}80%{transform:translate(14px,8px) rotate(1deg)}}
  @keyframes shimmer{0%{background-position:200% center}100%{background-position:-200% center}}
  @keyframes gradMove{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}
  @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}
  @media(max-width:900px){
    .desktop-nav{display:none!important}
    .hamburger{display:flex!important}
    .about-grid{grid-template-columns:1fr!important}
    .contact-grid{grid-template-columns:1fr!important}
    .footer-grid{grid-template-columns:1fr 1fr!important}
    .hero-btns{flex-direction:column!important;align-items:center!important}
    .stats-strip{grid-template-columns:repeat(2,1fr)!important}
    .quote-layout{grid-template-columns:1fr!important}
    .about-page-grid{grid-template-columns:1fr!important}
    .milestones-grid{grid-template-columns:1fr 1fr!important}
  }
  @media(max-width:480px){
    .stats-strip{grid-template-columns:repeat(2,1fr)!important}
    .milestones-grid{grid-template-columns:1fr!important}
  }
`;

// ─── Navbar ─────────────────────────────────────────────────────────────────
function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navTo = (l) => {
    setMenuOpen(false);
    const map = { Home: "home", About: "about", Contact: "contact", Products: "products", Quote: "quote" };
    setPage(map[l] || "home");
    window.scrollTo(0, 0);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      transition: "box-shadow 0.3s, background 0.3s",
      boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.08), 0 4px 24px rgba(0,0,0,0.07)" : "0 1px 0 rgba(0,0,0,0.07)",
      fontFamily: AF,
    }}>
      <style>{GLOBAL_STYLES}</style>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
        <div onClick={() => navTo("Home")} style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 11 }}>
          <div style={{
            width: 40, height: 40, borderRadius: 11,
            background: "linear-gradient(135deg,#FF6B35,#FF9F1C)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 20, fontWeight: 900, color: "#fff",
            boxShadow: "0 4px 14px rgba(255,107,53,0.38)",
          }}>B</div>
          <span style={{ fontSize: 21, fontWeight: 700, color: "#1C1008", letterSpacing: -0.5, fontFamily: AF }}>
            BigSale<span style={{ color: "#FF6B35" }}>.</span>
          </span>
        </div>

        <div className="desktop-nav" style={{ display: "flex", gap: 2, alignItems: "center" }}>
          {NAV_LINKS.map(l => {
            const active = page === l.toLowerCase();
            return (
              <span key={l} onClick={() => navTo(l)} style={{
                color: active ? "#FF6B35" : "#4A3828", fontSize: 14, fontWeight: active ? 600 : 450,
                cursor: "pointer", padding: "8px 16px", borderRadius: 8,
                transition: "all 0.18s",
                background: active ? "rgba(255,107,53,0.08)" : "transparent",
                fontFamily: AF,
              }}
                onMouseEnter={e => { if (!active) { e.target.style.color = "#1C1008"; e.target.style.background = "rgba(0,0,0,0.04)"; }}}
                onMouseLeave={e => { if (!active) { e.target.style.color = "#4A3828"; e.target.style.background = "transparent"; }}}>
                {l}
              </span>
            );
          })}
          <div style={{ width: 1, height: 20, background: "rgba(0,0,0,0.1)", margin: "0 8px" }} />
          <button onClick={() => navTo("Quote")} style={{
            background: "linear-gradient(135deg,#FF6B35,#FF9F1C)",
            color: "#fff", border: "none", borderRadius: 10,
            padding: "10px 22px", fontSize: 13, fontWeight: 600,
            cursor: "pointer", letterSpacing: 0.1,
            boxShadow: "0 3px 14px rgba(255,107,53,0.35)",
            transition: "all 0.2s", fontFamily: AF,
          }}
            onMouseEnter={e => { e.target.style.boxShadow = "0 6px 22px rgba(255,107,53,0.55)"; e.target.style.transform = "translateY(-1px)"; }}
            onMouseLeave={e => { e.target.style.boxShadow = "0 3px 14px rgba(255,107,53,0.35)"; e.target.style.transform = "translateY(0)"; }}>
            Get a Quote →
          </button>
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: "none", cursor: "pointer", color: "#1C1008", fontSize: 20,
          width: 40, height: 40, alignItems: "center", justifyContent: "center",
          borderRadius: 8, background: "rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.1)",
        }}>☰</div>
      </div>

      {menuOpen && (
        <div style={{ background: "#fff", padding: "12px 24px 24px", display: "flex", flexDirection: "column", gap: 2, borderTop: "1px solid rgba(0,0,0,0.06)", boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}>
          {NAV_LINKS.map(l => (
            <span key={l} onClick={() => navTo(l)} style={{ color: "#1C1008", fontSize: 16, fontWeight: 500, cursor: "pointer", padding: "13px 0", borderBottom: "1px solid rgba(0,0,0,0.05)", fontFamily: AF }}>{l}</span>
          ))}
          <button onClick={() => navTo("Quote")} style={{ marginTop: 16, background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", color: "#fff", border: "none", borderRadius: 12, padding: "14px", fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: AF }}>Get a Quote →</button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────
function Hero({ setPage }) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", background: "#F8F3EE", fontFamily: AF }}>
      <img src="https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1600&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.22 }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(250,246,240,0.92) 0%, rgba(250,246,240,0.78) 50%, rgba(250,246,240,0.55) 100%)" }} />
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 80% at 15% 50%, rgba(255,107,53,0.07) 0%, transparent 60%)" }} />
      <div style={{ position: "absolute", right: "-5%", top: "10%", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,159,28,0.12) 0%, transparent 65%)", animation: "pulse 8s ease-in-out infinite" }} />

      <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "0 40px", paddingTop: 120, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div style={{ opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(40px)", transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.28)", borderRadius: 100, padding: "7px 18px", marginBottom: 36 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF6B35", display: "inline-block", animation: "pulse 2s infinite", flexShrink: 0 }} />
            <span style={{ color: "#C94E1A", fontSize: 11, fontWeight: 700, letterSpacing: 1.8, fontFamily: AF }}>INDIA'S TRUSTED FMCG WHOLESALE PARTNER</span>
          </div>

          <h1 style={{ fontSize: "clamp(42px,7vw,86px)", fontWeight: 800, lineHeight: 1.04, letterSpacing: -3, maxWidth: 800, marginBottom: 24, color: "#1C1008", textAlign: "center", fontFamily: AF }}>
            Move More.<br />
            <span style={{
              background: "linear-gradient(135deg,#FF6B35 0%,#FF9F1C 50%,#E8550A 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
              animation: "shimmer 3s linear infinite",
            }}>Sell Bigger.</span><br />
            Grow Faster.
          </h1>

          <p style={{ fontSize: "clamp(15px,1.5vw,18px)", color: "#6B5A4E", maxWidth: 520, lineHeight: 1.8, marginBottom: 44, textAlign: "center", fontFamily: AF }}>
            BigSale is India's premium FMCG wholesaler — powering retailers, exporters, secondary wholesalers, and e-commerce businesses with 5,000+ SKUs, deep discounts, and pan-India logistics.
          </p>

          <div className="hero-btns" style={{ display: "flex", gap: 14, flexWrap: "wrap", justifyContent: "center" }}>
            <button onClick={() => { setPage("quote"); window.scrollTo(0, 0); }} style={{
              background: "linear-gradient(135deg,#FF6B35,#FF9F1C)",
              color: "#fff", border: "none", borderRadius: 13,
              padding: "17px 38px", fontSize: 15, fontWeight: 700,
              cursor: "pointer", boxShadow: "0 6px 28px rgba(255,107,53,0.42)",
              transition: "all 0.25s", letterSpacing: 0.2, fontFamily: AF,
            }}
              onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(255,107,53,0.55)"; }}
              onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 6px 28px rgba(255,107,53,0.42)"; }}>
              Start Ordering →
            </button>
            <button onClick={() => { setPage("products"); window.scrollTo(0, 0); }} style={{
              background: "rgba(255,255,255,0.8)", color: "#1C1008",
              border: "1.5px solid rgba(0,0,0,0.12)", borderRadius: 13,
              padding: "17px 38px", fontSize: 15, fontWeight: 600,
              cursor: "pointer", backdropFilter: "blur(8px)",
              transition: "all 0.2s", fontFamily: AF,
            }}
              onMouseEnter={e => { e.target.style.background = "#fff"; e.target.style.borderColor = "rgba(255,107,53,0.4)"; e.target.style.color = "#FF6B35"; }}
              onMouseLeave={e => { e.target.style.background = "rgba(255,255,255,0.8)"; e.target.style.borderColor = "rgba(0,0,0,0.12)"; e.target.style.color = "#1C1008"; }}>
              View Portfolio
            </button>
          </div>
        </div>

        <div className="stats-strip" style={{
          marginTop: 80, display: "grid", gridTemplateColumns: `repeat(${STATS.length}, 1fr)`,
          gap: 0, opacity: loaded ? 1 : 0, transition: "opacity 1.2s 0.5s",
          background: "#fff", borderRadius: 18, overflow: "hidden",
          border: "1.5px solid rgba(0,0,0,0.08)", boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          width: "100%", maxWidth: 860,
        }}>
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: "28px 20px", background: "#fff", textAlign: "center",
              borderRight: i < STATS.length - 1 ? "1.5px solid rgba(0,0,0,0.07)" : "none",
              flex: 1,
            }}>
              <div style={{ fontSize: "clamp(24px,2.8vw,36px)", fontWeight: 800, background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontFamily: AF }}>{s.value}</div>
              <div style={{ color: "#A09080", fontSize: 12, marginTop: 5, fontWeight: 500, fontFamily: AF }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home About Section ──────────────────────────────────────────────────────
function About() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ padding: "110px 40px", background: "#FFFFFF", position: "relative", overflow: "hidden", fontFamily: AF }}>
      <div style={{ position: "absolute", right: -80, top: -80, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="about-grid">
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(-40px)", transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)" }}>
          <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Our Story</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,50px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: -1.8, margin: "16px 0 26px", color: "#1C1008", fontFamily: AF }}>
            Built on Trust.<br />
            Scaled on <span style={{ color: "#FF6B35" }}>Volume.</span>
          </h2>
          <p style={{ color: "#6B5A4E", lineHeight: 1.85, marginBottom: 18, fontSize: 15, fontFamily: AF }}>Today, BigSale is one of India's fastest-growing multi-channel FMCG wholesalers based out of Mumbai. With a major infrastructure grid and streamlined nationwide logistics hubs, we seamlessly manage millions of consumer goods components every month.</p>
          <p style={{ color: "#6B5A4E", lineHeight: 1.85, fontSize: 15, fontFamily: AF }}>We function as multi-tiered strategic stockists for market-leading global and national consumer units — giving our commercial distribution network elite volume-based pricing structures, verified supply chains, and absolute product safety assurance.</p>
        </div>
        <div style={{ opacity: inView ? 1 : 0, transform: inView ? "translateX(0)" : "translateX(40px)", transition: "all 0.9s 0.15s cubic-bezier(0.22,1,0.36,1)" }}>
          <div style={{ position: "relative", borderRadius: 20, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="BigSale Hub" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(28,16,8,0.6) 0%, transparent 55%)" }} />
            <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
              <div style={{ background: "rgba(255,107,53,0.92)", borderRadius: 12, padding: "14px 18px", display: "inline-flex", gap: 10, alignItems: "center", backdropFilter: "blur(12px)" }}>
                <span style={{ fontSize: 22 }}>📊</span>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#fff", fontFamily: AF }}>Mumbai Corporate Hub</div>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.85)", marginTop: 1, fontFamily: AF }}>Primary Core Logistics Hub</div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}>
            {[{ n: "Instant", l: "Dispatch Turnaround" }, { n: "99.2%", l: "Order Accuracy" }].map((s, i) => (
              <div key={i} style={{ background: i % 2 === 0 ? "rgba(255,107,53,0.06)" : "#FAFAF8", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 14, padding: "20px 18px" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "#FF6B35", fontFamily: AF }}>{s.n}</div>
                <div style={{ fontSize: 12, color: "#A09080", marginTop: 4, fontFamily: AF }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Who We Serve ────────────────────────────────────────────────────────────
function WhoWeServe() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ padding: "110px 40px", background: "#FAFAF8", fontFamily: AF }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
          <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Who We Serve</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: -1.8, marginTop: 14, color: "#1C1008", fontFamily: AF }}>One Supplier. <span style={{ color: "#FF6B35" }}>Every Channel.</span></h2>
          <p style={{ color: "#6B5A4E", marginTop: 16, maxWidth: 500, margin: "16px auto 0", fontSize: 15, lineHeight: 1.75, fontFamily: AF }}>Whether you're a modern trade outlet or a global exporter, BigSale has the infrastructure, tier pricing, and stock depths to fuel your growth.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
          {CLIENTS.map((c, i) => (
            <div key={i} style={{
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(40px)",
              background: "#fff", border: "1.5px solid rgba(0,0,0,0.07)",
              borderRadius: 20, padding: "36px 28px", cursor: "default",
              transition: `opacity 0.7s ${i * 0.09}s, transform 0.7s ${i * 0.09}s, box-shadow 0.25s, border-color 0.25s`,
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,107,53,0.35)"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 44px rgba(255,107,53,0.12)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.04)"; }}>
              <div style={{ fontSize: 48, marginBottom: 20 }}>{c.icon}</div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12, color: "#1C1008", fontFamily: AF }}>{c.type}</h3>
              <p style={{ color: "#6B5A4E", fontSize: 14, lineHeight: 1.75, fontFamily: AF }}>{c.desc}</p>
              <div style={{ marginTop: 26, display: "inline-flex", alignItems: "center", gap: 5, color: "#FF6B35", fontSize: 13, fontWeight: 700, fontFamily: AF }}>Learn more <span>→</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Product Categories ──────────────────────────────────────────────────────
function Categories() {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ padding: "110px 40px", background: "#FFFFFF", position: "relative", overflow: "hidden", fontFamily: AF }}>
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 700, height: 350, borderRadius: "50%", background: "radial-gradient(ellipse, rgba(255,107,53,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: 60, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
          <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Product Portfolio</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: -1.8, marginTop: 14, color: "#1C1008", fontFamily: AF }}>5,000+ SKUs Maintained Continuously</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 16 }}>
          {CATEGORIES.map((c, i) => (
            <div key={i} style={{
              opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.95)",
              position: "relative", borderRadius: 18, padding: "32px 28px",
              background: "#FAFAF8", border: "1.5px solid rgba(0,0,0,0.07)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              transition: `opacity 0.6s ${i * 0.08}s, transform 0.6s ${i * 0.08}s, background 0.25s, border-color 0.25s, box-shadow 0.25s`,
            }}
              onMouseEnter={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "rgba(255,107,53,0.32)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(255,107,53,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#FAFAF8"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.04)"; }}>
              <div style={{ marginBottom: 18 }}>{c.icon}</div>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 10, color: "#1C1008", fontFamily: AF }}>{c.title}</h3>
              <p style={{ color: "#6B5A4E", fontSize: 14, lineHeight: 1.75, fontFamily: AF }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why BigSale ─────────────────────────────────────────────────────────────
function WhyUs() {
  const [ref, inView] = useInView();
  const pillars = [
    { icon: "🔒", title: "Guaranteed Authenticity", desc: "Direct manufacturer partnerships ensure 100% authentic inventory track records with clear production batch codes." },
    { icon: "🚚", title: "Pan-India Logistics", desc: "Our reliable freight distribution fleet covers India with precision tracking structures and direct timelines." },
    { icon: "💰", title: "Best-in-Market Pricing", desc: "Volume-based tiered trade options paired with scalable credit infrastructures for active corporate accounts." },
    { icon: "📊", title: "Smart Order Portal", desc: "Submit, track, and update supply requirements instantly via our secure wholesale workflow system around the clock." },
    { icon: "🤝", title: "Dedicated Corporate Care", desc: "Every professional entity receives immediate support from dedicated category replenishment professionals." },
    { icon: "🌱", title: "Sustainable Trade Goals", desc: "Moving actively toward standard reusable eco-friendly bulk transport setups across our distribution fleet." },
  ];
  return (
    <section ref={ref} style={{ padding: "110px 40px", background: "#FAFAF8", fontFamily: AF }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 60, opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
          <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Why BigSale</span>
          <h2 style={{ fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 800, letterSpacing: -1.8, marginTop: 14, color: "#1C1008", fontFamily: AF }}>The BigSale <span style={{ color: "#FF6B35" }}>Advantage</span></h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: 16 }}>
          {pillars.map((p, i) => (
            <div key={i} style={{
              opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(36px)",
              display: "flex", gap: 18, padding: "28px 26px",
              background: "#fff", border: "1.5px solid rgba(0,0,0,0.07)", borderRadius: 16,
              boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              transition: `opacity 0.7s ${i * 0.08}s, transform 0.7s ${i * 0.08}s, box-shadow 0.25s, border-color 0.25s`,
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)"; e.currentTarget.style.boxShadow = "0 10px 36px rgba(255,107,53,0.09)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)"; e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.04)"; }}>
              <div style={{ fontSize: 36, flexShrink: 0 }}>{p.icon}</div>
              <div>
                <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 9, color: "#1C1008", fontFamily: AF }}>{p.title}</h4>
                <p style={{ color: "#6B5A4E", fontSize: 14, lineHeight: 1.7, fontFamily: AF }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ──────────────────────────────────────────────────────────────
function CTABanner({ setPage }) {
  const [ref, inView] = useInView();
  return (
    <section ref={ref} style={{ padding: "100px 40px", background: "linear-gradient(135deg,#FF6B35 0%,#E8431B 45%,#C23010 100%)", position: "relative", overflow: "hidden", fontFamily: AF }}>
      <div style={{ position: "absolute", right: -80, top: -80, width: 440, height: 440, borderRadius: "50%", background: "rgba(255,255,255,0.07)" }} />
      <div style={{ position: "absolute", left: -60, bottom: -60, width: 360, height: 360, borderRadius: "50%", background: "rgba(0,0,0,0.1)" }} />
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center", position: "relative", opacity: inView ? 1 : 0, transform: inView ? "scale(1)" : "scale(0.96)", transition: "all 0.8s" }}>
        <h2 style={{ fontSize: "clamp(28px,4vw,50px)", fontWeight: 800, letterSpacing: -2, color: "#fff", marginBottom: 16, fontFamily: AF }}>Ready to Scale Your Business?</h2>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 16, lineHeight: 1.75, marginBottom: 42, fontFamily: AF }}>Join thousands of professional B2B channels who look to BigSale for zero-interruption distribution. Verified trade terms available.</p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button onClick={() => { setPage("quote"); window.scrollTo(0, 0); }} style={{ background: "#fff", color: "#FF6B35", border: "none", borderRadius: 13, padding: "17px 42px", fontSize: 15, fontWeight: 800, cursor: "pointer", boxShadow: "0 6px 28px rgba(0,0,0,0.2)", transition: "all 0.2s", fontFamily: AF }}
            onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 40px rgba(0,0,0,0.28)"; }}
            onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 6px 28px rgba(0,0,0,0.2)"; }}>
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer({ setPage }) {
  return (
    <footer style={{ background: "#140A03", padding: "68px 40px 32px", borderTop: "1px solid rgba(255,107,53,0.12)", fontFamily: AF }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 52 }} className="footer-grid">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "#fff" }}>B</div>
              <span style={{ fontSize: 19, fontWeight: 700, color: "#fff", fontFamily: AF }}>BigSale<span style={{ color: "#FF6B35" }}>.</span></span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: 13, lineHeight: 1.8, maxWidth: 270, fontFamily: AF }}>India's trusted multi-channel FMCG wholesale partner based in Mumbai. 5,000+ SKUs. 28 states.</p>
          </div>
          {[
            { title: "Company", links: ["About Us", "Careers", "Press Kit"] },
            { title: "Services", links: ["Retail Supply", "Export Orders", "Wholesale", "E-Commerce"] },
            { title: "Connect", links: ["Contact Us", "Partner Login"] },
          ].map(col => (
            <div key={col.title}>
              <h5 style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.25)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 22, fontFamily: AF }}>{col.title}</h5>
              {col.links.map(l => (
                <div key={l} onClick={() => { if (l === "Contact Us") { setPage("contact"); window.scrollTo(0, 0); } if (l === "About Us") { setPage("about"); window.scrollTo(0, 0); } }} style={{ color: "rgba(255,255,255,0.45)", fontSize: 13, marginBottom: 13, cursor: "pointer", transition: "color 0.2s", fontFamily: AF }}
                  onMouseEnter={e => e.target.style.color = "#FF9F1C"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.45)"}>{l}</div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 26, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
          <span style={{ color: "rgba(255,255,255,0.28)", fontSize: 12, fontFamily: AF }}>© 2026 BigSale Trading Pvt. Ltd. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

// ─── About Page (Full) ───────────────────────────────────────────────────────
function AboutPage({ setPage }) {
  const [s1, inView1] = useInView();
  const [s2, inView2] = useInView();
  const [s4, inView4] = useInView();

  const values = [
    { icon: "🎯", title: "Reliability First", desc: "Every volume arrangement is perfectly logged and dispatched. Quality control remains structural to our network." },
    { icon: "🤝", title: "Partner-Centric", desc: "We align structures directly with user retail models to ensure optimized portfolio safety and margin growth." },
    { icon: "💡", title: "Continuous Integration", desc: "Procurement is simplified through responsive structural portals built directly for efficient workflow tracking." },
    { icon: "🌿", title: "Responsible Trade", desc: "Adhering strictly to safe transport standards, clear transparency records, and reliable packaging parameters." },
  ];

  return (
    <section style={{ minHeight: "100vh", background: "#FAFAF8", paddingTop: 72, fontFamily: AF }}>
      <div style={{ position: "relative", background: "#F8F3EE", padding: "80px 40px 90px", overflow: "hidden", textAlign: "center" }}>
        <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1400&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(248,243,238,0.9) 0%, rgba(248,243,238,0.82) 60%, rgba(248,243,238,0.9) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Who We Are</span>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 800, letterSpacing: -2.5, margin: "16px 0 18px", color: "#1C1008", fontFamily: AF }}>We'd Love to <span style={{ color: "#FF6B35" }}>Hear From You</span></h1>
          <p style={{ color: "#6B5A4E", fontSize: 15, lineHeight: 1.8, marginBottom: 32, fontFamily: AF }}>Connect directly with our procurement help desk using our communication channel below. We verify and respond within 4 trade hours.</p>
        </div>
      </div>

      <div ref={s1} style={{ maxWidth: 1200, margin: "0 auto", padding: "90px 40px" }}>
        <div className="about-page-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>
          <div style={{ opacity: inView1 ? 1 : 0, transform: inView1 ? "translateX(0)" : "translateX(-36px)", transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)" }}>
            <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Our Foundation</span>
            <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 800, letterSpacing: -1.5, margin: "14px 0 22px", color: "#1C1008", fontFamily: AF }}>Optimizing Wholesale Supply Performance</h2>
            <p style={{ color: "#6B5A4E", lineHeight: 1.85, marginBottom: 18, fontSize: 15, fontFamily: AF }}>
              We address a fundamental logistics challenge in consumer inventory management — creating single-point wholesale safety loops that replace broken middle tiers and remove asset fragmentation.
            </p>
            <p style={{ color: "#6B5A4E", lineHeight: 1.85, marginBottom: 18, fontSize: 15, fontFamily: AF }}>
              By maintaining direct inventory alignments and infrastructure facilities centered from Mumbai, BigSale offers systematic supply continuity to commercial buyers nationwide.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 32 }}>
              {[{ n: "20+", l: "Years of Experience" }, { n: "3,000+", l: "Active Clients" }].map((s, i) => (
                <div key={i} style={{ background: i % 2 === 0 ? "rgba(255,107,53,0.06)" : "#FAFAF8", border: "1px solid rgba(0,0,0,0.07)", borderRadius: 12, padding: "16px 14px" }}>
                  <div style={{ fontSize: 26, fontWeight: 800, color: "#FF6B35", fontFamily: AF }}>{s.n}</div>
                  <div style={{ fontSize: 12, color: "#A09080", marginTop: 3, fontFamily: AF }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ opacity: inView1 ? 1 : 0, transform: inView1 ? "translateX(0)" : "translateX(36px)", transition: "all 0.9s 0.15s cubic-bezier(0.22,1,0.36,1)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              <div style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "3/4", gridRow: "span 2", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" }}>
                <img src="https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?w=600&q=80" alt="Logistics Center" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 8px 28px rgba(0,0,0,0.08)" }}>
                <img src="https://images.unsplash.com/photo-1567606816596-e01b9a8e0c47?w=600&q=80" alt="FMCG Stocks" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ borderRadius: 18, overflow: "hidden", aspectRatio: "4/3", boxShadow: "0 8px 28px rgba(0,0,0,0.08)" }}>
                <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80" alt="Mumbai Freight Infrastructure" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div ref={s2} style={{ background: "#FFFFFF", padding: "90px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56, opacity: inView2 ? 1 : 0, transform: inView2 ? "translateY(0)" : "translateY(24px)", transition: "all 0.7s" }}>
            <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Our Principles</span>
            <h2 style={{ fontSize: "clamp(26px,3vw,42px)", fontWeight: 800, letterSpacing: -1.5, marginTop: 14, color: "#1C1008", fontFamily: AF }}>The Values We Trade By</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 18 }}>
            {values.map((v, i) => (
              <div key={i} style={{
                opacity: inView2 ? 1 : 0, transform: inView2 ? "translateY(0)" : "translateY(36px)",
                transition: `all 0.7s ${i * 0.1}s`,
                background: "#FAFAF8", border: "1.5px solid rgba(0,0,0,0.07)", borderRadius: 18, padding: "34px 28px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)", textAlign: "center",
              }}>
                <div style={{ fontSize: 42, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1C1008", marginBottom: 10, fontFamily: AF }}>{v.title}</h3>
                <p style={{ color: "#6B5A4E", fontSize: 14, lineHeight: 1.75, fontFamily: AF }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div ref={s4} style={{ background: "#fff", padding: "90px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="about-page-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
            <div style={{ opacity: inView4 ? 1 : 0, transform: inView4 ? "translateX(0)" : "translateX(-36px)", transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)" }}>
              <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 52px rgba(0,0,0,0.1)", aspectRatio: "4/3" }}>
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" alt="Bulk Fulfillment" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 14 }}>
                <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,0.08)", aspectRatio: "4/3" }}>
                  <img src="https://images.unsplash.com/photo-1580913428735-bd3c269d6a82?w=400&q=80" alt="Inventory Units" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ borderRadius: 14, overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,0.08)", aspectRatio: "4/3" }}>
                  <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=400&q=80" alt="Supply Network" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              </div>
            </div>
            <div style={{ opacity: inView4 ? 1 : 0, transform: inView4 ? "translateX(0)" : "translateX(36px)", transition: "all 0.9s 0.15s cubic-bezier(0.22,1,0.36,1)" }}>
              <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Our Infrastructure</span>
              <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: -1.5, margin: "14px 0 20px", color: "#1C1008", fontFamily: AF }}>Built to Handle Scale at Every Level</h2>
              <p style={{ color: "#6B5A4E", lineHeight: 1.85, marginBottom: 18, fontSize: 15, fontFamily: AF }}>Our primary infrastructure frameworks include highly optimized setups linked explicitly through regional distribution grids across Mumbai and matching national merchant ports.</p>
              <p style={{ color: "#6B5A4E", lineHeight: 1.85, marginBottom: 28, fontSize: 15, fontFamily: AF }}>Our specialized workflow application logs stock level performance instantly so wholesale channels understand product ready times directly.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { icon: "🏭", text: "Elite logistical hub networks situated inside Mumbai" },
                  { icon: "📡", text: "Real-time stock level logging and status metrics" },
                  { icon: "🚛", text: "Authorized 3PL regional distribution transport fleet" },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", padding: "14px 16px", background: "#FAFAF8", borderRadius: 12, border: "1px solid rgba(0,0,0,0.06)" }}>
                    <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                    <span style={{ color: "#4A3828", fontSize: 14, fontWeight: 500, lineHeight: 1.5, fontFamily: AF }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ background: "linear-gradient(135deg,rgba(255,107,53,0.07),rgba(255,159,28,0.05))", border: "1px solid rgba(255,107,53,0.12)", margin: "0 40px 80px", borderRadius: 20, padding: "48px 40px", textAlign: "center" }}>
        <h3 style={{ fontSize: "clamp(22px,2.5vw,34px)", fontWeight: 800, letterSpacing: -1.2, color: "#1C1008", marginBottom: 12, fontFamily: AF }}>Ready to become a BigSale partner?</h3>
        <p style={{ color: "#6B5A4E", fontSize: 15, marginBottom: 28, fontFamily: AF }}></p>
        <button onClick={() => { setPage("quote"); window.scrollTo(0, 0); }} style={{ background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", color: "#fff", border: "none", borderRadius: 13, padding: "16px 38px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 24px rgba(255,107,53,0.35)", fontFamily: AF, transition: "all 0.2s" }}
          onMouseEnter={e => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 12px 36px rgba(255,107,53,0.5)"; }}
          onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 6px 24px rgba(255,107,53,0.35)"; }}>
          Request a Quote →
        </button>
      </div>
    </section>
  );
}

// ─── Contact Page ────────────────────────────────────────────────────────────
function ContactPage({ setPage }) {
  const [ref, inView] = useInView();
  const [contactForm, setContactForm] = useState({ name: "", email: "", subject: "", text: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleContactChange = e => setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    if (contactForm.name && contactForm.email && contactForm.text) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Contact Inquiry from ${contactForm.name}`,
            ...contactForm
          }),
        });
        
        if (response.ok) {
          setFormSubmitted(true);
        } else {
          alert("Failed to send message. Please try again later.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("An error occurred while submitting the form.");
      }
    }
  };

  const fieldStyle = {
    width: "100%", background: "#FAFAF8", border: "1.5px solid rgba(0,0,0,0.1)",
    borderRadius: 10, padding: "13px 16px", color: "#1C1008", fontSize: 14,
    outline: "none", transition: "all 0.2s", fontFamily: AF, marginBottom: 16
  };

  return (
    <section style={{ minHeight: "100vh", background: "#FAFAF8", paddingTop: 72, fontFamily: AF }}>
      <div style={{ background: "#F8F3EE", padding: "80px 40px 90px", position: "relative", overflow: "hidden", textAlign: "center" }}>
        <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=1200&q=80" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.15 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(248,243,238,0.9) 0%, rgba(248,243,238,0.82) 60%, rgba(248,243,238,0.9) 100%)" }} />
        <div style={{ position: "relative", maxWidth: 640, margin: "0 auto" }}>
          <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Contact Systems</span>
          <h1 style={{ fontSize: "clamp(34px,4.5vw,58px)", fontWeight: 800, letterSpacing: -2.5, margin: "16px 0 18px", color: "#1C1008", fontFamily: AF }}>We'd Love to <span style={{ color: "#FF6B35" }}>Hear From You</span></h1>
          <p style={{ color: "#6B5A4E", fontSize: 15, lineHeight: 1.8, marginBottom: 32, fontFamily: AF }}>Connect directly with our procurement help desk using our communication channel below. We verify and respond within 4 trade hours.</p>
        </div>
      </div>

      <div ref={ref} style={{ 
          maxWidth: 720, margin: "0 auto", padding: "60px 40px 100px",
          opacity: inView ? 1 : 0, transform: inView ? "translateY(0)" : "translateY(32px)", transition: "all 0.8s" 
        }}>
        {formSubmitted ? (
          <div style={{ textAlign: "center", padding: "60px 24px", background: "#fff", borderRadius: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.05)", border: "1px solid rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>✉️</div>
            <h3 style={{ fontSize: 24, fontWeight: 800, color: "#1C1008", marginBottom: 12 }}>Message Logged</h3>
            <p style={{ color: "#6B5A4E", fontSize: 15, lineHeight: 1.6, maxWidth: 440, margin: "0 auto 24px" }}>
              Thank you, <strong>{contactForm.name}</strong>. Your communication log has been routed to our Mumbai response matrix.
            </p>
            <button onClick={() => { setFormSubmitted(false); setContactForm({ name: "", email: "", subject: "", text: "" }); }} style={{ background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", color: "#fff", border: "none", borderRadius: 10, padding: "12px 24px", fontWeight: 700, cursor: "pointer", fontSize: 13 }}>
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} style={{ background: "#fff", borderRadius: 20, border: "1.5px solid rgba(0,0,0,0.08)", padding: "40px 36px", boxShadow: "0 8px 36px rgba(0,0,0,0.06)" }}>
            <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.8, marginBottom: 24, color: "#1C1008" }}>Corporate Contact Portal</h2>
            
            <label style={{ fontSize: 11, fontWeight: 700, color: "#A09080", letterSpacing: 1.2, display: "block", marginBottom: 7, textTransform: "uppercase" }}>Corporate Name *</label>
            <input type="text" name="name" required value={contactForm.name} onChange={handleContactChange} placeholder="e.g., Enterprise Name" style={fieldStyle}
              onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.background = "#fff"; }} onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.background = "#FAFAF8"; }} />

            <label style={{ fontSize: 11, fontWeight: 700, color: "#A09080", letterSpacing: 1.2, display: "block", marginBottom: 7, textTransform: "uppercase" }}>Official Email *</label>
            <input type="email" name="email" required value={contactForm.email} onChange={handleContactChange} placeholder="corporate@domain.com" style={fieldStyle}
              onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.background = "#fff"; }} onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.background = "#FAFAF8"; }} />

            <label style={{ fontSize: 11, fontWeight: 700, color: "#A09080", letterSpacing: 1.2, display: "block", marginBottom: 7, textTransform: "uppercase" }}>Subject</label>
            <input type="text" name="subject" value={contactForm.subject} onChange={handleContactChange} placeholder="Inquiry parameters" style={fieldStyle}
              onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.background = "#fff"; }} onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.background = "#FAFAF8"; }} />

            <label style={{ fontSize: 11, fontWeight: 700, color: "#A09080", letterSpacing: 1.2, display: "block", marginBottom: 7, textTransform: "uppercase" }}>Communication Content *</label>
            <textarea name="text" required rows={5} value={contactForm.text} onChange={handleContactChange} placeholder="Please provide item lines, bulk questions, or supply region setups..." style={{ ...fieldStyle, resize: "vertical" }}
              onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.background = "#fff"; }} onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.background = "#FAFAF8"; }} />

            <button type="submit" style={{ width: "100%", background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", color: "#fff", border: "none", borderRadius: 12, padding: "16px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 24px rgba(255,107,53,0.38)", transition: "all 0.2s" }}
              onMouseEnter={e => e.target.style.transform = "translateY(-1px)"} onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
              Transmit Secure Message →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Quote Page (Improved) ───────────────────────────────────────────────────
function QuotePage({ setPage }) {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "", categories: [], volume: "", message: "" });
  const [sent, setSent] = useState(false);
  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async () => {
    if (form.name && form.email && form.type) {
      try {
        // Change button text or show a loading state here if desired
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            _subject: `New Quote Request from ${form.company || form.name}`,
            ...form
          }),
        });

        if (response.ok) {
          setSent(true);
        } else {
          alert("Failed to send quote request. Please try again later.");
        }
      } catch (error) {
        console.error("Quote submission error:", error);
        alert("An error occurred while submitting the form.");
      }
    } else {
      alert("Please fill in all required fields (Name, Company, Email, Business Type).");
    }
  };

  const inputBase = {
    width: "100%", background: "#FAFAF8", border: "1.5px solid rgba(0,0,0,0.1)",
    borderRadius: 10, padding: "13px 16px", color: "#1C1008", fontSize: 14,
    outline: "none", transition: "border-color 0.18s, box-shadow 0.18s", fontFamily: AF,
  };
  const labelStyle = { fontSize: 11, fontWeight: 700, color: "#A09080", letterSpacing: 1.2, display: "block", marginBottom: 7, textTransform: "uppercase", fontFamily: AF };

  return (
    <section style={{ minHeight: "100vh", background: "#FAFAF8", paddingTop: 72, fontFamily: AF }}>
      <div style={{ background: "#F8F3EE", padding: "64px 40px 72px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.08) 0%, transparent 70%)" }} />
        <div style={{ position: "relative", maxWidth: 580, margin: "0 auto" }}>
          <span style={{ color: "#FF6B35", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", fontFamily: AF }}>Get a Quote</span>
          <h1 style={{ fontSize: "clamp(30px,4vw,52px)", fontWeight: 800, letterSpacing: -2, margin: "14px 0 14px", color: "#1C1008", fontFamily: AF }}>Tell Us What <span style={{ color: "#FF6B35" }}>You Need</span></h1>
          <p style={{ color: "#6B5A4E", fontSize: 15, lineHeight: 1.75, fontFamily: AF }}>Fill in the form below and our wholesale desk will send verified pricing metrics</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "52px 40px 80px" }}>
        {sent ? (
          <div style={{ textAlign: "center", padding: "80px 32px", background: "#fff", borderRadius: 22, border: "1.5px solid rgba(0,0,0,0.08)", boxShadow: "0 12px 48px rgba(0,0,0,0.07)", maxWidth: 600, margin: "0 auto" }}>
            <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
            <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: -1.2, marginBottom: 12, color: "#1C1008", fontFamily: AF }}>Quote Request Sent!</h2>
            <p style={{ color: "#6B5A4E", fontSize: 15, lineHeight: 1.75, maxWidth: 420, margin: "0 auto 28px", fontFamily: AF }}>
              Thanks <strong style={{ color: "#1C1008" }}>{form.name}</strong>! Our distribution agents will forward itemized bulk terms to <span style={{ color: "#FF6B35", fontWeight: 600 }}>{form.email}</span> swiftly.
            </p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              <button onClick={() => setSent(false)} style={{ background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", color: "#fff", border: "none", borderRadius: 11, padding: "13px 26px", fontWeight: 700, cursor: "pointer", fontSize: 14, fontFamily: AF }}>Submit Another</button>
              <button onClick={() => { setPage("contact"); window.scrollTo(0, 0); }} style={{ background: "#FAFAF8", color: "#1C1008", border: "1.5px solid rgba(0,0,0,0.1)", borderRadius: 11, padding: "13px 26px", fontWeight: 600, cursor: "pointer", fontSize: 14, fontFamily: AF }}>Back to Contact</button>
            </div>
          </div>
        ) : (
          <div className="quote-layout" style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 28, alignItems: "start" }}>

            {/* ── Form ── */}
            <div style={{ background: "#fff", borderRadius: 20, border: "1.5px solid rgba(0,0,0,0.08)", padding: "40px 38px", boxShadow: "0 8px 36px rgba(0,0,0,0.06)" }}>
              <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.8, marginBottom: 6, color: "#1C1008", fontFamily: AF }}>Your Details</h2>
              <p style={{ color: "#A09080", fontSize: 13, marginBottom: 32, fontFamily: AF }}>Fields marked * are required. Security logs are fully verified.</p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[{ n: "name", l: "Full Name *", p: "Corporate Buyer" }, { n: "company", l: "Company Name *", p: "Your Business" }].map(f => (
                  <div key={f.n}>
                    <label style={labelStyle}>{f.l}</label>
                    <input name={f.n} value={form[f.n]} onChange={handle} placeholder={f.p} style={inputBase}
                      onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.boxShadow = "0 0 0 3px rgba(255,107,53,0.1)"; e.target.style.background = "#fff"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.boxShadow = "none"; e.target.style.background = "#FAFAF8"; }} />
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                {[{ n: "email", l: "Email *", p: "you@company.com", t: "email" }, { n: "phone", l: "Phone", p: "Official Contact Number" }].map(f => (
                  <div key={f.n}>
                    <label style={labelStyle}>{f.l}</label>
                    <input name={f.n} type={f.t || "text"} value={form[f.n]} onChange={handle} placeholder={f.p} style={inputBase}
                      onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.boxShadow = "0 0 0 3px rgba(255,107,53,0.1)"; e.target.style.background = "#fff"; }}
                      onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.boxShadow = "none"; e.target.style.background = "#FAFAF8"; }} />
                  </div>
                ))}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={labelStyle}>Business Type *</label>
                  <select name="type" value={form.type} onChange={handle} style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                    onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.boxShadow = "0 0 0 3px rgba(255,107,53,0.1)"; e.target.style.background = "#fff"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.boxShadow = "none"; e.target.style.background = "#FAFAF8"; }}>
                    <option value="">Select type…</option>
                    <option>Retailer</option><option>Wholesaler</option><option>Exporter</option><option>E-Commerce Seller</option><option>Modern Trade Chain</option><option>Other</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Monthly Volume (₹)</label>
                  <select name="volume" value={form.volume} onChange={handle} style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                    onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.boxShadow = "0 0 0 3px rgba(255,107,53,0.1)"; e.target.style.background = "#fff"; }}
                    onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.boxShadow = "none"; e.target.style.background = "#FAFAF8"; }}>
                    <option value="">Select range…</option>
                    <option>₹50K – ₹2 Lakh</option><option>₹2L – ₹10 Lakh</option><option>₹10L – ₹50 Lakh</option><option>₹50L+</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={labelStyle}>Product Categories (select all that apply)</label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Beverages", "Food & Snacks"].map(cat => {
                    const sel = form.categories.includes(cat);
                    return (
                      <div key={cat} onClick={() => setForm(f => ({ ...f, categories: sel ? f.categories.filter(c => c !== cat) : [...f.categories, cat] }))} style={{
                        padding: "8px 14px", borderRadius: 8, cursor: "pointer", fontSize: 13, fontWeight: 500,
                        background: sel ? "linear-gradient(135deg,#FF6B35,#FF9F1C)" : "#FAFAF8",
                        color: sel ? "#fff" : "#6B5A4E",
                        border: sel ? "1.5px solid #FF6B35" : "1.5px solid rgba(0,0,0,0.1)",
                        transition: "all 0.18s", fontFamily: AF,
                      }}>{cat}</div>
                    );
                  })}
                </div>
              </div>

              <div style={{ marginBottom: 28 }}>
                <label style={labelStyle}>Specific Requirements</label>
                <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us about specific SKUs, volume requirements, desired delivery ports around Mumbai or matching parameters..." rows={4} style={{ ...inputBase, resize: "vertical", lineHeight: 1.75 }}
                  onFocus={e => { e.target.style.borderColor = "#FF6B35"; e.target.style.boxShadow = "0 0 0 3px rgba(255,107,53,0.1)"; e.target.style.background = "#fff"; }}
                  onBlur={e => { e.target.style.borderColor = "rgba(0,0,0,0.1)"; e.target.style.boxShadow = "none"; e.target.style.background = "#FAFAF8"; }} />
              </div>

              <button onClick={submit} style={{ width: "100%", background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", color: "#fff", border: "none", borderRadius: 12, padding: "16px", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 6px 24px rgba(255,107,53,0.38)", transition: "all 0.2s", fontFamily: AF }}
                onMouseEnter={e => { e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 12px 36px rgba(255,107,53,0.52)"; }}
                onMouseLeave={e => { e.target.style.transform = "translateY(0)"; e.target.style.boxShadow = "0 6px 24px rgba(255,107,53,0.38)"; }}>
                Submit Quote Request →
              </button>
              <p style={{ textAlign: "center", color: "#C0B0A0", fontSize: 12, marginTop: 14, fontFamily: AF }}>🔒 Logistics records are fully encrypted and confidential.</p>
            </div>

            {/* ── Sidebar ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {/* What happens next */}
              <div style={{ background: "#fff", borderRadius: 18, border: "1.5px solid rgba(0,0,0,0.08)", padding: "28px 26px", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#1C1008", marginBottom: 22, fontFamily: AF }}>What Happens Next?</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  {[
                    { n: "01", title: "Review Matrix", desc: "Our wholesale log evaluates your category requirements and checks availability records directly." },
                    { n: "02", title: "Custom Quote Output", desc: "An itemized wholesale sheet containing exact tier discount rates maps directly to your inbox." },
                    { n: "03", title: "Account Onboarding", desc: "Replenishment professionals arrange priority access credentials to secure our live bulk order frameworks." },
                  ].map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "#fff", flexShrink: 0, fontFamily: AF }}>{step.n}</div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: "#1C1008", marginBottom: 4, fontFamily: AF }}>{step.title}</div>
                        <div style={{ fontSize: 12, color: "#6B5A4E", lineHeight: 1.65, fontFamily: AF }}>{step.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Why BigSale */}
              <div style={{ background: "rgba(255,107,53,0.06)", borderRadius: 18, border: "1.5px solid rgba(255,107,53,0.16)", padding: "26px 24px" }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1C1008", marginBottom: 18, fontFamily: AF }}>Why businesses choose BigSale</h3>
                {[
                  "Direct trade stock access loops",
                  "Optimized structural volume metrics",
                  "48-hour clear dispatch SLA promises",
                  "Verified corporate credit pathways",
                  "Mumbai-based core logistics tracking",
                ].map((pt, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: i < 4 ? 12 : 0 }}>
                    <span style={{ color: "#FF6B35", fontSize: 14, fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                    <span style={{ color: "#4A3828", fontSize: 13, fontFamily: AF }}>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Products Page ────────────────────────────────────────────────────────────
function ProductsPage() {
  // Your explicit local image imports
  const localBrands = [
    { name: "Nestlé", file: nestleImg },
    { name: "Coca-Cola", file: cocaColaImg },
    { name: "Pepsi", file: pepsiImg },
    { name: "Britannia", file: britanniaImg },
    { name: "ITC", file: itcImg },
    { name: "Kinder", file: kinderImg },
    { name: "Schweppes", file: schweppesImg },
    { name: "Red Bull", file: redbullImg },
    { name: "Lay's", file: laysImg },
    { name: "Tropicana", file: tropicanaImg },
    { name: "Lahori Zeera", file: lahoriImg },
  ];

  // Split the brands dynamically into two groups for left/right (or top/bottom on mobile)
  const midPoint = Math.ceil(localBrands.length / 2);
  const leftBrands = localBrands.slice(0, midPoint);
  const rightBrands = localBrands.slice(midPoint);

  // Reusable function to render a floating bubble
  const renderLogoBubble = (brand, index) => {
    // Dynamically assign one of your global float animations (float0 to float11)
    const anim = `float${index % 12}`; 
    const duration = `${5 + (index % 4)}s`;
    const delay = `${(index % 5) * 0.3}s`;

    return (
      <div key={brand.name} style={{
        animation: `${anim} ${duration} ease-in-out infinite`,
        animationDelay: delay,
        zIndex: 5
      }}>
        <div style={{
          // Use clamp() to automatically resize bubbles based on screen width
          width: "clamp(75px, 8vw, 110px)",
          height: "clamp(75px, 8vw, 110px)",
          borderRadius: "clamp(16px, 2vw, 24px)",
          background: "#ffffff",
          border: `1.5px solid rgba(0,0,0,0.08)`,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          boxShadow: "0 8px 24px rgba(0,0,0,0.06)",
          cursor: "default", transition: "transform 0.3s, box-shadow 0.3s", padding: 8
        }}
          onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.boxShadow = `0 14px 32px rgba(0,0,0,0.12)`; }}
          onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; }}>
          <img
            src={brand.file}
            alt={brand.name}
            style={{ width: "85%", height: "85%", objectFit: "contain", borderRadius: 6, background: "#fff" }}
            onError={e => { e.target.style.display = "none"; }}
          />
        </div>
      </div>
    );
  };

  return (
    <section style={{ minHeight: "100vh", background: "#F8F3EE", paddingTop: 72, overflow: "hidden", fontFamily: AF }}>
      
      {/* Dynamic Layout CSS mapped specifically for the Hero */}
      <style>{`
        .hero-dynamic-layout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 90vh;
          max-width: 1600px;
          margin: 0 auto;
          padding: 40px 20px;
          gap: 40px;
          position: relative;
          z-index: 2;
        }
        .hero-logo-cloud {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: clamp(16px, 3vw, 32px);
          flex: 1;
          max-width: 450px;
        }
        /* Mobile adjustment: Stack vertically to prevent squeezing */
        @media (max-width: 1024px) {
          .hero-dynamic-layout {
            flex-direction: column;
            justify-content: center;
            gap: 40px;
            padding: 60px 20px;
          }
          .hero-logo-cloud {
            max-width: 100%;
          }
        }
      `}</style>

      <div style={{ position: "relative", background: "#F0EBE4" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255,107,53,0.1) 0%, transparent 65%)", zIndex: 1 }} />

        {/* Structured Flex Layout */}
        <div className="hero-dynamic-layout">
          
          {/* Left / Top Cloud */}
          <div className="hero-logo-cloud">
            {leftBrands.map((brand, i) => renderLogoBubble(brand, i))}
          </div>

          {/* Central Protected Card */}
          <div style={{ flex: "0 0 auto", zIndex: 10, textAlign: "center", maxWidth: 520, padding: "0 16px" }}>
            <div style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(24px)", borderRadius: 24, padding: "38px 44px", border: "1.5px solid rgba(0,0,0,0.08)", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "rgba(255,107,53,0.1)", border: "1px solid rgba(255,107,53,0.25)", borderRadius: 100, padding: "6px 14px", marginBottom: 22 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FF6B35", display: "inline-block", animation: "pulse 2s infinite" }} />
                <span style={{ color: "#C94E1A", fontSize: 10, fontWeight: 700, letterSpacing: 1.5, fontFamily: AF }}>10+ BRAND AUTHORISATIONS</span>
              </div>
              <h1 style={{ fontSize: "clamp(26px,3.5vw,40px)", fontWeight: 800, letterSpacing: -1.8, color: "#1C1008", lineHeight: 1.1, marginBottom: 14, fontFamily: AF }}>
                Dealing With The<br />
                <span style={{ background: "linear-gradient(135deg,#FF6B35,#FF9F1C)", backgroundSize: "200% auto", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", animation: "shimmer 3s linear infinite" }}>Best Brands</span><br />
                In India
              </h1>
              <p style={{ color: "#6B5A4E", fontSize: 14, lineHeight: 1.75, marginBottom: 26, fontFamily: AF }}>Authorized wholesale connection matrix based entirely in Mumbai. Genuine tracking lines with full brand authenticity verification.</p>
            </div>
          </div>

          {/* Right / Bottom Cloud */}
          <div className="hero-logo-cloud">
            {rightBrands.map((brand, i) => renderLogoBubble(brand, i + midPoint))}
          </div>

        </div>
      </div>

      {/* Stats Strip */}
      <div style={{ background: "#fff", borderTop: "1px solid rgba(0,0,0,0.07)", borderBottom: "1px solid rgba(0,0,0,0.07)", padding: "36px 40px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 28 }}>
          {[["10+", "Partner Brands"], ["5,000+", "Total SKUs"], ["100%", "Authentic"], ["Instant", "Dispatch"]].map(([v, l]) => (
            <div key={l} style={{ textAlign: "center" }}>
              <div style={{ fontSize: 34, fontWeight: 800, color: "#FF6B35", fontFamily: AF }}>{v}</div>
              <div style={{ color: "#A09080", fontSize: 12, marginTop: 4, fontFamily: AF }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Grid Portfolio Matrix */}
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 40px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{ fontSize: "clamp(26px,3vw,40px)", fontWeight: 800, letterSpacing: -1.8, color: "#1C1008", marginBottom: 12, fontFamily: AF }}>Our Brand Portfolio Matrix</h2>
          <p style={{ color: "#6B5A4E", fontSize: 14, lineHeight: 1.75, maxWidth: 520, margin: "0 auto", fontFamily: AF }}>Direct logistical distribution frameworks for retail ready units with secure safety paths.</p>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
          {localBrands.map((brand, i) => (
            <div key={i} style={{ background: "#fff", border: "1.5px solid rgba(0,0,0,0.08)", borderRadius: 14, padding: "16px 22px", display: "flex", alignItems: "center", gap: 12, transition: "all 0.25s", cursor: "default", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,107,53,0.04)"; e.currentTarget.style.borderColor = "rgba(255,107,53,0.3)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(255,107,53,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "#fff"; e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.04)"; }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: "#FAFAF8", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, padding: 4 }}>
                <img src={brand.file} alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} onError={e => e.target.style.display = "none"} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#1C1008", fontFamily: AF }}>{brand.name}</div>
                <div style={{ fontSize: 10, color: "#FF6B35", fontWeight: 600, marginTop: 1, fontFamily: AF }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Home Page ────────────────────────────────────────────────────────────────
function HomePage({ setPage }) {
  return (
    <>
      <Hero setPage={setPage} />
      <About />
      <WhoWeServe />
      <Categories />
      <WhyUs />
      <CTABanner setPage={setPage} />
    </>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh", fontFamily: AF }}>
      <Navbar page={page} setPage={setPage} />
      {page === "home" ? <HomePage setPage={setPage} /> :
        page === "about" ? <AboutPage setPage={setPage} /> :
          page === "contact" ? <ContactPage setPage={setPage} /> :
            page === "products" ? <ProductsPage /> :
              page === "quote" ? <QuotePage setPage={setPage} /> :
                <HomePage setPage={setPage} />}
      <Footer setPage={setPage} />
    </div>
  );
}