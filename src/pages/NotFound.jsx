import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        background: "var(--color-bg-white)",
        fontFamily: "var(--font-primary)",
      }}
    >
      <div style={{ maxWidth: "680px", textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 12px",
            fontSize: "11px",
            fontWeight: 800,
            letterSpacing: "3px",
            textTransform: "uppercase",
            color: "var(--color-steel-grey)",
          }}
        >
          404 Error
        </p>
        <h1
          style={{
            margin: "0 0 12px",
            fontSize: "clamp(34px, 6vw, 58px)",
            lineHeight: 1.05,
            color: "var(--color-logo-navy)",
            fontWeight: 900,
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            margin: "0 auto 24px",
            fontSize: "17px",
            lineHeight: 1.7,
            color: "var(--color-text-main)",
            maxWidth: "560px",
          }}
        >
          The page you requested is not available. Please continue from the home
          page.
        </p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            textDecoration: "none",
            padding: "14px 24px",
            background: "var(--color-logo-blue)",
            color: "var(--color-bg-white)",
            borderRadius: "2px",
            fontSize: "12px",
            fontWeight: 800,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
          }}
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
