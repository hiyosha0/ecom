import React from 'react'



const Home = () => {
  return (
    <div className=' relative' >
      <img className=' absolute top-32 left-10 '  src='/assets/dot.svg' alt='m' />
        <div className=' container mx-auto flex justify-between flex-col lg:flex-row md:flex-nowrap flex-wrap items-center'>
            
            <div className=' flex flex-col gap-4'>
              <p className=' text-5xl font-bold '>Natural And Fresh SeaFood <br></br> From SriLanka.</p>
              <p className=' text-base text-gray-400 '>
                We are a small fishing village turned tech startup,<br/> focusing on creating innovative and delicious seafood  with the amazing freshness 

              </p>
              <div className=' flex p-3 gap-3'>
                <button className=' bg-purple-500 rounded-2xl p-3'>Our Service</button>
                <button className=' bg-purple-100 rounded-2xl p-3 text-gray-600'>Contact Us</button>
              </div>
              

            </div>
            <img className=' h-[600px] 'src='/assets/Group 3.svg' alt='heroimg'/>

        </div>
        <div className='container mx-auto'>
          <p className=' text-xl text-center'>Trusted By Local And International Companies</p>
          <img className=' flex justify-center  ' src='/assets/company.png'/>

        </div>
        
        

    </div>
    
  )
}

export default Home