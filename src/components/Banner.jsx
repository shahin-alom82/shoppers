
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { bannerfive, bannerone, bannertwo } from "../assets"
Autoplay.globalOptions = { delay: 5000 };

const Banner = () => {
      const bannerImages = [
            { title: "bannerOne", source: bannerone },
            { title: "bannerTwo", source: bannertwo },
            { title: "bannerfive", source: bannerfive },
      ];
      const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
            Autoplay(),
      ]);

      return (
            <div className="overflow-hidden cursor-pointer relative z-0" ref={emblaRef}>
                  <div className="flex w-full">
                        {bannerImages?.map((item) => (
                              <img
                                    key={item?.title} src={item?.source}
                                    alt="bannerOne"
                                    className="lg:w-[1540px] lg:h-[520px]"
                              />
                        ))}
                  </div>
            </div>
      );
};

export default Banner;