import Banner from "../Banner";
import BottomBanner from "../BottomBanner";
import Client from "../Client";
import MobileTabletDesign from "../MobileTavlateDesign";
import PopularCategory from "../Popular/PopularCategory";

const Home = () => {
      return (
            <div>
                  <Banner />
                  <BottomBanner />
                  <PopularCategory />
                  <MobileTabletDesign />
                  <Client />
            </div>
      );
};

export default Home;