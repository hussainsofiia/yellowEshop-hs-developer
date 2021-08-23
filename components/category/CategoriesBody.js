import {StarIcon} from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";


function CategoriesBody({id,title,discountPrice ,price,description,
    category,image,quantity,type,image1,image2,image3,companyName,rating,instock}) {





///this function for discount price show

                const discound = () => {
                 return (Math.abs(((1-(discountPrice/100))-1)*100)).toFixed(2);
                    }
                    const finalDiscound = () => {
                      return (price - (price*discound()/100)).toFixed(2);
                        }


    return (

        <div className="sm:flex-grow overflow-hidden relative flex flex-col m-5 bg-white z-30 p-10">

        <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
        <Image src={image} height={200} width={200} objectFit="contain"/>
        <h4 className="my-3 line-clamp-2">{title}</h4>
        <div className="flex"> 
          {Array(rating).fill().map((_, i)=> (
          <StarIcon key={i} className="h-5 text-yellow-500"/>

              ) )}  </div>

            <div className="mb-5 text-sm font-bold flex justify-between "> 
             <span className=" line-through text-gray-400"> <Currency  quantity={price} currency="EUR" /></span>
             <span>-{discound()}% </span>
              <span> <Currency className="" quantity= {finalDiscound()} currency="EUR" /></span>
            </div>

         </div> 
    )
}

export default CategoriesBody
