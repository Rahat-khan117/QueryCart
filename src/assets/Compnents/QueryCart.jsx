import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const QueryCart = ({query}) => {
    const navigate = useNavigate();
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
        fetch(`http://localhost:3000/createQuery/${id}`, {
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
        <div  className={`  rounded-xl px-4 py-4 pb-6 relative cursor-pointer bg-[#d5ead2] text-black `} >
            <img className='h-[200px] w-full rounded-2xl' src={query.photo_url} />
            <button className='btn bg-green-500 text-white rounded-4xl absolute right-13 top-48'>Brand:{query.pBrand}</button>
            <p className='text-2xl mt-6'>{query.pName}</p>
            <p className='mt-3'>{query.qTitle}</p>
            <div className='flex gap-3 mt-4
            '>
                <button className='bg-green-500 text-white btn'>View</button>
                <button onClick={()=>navigate(`/updateQ/${query._id}`)} className='bg-blue-500 text-white btn'>Update</button>
                <button onClick={() => handleDelete(query._id)} className='bg-red-500 text-white btn'>delete</button>
            </div>
        </div>
    );
};

export default QueryCart;