
import CatagoriPaginate from "./CatagoriPaginate"
import { useEffect, useState } from "react"
import Image from "next/image";

function ScrollBerCategori({posts,settings,data}) {


      const [items,setItems] = useState(posts);
        useEffect(() => {
        const fetchPost = async () =>{
          setItems(posts);
           }
           fetchPost();
          }, []);

         const filteritems = (categItem) => {
        const updatedItems = posts.filter((currentValueItems) => {
         return currentValueItems.type === categItem;
         })
 
        setItems(updatedItems);}
  
       
  return ( <div className="  ">
    <div className="w-full border-b-2 mb-2">
   
          {data.categoryBanner?.map(({image,id})=> { 
         
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
<div className=" hidden lg:flex space-x-3 ml-5 justify-center">
<span onClick={()=> setItems(posts) } className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">All</span>
  <span onClick={()=> filteritems('men')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn1}</span>
  <span onClick={()=> filteritems('women')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn2}</span>
  <span onClick={()=> filteritems('electronics')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn3}</span>
 
  <span onClick={()=> filteritems('health')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn4}</span>
  <span onClick={()=> filteritems('beauty')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn5}</span>
  <span onClick={()=> filteritems('food')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn6}</span>
 
  
  <span onClick={()=> filteritems('animals')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn7}</span>
  <span onClick={()=> filteritems('home')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn8}</span>
  <span onClick={()=> filteritems('baby')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn9}</span>
  <span onClick={()=> filteritems('others')} className="p-2 text-sm font-bold bg-gray-700 text-white cursor-pointer hover:bg-gray-800">{data.siteBerButton.btn10}</span>

 

</div>
    </div>
    {/* <div className="   flex flex-grow items-center p-10 space-x-4 whitespace-nowrap 
     overflow-x-auto  scrollbar scrollbar-thumb-green-500 scrollbar-track-green-100 ">
     
     <CtBtn title="All Categiries" type="All" img={img1} onClick={()=> setItems(posts) } />
     <CtBtn title="Man Fashion" type="All" img={img2} onClick={()=> filteritems('men')} />
     <CtBtn title="Women Fashion" type="All" img={img3} onClick={()=> filteritems('women')} />
     <CtBtn title="Electronics" type="All" img={img4} onClick={()=> filteritems('electronics')} />
     <CtBtn title="Health & Care" type="All" img={img5} onClick={()=> filteritems('health')} />
     <CtBtn title="Beauty & Acc" type="All" img={img6} onClick={()=> filteritems('beauty')} />
     <CtBtn title="Food & Beverage" type="All" img={img7} onClick={()=> filteritems('food')} />
     <CtBtn title="Animals & Food" type="All" img={img8} onClick={()=> filteritems('animals')} />
     <CtBtn title="Home & Garden" type="All" img={img9} onClick={()=> filteritems('home')} />
     <CtBtn title="Baby & Toys" type="All" img={img10} onClick={()=> filteritems('baby')} />
     <CtBtn title="Others Types" type="All" img={img1} onClick={()=> filteritems('others')} />
      
    </div> */}
    <CatagoriPaginate 
    settings={settings}
    posts={items} />
    </div>
  )
}

export default ScrollBerCategori
