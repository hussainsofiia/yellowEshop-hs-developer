
import { useSelector,useDispatch } from "react-redux";
import { removeSearch, selectSearch } from "../../reduxStore/searchBasket";
import SearchBox from "./SearchBox";

function SearchResult({posts,toogle,qtytoogle}) {

    const searchItems = useSelector(selectSearch);

     //redux part
const dispatch = useDispatch();
   

   
const handleClick = (e) => {
    if(e.target.classList.contains('handleclosedOutput')){
        dispatch(removeSearch());
    }
   
}


      

    return (
        <div>
        {searchItems.length === 0 ? "" :
        <div  onClick={handleClick}   className=" handleclosedOutput z-40 inline-flex 
        absolute top-[75px] left-0 bottom-0 right-0 overflow-hidden   ">

           <div className="block h-40   md: px-10 ml-10 bg-yellow-300 shadow-md rounded-b-md lg:ml-40 lg:px-20 ">
           <p className="text-gray-400">  {searchItems}</p>
            {posts.filter((val) => {
                if(searchItems == "") {
                    return val
                } else if (val.title.toLowerCase().includes(searchItems.toLowerCase())){
                    return val
                }
            }).slice(0,3).map(({id,title,price,discountPrice, description,category,images,
                quantity,type,companyName,rating,instock}) =>{
                return(
                     <SearchBox
                       key={id}
                       id={id}
                       title={title}
                         price={price}
                     description={description}
                     category={category}
                     image={images}
                      quantity={quantity}
                      type={type}
                      posts={posts} 
                      companyName={companyName}
                     rating={rating}
                     instock={instock}
                  discountPrice={discountPrice}
                  toogle={toogle}
                  qtytoogle={qtytoogle}
                      />
                 )
            })}    
            </div>  
           

          
          
        </div> }
        </div>
    )
}

export default SearchResult
