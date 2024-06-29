

import React from 'react'
interface IProps{

}
const Error=({}:IProps)=> {
  return (
    <>
    <div className="flex flex-col justify-center items-center my-3 text-center">
       <div>
       <h1 className="text-6xl font-bold my-3 text-blue-600">403</h1>
       <p className="text-3xl font-bold">Forbidden to access this Api</p>
       <p>Monthly API quota exceeded. Add billing details to upgrade to Unlimited reqs/month plan</p>
       </div>

    </div>
    </>
  )
}

export default Error