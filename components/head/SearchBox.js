import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDetails, addTorelated } from "../../reduxStore/detailsStore";


const MAX_RATING = 5;
const MIN_RATING = 1;
function SearchBox({id,title,discountPrice ,price,description,category,image,toogle,qtytoogle,
    quantity,type,companyName,rating,instock,posts}) {

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
        discountPrice,
        rating,
        description,
        category,
        image,
        hasPrime,
        quantity,
        type,companyName,instock }
        dispatch(addDetails(productdetail));
       router.push(`/details?title=${id,title}`)
       filteritems(type);
       toogle(false);
       qtytoogle(quantity);
        };

//filter for product related items send to redux
        const filteritems = (categItem) => {
            const updatedItems = posts.filter((currentValueItems) => {
        return currentValueItems.type === categItem;
             })
         dispatch(addTorelated(updatedItems));
      
            } 

 
    return (
        <div className=" grid grid-cols-1 gap-4 overflow-x-hidden  link pb-5 w-96 truncate ">
            
             <p onClick={addItemToDetails} > {title}</p> 
            
        </div>
    )
}

export default SearchBox
