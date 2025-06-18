import React from 'react';
import { useNavigate } from 'react-router';

const QueriesAll = ({query}) => {
    const navigate = useNavigate();
    return (
        <div  className={`  rounded-xl px-4 py-4 relative cursor-pointer bg-[#d5ead2] text-black `} >
            <img className='h-[200px] w-full rounded-2xl' src={query.photo_url} />
            <button className='btn bg-green-500 text-white rounded-4xl absolute right-13 top-48'>Brand:{query.pBrand}</button>
            <p className='text-2xl mt-6'>{query.pName}</p>
            <p className='mt-3'>{query.qTitle}</p>
            <div className='md:flex justify-between items-center mt-3'>
                <p className='font-bold'>Recommendation Count : {query.recCount}</p>
                <button onClick={()=>navigate(`/queryDetails/${query._id}`)} className='btn bg-blue-500 text-white mt-3'>Recommend</button>
            </div>
        </div>
    );
};

export default QueriesAll;