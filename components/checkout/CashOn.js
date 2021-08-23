import { TruckIcon } from "@heroicons/react/outline"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrderbusket, removeAll, selectCartItems, selectDeliverfees, selecttotal } from "../../reduxStore/productReduc";
import Currency from "react-currency-formatter";

import image from "next/image";

import { useRouter } from "next/router";
import Loading from "../Loading";


function CashOn({settings,session,id}) {

    //next
    const router = useRouter();
    //redux
    const dispatch = useDispatch();
    const totalprice = useSelector(selecttotal);
    const deliver = useSelector(selectDeliverfees);
    const checkoutData = useSelector(selectCartItems);
    //react state
    
    const [country,setCountry] = useState('');
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [address,setAddress] = useState('');
    const [address2,setAddress2] = useState('');
    const [city,setCity] = useState('');
    const [zipcode,setZipcode] = useState('');
    const [state,setState] = useState('');
    const [mobile,setMobile] = useState([]);
    const [email,setEmail] = useState('');

    const [showdiv,setShowdiv] =useState(true);
    const [shownext,setShownext] =useState(false);
    const [loading,setLoading] = useState(false)

    const isEntered = () => {
        if (country !== "" && firstname !== "" && lastname !== "" && address !== "" &&
        city !== "" && zipcode !== "" && state !== "" && mobile !== "" && email !== "") {
          return true;
        } else {
          return false;
        }
      };


    const nextbtn = (e) => {
        e.preventDefault(); 
        setShowdiv(false);
        setShownext(true);
    }
    const prevbtn = (e) => {
        e.preventDefault(); 
        setShownext(false)
        setShowdiv(true);
    }

//here oder be done

    const submitDB = (e)=>{
    e.preventDefault();
    setLoading(true);
    //this dispatch option should be remove when data coonect backend APi 
    //and send data from here to backend API and from there data show order Pages.
    dispatch(addOrderbusket({
        data: [...checkoutData],
        total:Number(totalprice),
        deliverfees:Number(deliver),
        firstname:firstname,
       lastname:lastname,
       address:address,
        address2:address2,
        country:country,
        city:city,
       zipcode:zipcode,
       state:state,
       mobile:mobile,
        email:email,
        Pending:'Pending',
        Packege:'',
        Shipping:'',
        Delivered:'',
        note:''
    })),
           
    //from here you can send data to api busket for show order items

          setCountry(''),setFirstname(''),
          setLastname(''),setAddress(''),
          setAddress2(''),setCity(''),
         setZipcode(''),setState(''),
          setMobile(''),setEmail(''),
          dispatch(removeAll()),
          router.push("/orderlist")
        };
    




    return (
        <div className={`flex flex-col mt-10 justify-center items-center
         overflow-x-hidden ${loading ? 'mb-0' : 'mb-5'} `}>

       {showdiv &&
         <div className="flex flex-col space-y-2  border-2 p-5">
            <span className=" border-b-2 p-4 bg-gray-400 font-medium flex space-x-5 "> 
            <TruckIcon className="h-7 w-7" /> <p>Receiver address</p>  </span>
            <span className="py-2 px-4 border-2">
                
                <input onChange={(e)=>setCountry(e.target.value)} value={country} className="focus:outline-none 
                flex flex-grow flex-shrink w-64" type="text" placeholder="Country or region" />
            </span>
            <span className="sm:space-x-5">
               <input onChange={(e)=>setFirstname(e.target.value)} value={firstname}  className="flex-grow 
               flex-shrink focus:outline-none py-2 px-4 border-2  " type="text" placeholder="First name" />
               <input onChange={(e)=>setLastname(e.target.value)} value={lastname} className="focus:outline-none 
               flex-grow flex-shrink  py-2 px-4 border-2 " type="text" placeholder="Last name" />
            </span>
            <span className="sm:space-x-5">
               <input onChange={(e)=>setAddress(e.target.value)} value={address} className=" flex-grow flex-shrink 
               focus:outline-none py-2 px-4 border-2  " type="text" placeholder="Street address " />
               <input onChange={(e)=>setAddress2(e.target.value)} value={address2} className="flex-grow flex-shrink 
               focus:outline-none py-2 px-4 border-2  " type="text" placeholder="Street 2 (optional)" />
            </span>
            <span className="sm:space-x-5">
               <input onChange={(e)=>setCity(e.target.value)} value={city} className="flex-grow flex-shrink 
               focus:outline-none py-2 px-4 border-2  " type="text" placeholder="City " />
               <input onChange={(e)=>setState(e.target.value)} value={state} className="flex-grow flex-shrink 
               focus:outline-none py-2 px-4 border-2  " type="text" placeholder="State/Province/Region" />
               <input onChange={(e)=>setZipcode(e.target.value)} value={zipcode} className="flex-grow flex-shrink
                focus:outline-none py-2 px-4 border-2  " type="text" placeholder="Zip Code" />
            </span>
            <span className="sm:space-x-5">
                <input onChange={(e)=>setMobile(e.target.value)} value={mobile} className="flex-grow flex-shrink 
                focus:outline-none py-2 px-4 border-2  " type="number" placeholder="Mobile Number" />
                <input onChange={(e)=>setEmail(e.target.value)} value={email} className="flex-grow flex-shrink 
                focus:outline-none py-2 px-4 border-2  " type="email" placeholder="Email address" />
                <button  disabled={!isEntered()} onClick={nextbtn} className={`${isEntered() ? 
                    'focus:outline-none py-2 px-4 border-2 bg-gray-900 text-white font-medium' :
                     'cursor-not-allowed bg-gray-400 focus:outline-none py-2 px-4 border-2' } `} > 
                     Next</button>
            </span>
            </div> }     

        {shownext && <>
            <div className="flex flex-col space-y-1 text-xs sm:text-sm  border-2 p-5 ">
            <span className=" border-b-2 p-4 bg-gray-300 font-medium flex 
            space-x-5 sm:space-x-20 text-green-700  "><p>Receiver address</p>  
             <TruckIcon className="h-7 w-7" />   </span>
               
               
                <span className="flex items-center space-x-2 p-2">
                    <p className="font-bold">Full Name :</p>
                <p>{firstname}</p>
                <p>{lastname}.</p>
                </span>
                <span  className="sm:flex items-center sm:w-3/4 space-x-2 p-2">
                    <p className="font-bold">Address:</p>
                <p className=" ">{address}</p>
                <p className="">{address2}.</p>
                <p>{city}.</p>
                <p>{state}.</p>
                <p>{zipcode}.</p>
                <p className="">{country}.</p>
                </span>
               
            
              <span className="sm:flex items-center space-x-2 p-2">
                  <p className="font-bold">Mobile Number :</p>
              <p>{mobile}.</p>
              <p>Email :</p>
                <p>{email}</p>
              </span>
                
            </div> 
          
                 <div  className=" border-2 p-5">
                     <p className="font-medium">Confirmed Items List:</p>
                 {checkoutData && checkoutData.map((item,i)=>(  
                 <div key={i} className="flex space-x-2 border-2 p-1">
                    
                     <img className="h-20 w-20" src={item.image[0]} alt="" />
                     <span>
                     <p> {item.title} </p>
                     {settings.map((dbitem,id)=>(
                          <span key={id} className="flex space-x-2">
                          <p className="mr-2">Price:  </p>
                              <Currency quantity={item.price} currency={dbitem.currency}/>
                          </span>
                     ))}
                    <p>Qty: {item.quantity}</p>
                     </span>
                     </div>
                     ))}
                     
                     <span className="flex space-x-5 font-medium">
                         <p >Total:</p>
                         {settings.map((item,id)=>(
                              <span key={id}>
                              <Currency quantity= {totalprice} currency={item.currency} />
                              </span>
                         ))}
                        
                     </span>

                 </div>
          
           
            
            </>}
            {shownext && 
            <span>
            <button onClick={prevbtn} className="focus:outline-none py-2 px-4 border-2
             bg-gray-900 text-white font-medium  "> Prev</button>
            <button onClick={submitDB}  className="focus:outline-none py-2 px-4 border-2
             bg-green-800 text-white font-medium  "> Done</button>
            </span>}

             {/*search result*/}
          {loading &&
      <Loading/> }
        </div>
    )
}

export default CashOn
