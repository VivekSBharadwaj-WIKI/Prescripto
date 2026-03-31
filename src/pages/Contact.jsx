import React from 'react'
import { assets } from "../assets/assets_frontend/assets";

const contact = () => {
  return (
    <div>
      <div className="w-4/5 mx-auto">
      <section>
        <h1 className="text-center m-5 text-xl">
          CONTACT <span className="font-medium">US</span>
        </h1>
      </section>
      <section>
        <div className="flex">
          <img src={assets.contact_image} alt="" className="h-100 w-100 m-10" />
          <p className="m-10 flex flex-col align-center justify-center text-gray-700">
            <span className="text-xl font-semibold">Our Vision</span>
            <br />
            54709 Willms Station 
            <br />
            Suite 350, Washinton, USA
            <br />
            <br />
            Tel: (415) 555-0132
            <br />
            Email: greatstackdev@gmail.com
            <br />
            <br />
            <span className="text-xl font-semibold">CAREERS AT PRESCRIPTO</span>
            <br />
            Learn more about out terms and job openings.
            <br />
            <button className='p-3 border w-1/2 my-4'>Explore Jobs</button>
          </p>
        </div>
      </section>
    </div>
    </div>
  )
}

export default contact