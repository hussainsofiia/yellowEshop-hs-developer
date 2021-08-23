import { StarIcon,} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addDetails, addTorelated } from "../../reduxStore/detailsStore";

 

const MAX_RATING = 5;
const MIN_RATING = 1;
function SearchBody({id,settings,title,discountPrice ,price,description,category,image,quantity,type,companyName,rating,instock,posts}) {

        const [hasPrime] = useState(Math.random() <0.5);
       
//react state part
        const [loading,setLoading] = useState(false);
        const router = useRouter();
//redux part
        const dispatch = useDispatch();

         const addItemToDetails = (e) => {
            e.preventDefault(); 
         const productdetail = {
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
            type,companyName,instock }
            dispatch(addDetails(productdetail));
            setLoading(true);
        filteritems(type);
        router.push(`/details?title=${id,title}`)
        .then((load)=>{
            setLoading(false);
        })
    };
    
//filter for product related items send to redux

    const filteritems = (categItem) => {
    const updatedItems = posts.filter((currentValueItems) => {
        return currentValueItems.type === categItem;
    })
    dispatch(addTorelated(updatedItems));
   
    } 

    //discunt price

        const discound = () => {
    return (Math.abs(((1-(discountPrice/100))-1)*100)).toFixed(2);
        }
        const finalDiscound = () => {
    return (price - (price*discound()/100)).toFixed(2);
        }


    return (
        <div className="grid grid-cols-1 md:grid-cols-5 ">
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
   {settings.map((item,id)=>(
    <div key={id} className="mb-5 font-bold text-sm flex justify-between "> 
    <span className=" line-through text-gray-400"> <Currency  quantity={price} currency={item.currency} /></span>
    <span>{discound()}% OFF </span>
    <span> <Currency className="" quantity= {finalDiscound()} currency={item.currency} /></span>

        </div> ))}
      
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
        <div className='flex flex-col space-y-2 my-auto md:justify-self-end shadow-xl rounded-full border-2  '>


        <div className="cursor-pointer h-10 sm:w-28 button flex justify-center   " onClick={addItemToDetails}> 
     <div className="relative">
         {loading ? 
     <span className=" absolute w-5 h-5 border-t-2  border-white rounded-full  animate-spin"></span> : 
     <span>View Details</span> 
     }
     </div>
    
      </div>
    
 </div>
</div>
    )
}

export default SearchBody
