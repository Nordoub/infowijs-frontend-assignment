import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className="2xl:w-60/100 w-80/100 justify-center place-self-center ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
