import React from "react";
import { useParams, Link } from "react-router-dom";
import jobs from "../data/jobsData";

function JobDetail() {
  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div style={{ padding: "120px 24px", textAlign: "center" }}>
        <h2 style={{ fontSize: 36, fontWeight: 900 }}>Job Not Found</h2>
        <p style={{ color: "var(--color-steel-grey)" }}>
          The requested job listing could not be found.
        </p>
        <Link to="/careers">Back to Careers</Link>
      </div>
    );
  }

  const mailto = `mailto:hr@ecosolprojects.com?subject=${encodeURIComponent(
    `Application: ${job.title}`,
  )}`;

  return (
    <div className="job-detail-page" style={{ padding: 80 }}>
      <style>
        {`
          .job-detail-card {
            max-width: 900px;
            margin: 0 auto;
            font-family: var(--font-primary);
            background: #ffffff;
            padding: 36px;
            border: 1px solid var(--color-bg-light-grey);
            border-radius: 6px;
            box-shadow: 0 20px 40px rgba(11, 17, 32, 0.04);
          }

          .job-detail-title {
            font-size: 32px;
            font-weight: 900;
            color: var(--color-logo-navy);
            text-transform: uppercase;
            margin: 0 0 8px 0;
            letter-spacing: -1px;
          }

          .job-detail-exp {
            color: var(--color-electric-blue);
            font-weight: 800;
            margin-bottom: 18px;
          }

          .job-detail-desc {
            font-size: 16px;
            color: var(--color-text-main);
            line-height: 1.8;
            margin-bottom: 18px;
            text-align: justify;
          }

          .job-detail-list {
            list-style: none;
            padding: 0;
            margin-top: 14px;
          }

          .job-detail-list li {
            padding: 10px 0;
            border-bottom: 1px solid var(--color-bg-light-grey);
            color: var(--color-text-main);
          }

          .job-detail-list li:last-child { border-bottom: none; }

          .job-apply-btn {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 18px;
            background: var(--color-logo-navy);
            color: #ffffff !important;
            text-decoration: none;
            font-size: 13px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-radius: 4px;
            box-shadow: 0 8px 20px rgba(11,17,32,0.08);
            transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
            border: none;
          }

          .job-apply-btn:hover,
          .job-apply-btn:focus {
            transform: translateY(-3px);
            background: var(--color-logo-blue);
            color: #ffffff !important;
            box-shadow: 0 14px 30px rgba(11,17,32,0.12);
            outline: none;
          }

          .job-apply-btn:focus-visible {
            box-shadow: 0 0 0 4px rgba(14,165,233,0.12);
          }

          @media (max-width: 768px) {
            .job-detail-card { padding: 24px; }
            .job-detail-title { font-size: 26px; }
            .job-detail-desc { font-size: 15px; }
            .job-apply-btn { padding: 12px 16px; font-size: 13px; }
          }
        `}
      </style>

      <div className="job-detail-card">
        <h1 className="job-detail-title">{job.title}</h1>
        <div className="job-detail-exp">{job.experience}</div>
        <p className="job-detail-desc">{job.description}</p>

        <ul className="job-detail-list">
          {job.details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <a href={mailto} className="job-apply-btn">
          Apply via Email
        </a>
      </div>
    </div>
  );
}

export default JobDetail;
