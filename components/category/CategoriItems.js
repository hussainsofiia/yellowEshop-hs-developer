import { useRouter } from "next/router";
import {addDetails, addTorelated} from "../../reduxStore/detailsStore"
import { useDispatch } from 'react-redux';
import Currency from "react-currency-formatter";
import Image from "next/image";
import {  useState } from "react";
import {StarIcon} from "@heroicons/react/solid";



const MAX_RATING = 5;
const MIN_RATING = 1;
function CategoriItems({settings,id,title,discountPrice ,price,description,
    category,image,quantity,type,companyName,rating,instock,posts}) {
    
  
   //redux part
   const dispatch = useDispatch();
  
   //react state part
    const [loading,setLoading] = useState(false);
    const router = useRouter();
    const [hasPrime] = useState(Math.random() <0.5);
  

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
                      dispatch(addTorelated(updatedItems));}
   
    
    

///discunt price

            const discound = () => {
             return (Math.abs(((1-(discountPrice/100))-1)*100)).toFixed(2);
                }
            const finalDiscound = () => {
             return (price - (price*discound()/100)).toFixed(2);
                }


    return (
        <div className="sm:flex-grow overflow-hidden relative flex flex-col m-5 bg-white z-30 sm:p-10">

        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        <Image className="cursor-pointer transition duration-150 transform hover:scale-110" 
        src={image[0]} height={150} width={150} objectFit="contain"/>
        <h4 className="my-3 px-2 line-clamp-2">{title}</h4>


      <div className="flex ml-2"> 
          {Array(rating).fill().map((_, i)=> (
          <StarIcon key={i} className="h-5 text-yellow-500"/>

                  ) )}  </div>
             <p className="text-xs my-2 line-clamp-2  ">{description}</p>
      
                     {settings.map((item,id)=>(
                        <div key={id} className="mb-5 px-2 font-bold text-xs sm:text-sm flex justify-between "> 
                        <span className=" line-through text-gray-400"> <Currency  quantity={price}
                         currency={item.currency} /></span>
                        <span>{discound()}% OFF </span>
                        <span> <Currency className="" quantity= {finalDiscound()} currency={item.currency} /></span>

                            </div> ))}

    {/*has prime fanction */}

                    { hasPrime && (
                    <div   className="flex items-center space-x-2 -mt-5">
                  {settings.map(({id,primeimage})=>(
                <img key={id} className="w-12" src={primeimage} alt="" />
                         ))}
                 <p className="text-xs text-gray-500">FREE Next-day Delivery</p>

                    </div>)}

                    <div className="cursor-pointer h-10 button flex justify-center   " onClick={addItemToDetails}> 
                     <div className="relative">
                        {loading ? 
                          <span className=" absolute w-5 h-5 border-t-2  border-white rounded-full  animate-spin"></span> : 
                        <span>View Details</span> 
                             }
                         </div>
    
                         </div>

                        </div> 
    )
}

export default CategoriItems
