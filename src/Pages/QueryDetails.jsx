import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { valueContext } from "../LayOut/MainLayout";
import Swal from "sweetalert2";

const QueryDetails = () => {
   const {queries,recData} = useLoaderData();
    console.log(queries);
    console.log(recData);
    const {id} = useParams();
    const machRec = recData.filter((query) => query.queryId === id);
    console.log(machRec);
    
    
    
    const {userN} = useContext(valueContext);

   const handleSubmit = (e)=> {
       e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newRec = Object.fromEntries(formData.entries());
    newRec.userPhoto = `${userN.photoURL}`;
    newRec.queryId = `${id}`
    console.log(newRec);


    // post to the server

    fetch("https://11-server-side.vercel.app/createRec", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newRec),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "You have recommended successfully.",
                icon: "success",
                confirmButtonText: "OK",
              });
              location.reload();
            }
          });
   }



    
    
    const machDetails = queries.find((query) => query._id === id);
    console.log(machDetails);
  return (
    <div className="md:px-10 px-5">

        <div className="mt-10">
           <p className="text-3xl font-bold">User Details</p>
           <img className="rounded-full mt-8" src={machDetails.userPhoto} />
           <p className="font-bold text-2xl mt-4">{machDetails.user_name}</p>
           <p>User Email : {machDetails.email_address}</p>
           <p>Query Upload time : {machDetails.date}</p>
           <p>Recommendation count : {machDetails.recCount}</p>
        </div>



        <div className="h-[370px]  bg-white rounded-2xl mt-10 flex gap-4 pr-2">
      <div className="h-[310px] w-[300px]">
        <img
          className="h-[310px] w-[300px] ml-5 mt-5 rounded-3xl"
          src={machDetails.photo_url}
        />
      </div>
      <div className="md:ml-7 ml-5 mt-5 ">
        <p className="md:text-3xl sm:text-xl text-[17px] font-bold">
          {machDetails.pName}
        </p>

        <p className="md:text-2xl sm:text-xl text-[16px] font-bold mt-1">
          Brand : {machDetails.pBrand}
        </p>
        <p className="text-[#00000086] font-bold mt-4">
          query title : {machDetails.qTitle}
        </p>
        <div className="border-t-1 border-t-[#00000095] border-dashed sm:mt-5 mt-2 md:w-full w-[100px]">
          <hr />
        </div>
        
        <div className="border-t-1 border-dashed border-t-[#00000095] sm:mt-5 mt-2 md:w-full w-[100px]">
          <hr />
        </div>

        <div className=" mt-3">
          <p className="font-bold text-[14px] md:text-xl">Boycotting Reason :</p>
          <p className=" md:text-[18px] text-[14px] font-bold">
            {machDetails.boycottDetails}
          </p>
        </div>

        
        
      </div>

    </div>
       
       
    


<div className="container mx-auto sm:px-12 px-4 pb-10">
      <div className="bg-[#331a152a] mt-14 sm:px-12 px-6 py-9 rounded-3xl">
        <div>
          <p className="font-bold text-3xl text-[#331A15] text-center">
            Add Recommendation
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
              <label className="text-xl">Recommended Product Name</label>
              <input
                name="recPName"
                type="text"
                placeholder="Enter the product name"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Recommendation Title</label>
              <input
                name="recTitle"
                type="text"
                placeholder="Enter Recommendation Title"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
          </div>
          <div className="sm:flex gap-4">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Recommendation Image</label>
              <input
                name="reqPhoto"
                type="text"
                placeholder="Enter Recommendation Image"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Recommendation Reason </label>
              <input
                name="recReason"
                type="text"
                placeholder="Enter the Recommendation Reason "
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

          
          <div>
            <button
              type="submit"
              className="w-full btn bg-[#D2B48C] mt-3 text-[16px]"
            >
              Add recommendation
            </button>
          </div>
        </form>
      </div>
    </div>

     <div className="mt-16">
        <div
            className={`py-9 space-y-2 ${machRec.length !== 0 ? "hidden" : ""}`}
          >
            <p className="text-3xl font-semibold text-center">
              No Created Recommendation Yet
            </p>
            <p className="text-center text-sm text-[#00000092]">
              Create a Recommendation <br /> after creating a new Recommendation you can see
              here
            </p>
           
          </div>
        <div >
          <p className="text-3xl font-bold text-center">All Recommendation</p>
            {
                    machRec.map((rec) => {
                        console.log(rec);
                     return (
                    <div>
                        
                        <div className="relative bg-white rounded-3xl mt-20 w-full px-5 py-5 flex md:gap-6 gap-3 items-center
                    ">
                        <div className='absolute -top-7 -left-3 flex gap-3 '>
                            <img className=' h-[50px] w-[50px] rounded-full ' src={rec.userPhoto} />
                            <p className='font-bold text-xl'>{rec.user_name}</p>
                        </div>
                        
                     <img className='rounded-3xl h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]' src={rec.reqPhoto} />
                     <div className='space-y-2'>
                        <p className='text-[16px] md:text-xl font-bold'>{rec.recPName}</p>
                        <p>{rec.recTitle}</p>
                        <p className='text-[#000000c3] font-bold text-[16px] md:text-xl'>Recommendation reason : {rec.recReason}</p>
                     </div>
                  </div>
                    </div>
                  )
                  })
                }
        </div>
     </div>


    </div>
  );
};

export default QueryDetails;
