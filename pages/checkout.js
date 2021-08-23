import Header from '../components/head/Header';
import Head from "next/head";
import Image from "next/image";
import Currency from "react-currency-formatter";

import { useDispatch, useSelector } from "react-redux";
import CheckoutProduct from "../components/checkout/CheckoutProduct";
import { addtotal, deliverycharge, selectCartItems, selectTotal, selectTotalqty } from '../reduxStore/productReduc';
import { useRef, useState } from 'react';
import apiData from "../public/apiData.json"
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchResult from '../components/head/SearchResult';
import Footer from '../components/Footer';

function Checkout({data}) {



  const router = useRouter();
    //redux
    
    const products = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotal);
    const dispatch = useDispatch();
    const totalqty = useSelector(selectTotalqty);

//this function for total with shipping cost
const [session,Setsession] = useState(false);
const [shippingcost,setShippingcost] = useState([]);
const [totalbox,setTotalbox] = useState([]);

console.log(shippingcost);

  const getCartCount = () => {
    return data.settings .reduce((price, item) => Number(price) +Number(shippingcost) + Number(totalPrice), 0).toFixed(2);
  };

  const cashonpay = (e) => {
    e.preventDefault(); 
    dispatch(addtotal(totalbox))
    dispatch(deliverycharge(shippingcost))
   
    //here you send data to api
    
    if(shippingcost.length === 0){
      alert('Need Delivery Type Select')
    } else{
      router.push("/cashondelivery")
    }
  }

  useEffect(() => {
    setTotalbox(getCartCount())
  }, [shippingcost])

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
        <div className="bg-gray-100">
               <Head>
               <title  > {data.title.title} </title>
               <meta name="description" content="Generated by Hs-developer" />
        {data.settings?.map(({id,icon})=>(
         <link key={id} rel="icon" href={icon[0]} />
      ))}
      </Head>
         
        <Header  posts={data.products}
             settings={data.settings} 
             button={data.headerPart2}
             siteButton={data.siteBerButton} />
   <main className="lg:flex max-w-screen-2xl mx-auto">

{/*left part*/}

<div className="flex-grow m-5 shadow-sm">
          {data.checkoutBanner?.map(({image,id})=> { 
         
         const randomImage = 
         Math.floor(Math.random() * (image.length)) ;
        return (
      <Image 
      key={id}
      objectFit="contain"
      src={image[randomImage]}
      width={1400}
      height={241}
     />
        
   )})}
        
       

            <div className='flex flex-col p-5 space-y-10 bg-white'>
            {products.length === 0 ? <p className='text-3xl border-b pb-4'>Your Amazon Basket is empty </p>: 
              <> 
               {session ? <>
               
             <h1 className='text-3xl border-b pb-4'>

                {products.length === 0 ? 'Your Amazon Basket is empty.' : 'Shopping Basket'}
                </h1> </> : <h1>You Need Sign In</h1> }

                {products.map((item,id) =>(
                    <CheckoutProduct 
                    key={id}
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    discountPrice={item.discountPrice}
                    rating={item.rating}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                    hasPrime={item.hasPrime}
                    quantity={item.quantity}
                    settings={data.settings}
                    //qtyChangeHandler={qtyChangeHandler}
 
                    />
                ))} </>
               }
                </div>  


        </div>


{/*right part*/}
<div className="flex flex-col space-y-2 bg-white p-10 shadow-md">
  {products.length >0 && (
      <>
      <h2 className='whitespace-nowrap font-medium space-x-2'>Subtotal {''}
       ( {totalqty} items):{''}{''}
       {data.settings?.map((item,id)=>(

     
          <span key={id} className="font-bold">
          <Currency quantity={totalPrice} currency={item.currency} />
         </span>  ))}
      </h2>
      {data.settings?.map((item,id)=>(
        <div key={id}>
        
      <div  className="text-xs font-medium space-y-2" >
      <select  onChange={(e)=>setShippingcost(e.target.value)}>
       <option value="">Delivery Types</option>
        <option value={item.normalPrice}>Normal Delivery {item.normalPrice} {item.currency}</option>
        <option value={item.urgentPrice}>Urgent Delivery  {item.urgentPrice} {item.currency}</option>
      </select>
      
      </div>
      </div>
      ))}
      {data.settings?.map((item,id)=>(
         <span key={id} className="flex" >
         <h2>Total : </h2>
         <Currency quantity= {getCartCount()} currency={item.currency} />
         </span>
      ))}
     
   {/* this button can used when auth services or session connected  */}
      {/* <button disabled={!session} className={`button mt-2 
     ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
          {!session  ? 'Sign in to checkout' : 'Proced to checkout'}
      </button>

      <button  disabled={!session} onClick={cashonpay} className={`button mt-2 
     ${!session && 'from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed'}`}>
          {!session  ? 'Sign in need' : 'Cash On Delivery'}
      </button> */}


      {/* this is normal button for demo */}
       <button className="button mt-2 ">
         Pay Online
      </button>

      <button  onClick={cashonpay} className="button mt-2 ">
      Cash On Delivery
      </button>
      </>
  )}
</div>

   </main> 
   <SearchResult posts={data.products} toogle={toogle}   qtytoogle={qtytoogle}   />
   <Footer settings={data.settings} />
    </div>
    )
}

export default Checkout




export async function getStaticProps(context) {
  
  const data = apiData

  return {
    props: { data }, 
  }
}