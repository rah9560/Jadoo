import React from "react";

import logo from "./images/logo.png";
import right_polygon from "./images/right_polygon.png";
import girl from "./images/girl.png";
import text1 from "./images/text1.png";
import play from "./images/play.png";
import satellite from "./images/satellite.png";
import plane from "./images/plane.png";
import mic from "./images/mic.png";
import setting from "./images/setting.png";
import red from "./images/red.png";
import one from "./images/one.png";
import two from "./images/two.png";
import three from "./images/three.png";
import spiral from "./images/spiral.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import girl2 from "./images/girl2.png";
import brands from "./images/brands.png";
import facebook from "./images/facebook.png";
import twitter from "./images/Twitter.png";
import googleplay from "./images/googleplay.png";
import applestore from "./images/apple.png";
import instagram from "./images/instagram.png";
import mail from "./images/email.png";
import telegram from "./images/telegram.png";
import bg from "./images/bg.png";

const App = () => {
  return (
    <div>
      <div>
        <section>
          <nav className="flex">
            <div>
              <img className="mt-4 ml-20" src={logo} alt="Jadoo" />
            </div>
            <div>
              <ul className="flex gap-16 font-poppins ml-[550px] mt-8">
                <li>Destinations</li>
                <li>Hotels</li>
                <li>Flights</li>
                <li>Bookings</li>
                <li>
                  <button>Login</button>
                </li>
                <li>
                  <button className="border-2 border-slate-950 rounded-lg px-7 py-2 mt-[-10px]">
                    Sign up
                  </button>
                </li>
                <li>EN ∨</li>
              </ul>
            </div>
          </nav>

          <div>
            <img
              src={right_polygon}
              alt="right_polygon"
              className="w-[1000px] h-[750px] absolute left-[680px] top-[0px] -z-10"
            />
          </div>
          <div>
            <img
              src={girl}
              alt="girl"
              className="absolute left-[880px] h-[720px] "
            />
          </div>
          <article className="font-poppins absolute left-72 top-56">
            <h5 className="font-poppins text-orange-500 font-semibold ml-5 mb-5 ">
              BEST DESINATIONS AROUND THE WORLD
            </h5>
            <img src={text1} alt=" text " />
            <p className="mb-4 font-poppins">
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred{" "}
            </p>
            <p className="mb-4 font-poppins">
              to sportsmen it engrossed listening. Park gate sell they west hard
            </p>
            <p>for the.</p>
            <div className="flex gap-5 mt-5 font-poppins">
              <button className="px-8 py-4 text-white bg-orange-500 rounded-lg">
                Find out more
              </button>
              <div className="flex cursor-pointer">
                <img src={play} alt="play button " className="h-16" />
                <p className="mt-5">Play Demo</p>
              </div>
            </div>
          </article>
        </section>
      </div>

      <div className="relative top-[900px]">
        <section>
          <div>
            <h5 className="text-slate-500 text-center mb-5">CATEGORY</h5>
            <h1 className="text-center text-6xl font-semibold">
              We offer Best Services
            </h1>
          </div>
          <div className="flex gap-52 mt-28 ml-48">
            <div className="">
              <img src={satellite} alt="satellite" className="w-20 " />
              <div className="mt-5">
                <p className="font-medium">Calculated Weather</p>
                <p>Built Wicket longer</p>
                <p>admire do barton vanity</p>
                <p>itself do in it.</p>
              </div>
            </div>
            <div className=" -z-50 absolute top-[430px] left-[530px]">
              <img src={red} alt="redimage" className="w-20 h-20 " />
            </div>
            <div className=" rounded-2xl shadow-2xl p-10 z-50">
              <img src={plane} alt="plane" className="w-20 " />
              <div className="mt-5">
                <p className="font-medium">Best Flights</p>
                <p>Engrossed listening. Park </p>
                <p>gate sell they west hard </p>
                <p>for the.</p>
              </div>
            </div>
            <div>
              <img src={mic} alt="mic" className="w-20 " />
              <div className="mt-5">
                <p className="font-medium">Local Events</p>
                <p>Barton vanity itself do in</p>
                <p>it. Preferd to men it</p>
                <p>engrossed listening. </p>
              </div>
            </div>
            <div>
              <img src={setting} alt="setting" className="w-20 " />
              <div className="mt-5">
                <p className="font-medium">Customization</p>
                <p>We deliver outsourced</p>
                <p>aviation services for</p>
                <p>military customers</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="relative top-[1100px]">
        <section>
          <h5 className="text-slate-500 text-center mb-5">Top Selling</h5>
          <h1 className="text-center text-6xl font-semibold">
            Top Destinations
          </h1>

          <div className="flex gap-14 ml-[400px] mt-20">
            <div className="shadow-2xl rounded-b-lg">
              <div>
                <img src={one} alt="colosseum" className="h-72 w-64" />
              </div>
              <div className="ml-2">
                <div className="flex space-x-8 mt-5 mb-5">
                  <p className="mr-20">Rome,Italy</p>
                  <p>$5,42k</p>
                </div>
                <p>◣10 days trip</p>
              </div>
            </div>
            <div className="shadow-2xl rounded-b-lg">
              <div>
                <img src={two} alt="clock tower" className="h-72 w-64" />
              </div>
              <div className="ml-2">
                <div className="flex space-x-8 mt-5 mb-5">
                  <p className="mr-20">London, UK</p>
                  <p>$4.2k</p>
                </div>
                <p>◣12 days trip</p>
              </div>
            </div>
            <div className="shadow-2xl rounded-b-lg">
              <div>
                <img src={three} alt="big house" className="h-72 w-64" />
              </div>
              <div className="ml-2">
                <div className="flex space-x-8 mt-5 mb-5">
                  <p className="mr-20">Full Europe</p>
                  <p>$15k</p>
                </div>
                <p>◣28 days trip</p>
              </div>
            </div>
          </div>
          <div className=" absolute left-[1260px] top-[400px] -z-50 ">
            <img src={spiral} alt="spiral" className="h-40 -z-50" />
          </div>
        </section>
      </div>

      <div className="relative top-[1300px] ml-72">
        <section>
          <h5>Easy and Fast</h5>
          <h2 className="text-6xl mt-5 font-semibold font-poppins">
            Book Your Next Trip
          </h2>

          <div className="flex mt-20 space-x-96">
            <main>
              <div className="mt-10">
                <div className="flex">
                  <div>
                    <img src={icon1} alt="icon" className="h-14" />
                  </div>
                  <div className="ml-5">
                    <p className="font-semibold">Choose Destination</p>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                    <p>adipaxozic elit. Urna, tortor tempus.</p>
                  </div>
                </div>

                <div className="flex mt-10">
                  <div>
                    <img src={icon2} alt="icon" className="h-14" />
                  </div>
                  <div className="ml-5">
                    <p className="font-semibold">Make Payment</p>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                    <p>adipaxozic elit. Urna, tortor tempus.</p>
                  </div>
                </div>

                <div className="flex mt-10">
                  <div>
                    <img src={icon3} alt="icon" className="h-14" />
                  </div>
                  <div className="ml-5">
                    <p className="font-semibold">
                      Reach Airport on Selected Date
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur </p>
                    <p>adipaxozic elit. Urna, tortor tempus.</p>
                  </div>
                </div>
              </div>
            </main>

            <aside className="-z-50">
              <div className="shadow-2xl rounded-2xl">
                <img src={girl2} alt="girl" />
                <h4 className="text-lg mt-5 ml-4">Trip to greece</h4>
                <p className=" text-slate-500 ml-5 mt-2">
                  14-19 june | by Robbin Joseph
                </p>
                <div className="ml-5 flex space-x-52 mt-8">
                  <p className="mb-5">24 people going</p>
                  <p>🤍</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      <div className="relative top-[1900px] grid place-content-center ">
        <section>
        <div><img src={telegram} className="z-[100] absolute top-[-10px] left-[1300px] h-16" alt="telegram" /></div>
          <img src={bg} alt="background" />
          <div className="z-10 absolute top-10 left-[550px] ">
            <div className="text-center text-2xl text-slate-400">
              <h3 className="">
                Subscribe to get more information, latest news and other
              </h3>
              <h3>interesting offers about Cobham</h3>
            </div>

            

            <div className="flex gap-5 absolute left-16 top-40">
              <div>
                <img
                  src={mail}
                  alt="mail"
                  className="h-5 absolute top-3 left-3"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-lg w-80 py-3 px-10"
                />
              </div>
              <button className="px-5 py-2 text-white bg-orange-400 rounded-xl">
                {" "}
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="relative top-[1100px] ml-72 ">
        <section>
          <img src={brands} alt="brands" className="cursor-pointer" />
        </section>
      </div>

      <div className="relative top-[2100px] ">
        <footer>
          <div className="flex ml-96 gap-24 mb-20">
            <div>
              <h2 className="text-3xl mb-5">Jadoo.</h2>
              <p>Book your trip in minutes get full</p>
              <p>Control for much longer</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-5">Company</h4>
              <p>About</p>
              <p>Careers</p>
              <p>Mobile</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-5">Contact</h4>
              <p>Help/FAQ</p>
              <p>Press</p>
              <p>Affiliates</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-5">More</h4>
              <p>Airlinefees</p>
              <p>Airline</p>
              <p>Low fare tips</p>
            </div>
            <div>
              <div className="flex mb-4">
                <img src={facebook} alt="facebook" className="w-10 h-10" />
                <img src={instagram} alt="instagram" className="w-10 h-10" />
                <img src={twitter} alt="twitter" className="w-10 h-10" />
              </div>
              <p className="mb-2">Discover our app</p>
              <div className="flex ">
                <img src={googleplay} alt="googleplay" className="w-15 h-5" />
                <img src={applestore} alt="applestore" className="w-15 h-5" />
              </div>
            </div>
          </div>
          <div className="text-center pb-14">All rights reserved@jadoo.com</div>
        </footer>
      </div>
    </div>
  );
};

export default App;
