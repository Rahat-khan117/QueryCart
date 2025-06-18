import React from 'react';
import { useNavigate } from 'react-router';

const RecForMe = () => {
    const navigate = useNavigate();
    return (
        <div>
          <div
            className={`py-9 space-y-2 `}
          >
            <p className="text-3xl font-semibold text-center">
              No Recommendation Yet for you
            </p>
            <p className="text-center text-sm text-[#00000092]">
              Create a Recommendation <br /> after creating a new Recommendation you can see
              here
            </p>
           <div className='flex items-center justify-center'>
            <button onClick={() => navigate('/queries')} className='btn bg-green-600 text-white'>See the Query</button>
           </div>
          </div>  
        </div>
    );
};

export default RecForMe;