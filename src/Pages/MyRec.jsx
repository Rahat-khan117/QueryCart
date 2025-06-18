import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyRec = () => {
    const navigate = useNavigate()
    const recData = useLoaderData();
    console.log(recData);
    const handleDelete = (id) => {
             Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            // start deleting group
            fetch(`https://11-server-side.vercel.app/createRec/${id}`, {
              method: "DELETE",
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.deletedCount) {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your group has been deleted.",
                    icon: "success",
                  });
                  setTimeout(() => {
                    window.location.reload();
                  }, 1000);
                }
              });
          }
        });
        }
    return (
        <div className='md:px-14 px-5'>
            <div
            className={`py-9 space-y-2 ${recData.length !== 0 ? "hidden" : ""}`}
          >
            <p className="text-3xl font-semibold text-center">
              No Created Recommendation Yet
            </p>
            <p className="text-center text-sm text-[#00000092]">
              Create a Recommendation <br /> after creating a new Recommendation you can see
              here
            </p>
           <div className='flex items-center justify-center'>
            <button onClick={() => navigate('/queries')} className='btn bg-green-600 text-white'>See the Query</button>
           </div>
          </div>
            <div >
                {
                    recData.map((rec) => {
                        console.log(rec);
                     return (
                    <div className="relative bg-white rounded-3xl mt-20 w-full px-5 py-5 flex md:gap-6 gap-3 items-center
                    ">
                        <div className='absolute -top-7 -left-3 flex gap-3 '>
                            <img className=' h-[50px] w-[50px] rounded-full ' src={rec.userPhoto} />
                            <p className='font-bold text-xl'>{rec.user_name}</p>
                        </div>
                        <div onClick={() => handleDelete(rec._id)} className='absolute top-3 right-3 cursor-pointer'>
                            <i className="fa-solid fa-delete-left text-3xl text-red-700"></i>
                        </div>
                        
                     <img className='rounded-3xl h-[100px] w-[100px] sm:h-[150px] sm:w-[150px]' src={rec.reqPhoto} />
                     <div className='space-y-2'>
                        <p className='text-[16px] md:text-xl font-bold'>{rec.recPName}</p>
                        <p>{rec.recTitle}</p>
                        <p className='text-[#000000c3] font-bold text-[16px] md:text-xl'>Recommendation reason : {rec.recReason}</p>
                     </div>
                  </div>
                  )
                  })
                }
            </div>
        </div>
    );
};

export default MyRec;