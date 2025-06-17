import React from "react";
import { useNavigate } from "react-router";

const MyQueries = () => {
    const navigate = useNavigate();
  return (
    <div className="px-4 md:px-10 lg:px-14">
      <div className="mt-10 px-4">
        <p className="text-3xl font-bold text-center">Create Your Queries</p>
        <p className="text-[#000000b3] text-center mt-3">
          Got doubts about a product or looking for better alternatives? Post
          your query and let the community recommend smarter, more reliable
          options. Your question could lead to someone else's best discovery.
        </p> 
        <div className="px-4 py-4 bg-white rounded-3xl relative mt-4">
           <img className="w-full" src="https://i.ibb.co/Wpf8wRVs/rec-1.jpg"/>
           <button onClick={() => navigate('/addQueries')} className="btn bg-[#3c5de3] text-white lg:text-2xl text-xl lg:px-14 lg:py-5 rounded-2xl absolute md:bottom-[38%] bottom-[23%] md:left-[41%] left-[27%] sm:bottom-[30%] sm:left-[37%]"> Add Queries</button>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
