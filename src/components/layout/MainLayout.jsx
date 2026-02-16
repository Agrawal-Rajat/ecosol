import Header from "./Header";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <div
        className="service-page-wrapper"
        style={{ paddingTop: "90px" }}
      ></div>
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;
