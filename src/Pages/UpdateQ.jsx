import React, { useContext } from "react";
import { valueContext } from "../LayOut/MainLayout";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";

const UpdateQ = () => {
    const queries = useLoaderData();
    const { id } = useParams();
    const machDetails = queries.find((query) => query._id === id);
    console.log(machDetails._id);
    const {userN} = useContext(valueContext);
    const handleSubmit = (e) => {
        e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateQ = Object.fromEntries(formData.entries());
    console.log(updateQ);

     // send updated data to the server
    fetch(`https://11-server-side.vercel.app/createQuery/${machDetails._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateQ),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "You have Updated the group successfully.",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });



    }
  return (
    <div className="container mx-auto sm:px-12 px-4 pb-10">
      <div className="bg-[#331a152a] mt-10 sm:px-12 px-6 py-9 rounded-3xl">
        <div>
          <p className="font-bold text-5xl text-[#331A15] text-center">
            Update Your Queries
          </p>
          
        </div>

        <form onSubmit={handleSubmit}>
          <div className="sm:flex gap-4 ">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Product Name</label>
              <input
                defaultValue={machDetails.pName}
                name="pName"
                type="text"
                placeholder="Enter the product name"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Product Brand</label>
              <input
               defaultValue={machDetails.pBrand}
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
                defaultValue={machDetails.qTitle}
                name="qTitle"
                type="text"
                placeholder="Enter Query title"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Boycotting Reason Details </label>
              <input
               defaultValue={machDetails.boycottDetails}
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
              defaultValue={machDetails.photo_url}
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
              Update Query
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateQ;
