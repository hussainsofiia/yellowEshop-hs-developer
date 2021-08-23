import apiData from "../public/apiData.json"
import Head from 'next/head';
import Header from '../components/head/Header';
import { UserCircleIcon } from "@heroicons/react/solid";
import { useState } from "react";
import Footer from "../components/Footer";
import SearchResult from "../components/head/SearchResult"





export default function SignIn({ data }) {

  const [click,setClick]=useState(false);
  
///from child call back
const [quantity, setQuantity]= useState(1)
const [showINC,setShowINC] = useState(false);
const toogle = () => {
    setShowINC(false);
 }
 const qtytoogle = () => {
 setQuantity(1);
 }
 

 
  return (
    <>
    <div>
    <Head>
    <title  > {data.title.title} </title>
     <meta name="description" content="Generated by Hs-developer" />
        {data.settings?.map(({id,icon})=>(
         <link key={id} rel="icon" href={icon[0]} />
      ))}
      </Head>
      <Header 
         posts={data.products}
        settings={data.settings} 
        button={data.headerPart2}
        siteButton={data.siteBerButton}
        />

 
   <div className="grid place-items-center h-screen ">
   {/* Sign In  & Sign Up*/}
        <div  className="flex flex-col justify-center items-center border-2 p-2 sm:p-5 space-y-10">
        <div className="flex flex-col justify-center items-center  space-y-2">
          {click ?
           <p className="font-bold font-sans text-gray-700 sm:text-xl p-5">{data.loginPage.title2}</p>:
          <p className="font-bold font-sans text-gray-700 sm:text-xl p-5">{data.loginPage.title} </p> 
         }
          <div className="flex flex-col justify-center items-center space-y-2 ">
        
         <div className="flex items-center border-2 rounded-md border-gray-500 w-[250px] sm:w-[400px] hover:border-gray-800 focus:border-gray-800  ">
           <UserCircleIcon className="w-8 h-7 text-gray-600 px-1" />
         <input type="text" className="p-2 h-full w-full flex-grow flex-shrink rounded-l-md outline-none focus:outline-none px-4   " placeholder="Email" />
         </div>
         <div className="w-[250px] sm:w-[400px]">
         <button className="py-2 px-5 rounded-full w-full focus:outline-none bg-gray-700 text-white font-bold text-sm hover:bg-gray-800">Continue with Email</button>
         </div>
         <div className="w-full flex justify-between">
           <span className="border-b-2 w-full mb-2"></span>
           <span className="px-1">or</span>
           <span className="border-b-2 w-full mb-2 "></span>
         </div>
          </div>
          <div className=" w-full rounded-full bg-blue-500 flex items-center  space-x-2 hover:bg-blue-700 justify-center relative ">
          <img className="h-10 w-10 object-contain rounded-full bg-white absolute left-0" src="/go.png" alt="" />
          <p className="font-bold text-white py-2 text-sm cursor-pointer">Continue with Google</p>
          </div>
          <div className=" w-full rounded-full bg-blue-500 flex items-center  space-x-2 hover:bg-blue-700 justify-center relative ">
          <img className="h-10 w-10 object-contain rounded-full bg-white absolute left-0" src="/fb.png" alt="" />
          <p className="font-bold text-white py-2 text-sm cursor-pointer">Continue with Facebook</p>
          </div>
         </div>
          <div className=" flex flex-col w-full justify-center items-center space-y-3">
        <div className="w-full flex justify-between">
           <span className="border-b-2 sm:w-1/5 mb-2"></span>
           {click ?
            <span className="px-1 text-xs font-bold text-gray-500"> {data.loginPage.singUpText2}</span>:
           <span className="px-1 text-xs font-bold text-gray-500">{data.loginPage.singUpText} </span>
          }
           <span className="border-b-2 sm:w-1/5 mb-2 "></span>
         </div>
         {click ?
         <button onClick={()=>setClick(!click)} className="py-2 px-5 w-3/5 border-2 rounded-full text-gray-700 font-bold hover:bg-gray-200 focus:outline-none
          border-blue-400 hover:border-blue-600">Log-In</button>:
            <button onClick={()=>setClick(!click)} className="py-2 px-5 w-3/5 border-2 rounded-full text-gray-700 font-bold hover:bg-gray-200 focus:outline-none
          border-blue-400 hover:border-blue-600"> Sign Up</button>}
        </div>
        </div>
  
   </div>
   <Footer settings={data.settings} />
       </div>
       <SearchResult  posts={data.products} toogle={toogle}   qtytoogle={qtytoogle} />
    </>
  )
}

// This is the recommended way for Next.js 9.3 or newer

export async function getStaticProps(context) {
  
  const data = apiData

  return {
    props: { data }, 
  }
}