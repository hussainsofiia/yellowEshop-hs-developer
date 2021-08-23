import { MinusCircleIcon, PlusCircleIcon, StarIcon, TrashIcon,} from "@heroicons/react/solid";
import Image from "next/image";
import {  useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch, useSelector } from "react-redux";
import {  removeFromBasket ,addQuantityToItem,subtractQuantityFromItem,} from "../../reduxStore/productReduc";

function CheckoutProduct({
    id,
    title,
    price,
    discountPrice,
    rating,
    description,
    category,
    image,
    hasPrime,
    quantity,
    type , qty,settings }) {

      
        //state
        const dispatch = useDispatch();
     
       const [product] = useState ({
            id,
            title,
            price,
            discountPrice,
            rating,
            description,
            category,
            image,
            hasPrime,
            quantity,
            type,
            qty
        })  





        const remove = () => {
      dispatch(removeFromBasket({ id  }))
      }
        const incadd = () => {
          dispatch(addQuantityToItem(product.id,product.quantity))
            }
        const decadd = () => {
    dispatch(subtractQuantityFromItem(product.id,product.quantity))
        }


///discunt price

        const discound = () => {
        return (Math.abs(((1-(discountPrice/100))-1)*100)).toFixed(2);
        }
        const finalDiscound = () => {
            return (price - (price*discound()/100)).toFixed(2);
        }


       
    return (
        <div className="grid grid-cols-1  xl:grid-cols-5 border-b-2 mb-4 pb-2 ">
           <Image
           src={image[0]} 
           height={200}
           width={200}
           objectFit='contain'
           />
           
  {/*midle part*/}
  <div className='col-span-3 sm:mx-5 '>
      <p>{title}</p>
      <div className='flex'>
          {Array(rating).fill().map((_,i) => (
              <StarIcon key={i} className='h-5 text-yellow-500'/>
          ))
          }
      </div>
      <p className="text-xs my-2 line-clamp-3">{description}</p>
      <div className="flex justify-between">
          {settings.map((item,id)=>(
               <div key={id} className="mb-5 font-bold flex space-x-2 text-xs sm:text-sm "> 
               <span>Price:</span>
        <span className=" line-through text-gray-400"> 
         <Currency  quantity={price} currency={item.currency} /></span>
        <span>-{discound()}% </span>
        <span>= <Currency className="" quantity= {finalDiscound()} currency={item.currency} /></span>
         
            </div>
          ))}
     
         
         </div>
          {
              hasPrime && (
                  <div className="flex items-center space-x-2">
                       {settings.map(({id,primeimage})=>(
                <img key={id} className="w-12" src={primeimage} alt="" />
                          ))}
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                  </div>
               )
               }
        </div>
     {/*add button /remove btn  part*/}
     <div className='lg:flex lg:flex-col px-2 space-y-2 my-auto justify-self-end   '>

       <div  className="flex space-x-10 items-center shadow-xl border-2 px-2 rounded-md">
           <div onClick={incadd}  className='shadow-md cursor-pointer rounded-full '>
           <PlusCircleIcon className="h-4 sm:h-6" />
           </div>

        
        <span  className=' text-sm sm:text-2xl font-bold'><p>  {quantity} </p></span> 
       
        <div onClick={decadd} className='shadow-md cursor-pointer rounded-full '>
           <MinusCircleIcon className="h-4 sm:h-6" />
            </div> 


       </div>
       <span  className=' flex items-center justify-center   '>
       <TrashIcon onClick={remove} className="h-4 sm:h-6 cursor-pointer text-gray-500 hover:text-gray-700" />
      </span>

         </div>
        </div>
    )
}

  
  export default CheckoutProduct;