import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const Root = () => {
      return (
            <div>
                  <Header />
                  <Outlet />
                  <ScrollRestoration />
                  <Footer />
            </div>
      );
};

export default Root;