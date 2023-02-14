import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Cards */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO's Out</p>
            <p className='px-2'>Through 8/26</p>
            <button className='bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='/'/>
      </div>

         {/* Cards */}
         <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>New Restaurants added meal.</p>
            <p className='px-2'>Try it out!</p>
            <button className='bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300' alt='/'/>
      </div>

         {/* Cards */}
         <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
            <p className='font-bold text-2xl px-2 pt-4'>We deliver desserts too</p>
            <p className='px-2'>Tasty treats</p>
            <button className='bg-white text-black mx-2 absolute bottom-4'>Order Now</button>
        </div>
        <img className='mx-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src='https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='/'/>
      </div>
    </div>
  )
}

export default HeadlineCards
