import React from 'react';

const RecentCart = ({query}) => {
    return (
        <div  className={`  rounded-xl px-4 py-4 relative cursor-pointer bg-[#d5ead2] text-black `} >
            <img className='h-[200px] w-full rounded-2xl' src={query.productImageUrl} />
            <button className='btn bg-green-500 text-white rounded-4xl absolute right-13 top-48'>Brand:{query.productBrand}</button>
            <p className='text-2xl mt-6'>{query.productName}</p>
            <p className='mt-3'>{query.queryTitle}</p>
        </div>
    );
};

export default RecentCart;