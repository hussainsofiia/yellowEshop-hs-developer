
import Image from "next/image";
import {SpeakerphoneIcon ,PresentationChartLineIcon,OfficeBuildingIcon,
    ColorSwatchIcon, GlobeIcon ,EyeIcon} from "@heroicons/react/outline"
import { useRouter } from "next/router";
import Currency from "react-currency-formatter";


function Categories({categori,topranked,PersonalEquipment,mostView,GlobalCollection,Dropshipping,settings}) {

    //router from next js
    const router = useRouter(); 
   
  console.log(categori)

    return (
        <div className=" overflow-x-scroll   p-5 gap-4 sm:flex-grow sm:p-2  
        grid grid-flow-row-dense md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-3 
        -mt-8  mx-auto z-30 ">

{/*part 1*/}    {categori?.map(({id,image,discount,title})=>(
                <div  key={id} className="z-30 bg-yellow-200 p-4  shadow-md rounded-md ">
                <span className="flex items-center space-x-2 ">
                <SpeakerphoneIcon className="h-5 shadow-md rounded-md" />
                <p className=" py-2 font-bold "> {title} </p>
                    </span>

                <div className="flex flex-col items-center  ">
              
                 <div onClick={()=> router.push(`/categories?title`)}  className="flex flex-col
                  items-center cursor-pointer" >
                
          
                  <div className="flex space-x-3 lg:space-x-1">
                  <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[0]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[1]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[2]}
                      layout="fill" />
                   </div>
                  </div>
               <p className=" text-lg xl:text-2xl font-bold   "> {discount}% <span className="text-red-600">O</span>
                  <span className=" text-green-600">F</span><span className="text-yellow-600">F</span> </p>
              
             </div>

            </div>
             </div> ))}
{/*part 2*/}
          {topranked?.map(({id,image,discount,title})=>(
                <div  key={id} className="z-30 bg-yellow-200 p-4 whitespace-nowrap shadow-md rounded-md ">
                <span className="flex items-center space-x-2 ">
                <PresentationChartLineIcon className="h-5 shadow-md rounded-md" />
                <p className=" py-2 font-bold "> {title} </p>
                </span>
                <div className="flex flex-col items-center ">
              
                 <div onClick={()=> router.push(`/categories?title`)}  className="flex flex-col
                  items-center cursor-pointer" >
                
          
                  <div className="flex space-x-3 lg:space-x-1 ">
                  <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white">
                      <Image
                      objectFit="cover"
                       src={image[0]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[1]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[2]}
                      layout="fill" />
                   </div>
                  </div>
               <p className=" text-lg xl:text-2xl font-bold   "> {discount}% <span className="text-red-600">O</span>
                  <span className=" text-green-600">F</span><span className="text-yellow-600">F</span> </p>
              
             </div>

                </div>

                 </div> ))}


{/*part 3*/}          
      {PersonalEquipment?.map(({id,image,discount,title})=>(
            <div  key={id} className="z-30 bg-yellow-200 p-4 whitespace-nowrap shadow-md rounded-md ">
            <span className="flex items-center space-x-2 ">
            <OfficeBuildingIcon className="h-5 shadow-md rounded-md" />
                <p className=" py-2 font-bold ">{title} </p>
            </span>

            <div className="flex flex-col items-center ">
          
                 <div onClick={()=> router.push(`/categories?title`)} className="flex flex-col
                  items-center cursor-pointer" >
                
          
                  <div className="flex space-x-3 lg:space-x-1 ">
                  <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[0]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white">
                      <Image
                      objectFit="cover"
                       src={image[1]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white">
                      <Image
                      objectFit="cover"
                       src={image[2]}
                      layout="fill" />
                   </div>
                  </div>
              
               <p className=" text-lg xl:text-2xl font-bold   "> {discount}% <span className="text-red-600">O</span>
                  <span className=" text-green-600">F</span><span className="text-yellow-600">F</span> </p>
              
             </div>

            </div>
            </div> ))}

 {/*part 4*/}     

 {Dropshipping?.map(({id,image,discount,title})=>(
            <div  key={id} className="z-30 bg-yellow-200 p-4 whitespace-nowrap shadow-md rounded-md ">
            <span className="flex items-center space-x-2 ">
            <ColorSwatchIcon className="h-5 shadow-md rounded-md" />
            <p className=" py-2 font-bold ">{title}</p>
            </span>

            <div className="flex flex-col items-center ">
          
                 <div onClick={()=> router.push(`/categories?title`)} className="flex flex-col
                  items-center cursor-pointer" >
                
          
                  <div className="flex space-x-3 lg:space-x-1 ">
                  <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[0]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[1]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[2]}
                      layout="fill" />
                   </div>
                  </div>
              
              <p className=" text-lg xl:text-2xl font-bold   "> {discount}% <span className="text-red-600">O</span>
                  <span className=" text-green-600">F</span><span className="text-yellow-600">F</span> </p>
              
             </div>

            </div>
                </div> ))}

 
{/*part 5*/}     

{GlobalCollection?.map(({id,image,discount,title})=>(
            <div key={id} className="z-30 bg-yellow-200 p-4 whitespace-nowrap shadow-md rounded-md ">
            <span className="flex items-center space-x-2 ">
            <GlobeIcon className="h-5 shadow-md rounded-md" />
            <p className=" py-2 font-bold ">{title} </p>
            </span>


            <div className="flex flex-col items-center ">
          
                 <div onClick={()=> router.push(`/categories?title`)}  className="flex flex-col
                  items-center cursor-pointer" >
                
          
                  <div className="flex space-x-3 lg:space-x-1 ">
                  <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white">
                      <Image
                      objectFit="cover"
                       src={image[0]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white ">
                      <Image
                      objectFit="cover"
                       src={image[1]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white">
                      <Image
                      objectFit="cover"
                       src={image[2]}
                      layout="fill" />
                   </div>
                  </div>
              
                    
             
                  <p className=" text-lg xl:text-2xl font-bold   "> {discount}% <span className="text-red-600">O</span>
                  <span className=" text-green-600">F</span><span className="text-yellow-600">F</span> </p>
              
             </div>

                </div>
                 </div> ))}

{/*part 6*/}      
{mostView?.map(({id,image,discount,title})=>(
                    <div key={id} className="z-30 bg-yellow-200 p-4 whitespace-nowrap  shadow-md rounded-md ">
                    <span className="flex items-center space-x-2 ">
                    <EyeIcon className="h-5 shadow-md rounded-md" />
                    <p className=" py-2 font-bold ">{title}</p>
                    </span>



                <div className="flex flex-col items-center  ">
              
                 <div onClick={()=> router.push(`/categories?title`)}  className=" flex flex-col items-center
                  cursor-pointer" >
                
          
                  <div className="flex space-x-3 lg:space-x-1 ">
                  <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white">
                      <Image
                      objectFit="cover"
                       src={image[0]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white">
                      <Image
                      objectFit="cover"
                       src={image[1]}
                      layout="fill" />
                   </div>
                   <div className="relative h-24 w-24 xl:h-32 xl:w-32 border-2 border-white">
                      <Image
                      objectFit="cover"
                       src={image[2]}
                      layout="fill" />
                   </div>
                  </div>
              
                    
             
                  <p className=" text-lg xl:text-2xl font-bold   "> {discount}% <span className="text-red-600">O</span>
                  <span className=" text-green-600">F</span><span className="text-yellow-600">F</span> </p>
              
             </div>

                </div>
                </div> ))}
             </div>
    )
}

export default Categories
