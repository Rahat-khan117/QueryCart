import React from "react";
import { useLoaderData } from "react-router";
import QueriesAll from "../assets/Compnents/QueriesAll";

const Queries = () => {
  const queries = useLoaderData();
  return (
    <div className="px-5 md:px-14 lg:px-12">
      <div className="mt-12">
        <p className="text-3xl font-bold">All Queries Here</p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-5 mt-6">
          {queries.map((query) => (
            <QueriesAll query={query}></QueriesAll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queries;
