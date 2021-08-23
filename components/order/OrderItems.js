import { ArrowNarrowRightIcon, ClipboardCheckIcon, ClockIcon, EmojiHappyIcon, TruckIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react";

import SingleOrder from "./SingleOrder";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectOrder } from "../../reduxStore/productReduc";


function OrderItems({settings}) {
    
 //redux
 const orderBusket = useSelector(selectOrder);
     //here you can data fetch from back end api for show order pages

   console.log(orderBusket)

    return (
        <>
      
    
       
        <div  className="overflow-x-hidden h-screen w-screen " >
          <div>
              <span className="p-4 border-b-2 border-yellow-500 flex  flex-grow w-screen ">
              <p className="font-medium text-lg ml-14  ">Your Order </p>
              </span>
             </div>
          
             <span className="flex ml-16 font-medium text-xs mt-2 text-gray-500"><p> {orderBusket?.length} Orders</p></span>

  {/*Here Order single items and render from server side*/}
             <div className="ml-1 sm:ml-20 mt-5 pr-2">
                 {orderBusket &&
                orderBusket.map(({total,data,deliverfees,Pending,Packege,Shipping,Delivered,note,id})=>(
                    <div  key={id}>
                    <SingleOrder 
                    note={note}
                    data={data}
                    delivery={deliverfees}
                    settings={settings} />
  {/*Here Order time and total price*/}
                 <div  className="flex space-x-5 p-4 bg-gray-300 font-medium flex-grow text-xs justify-between sm:px-10">
                  <span  className="flex space-x-5 text-gray-800">
                  <span  className="space-y-2">
                   <p className=" font-bold">ORDER PLACED</p>
  {/* here time should be collect from backend timestamp */}
                    <p > 21/08/2021 </p>
                     
                     </span>
                     {settings.map((item,id)=>(
                       <span key={id} className="space-y-2"> 
                       <p className=" font-bold">TOTAL:  </p> 
                       <Currency quantity={total} currency={item.currency} /> </span>  
                  ))}
                  </span>
                        <span className="">
                            <p className="text-gray-700">ORDER# <span className="link text-gray-500">{id} </span></p>
                            <p className="text-blue-700"> { data?.length} items</p> 
                        </span>
                   </div>
                 
                 {/*Here Order status*/}

                 <div className=" w-screen mt-5 relative flex flex-col sm:flex-row items-center 
                 justify-center space-y-10 sm:space-y-0 sm:space-x-10 mb-10 ">
                    
                    <div className="sm:flex space-x-10">
                    <span className={`${Pending?.length === 0 ? 'border-gray-500' : 'border-green-500'} absolute rounded-full sm:ml-10 border-4  h-10 w-10`} >
                             <p className="flex mt-9 -ml-2  font-medium text-xs">Pending</p></span>
                         <span> <ClockIcon className={`${Pending?.length === 0 ? 'text-gray-400' : 'text-blue-500'} h-8 ml-1 -mt-5 sm:mt-1 w-8 `}/> </span>
                    </div>

                    <div className="sm:flex space-x-10">
                    <span className= {`${Packege?.length === 0 ? 'border-gray-500' : 'border-green-500'} absolute rounded-full sm:ml-10 border-4  h-10 w-10 `}>
                             <p className="flex mt-9 -ml-2  font-medium text-xs">Packege</p></span>
                         <span> <ClipboardCheckIcon className={`${Packege?.length === 0 ? 'text-gray-400' : 'text-blue-500'} h-8 ml-1 -mt-5 sm:mt-1 w-8 `}/> </span>
                    </div>

                    <div className="sm:flex space-x-10">
                    <span className={`${Shipping?.length === 0 ? 'border-gray-500' : 'border-green-500'} absolute rounded-full sm:ml-10 border-4  h-10 w-10 `}>
                             <p className="flex mt-9 -ml-2  font-medium text-xs">Shipping</p></span>
                         <span> <TruckIcon className={`${Shipping?.length === 0 ? 'text-gray-400' : 'text-blue-500'} h-8 ml-1 -mt-5 sm:mt-1 w-8 `}/> </span>
                    </div>

                    <div className="sm:flex space-x-10">
                    <span className={`${Delivered?.length === 0 ? 'border-gray-500' : 'border-green-500'} absolute rounded-full sm:ml-10 border-4  h-10 w-10 `}>
                             <p className="flex mt-9 -ml-2  font-medium text-xs">Delivered</p></span>
                         <span> <EmojiHappyIcon className={`${Delivered?.length === 0 ? 'text-gray-400' : 'text-yellow-500'} h-8 ml-1 -mt-5 sm:mt-1 w-8 `}/> </span>
                    </div>
                  
                      </div>

                      </div>   ))}




              
             </div>
        </div>  
        </>
    )
}

export default OrderItems
