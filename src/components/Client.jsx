import Marquee from "react-fast-marquee";
import Container from "./Container";
import { FaQuoteRight, FaStar } from "react-icons/fa6";

const Client = () => {

      const testimonials = [
            {
                  name: "Awlad Hossain",
                  image: "https://i.ibb.co/gSp0LQh/member1.png",
                  description: "Amazing service and quick delivery. The website is user-friendly. Ill definitely shop again!",
            },
            {
                  name: "Chaity",
                  image: "https://i.ibb.co/wpkr2pG/member2.png",
                  description: "The quality exceeded my expectations. Customer support was very responsive. Highly recommended!",
            },
            {
                  name: "Rakib Hossain",
                  image: "https://i.ibb.co/0y7Bt8p/member3.png",
                  description: "Superb experience from start to finish. Delivery was on time, and the products were top-notch.",
            },
            {
                  name: "Safia Chowdhury",
                  image: "https://i.ibb.co/8NPkVc5/member4.png",
                  description: "A seamless shopping experience with great deals. The team was very helpful throughout the process.",
            }
      ];
      return (
            <div>

                  <Container >


                        <div className="w-full overflow-hidden py-10">
                              <div className="flex items-center gap-4 mx-auto justify-center text-center">
                                    <FaStar size={20} className="text-orange-500" />
                                    <h1 className="text-3xl uppercase text-gray-800 tracking-wide py-6 text-center">Client Review</h1>
                                    <FaStar size={20} className="text-orange-500" />
                              </div>

                              <Marquee direction="left" gradient={false} speed={40} className="py-4">
                                    {testimonials.map((testimonial, index) => (
                                          <div
                                                key={index}
                                                className="mx-4 w-[350px] relative overflow-hidden bg-white rounded-lg"
                                          >
                                                <div className="p-6">
                                                      <div className="absolute top-0 right-0 w-32 h-32">
                                                            <div className="absolute top-0 right-0 w-full h-full hover:bg-gray-400 duration-300 bg-orange-600/60 rounded-bl-[100%] flex items-start justify-end p-4 cursor-pointer">
                                                                  <FaQuoteRight className="text-white text-xl" />
                                                            </div>
                                                      </div>
                                                      <div className="space-y-4">
                                                            <div className="w-20 h-20 border-4 border-orange-500/60 rounded-full overflow-hidden">
                                                                  <img
                                                                        src={testimonial.image}
                                                                        alt={testimonial.name}
                                                                        className="w-full h-full object-cover"
                                                                  />
                                                            </div>
                                                            <div>
                                                                  <h3 className="text-xl tracking-wide">
                                                                        {testimonial.name}
                                                                  </h3>
                                                                  <p className="text-gray-700 tracking-wide mt-2" >Client</p>
                                                            </div>
                                                            <p className="text-gray-600">{testimonial.description}</p>
                                                      </div>
                                                </div>
                                          </div>
                                    ))}
                              </Marquee>
                        </div>
                  </Container>




            </div>
      );
};

export default Client;