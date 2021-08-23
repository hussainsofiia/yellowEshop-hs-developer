import { useRouter } from "next/router";
import {addDetails, selectDetails, selectrelated} from "../../reduxStore/detailsStore"
import { useDispatch } from 'react-redux';
import Currency from "react-currency-formatter";
import Image from "next/image";
import { useEffect, useState } from "react";
import {StarIcon} from "@heroicons/react/solid";



function RelatedItems({id,title,price,discountPrice,description,category,image,toogle,qtytoogle,
    quantity,type,companyName,rating,instock,settings}) {
    
  
   //redux part
   const dispatch = useDispatch();
  
   //react state part
   const router = useRouter();
    const [hasPrime] = useState(Math.random() <0.5);
 
 
 

        const addItemToDetails = (e) => {
       e.preventDefault(); 
        const productdetail = {
        id,
        title,
        price,
        rating,
        description,
        category,
        discountPrice,
        image,
        hasPrime,
        quantity,
        type,companyName,instock,}
    dispatch(addDetails(productdetail));
    router.push(`/details?title=${id,title}`)

    toogle(false);
    qtytoogle(quantity);
  
        };
  
  

///discunt price

        const discound = () => {
     return (Math.abs(((1-(discountPrice/100))-1)*100)).toFixed(2);
        }
        const finalDiscound = () => {
    return (price - (price*discound()/100)).toFixed(2);
        }



    return (
        <div   className="sm:flex-grow overflow-hidden sm:w-3/4 relative flex flex-col m-5 bg-white z-30 shadow-md sm:p-10">

        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        <Image src={image[0]} height={100} width={100} objectFit="contain" 
        className="cursor-pointer transition duration-150 transform hover:scale-110"/>
        <p className="my-3 line-clamp-2 px-2   text-sm ">{title}</p>


             <div className="flex ml-2"> 
          {Array(rating).fill().map((_, i)=> (

             <StarIcon key={i} className="h-5 text-yellow-500"/>

                 ) )}  </div>

      
      {/*<p className="text-xs my-2 line-clamp-2 ">{description}</p> */} 
      
                {settings.map((item,id)=>(
                 <div key={id} className="mb-5 px-4 font-bold flex justify-between text-xs sm:text-sm "> 
                <span className=" line-through text-gray-400"> <Currency  quantity={price} currency={item.currency}  /></span>
                <span>{discound()}% OFF </span>
                <span> <Currency className="" quantity= {finalDiscound()} currency={item.currency}  /></span>
      
                 </div> ))}

    {/*has prime fanction */}

      { hasPrime && (
    <div   className="flex items-center space-x-2 -mt-5">
        {settings.map(({id,primeimage})=>(
                <img key={id} className="w-12" src={primeimage} alt="" />
          ))}
        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>

      </div>)}

        <button className="cursor-pointer button" onClick={addItemToDetails}> View Details</button>


    </div> 
    )
}

export default RelatedItems
