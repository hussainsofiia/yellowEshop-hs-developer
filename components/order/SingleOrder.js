import { useEffect } from "react";
import Currency from "react-currency-formatter";


function SingleOrder({data,settings,delivery,note}) {

    return (
        <div>
            {data?.map(({image,title,discountPrice,quantity,category,price,description,i})=> {  
            
             //discunt price
    const discound = () => {
        return (Math.abs(((1-(discountPrice/100))-1)*100)).toFixed(2);
        }
        const finalDiscound = () => {
        return (price - (price*discound()/100)).toFixed(2);
            }

          return(

         
              <div key={i} className="flex space-x-2 sm:space-x-10 border-2 p-5">
                   
                   <div className="h-20 w-24 flex justify-center items-center sm:h-28 sm:w-32 p-1 border-2 rounded-md">
                 
                      <img  className=" object-contain " src={image[0]} alt="Photo" />
                 
               </div>
             
             
              <div className="text-xs sm:text-sm ">
                  <p> {title} </p>
                  <p className=" w-32 sm:w-72 line-clamp-1"> {description} </p>
                  <span className="flex flex-col sm:flex-row justify-start sm:space-x-4  font-medium text-gray-500 italic text-xs">
                  <p>Category: {category} </p>
                  <p>Discount: {discountPrice} %</p>
                  {settings.map((item,id)=>(
                       <span key={id} className="flex"> <p>Price:  </p> <Currency quantity= {finalDiscound()} currency={item.currency} /> </span>  
                  ))}
              
                  <p>Quantity: {quantity} </p>

                 </span>
                    {settings.map(({id,normalPrice,shippingNormal,shippingUrgent})=>(
                         <span key={id} className="flex space-x-5 font-medium text-xs mt-1"> <p>Delivery Type: </p> {delivery > normalPrice ?  <p>{shippingUrgent}</p> :<p>{shippingNormal}</p>  } </span>
                    ))}
                    <span className="mt-2">
                        {note.length === 0 ? '' :
                        <p className="font-bold mt-2 text-xs text-red-600">Note: {note}</p> }
                    </span>
                

                 </div>
            </div>    )})}
        </div>
    )
}

export default SingleOrder
