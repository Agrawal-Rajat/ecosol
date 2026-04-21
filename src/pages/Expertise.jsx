import { Link } from "react-router-dom";

function Expertise() {
  return (
    <section
      style={{
        padding: "72px 24px",
        background: "var(--color-bg-white)",
        borderTop: "1px solid var(--color-bg-light-grey)",
      }}
    >
      <div
        style={{
          maxWidth: "980px",
          margin: "0 auto",
          textAlign: "center",
          fontFamily: "var(--font-primary)",
        }}
      >
        <p
          style={{
            color: "var(--color-steel-grey)",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontSize: "11px",
            marginBottom: "12px",
          }}
        >
          Expertise
        </p>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(34px, 5vw, 52px)",
            color: "var(--color-logo-navy)",
            fontWeight: 900,
            lineHeight: 1.1,
          }}
        >
          Detailed Capability Modules
        </h1>
        <p
          style={{
            color: "var(--color-text-main)",
            fontSize: "17px",
            lineHeight: 1.7,
            maxWidth: "720px",
            margin: "18px auto 28px",
          }}
        >
          Explore technical capability modules, delivery methods, and standards
          compliance through our service-specific engineering pages.
        </p>
        <Link
          to="/services"
          style={{
            display: "inline-block",
            textDecoration: "none",
            background: "var(--color-logo-blue)",
            color: "var(--color-bg-white)",
            padding: "14px 24px",
            borderRadius: "2px",
            textTransform: "uppercase",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.5px",
          }}
        >
          View Service Modules
        </Link>
      </div>
    </section>
  );
}

export default Expertise;
