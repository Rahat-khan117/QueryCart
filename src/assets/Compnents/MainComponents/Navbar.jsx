import React from "react";
import { NavLink, useNavigate } from "react-router";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div
      className={`  h-[70px] w-[100vw] flex items-center px-4 lg:px-12 bg-[#d5ead2] `}
    >
      <div className="relative  w-full flex justify-between items-center">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            className="h-[50px] w-[50px] rounded-2xl"
            src="https://i.ibb.co/whg4kN1z/logo.jpg"
          />
          <p className="text-green-600 lg:text-4xl md:text-3xl text-4xl font-bold">
            QUERY<span className="text-black">Cart</span>
          </p>
        </div>

       {/* for logged in */}

       <div className="hidden">
         <div className="lg:flex items-center xl:gap-8 lg:gap-6 md:gap-4 hidden ">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500"
                : "cursor-pointer"
            }
          >
            <div className="text-xl flex items-center">
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink
            to="/queries"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500"
                : "cursor-pointer"
            }
          >
            <div className="text-xl flex items-center">
              <p>Queries</p>
            </div>
          </NavLink>
          <NavLink
            to="/recForMe"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500"
                : "cursor-pointer"
            }
          >
            <div className="text-xl flex items-center">
              <p>Recommendations For Me</p>
            </div>
          </NavLink>
          <NavLink
            to="/myQueries"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500"
                : "cursor-pointer"
            }
          >
            <div className="text-xl flex items-center">
              <p>My Queries</p>
            </div>
          </NavLink>
          <NavLink
            to="/myRec"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500"
                : "cursor-pointer"
            }
          >
            <div className="text-xl flex items-center">
              <p>My recommendations</p>
            </div>
          </NavLink>

          <div className="flex gap-3 items-center ">
            {/* <div>
              {userN ? (
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  className="btn bg-[#1d1b1b] text-white"
                >
                  Log out
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className={
                    pathname == "/login"
                      ? "btn  bg-green-600 text-white"
                      : "btn bg-[#1d1b1b] text-white"
                  }
                >
                  Log in
                </button>
              )}
            </div> */}
            {/* <div className="relative group inline-block cursor-pointer">
              <a href="#" className="hover">
                <img
                  className="h-[50px] w-[50px] rounded-full"
                  src={
                    userN
                      ? userN.photoURL
                      : "https://i.ibb.co/8DXdyrBh/download.png"
                  }
                />
              </a>
              <Tooltip anchorSelect=".hover" place="bottom">
                {userN ? userN.displayName : "No user"}
              </Tooltip>
            </div> */}
          </div>
        </div>
       </div>
      
      {/* for log out */}

       <div className="">
          <div className="lg:flex items-center xl:gap-16 lg:gap-10 md:gap-4 hidden ">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500"
                : "cursor-pointer"
            }
          >
            <div className="text-2xl flex items-center">
              <p>Home</p>
            </div>
          </NavLink>
          <NavLink
            to="/queries"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500"
                : "cursor-pointer"
            }
          >
            <div className="text-2xl flex items-center">
              <p>Queries</p>
            </div>
          </NavLink>

          <div className="flex gap-3 items-center ">
            {/* <div>
              {userN ? (
                <button
                  onClick={() => {
                    handleLogout();
                  }}
                  className="btn bg-[#1d1b1b] text-white"
                >
                  Log out
                </button>
              ) : (
                <button
                  onClick={() => navigate("/login")}
                  className={
                    pathname == "/login"
                      ? "btn  bg-green-600 text-white"
                      : "btn bg-[#1d1b1b] text-white"
                  }
                >
                  Log in
                </button>
              )}
            </div> */}
            {/* <div className="relative group inline-block cursor-pointer">
              <a href="#" className="hover">
                <img
                  className="h-[50px] w-[50px] rounded-full"
                  src={
                    userN
                      ? userN.photoURL
                      : "https://i.ibb.co/8DXdyrBh/download.png"
                  }
                />
              </a>
              <Tooltip anchorSelect=".hover" place="bottom">
                {userN ? userN.displayName : "No user"}
              </Tooltip>
            </div> */}
          </div>
        </div>
       </div>
        



      </div>
      
      <div className="lg:hidden block text-3xl ml-5">
        <i  className="fa-solid fa-bars "></i>
      </div>
    </div>
  );
};

export default Navbar;
