import React, { useContext } from 'react'
import { FaRegEye } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { userContext } from '../context/DataContext';

const SingleProducts = (item) => {

    const data = item.item;

     const {users , setUsers} = useContext(userContext)

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {


              fetch(`https://coffee-server-pink.vercel.app/user/${data._id}` , {
                method: 'DELETE'
              })
               .then(res => res.json())
               .then(data => console.log(data) )    


              const newUsers = users.filter(el => el._id !== data._id)

              setUsers(newUsers)

              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }



    return (
        <div>
            <div className=' flex items-center bg-[#F5F4F1] lg:justify-center lg:px-8 lg:py-4 rounded-lg lg:w-[30rem]'>
                <img className='lg:w-[11.5625rem] lg:h-[14.9375rem] w-36 h-44' src={data.photo} alt="" />

                <div className='flex flex-col gap-2 text-lg font-abc font-semibold mr-4'>
                    <p>Name : {data.name}</p>
                    <p>Chef : {data.chef}</p>
                    <p>Price : {data.taste}</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <Link to={`/view/${data._id}`} className='bg-[#D2B48C] text-white px-2 py-2 rounded-md'><FaRegEye /></Link>
                    <Link to={`/updateCoffe/${data._id}`} className='bg-[#3C393B] text-white px-2 py-2 rounded-md'>  <FaEdit /></Link>
                    <Link onClick={handleDelete} className='bg-[#EA4744] text-white px-2 py-2 rounded-md'> <AiOutlineDelete /> </Link>
                </div>
            </div>
        </div>
    )
}

export default SingleProducts