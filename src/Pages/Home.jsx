import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import RecentCart from "../assets/Compnents/recentCart";

const Home = () => {
  const navigate = useNavigate();
    const query = useLoaderData();
    console.log(query);
  return (
    <div>
      <div className="carousel w-full h-[500px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/Cp4nw9hp/2.jpg" className="w-full brightness-50" />
          <div className="absolute top-[25%]  left-[10%]">
            <div>
              <p className="lx:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold ">
                Find Better Alternatives, <br /> Faster Smarter Recommendations
                with QueryCart
              </p>
              <p className="text-white mt-2 lg:text-[16px] text-[14px] ">
                Ask product-related queries and get personalized suggestions
                from a community <br /> that cares. From smartphones to
                smartwatches — we help you <br /> compare with confidence. Start
                your search, skip the guesswork.
              </p>
              <div className="flex mt-4">
                <button onClick={()=>navigate("/queries")} className="text-white border-2 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                  <i className="fa-brands fa-wpexplorer"></i>
                  <span className="ml-1">Explore</span>
                </button>
                <button onClick={()=>navigate("/queries")} className="text-white border-2 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                  <i class="fa-brands fa-readme"></i>
                  <span className="ml-1">Read</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
            <img src="https://i.ibb.co/1tZHKJzb/1.jpg" className="w-full brightness-50" />
          
          <div className="absolute top-[25%]  left-[10%]">
            <div>
              <p className="lx:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold ">
                Find Better Alternatives, <br /> Faster Smarter Recommendations
                with QueryCart
              </p>
              <p className="text-white mt-2 lg:text-[16px] text-[14px] ">
                Ask product-related queries and get personalized suggestions
                from a community <br /> that cares. From smartphones to
                smartwatches — we help you <br /> compare with confidence. Start
                your search, skip the guesswork.
              </p>
              <div className="flex mt-4">
                <button onClick={()=>navigate("/queries")} className="text-white border-2 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                  <i className="fa-brands fa-wpexplorer"></i>
                  <span className="ml-1">Explore</span>
                </button>
                <button onClick={()=>navigate("/queries")} className="text-white border-2 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                  <i class="fa-brands fa-readme"></i>
                  <span className="ml-1">Read</span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/7tBq8LZn/3.jpg" className="w-full brightness-50" />

          <div className="absolute top-[25%]  left-[10%]">
            <div>
              <p className="lx:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold ">
                Your Experience, Their Best Decision <br /> Recommend Products
                that Make a Difference
              </p>
              <p className="text-white mt-2 lg:text-[16px] text-[14px] ">
                Turn your product knowledge into power by helping others choose
                smarter. <br /> Post recommendations, add comments, and build trust
                within <br /> the community. On QueryCart, every voice adds value.
              </p>
              <div className="flex mt-4">
                <button onClick={()=>navigate("/queries")} className="text-white border-1 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                  <i class="fa-brands fa-wpexplorer"></i>
                  <span className="ml-1">Explore</span>
                </button>
                <button onClick={()=>navigate("/queries")} className="text-white border-1 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                  <i class="fa-brands fa-readme"></i>
                  <span className="ml-1">Read</span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/8n6F0W1Z/4.jpg" className="w-full brightness-50" />

          <div className="absolute top-[25%]  left-[10%]">
            <div>
              <p className="lx:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold ">
                Find Better Alternatives, <br /> Faster Smarter Recommendations
                with QueryCart
              </p>
              <p className="text-white mt-2 lg:text-[16px] text-[14px] ">
                Ask product-related queries and get personalized suggestions
                from a community <br /> that cares. From smartphones to
                smartwatches — we help you <br /> compare with confidence. Start
                your search, skip the guesswork.
              </p>
              <div className="flex mt-4">
                <button onClick={()=>navigate("/queries")} className="text-white border-2 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                  <i className="fa-brands fa-wpexplorer"></i>
                  <span className="ml-1">Explore</span>
                </button>
                <button onClick={()=>navigate("/queries")} className="text-white border-2 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black">
                  <i class="fa-brands fa-readme"></i>
                  <span className="ml-1">Read</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="md:px-10 lg:px-15 px-4 mt-14">
         <p className="text-3xl font-bold">Recent Queries</p>
         <div className="flex justify-center mt-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 ">
            {query.map((query) => (
              <RecentCart key={query._id} query={query}></RecentCart>
            ))}
          </div>
          </div>
      </div>
      <div className="mt-12 px-4 sm:px-7 md:px-12 lg:px-20">
        <p className="font-bold text-3xl text-center">Update your Queries</p>
        <div className="bg-white rounded-2xl px-4 py-4 mt-4">
          <img
            className="rounded-2xl w-full "
            src="https://i.ibb.co/7tBq8LZn/3.jpg"
          />
        </div>
      </div>


      <div className="md:px-10 lg:px-15 px-4 mt-14">
         <p className="text-3xl font-bold">Trending Recommendation</p>
         <div className="flex justify-center mt-4">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 ">
            {query.map((query) => (
              <RecentCart key={query._id} query={query}></RecentCart>
            ))}
          </div>
          </div>
      </div>

      <div className="mt-12 px-4 sm:px-7 md:px-12 lg:px-20">
        <p className="font-bold text-3xl text-center">Recommend batter here</p>
        <div className="bg-white rounded-2xl px-4 py-4 mt-4">
          <img
            className="rounded-2xl w-full "
            src="https://i.ibb.co/5XN0HQqw/rec-2.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
