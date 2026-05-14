import React ,{useState}from 'react'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const [searchValue, setSearchValue] = useState("");
 const navigate = useNavigate();
  const brandLogos = [
  { name: "Microsoft", icon: "🪟" },
  { name: "IBM", icon: "🔵" },
  { name: "Amazon", icon: "📦" },
  { name: "eBay", icon: "🛒" },
  { name: "Dropbox", icon: "📂" },
];

const trendingJobs = [
   {
    id: 1,
    logo: "🏢",
    color: "#FF6B6B",
    title: "Software Engineer",
    location: "Applied at ",
    salary: "May 8, 2026",
    type: "Interview Scheduled",
  },
  {
    id: 2,
    logo: "💻",
    color: "#4ECDC4",
    title: "Backend Developer",
    location: "Applied at ",
    salary: "May 6, 2026",
    type: "Under Review",
  },
  {
    id: 3,
    logo: "🚀",
    color: "#A78BFA",
    title: "Java Developer",
    location: "Applied at ",
    salary: "May 4, 2026",
    type: "Application Submitted",
  },
];

const suggestedTags = [
  "Applied",
  "Under Review",
  "Interview",
  "Rejected",
  "Offer Received",
  "Follow Up",
  "Accepted",
  "Wishlist",
];

const teamMembers = [
  {
    name: "Yamon Bunce",
    role: "Job List · Talent Action Manager",
    avatar: "YB",
    color: "#FF8C42",
  },
  {
    name: "Benedikt Safiyudin",
    role: "New York · Therapy Trainer",
    avatar: "BS",
    color: "#6C63FF",
  },
  {
    name: "Luis Calvillo",
    role: "London · Job List · Trainer Assistant",
    avatar: "LC",
    color: "#FF6B9D",
  },
];
  return (
    <>
    <div className="jl-wrapper">

      {/* ── HERO ─────────────────────────────────────── */}
      <section className="jl-hero">

        <div className="jl-hero__content">
          <h1 className="jl-hero__title">Track Your Job Applications Effortlessly</h1>
          <p className="jl-hero__sub">
             Organize every application, interview, follow-up, and offer in one simple dashboard.
          </p>
        </div>

        <div className="jl-hero__search">

          <p className="jl-search-hint">Manage all your applied jobs in one place</p>
        </div>
      </section>

      {/* ── BRAND LOGOS ──────────────────────────────── */}
      <section className="jl-brands">
        {brandLogos.map((b) => (
          <div key={b.name} className="jl-brand-item">
            <span className="jl-brand-icon">{b.icon}</span>
            <span className="jl-brand-name">{b.name}</span>
          </div>
        ))}
      </section>

      {/* ── TRENDING JOBS ────────────────────────────── */}
      <section className="jl-section">
        <div className="jl-section__header">
          <h2 className="jl-section__title">Track Every Job Application in One Place</h2>
          <a href="#" className="jl-section__link">→ View all applications</a>
        </div>
        <div className="jl-jobs-grid">
          {trendingJobs.map((job) => (
            <div key={job.id} className="jl-job-card">
              <div className="jl-job-card__logo" style={{ background: job.color + "22", color: job.color }}>
                {job.logo}
              </div>
              <h3 className="jl-job-card__title">{job.title}</h3>
              <p className="jl-job-card__location">{job.location}</p>
              <div className="jl-job-card__footer">
                <span className="jl-job-card__salary">{job.salary}</span>
                <span className="jl-job-card__type">{job.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── EXPLORE SUGGESTED ────────────────────────── */}
      <section className="jl-suggest">
        <div className="jl-suggest__left">
          <span className="jl-suggest__eyebrow">Application Insights</span>
          <h2 className="jl-suggest__title">Monitor Your Job Search Progress</h2>
          <p className="jl-suggest__desc">
            Track application status, interview calls, offers, and follow-ups with detailed insights.
          </p>
          <div className="jl-suggest__people">
            {["SR", "AB", "KL"].map((initials, i) => (
              <div
                key={i}
                className="jl-mini-avatar"
                style={{ background: ["#FF8C42", "#6C63FF", "#4ECDC4"][i], marginLeft: i ? "-8px" : "0" }}
              >
                {initials}
              </div>
            ))}
            <span className="jl-suggest__people-text">100+ applications tracked</span>
          </div>
        </div>

        <div className="jl-suggest__right">
          <div className="jl-tags">
            {suggestedTags.map((tag, i) => (
              <span key={i} className="jl-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM MEMBERS ─────────────────────────────── */}
      <section className="jl-section">
        <div className="jl-section__header">
          <h2 className="jl-section__title">Recent Activities</h2>
          <a href="#" className="jl-section__link">→ Learn more</a>
        </div>
        <div className="jl-team-grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="jl-team-card">
              <div className="jl-team-card__avatar" style={{ background: member.color }}>
                {member.avatar}
              </div>
              <div className="jl-team-card__info">
                <p className="jl-team-card__name">{member.name}</p>
                <p className="jl-team-card__role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────── */}
      <section className="jl-testimonial">
        <div className="jl-testimonial__left">
          <span className="jl-quote-mark">"</span>
          <blockquote className="jl-testimonial__text">
            Our platform is so easy to use. We've hired about 40–50 different people worldwide in the past two years.
          </blockquote>
          <div className="jl-testimonial__author">
            <strong>Lubaak Hole</strong>
            <span>Founder at Apple Inc.</span>
          </div>
        </div>
        <div className="jl-testimonial__right">
          <div className="jl-testimonial__photo">LH</div>
        </div>
      </section>

      {/* ── CTA BANNER ───────────────────────────────── */}
      <section className="jl-cta">
        <div className="jl-cta__content">
          <h2 className="jl-cta__title">Ready to organize your job search?</h2>
          <p className="jl-cta__desc">
            Start tracking applications, interviews, and offers with one powerful dashboard.
          </p>
        </div>
        <button className="jl-cta__btn" onClick={()=> navigate("/listAppli")}>Start Tracking ↗</button>
      </section>

    </div>
    </>
  )
}

export default Home