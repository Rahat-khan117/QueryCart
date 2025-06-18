import React, { useState } from "react";
import { useLoaderData } from "react-router";
import QueriesAll from "../assets/Compnents/QueriesAll";

const Queries = () => {
    const [grid ,setGrid] = useState(false);
  const queries = useLoaderData();
  const [AllQ ,setAllQ] = useState(queries)
  const [searchText, setSearchText] = useState('');
  const handleSearch = (e,text) => {
     e.preventDefault();
     const searchQueries = queries.filter(query => query.pName.toLowerCase().split(' ').includes(text.toLowerCase()) === true);
     setAllQ(searchQueries);
  }
  return (
    <div className="px-5 md:px-14 lg:px-12">
      <div className="mt-12">
        <div className="sm:flex sm:justify-between">
            <p className="text-3xl font-bold">All Queries Here</p>
            <form onSubmit={(e) => handleSearch(e,searchText)}>
                <div className="flex mt-3">
                    <input 
                    onChange={e => setSearchText(e.target.value)}
                    value={searchText} className="border-1 rounded-tl-lg rounded-bl-lg border-[#0000009c] bg-[#fff] px-3" placeholder="Search your query" type="text" />
                <button type="submit" className="btn bg-green-500 text-white">Search</button>
                </div>
            </form>
        </div>
        <div className="hidden md:flex mt-4 gap-4">
           <button onClick={()=> setGrid(true)} className="btn bg-blue-500 text-white">2 Column</button>
           <button onClick={()=> setGrid(false)} className="btn bg-green-500 text-white">3 Column</button>
        </div>
        <div className={`grid  sm:grid-cols-2 gap-5 mt-6 ${grid ? 'md:grid-cols-2 px-18' : 'md:grid-cols-3'}`}>
          {AllQ.map((query) => (
            <QueriesAll query={query}></QueriesAll>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Queries;
