import { Outlet, ScrollRestoration } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { persistor, store } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import FooterBottom from "../FooterBottom";

const RootLayout = () => {
      return (
            <Provider store={store}>
                  <PersistGate loading={null} persistor={persistor}>
                        <div>
                              <Header />
                              <Outlet />
                              <ScrollRestoration />
                              <FooterBottom />
                              <Footer />
                              <Toaster position="bottom-right" reverseOrder={false} />
                        </div>
                  </PersistGate>
            </Provider>
      );
};

export default RootLayout;