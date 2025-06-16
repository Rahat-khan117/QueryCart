import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import { valueContext } from "../../LayOut/MainLayout";
import Swal from "sweetalert2";

const MenuLog = () => {
  const { userN, handleLogout } = useContext(valueContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <div>
      <div className={userN ? "" : "hidden"}>
        <div className="h-[455px] w-[210px] bg-green-400 z-50 flex flex-col gap-4 pl-5 pr-3 pt-5">
          <div className={"cursor-pointer text-2xl text-black font-bold"}>
            <div className="flex flex-col gap-2  justify-center">
              <img
                className="h-[50px] w-[50px] rounded-full"
                src={
                  userN
                    ? userN.photoURL
                    : "https://i.ibb.co/8DXdyrBh/download.png"
                }
              />
              <p className="whitespace-nowrap">
                {userN ? userN.displayName : "No User"}
              </p>
            </div>
          </div>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-xl text-white font-bold"
                : "cursor-pointer text-xl  font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/queries"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-xl text-white font-bold"
                : "cursor-pointer text-xl  font-bold"
            }
          >
            Queries
          </NavLink>
          <NavLink
            to="/recForMe"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-xl text-white font-bold"
                : "cursor-pointer text-xl  font-bold"
            }
          >
            Recommendations For Me
          </NavLink>
          <NavLink
            to="/myQueries"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-xl text-white font-bold"
                : "cursor-pointer text-xl  font-bold"
            }
          >
            My Queries
          </NavLink>
          <NavLink
            to="/myRec"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-xl text-white font-bold"
                : "cursor-pointer text-xl  font-bold"
            }
          >
            My recommendations
          </NavLink>

          <div>
            {userN ? (
              <button
                onClick={() => {
                  handleLogout();
                  Swal.fire({
                    title: "warning!",
                    text: "You have completed Log out successfully.",
                    icon: "warning",
                    confirmButtonText: "OK",
                  });
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
                    ? "btn  bg-red-600 text-white"
                    : "btn bg-[#1d1b1b] text-white"
                }
              >
                Log in
              </button>
            )}
          </div>
        </div>
      </div>


{/* for log out */}

      <div className={userN ? "hidden" : ""}>
        <div className="h-[160px] w-[210px] bg-green-400 z-50 flex flex-col gap-4 pl-5 pr-3 pt-5">
          
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-xl text-white font-bold"
                : "cursor-pointer text-xl  font-bold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/queries"
            className={({ isActive }) =>
              isActive
                ? "cursor-pointer text-xl text-white font-bold"
                : "cursor-pointer text-xl  font-bold"
            }
          >
            Queries
          </NavLink>
          

          <div>
            {userN ? (
              <button
                onClick={() => {
                  handleLogout();
                  Swal.fire({
                    title: "warning!",
                    text: "You have completed Log out successfully.",
                    icon: "warning",
                    confirmButtonText: "OK",
                  });
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
                    ? "btn  bg-red-600 text-white"
                    : "btn bg-[#1d1b1b] text-white"
                }
              >
                Log in
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLog;
