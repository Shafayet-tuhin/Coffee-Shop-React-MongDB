import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TbArrowBack } from "react-icons/tb";
import Swal from 'sweetalert2'
import { userContext } from '../context/DataContext';


const AddCoffe = () => {


  
const {users , setUsers} = useContext(userContext)


  const handleSubmit = (e) => {
     e.preventDefault() ;

     const name = e.target.name.value ;
     const chef = e.target.chef.value ;
     const supplier = e.target.supplier.value ;
     const taste = e.target.taste.value ;
     const category = e.target.category.value ;
     const details = e.target.details.value ;
     const photo = e.target.photo.value ;

    const user = {name , chef , supplier , taste , category , details , photo}

    console.log(user)

    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    })
     .then(res => res.json())
     .then(data => {
       fetch("http://localhost:5000/user")
       .then(res => res.json())
       .then(data => setUsers(data))
       
        console.log(data)
        if (data.acknowledged) {
          Swal.fire({
            title: "Coffee added successfully",
            icon: "success"
          });
        }
      })
    e.target.reset();
  }


  return (
    <div className='container mx-auto bg-[url("/images/more/11.png")] mt-8 '>
      <div>
        <Link to='/' > <button className='flex gap-1 font-abc items-center text-[#374151] font-normal text-xl lg:text-3xl mb-6 lg:mb-[3.12rem]'> <TbArrowBack /> Back to home </button></Link>
      </div>

      <div className='bg-[#F4F3F0] px-8 py-6 lg:px-28 lg:py-[4.37rem] rounded-3xl'>
        <div className='flex flex-col gap-8 items-center'>
          <p className='font-abc text-[#374151] font-normal text-3xl lg:text-[2.812rem]'>
            Add New Coffee
          </p>
          <p className='text-sm text-center lg:text-lg font-abc font-normal '>
            It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form className='flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:gap-4 font-abc mt-6'  onSubmit={handleSubmit}>
          <div>
            <label className="block text-xl font-semibold leading-7">Name</label>
            <input type="text" name="name" placeholder="Enter your name" className="w-full border rounded-md py-2 px-3 leading-6 font-normal text-base" />
          </div>

          <div>
            <label className="block text-xl font-semibold leading-7">Chef</label>
            <input type="text" name="chef" placeholder="Enter the chef's name" className="w-full border rounded-md py-2 px-3 leading-6 font-normal text-base" />
          </div>

          <div>
            <label className="block text-xl font-semibold leading-7">Supplier</label>
            <input type="text" name="supplier" placeholder="Enter the supplier's name" className="w-full border rounded-md py-2 px-3 leading-6 font-normal text-base" />
          </div>

          <div>
            <label className="block text-xl font-semibold leading-7">Taste</label>
            <input type="text" name="taste" placeholder="Enter the taste" className="w-full border rounded-md py-2 px-3 leading-6 font-normal text-base" />
          </div>

          <div>
            <label className="block text-xl font-semibold leading-7">Category</label>
            <input type="text" name="category" placeholder="Enter the category" className="w-full border rounded-md py-2 px-3 leading-6 font-normal text-base" />
          </div>

          <div>
            <label className="block text-xl font-semibold leading-7">Details</label>
            <input type="text" name="details" placeholder="Enter the details" className="w-full border rounded-md py-2 px-3 leading-6 font-normal text-base" />
          </div>

          <div className="col-span-2">
            <label className="block text-xl font-semibold leading-7">Photo</label>
            <input type="text" name="photo" placeholder="Enter the photo URL" className="w-full border rounded-md py-2 px-3 leading-6 font-normal text-base" />
          </div>

          <div className="col-span-2">
            <button className='bg-[#D2B48C] text-[#331A15] font-normal text-2xl w-full rounded-md py-1 border-2 border-[#331A15]'>Add Coffee</button>
          </div>

        </form>


      </div>
    </div>
  )
}

export default AddCoffe