import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import QueryCart from "../assets/Compnents/QueryCart";

const MyQueries = () => {
  const navigate = useNavigate();
  const queries = useLoaderData();
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
          <img className="w-full" src="https://i.ibb.co/Wpf8wRVs/rec-1.jpg" />
          <button
            onClick={() => navigate("/addQueries")}
            className="btn bg-[#3c5de3] text-white lg:text-2xl text-xl lg:px-14 lg:py-5 rounded-2xl absolute md:bottom-[38%] bottom-[23%] md:left-[41%] left-[27%] sm:bottom-[30%] sm:left-[37%]"
          >
            
            Add Queries
          </button>
        </div>
      </div>

      <div className="mt-12">
        <div className={queries.length !== 0 ? "" : "hidden"}>
          <p className="text-3xl font-bold text-center">My All Queries Here</p>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-6">
            {queries.map((query) => (
              <QueryCart query={query}></QueryCart>
            ))}
          </div>
        </div>
        <div>
          <div
            className={`py-9 space-y-2 ${queries.length !== 0 ? "hidden" : ""}`}
          >
            <p className="text-3xl font-semibold text-center">
              No Created queries Yet
            </p>
            <p className="text-center text-sm text-[#00000092]">
              Create a new Query <br /> after creating a new query you can see
              here
            </p>
            <div className="flex items-center justify-center mt-3">
                <button onClick={()=> navigate('/addQueries')} className="btn bg-blue-500 text-white">Add Query</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyQueries;
