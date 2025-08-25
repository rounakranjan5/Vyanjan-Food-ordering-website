import React from 'react'

const ItemsList = (props) => {
    console.log(props);
  return (
    <div>

        <div>
            <ul>
                {
                    props.props.map((item)=>{
                        return <li key={item?.card?.info?.id} className='flex justify-between flex-col  m-3 p-3 flex-wrap gap-2 rounded-lg border-gray-300 shadow-xl bg-gray-100 cursor-pointer '>
                            <div className="flex-row  flex-wrap ">
                                <h4 className='text-red-950 font-semibold text-lg mb-2'>{item?.card?.info?.name}
                                </h4>


                                <div className='mb-1 flex justify-center gap-2 flex-wrap-reverse md:flex-nowrap md:justify-between'>
                                  
                                      <h4 className='text-wrap'>{item?.card?.info?.description}</h4>
                                      <div className='relative'>
                                      <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/"+item?.card?.info?.imageId} className='rounded-md '/>
                                      <button className='text-white p-3 rounded-lg font-semibold bg-black absolute top-9/12 left-2/5'>Add +</button>
                                      </div>
                                   
                                </div>

                                <h4 className='font-semibold text-yellow-700 text-2xl '>₹{item?.card?.info?.price/100 || item?.card?.info?.finalPrice/100 || item?.card?.info?.variantsV2?.pricingModels[0]?.price/100}</h4>


                          </div>

                            </li>
                    })
                }
            </ul>
        </div>

    </div>
  )
}

export default ItemsList