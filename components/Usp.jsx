import React from 'react'

const Usp = () => {
  return (
    <div id='usp' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='hero max-w-[1240px] m-auto md:grid grid-cols-3 gap-10' >
        <div className='img col-span-1 m-auto h-auto rounded-2xl flex items-center justify-center p-4'>
          <img className='rounded' src="/assets/usp_img.jpg" alt="/" />
        </div>
        <div className='text col-span-2'>
          <h2 className='pl-8 py-4'>Project USP</h2>
          <div className='p-4'>
            <div>
              <li>Designer Entrance Lobby</li>
              <li>Ample Car Parking</li>
            </div>
            <div>
              <li>Spread over an area of 1.46 acres</li>
              <li>It has 3 towers with 22 floors each</li>
            </div>
          </div>
          
          <button className='btn bg-white text-orange-600 ml-10 py-3 mt-8 px-5 border-orange-600 rounded-full hover:bg-white hover:text-orange transition-all duration-300 uppercase'>Download Brochure</button>
        </div>
      </div>
    </div>
  )
}

export default Usp