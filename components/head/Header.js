import Image from "next/image";
import { ChevronRightIcon, GlobeAltIcon, MenuIcon,SearchIcon,ShoppingCartIcon, XIcon} from "@heroicons/react/outline";
import {useEffect, useState} from 'react';
import { useRouter } from "next/router"
import { useDispatch, useSelector } from "react-redux";
import { addSearch } from "../../reduxStore/searchBasket";
import { addSearchpages, addTorelated } from "../../reduxStore/detailsStore";
import { selectTotalqty } from "../../reduxStore/productReduc";
import Loading from "../Loading";
import { FlagIcon, UserCircleIcon } from "@heroicons/react/solid";


export default function Header({session,settings,posts,button,siteButton}) {


          
            const router = useRouter();
            //redux part
            const dispatch = useDispatch();
            const totalqty = useSelector(selectTotalqty);
          //react state
            const [click,setClick] = useState(false)
            const [searchItems, setSearchItems] = useState("");
            const [loading,setLoading] = useState(false)

          useEffect(() => {
            dispatch(addSearch(searchItems,setSearchItems));
          }, [searchItems]);

          
   const handleClick = (e) => {
            if(e.target.classList.contains('handleclosedOutput')){
              setClick(false);  }  }

    const move = (e) =>{
            e.preventDefault(); 
            setLoading(true);
          router.push("/checkout")
          .then(()=>{
            setLoading(false);  }) }

    const homemove = (e) =>{
            e.preventDefault(); 
            setLoading(true);
          router.push("/")
          .then(()=>{
            setLoading(false);   })  }

    const orders = (e) =>{
            e.preventDefault(); 
            
            setLoading(true);
          router.push("/orderlist")
          .then(()=>{
            setLoading(false);   }) }


    const searchpages = (e) =>{
            e.preventDefault(); 
            dispatch(addSearchpages(searchItems,setSearchItems));
            setLoading(true);
            router.push(`/search?title=${searchItems}`)
            .then((load)=>{
              setLoading(false); }) }

          //site bar by click show categori items

    const filteritems = (categItem) => {
    const updatedItems = posts.filter((currentValueItems) => {
                return currentValueItems.type === categItem;
            })
            dispatch(addTorelated(updatedItems));
            setLoading(true);
            router.push(`/categoridetails?title=`)
            .then((load)=>{
              setLoading(false);  })}
          
  const allCategori = (e) =>{
          e.preventDefault(); 
          setLoading(true);
        router.push("/categories")
        .then(()=>{
          setLoading(false);   }) }

  const profilemove = (e) =>{
          e.preventDefault(); 
          setLoading(true);
          router.push("/profile")
        .then(()=>{
          setLoading(false); })}

  const signPage = (e) =>{
          e.preventDefault(); 
          setLoading(true);
          
          router.push("/signin")
        .then(()=>{
          setLoading(false); })  }

 const signOutPage = (e) =>{
          e.preventDefault(); 
          setLoading(true);
        
          router.push("/signin")
        .then(()=>{
          setLoading(false);
        })
          
        }
 
    return (
        <div className=" ">
              <header>
                 {/*Left*/}
    

    
        <div  className={` bg-yellow-800 sm:flex sm:flex-grow  overflow-hidden items-center  p-1 flex-grow py-2`} >
     
          <div className=" relative h-20 w-32 mr-2 mt-2 flex ml-10 sm:ml-2 items-center flex-grow sm:flex-grow-0">
            { settings?.map(({id,logo})=>(
              <Image
              onClick={homemove}
              key={id}
              src={logo[0]}
              layout="fill"
              objectFit="contain"
               className="cursor-pointer"
              />
            ))}
      
      </div > 
      
        {/*search part*/}
   

       
        <div  className={`hidden sm:flex items-center text-white  h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500 `}>
     

      <input  type="text" onChange={(e) => {
            setSearchItems(e.target.value);
          }} className="p-2 h-full w-6 flex-grow text-gray-800 flex-shrink rounded-l-md focus:outline-none px-4  " />

        <SearchIcon onClick={searchpages} className="h-12 p-4 " />
         
        </div>
       

        {/*right*/}
        <div className={` text-white flex items-center justify-between text-xs space-x-6 mx-6 whitespace-nowrap`}>

          {session ?   <div onClick={profilemove}  className="cursor-pointer link">
            <p className="link sm:hidden">
              
              {session ? `Hello, ${session.user.name[0]}` : 'Sign In'}
             </p>
             <p className="link hidden sm:inline-flex">
              
              {session ? `Hello, ${session.user.name}` : 'Sign In'}
             </p>
            <p className="font-extrabold md:text-sm"> Account & Lists</p>
          </div> :
          <div  onClick={signPage} className="cursor-pointer link">
            <p className="link sm:hidden">
              
              {session ? `Hello, ${session.user.name[0]}` : 'Sign In'}
             </p>
             <p className="link hidden sm:inline-flex">
              
              {session ? `Hello, ${session.user.name}` : 'Sign In'}
             </p>
            <p className="font-extrabold md:text-sm"> Account & Lists</p>
          </div> }

          <div onClick={orders} className="link">
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>

          <div 
           onClick={move}
          
          className='relative link flex items-center'>
            <span className="  absolute top-0 right-0 md:right-10 h-5 w-5 
            text-center bg-yellow-400 rounded-full font-bold">
             
             {/*{items.length} */}
             <p className="flex justify-center text-black items-center">  {totalqty}  </p>
              
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2 ">
              Basket
            </p>
          </div>

        </div>

      </div>  
     
        {/*bottom nav part*/}
       

        <div  className="flex items-center space-x-3 p-2 pl-6  bg-yellow-700 text-white text-sm">
          <p onClick={()=>setClick(!click)} className="link flex items-center ">
            <MenuIcon className="h-6 mr-1"/>
            All </p>
           
              <p className="link"> {button.btn1} </p>
              <p className="link hidden lg:inline-flex">{button.btn2} </p>
              <p className="link hidden lg:inline-flex">{button.btn3} </p>
              <p className="link hidden lg:inline-flex">{button.btn4} </p>
              <p className="link hidden lg:inline-flex">{button.btn5} </p>
              <p className="link hidden lg:inline-flex">{button.btn6} </p>
        </div>    
      </header>

      {/*search result*/}
          {loading &&
      <Loading/> }

 {/*site bar*/}
 {click && 
            <div onClick={handleClick} className=" handleclosedOutput fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70 z-50 ">
              <div className="flex flex-col justify-self-start w-[80%] sm:w-[30%] bg-white h-[100%] fixed top-0 left-0 bottom-0  overflow-y-scroll">

                <div className="bg-yellow-800 p-5 text-white font-medium flex justify-between ">
                  <span className=" flex items-center ml-1 whitespace-nowrap sm:ml-16 space-x-4">
                  <span><UserCircleIcon className="h-7 w-7"  /></span> 
                  {session ? `Hello, ${session.user.name[0]}` : 'Hello,Sign In'}
                 
                  </span>
                  <span onClick={()=>setClick(false)} className=" cursor-pointer">
                    <XIcon className="h-6 w-6" />
                  </span>
                </div>

                <div className="border-b-2 pb-2">
                  
                  <span onClick={allCategori} className="flex  justify-center px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                    <p>{siteButton.btnAll} </p>
                  </span>
                  <span onClick={()=> filteritems('men')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                    <p>{siteButton.btn1}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                  <span onClick={()=> filteritems('women')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                  <p>{siteButton.btn2}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                  <span onClick={()=> filteritems('electronics')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                  <p>{siteButton.btn3}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                  <span onClick={()=> filteritems('health')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                  <p>{siteButton.btn4}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                  <span onClick={()=> filteritems('beauty')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                  <p>{siteButton.btn5}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                  <span onClick={()=> filteritems('food')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                  <p>{siteButton.btn6}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                  <span onClick={()=> filteritems('animals')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                  <p>{siteButton.btn7}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                  <span onClick={()=> filteritems('home')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                  <p>{siteButton.btn8}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                  <span onClick={()=> filteritems('baby')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                  <p>{siteButton.btn9}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                  <span onClick={()=> filteritems('others')} className="flex justify-between px-5 py-2 hover:bg-gray-300 cursor-pointer font-medium ">
                  <p>{siteButton.btn10}</p>
                    <p>
                    <ChevronRightIcon className="w-5 h-5 " /></p>
                  </span>
                
                </div>

                <div className="flex flex-col space-y-2 px-5 py-4 text-xs font-medium">
                  <span>
                  <p className="font-bold text-lg py-2 text-gray-700">Help & Settings</p>
                  </span>
                 <span>
                 <p className=" hover:underline py-2 cursor-pointer">Your Account</p>
                 </span>
                 
                  <span className="flex items-center  space-x-3">
                    <p><GlobeAltIcon className="w-4 h-4" /></p>
                    <p className=" hover:underline cursor-pointer">English</p>
                  </span>
                  <span className="flex  items-center space-x-3">
                    <p><FlagIcon className="w-4 h-4" /></p>
                    {settings.map(({id,country})=>(
                       <p key={id} className=" hover:underline cursor-pointer">{country}</p>
                    ))}
                   
                  </span>
                  <span  onClick={!session ? signPage : signOutPage} className="py-2 hover:underline cursor-pointer">
                  {session ? `Logout, ${session.user.name}` : 'Sign In'}
                   
                  </span>
                </div>

              </div>


            </div>}

        </div>
    )
}
