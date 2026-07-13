import React, { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const revealRefs = useRef([])

  const brandLogos = [
    { name: "Microsoft", icon: "🪟" },
    { name: "IBM", icon: "🔵" },
    { name: "Amazon", icon: "📦" },
    { name: "eBay", icon: "🛒" },
    { name: "Dropbox", icon: "📂" },
  ]

  const trendingJobs = [
    { id: 1, color: "#4C5FD5", stage: "Interview", title: "Software Engineer", note: "Applied · May 8, 2026" },
    { id: 2, color: "#F2A93B", stage: "Under Review", title: "Backend Developer", note: "Applied · May 6, 2026" },
    { id: 3, color: "#2FA968", stage: "Submitted", title: "Java Developer", note: "Applied · May 4, 2026" },
  ]

  const suggestedTags = [
    "Applied", "Under Review", "Interview", "Rejected",
    "Offer Received", "Follow Up", "Accepted", "Wishlist",
  ]

  const teamMembers = [
    { name: "Yamon Bunce", role: "Talent Action Manager", avatar: "YB", color: "#F2A93B" },
    { name: "Benedikt Safiyudin", role: "New York · Therapy Trainer", avatar: "BS", color: "#4C5FD5" },
    { name: "Luis Calvillo", role: "London · Trainer Assistant", avatar: "LC", color: "#E8604C" },
  ]

  const railStops = [
    { label: "Applied", desc: "Log the role, company, and link the moment you hit submit.", color: "#4C5FD5" },
    { label: "Screening", desc: "Track recruiter calls and note what they asked.", color: "#8A7CE8" },
    { label: "Interview", desc: "Keep every round, interviewer, and prep note in one thread.", color: "#F2A93B" },
    { label: "Offer", desc: "Compare offers side by side before you decide.", color: "#2FA968" },
  ]

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('sw-in')
        })
      },
      { threshold: 0.15 }
    )
    revealRefs.current.forEach((el) => el && obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el)
  }

  return (
    <div className="sw-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        .sw-page {
          --ink: #12141C;
          --ink-soft: #2A2D3A;
          --paper: #F5F2EA;
          --paper-dim: #EAE6DA;
          --line: #DDD8C8;
          --indigo: #4C5FD5;
          --amber: #F2A93B;
          --green: #2FA968;
          --coral: #E8604C;
          --muted: #7A7568;
          font-family: 'Inter', sans-serif;
          background: var(--paper);
          color: var(--ink);
          overflow-x: hidden;
        }
        .sw-page * { box-sizing: border-box; }
        .sw-mono {
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .sw-display {
          font-family: 'Fraunces', serif;
        }

        /* reveal-on-scroll */
        .sw-reveal { opacity: 0; transform: translateY(24px); transition: opacity .7s ease, transform .7s ease; }
        .sw-reveal.sw-in { opacity: 1; transform: translateY(0); }

        /* ---------- HERO ---------- */
        .sw-hero {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 48px;
          align-items: center;
          max-width: 1240px;
          margin: 0 auto;
          padding: 100px 32px 80px;
        }
        .sw-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: var(--indigo);
          margin-bottom: 22px;
        }
        .sw-eyebrow::before {
          content: '';
          width: 18px; height: 1px;
          background: var(--indigo);
          display: inline-block;
        }
        .sw-hero__title {
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1.06;
          font-weight: 600;
          letter-spacing: -0.01em;
          margin: 0 0 22px;
        }
        .sw-hero__title em {
          font-style: italic;
          font-weight: 500;
          color: var(--indigo);
        }
        .sw-hero__sub {
          font-size: 17px;
          line-height: 1.6;
          color: var(--muted);
          max-width: 460px;
          margin: 0 0 34px;
        }
        .sw-hero__ctas { display: flex; gap: 14px; align-items: center; flex-wrap: wrap; }
        .sw-btn-primary {
          background: var(--ink);
          color: var(--paper);
          border: none;
          padding: 14px 26px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: transform .2s ease, background .2s ease;
        }
        .sw-btn-primary:hover { background: var(--indigo); transform: translateY(-2px); }
        .sw-btn-ghost {
          background: transparent;
          border: 1px solid var(--line);
          color: var(--ink);
          padding: 14px 22px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: border-color .2s ease, transform .2s ease;
        }
        .sw-btn-ghost:hover { border-color: var(--ink); transform: translateY(-2px); }
        .sw-btn-primary:focus-visible, .sw-btn-ghost:focus-visible {
          outline: 2px solid var(--indigo); outline-offset: 3px;
        }

        /* ---------- SIGNATURE: STAGE RAIL ---------- */
        .sw-rail-card {
          background: var(--ink);
          border-radius: 24px;
          padding: 36px 30px;
          position: relative;
          overflow: hidden;
        }
        .sw-rail-card__label {
          color: #8A8672;
          font-size: 11px;
          margin-bottom: 26px;
        }
        .sw-rail {
          position: relative;
          padding-left: 22px;
        }
        .sw-rail::before {
          content: '';
          position: absolute;
          left: 5px; top: 6px; bottom: 6px;
          width: 2px;
          background: linear-gradient(to bottom, var(--indigo), var(--amber), var(--green));
          transform: scaleY(0);
          transform-origin: top;
          animation: sw-draw 1.4s ease forwards .3s;
        }
        @keyframes sw-draw { to { transform: scaleY(1); } }
        .sw-rail__stop {
          position: relative;
          padding: 0 0 30px 22px;
          opacity: 0;
          animation: sw-fadein .5s ease forwards;
        }
        .sw-rail__stop:nth-child(1) { animation-delay: .5s; }
        .sw-rail__stop:nth-child(2) { animation-delay: .9s; }
        .sw-rail__stop:nth-child(3) { animation-delay: 1.3s; }
        .sw-rail__stop:nth-child(4) { animation-delay: 1.7s; }
        .sw-rail__stop:last-child { padding-bottom: 0; }
        @keyframes sw-fadein { from { opacity: 0; transform: translateX(-6px); } to { opacity: 1; transform: translateX(0); } }
        .sw-rail__dot {
          position: absolute;
          left: -28px; top: 2px;
          width: 12px; height: 12px;
          border-radius: 50%;
          border: 2px solid var(--ink);
          box-shadow: 0 0 0 2px currentColor;
        }
        .sw-rail__label-text {
          font-size: 15px;
          font-weight: 600;
          color: var(--paper);
          margin-bottom: 4px;
        }
        .sw-rail__desc {
          font-size: 13px;
          color: #A6A28E;
          line-height: 1.5;
          max-width: 260px;
        }
        .sw-rail-glow {
          position: absolute;
          width: 300px; height: 300px;
          background: radial-gradient(circle, rgba(76,95,213,0.25), transparent 70%);
          top: -100px; right: -100px;
          pointer-events: none;
        }

        /* ---------- BRAND MARQUEE ---------- */
        .sw-marquee-wrap {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          padding: 26px 0;
          overflow: hidden;
        }
        .sw-marquee {
          display: flex;
          gap: 64px;
          width: max-content;
          animation: sw-scroll 26s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) { .sw-marquee { animation: none; } }
        @keyframes sw-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        .sw-marquee__item {
          display: flex; align-items: center; gap: 10px;
          font-size: 14px; color: var(--muted); white-space: nowrap;
        }
        .sw-marquee__item span:first-child { font-size: 20px; }

        /* ---------- SECTION SHELL ---------- */
        .sw-section {
          max-width: 1240px;
          margin: 0 auto;
          padding: 100px 32px;
        }
        .sw-section__head { max-width: 620px; margin-bottom: 56px; }
        .sw-section__eyebrow {
          font-size: 11px; color: var(--indigo); margin-bottom: 14px; display: block;
        }
        .sw-section__title {
          font-family: 'Fraunces', serif;
          font-size: clamp(28px, 3.4vw, 40px);
          font-weight: 600;
          line-height: 1.15;
          margin: 0 0 12px;
        }
        .sw-section__desc { color: var(--muted); font-size: 15.5px; line-height: 1.6; margin: 0; }
        .sw-section__header-row {
          display: flex; justify-content: space-between; align-items: flex-end;
          margin-bottom: 44px; gap: 24px; flex-wrap: wrap;
        }
        .sw-link {
          font-size: 14px; font-weight: 600; color: var(--ink);
          cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
          background: none; border: none; padding: 0;
          border-bottom: 1px solid var(--ink);
          transition: color .2s ease, border-color .2s ease;
        }
        .sw-link:hover { color: var(--indigo); border-color: var(--indigo); }

        /* ---------- HOW IT WORKS (rail stops as cards) ---------- */
        .sw-how { background: var(--paper-dim); }
        .sw-how__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--line);
          border: 1px solid var(--line);
          border-radius: 18px;
          overflow: hidden;
        }
        .sw-how__card {
          background: var(--paper-dim);
          padding: 34px 26px;
          transition: background .25s ease;
        }
        .sw-how__card:hover { background: var(--paper); }
        .sw-how__dot {
          width: 10px; height: 10px; border-radius: 50%;
          margin-bottom: 22px;
        }
        .sw-how__stage {
          font-size: 11px; color: var(--muted); margin-bottom: 10px; display: block;
        }
        .sw-how__title { font-size: 17px; font-weight: 600; margin: 0 0 10px; }
        .sw-how__desc { font-size: 13.5px; color: var(--muted); line-height: 1.55; margin: 0; }

        /* ---------- TRENDING / APPLICATIONS ---------- */
        .sw-jobs-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .sw-job-card {
          background: var(--paper);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 26px;
          transition: transform .25s ease, box-shadow .25s ease;
        }
        .sw-job-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -20px rgba(18,20,28,0.25); }
        .sw-job-card__top { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 22px; }
        .sw-job-card__pill {
          font-size: 10.5px; padding: 5px 10px; border-radius: 999px;
          color: #fff;
        }
        .sw-job-card__title { font-size: 17px; font-weight: 600; margin: 0 0 6px; }
        .sw-job-card__note { font-size: 13px; color: var(--muted); margin: 0; }

        /* ---------- INSIGHTS ---------- */
        .sw-insights {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .sw-insights__stat { display: flex; align-items: center; gap: 14px; margin-top: 26px; }
        .sw-avatars { display: flex; }
        .sw-mini-avatar {
          width: 34px; height: 34px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 12px; font-weight: 600;
          border: 2px solid var(--paper);
        }
        .sw-insights__stat-text { font-size: 13.5px; color: var(--muted); }
        .sw-tags { display: flex; flex-wrap: wrap; gap: 10px; }
        .sw-tag {
          font-size: 12.5px;
          padding: 9px 16px;
          border-radius: 999px;
          border: 1px solid var(--line);
          background: var(--paper);
          color: var(--ink-soft);
        }

        /* ---------- TEAM / ACTIVITY ---------- */
        .sw-team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .sw-team-card {
          display: flex; align-items: center; gap: 14px;
          background: var(--paper); border: 1px solid var(--line);
          border-radius: 16px; padding: 18px;
        }
        .sw-team-card__avatar {
          width: 42px; height: 42px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-weight: 600; font-size: 13px; flex-shrink: 0;
        }
        .sw-team-card__name { font-size: 14.5px; font-weight: 600; margin: 0 0 3px; }
        .sw-team-card__role { font-size: 12.5px; color: var(--muted); margin: 0; }

        /* ---------- TESTIMONIAL ---------- */
        .sw-testimonial {
          background: var(--ink);
          color: var(--paper);
          border-radius: 24px;
          padding: 64px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 40px;
          align-items: center;
        }
        .sw-quote-mark {
          font-family: 'Fraunces', serif;
          font-size: 64px; color: var(--amber); line-height: 1; display: block; margin-bottom: 10px;
        }
        .sw-testimonial__text {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 22px;
          line-height: 1.5;
          margin: 0 0 26px;
          max-width: 560px;
        }
        .sw-testimonial__author strong { display: block; font-size: 14px; }
        .sw-testimonial__author span { font-size: 12.5px; color: #A6A28E; }
        .sw-testimonial__photo {
          width: 84px; height: 84px; border-radius: 50%;
          background: linear-gradient(135deg, var(--indigo), var(--amber));
          display: flex; align-items: center; justify-content: center;
          font-family: 'Fraunces', serif; font-size: 22px; color: #fff;
        }

        /* ---------- CTA ---------- */
        .sw-cta {
          max-width: 1240px; margin: 0 auto 100px; padding: 0 32px;
        }
        .sw-cta__inner {
          background: var(--indigo);
          border-radius: 24px;
          padding: 64px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          flex-wrap: wrap;
          position: relative;
          overflow: hidden;
        }
        .sw-cta__inner::before {
          content: '';
          position: absolute; width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(255,255,255,0.12), transparent 70%);
          top: -150px; right: -100px;
        }
        .sw-cta__title {
          font-family: 'Fraunces', serif;
          font-size: clamp(24px, 3vw, 32px);
          color: #fff; margin: 0 0 8px; font-weight: 600;
        }
        .sw-cta__desc { color: rgba(255,255,255,0.8); margin: 0; font-size: 14.5px; max-width: 420px; }
        .sw-cta__btn {
          background: #fff; color: var(--ink); border: none;
          padding: 16px 30px; border-radius: 999px; font-weight: 600;
          font-size: 14px; cursor: pointer; transition: transform .2s ease;
          position: relative; z-index: 1;
        }
        .sw-cta__btn:hover { transform: translateY(-2px); }

        @media (max-width: 900px) {
          .sw-hero { grid-template-columns: 1fr; padding-top: 60px; }
          .sw-how__grid { grid-template-columns: 1fr 1fr; }
          .sw-jobs-grid { grid-template-columns: 1fr; }
          .sw-insights { grid-template-columns: 1fr; gap: 30px; }
          .sw-team-grid { grid-template-columns: 1fr; }
          .sw-testimonial { grid-template-columns: 1fr; padding: 40px; }
          .sw-cta__inner { padding: 40px; }
        }
        @media (max-width: 560px) {
          .sw-how__grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="sw-hero">
        <div>
          <span className="sw-eyebrow sw-mono">Application tracking, reimagined</span>
          <h1 className="sw-hero__title sw-display">
            Watch every application <em>move.</em>
          </h1>
          <p className="sw-hero__sub">
            StageWise follows each role from the moment you hit submit to the offer letter —
            so nothing slips through a spreadsheet again.
          </p>
          <div className="sw-hero__ctas">
            <button className="sw-btn-primary" onClick={() => navigate("/appli/register")}>
              Start tracking free
            </button>
            <button className="sw-btn-ghost" onClick={() => navigate("/listAppli")}>
              See your applications →
            </button>
          </div>
        </div>

        <div className="sw-rail-card">
          <div className="sw-rail-glow" />
          <span className="sw-rail-card__label sw-mono">Live · one application's journey</span>
          <div className="sw-rail">
            {railStops.map((stop) => (
              <div className="sw-rail__stop" key={stop.label}>
                <span className="sw-rail__dot" style={{ color: stop.color }} />
                <p className="sw-rail__label-text">{stop.label}</p>
                <p className="sw-rail__desc">{stop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND MARQUEE ────────────────────────────── */}
      <div className="sw-marquee-wrap">
        <div className="sw-marquee">
          {[...brandLogos, ...brandLogos].map((b, i) => (
            <div key={i} className="sw-marquee__item">
              <span>{b.icon}</span>
              <span>{b.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HOW IT WORKS ─────────────────────────────── */}
      <section className="sw-section sw-how">
        <div className="sw-section__head sw-reveal" ref={addReveal}>
          <span className="sw-section__eyebrow sw-mono">The rail</span>
          <h2 className="sw-section__title sw-display">Four stops, zero guesswork</h2>
          <p className="sw-section__desc">
            Every application follows the same track. StageWise just makes sure you always know
            where each one stands.
          </p>
        </div>
        <div className="sw-how__grid sw-reveal" ref={addReveal}>
          {railStops.map((stop) => (
            <div className="sw-how__card" key={stop.label}>
              <div className="sw-how__dot" style={{ background: stop.color }} />
              <span className="sw-how__stage sw-mono">{stop.label}</span>
              <h3 className="sw-how__title">{stop.label} stage</h3>
              <p className="sw-how__desc">{stop.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TRENDING JOBS ────────────────────────────── */}
      <section className="sw-section">
        <div className="sw-section__header-row sw-reveal" ref={addReveal}>
          <div>
            <span className="sw-section__eyebrow sw-mono">Right now</span>
            <h2 className="sw-section__title sw-display">Where things stand</h2>
          </div>
          <button className="sw-link" onClick={() => navigate("/listAppli")}>
            View all applications →
          </button>
        </div>
        <div className="sw-jobs-grid sw-reveal" ref={addReveal}>
          {trendingJobs.map((job) => (
            <div key={job.id} className="sw-job-card">
              <div className="sw-job-card__top">
                <span className="sw-job-card__pill" style={{ background: job.color }}>
                  {job.stage}
                </span>
              </div>
              <h3 className="sw-job-card__title">{job.title}</h3>
              <p className="sw-job-card__note">{job.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── INSIGHTS ─────────────────────────────────── */}
      <section className="sw-section">
        <div className="sw-insights">
          <div className="sw-reveal" ref={addReveal}>
            <span className="sw-section__eyebrow sw-mono">Application insights</span>
            <h2 className="sw-section__title sw-display">Your job search, at a glance</h2>
            <p className="sw-section__desc">
              Status, interviews, offers, and follow-ups — tracked with enough detail to actually
              be useful.
            </p>
            <div className="sw-insights__stat">
              <div className="sw-avatars">
                {["SR", "AB", "KL"].map((initials, i) => (
                  <div
                    key={i}
                    className="sw-mini-avatar"
                    style={{
                      background: ["#F2A93B", "#4C5FD5", "#2FA968"][i],
                      marginLeft: i ? "-10px" : "0",
                    }}
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <span className="sw-insights__stat-text">100+ applications tracked</span>
            </div>
          </div>
          <div className="sw-tags sw-reveal" ref={addReveal}>
            {suggestedTags.map((tag, i) => (
              <span key={i} className="sw-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── ACTIVITY / TEAM ──────────────────────────── */}
      <section className="sw-section">
        <div className="sw-section__header-row sw-reveal" ref={addReveal}>
          <div>
            <span className="sw-section__eyebrow sw-mono">This week</span>
            <h2 className="sw-section__title sw-display">Recent activity</h2>
          </div>
        </div>
        <div className="sw-team-grid sw-reveal" ref={addReveal}>
          {teamMembers.map((member) => (
            <div key={member.name} className="sw-team-card">
              <div className="sw-team-card__avatar" style={{ background: member.color }}>
                {member.avatar}
              </div>
              <div>
                <p className="sw-team-card__name">{member.name}</p>
                <p className="sw-team-card__role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────── */}
      <section className="sw-section">
        <div className="sw-testimonial sw-reveal" ref={addReveal}>
          <div>
            <span className="sw-quote-mark">"</span>
            <blockquote className="sw-testimonial__text">
              StageWise helped me stay on top of every application. I could track interviews,
              follow-ups, and offers all in one place — landing my dream job was never this
              organized.
            </blockquote>
            <div className="sw-testimonial__author">
              <strong>Lubaak Hole</strong>
              <span>Founder at Apple Inc.</span>
            </div>
          </div>
          <div className="sw-testimonial__photo">LH</div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="sw-cta">
        <div className="sw-cta__inner sw-reveal" ref={addReveal}>
          <div>
            <h2 className="sw-cta__title">Ready to get on track?</h2>
            <p className="sw-cta__desc">
              Start logging applications in under a minute — no spreadsheets required.
            </p>
          </div>
          <button className="sw-cta__btn" onClick={() => navigate("/appli/register")}>
            Start tracking ↗
          </button>
        </div>
      </section>
    </div>
  )
}

export default Home
