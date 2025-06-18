import React, { useContext } from "react";
import { valueContext } from "../LayOut/MainLayout";
import Swal from "sweetalert2";

const AddQueries = () => {
  const { userN } = useContext(valueContext);
  const handleSubmit = (e) => {
    // for time ..............................

    const now = new Date();

    const year = now.getFullYear();
    const month = now.getMonth() + 1; // Months are 0-based
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const formatted = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newGroup = Object.fromEntries(formData.entries());
    newGroup.userPhoto = `${userN.photoURL}`;
    newGroup.date = `${formatted}`;
    newGroup.recCount = 0;
    console.log(newGroup);

    if (!newGroup.pName) {
      return alert("enter the Product name");
    }
    if (!newGroup.pBrand) {
      return alert("enter the Product Brand");
    }
    if (!newGroup.photo_url) {
      return alert("enter the photo url");
    }
    if (!newGroup.qTitle) {
      return alert("enter the Query Title");
    }

    // send data to the server
    fetch("https://11-server-side.vercel.app/createQuery", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newGroup),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "You have Created a new Query successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <div className="container mx-auto sm:px-12 px-4 pb-10">
      <div className="bg-[#331a152a] mt-10 sm:px-12 px-6 py-9 rounded-3xl">
        <div>
          <p className="font-bold text-5xl text-[#331A15] text-center">
            Create Your Queries
          </p>
          <p className="text-[#331a15c6] text-center mt-4">
            Got doubts about a product or looking for better alternatives? Post
            your query and let the community recommend smarter, more reliable
            options. Your question could lead to someone else's best discovery.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="sm:flex gap-4 ">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Product Name</label>
              <input
                name="pName"
                type="text"
                placeholder="Enter the product name"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Product Brand</label>
              <input
                name="pBrand"
                type="text"
                placeholder="Enter product Brand"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
          </div>
          <div className="sm:flex gap-4">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Query Title</label>
              <input
                name="qTitle"
                type="text"
                placeholder="Enter Query title"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Boycotting Reason Details </label>
              <input
                name="boycottDetails"
                type="text"
                placeholder="Enter the Boycotting Reason Details "
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
          </div>

          <div className="sm:flex gap-4">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">User Name</label>
              <input
                value={userN ? `${userN.displayName}` : ""}
                readOnly
                name="user_name"
                type="text"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white
                pointer-events-none select-none cursor-default"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Email address</label>
              <input
                value={userN ? `${userN.email}` : ""}
                readOnly
                name="email_address"
                type="text"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white
                pointer-events-none select-none cursor-default"
              />
            </div>
          </div>

          <div className="my-3 w-full">
            <label className="text-xl">Product Image-URL </label>
            <input
              name="photo_url"
              type="text"
              placeholder="Enter the photo url"
              className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full btn bg-[#D2B48C] mt-3 text-[16px]"
            >
              Add Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQueries;
