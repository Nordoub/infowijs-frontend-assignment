import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { PropsWithChildren, useLayoutEffect } from "react";

const Wrapper = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

const Layout = () => {
  return (
    <Wrapper>
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main
          role="main"
          aria-label="Main Content"
          className="2xl:w-60/100 w-80/100 justify-center place-self-center "
        >
          <Outlet />
        </main>
        <Footer />
      </div>
    </Wrapper>
  );
};

export default Layout;
