import Body from "./Body"
import { useState,useEffect } from "react";
import Banner2 from "./Banner2";



function HomeBody({posts,settings,bannerPart2,bannerPart3,bannerPart4}) {

//react state
    const [banerShow,setBannerShow]= useState([]);
    const [banerShow1,setBannerShow1]= useState([]);
    const [banerShow2,setBannerShow2]= useState([]);
    const [products,setProducts]= useState([]);


// this function for data fetching from backend api
    useEffect(() => {
    const fetchPost = async () =>{
     setProducts(posts);
      }
    fetchPost();
    

      }, []);

console.log(products)

    return (
        <div className="sm:flex-grow overflow-hidden 
        grid grid-flow-row-dense md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 
         mx-auto ">

              {/*First Part*/}        
          {products &&
          products.slice(0,4)
          .map(({id,title,price,discountPrice ,description,category,images,quantity,
            type,companyName,rating,instock}) => (
           <Body
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
          settings={settings}

           /> ))}

          

  {/*Second Part Images with banner*/}     
      
         <div className="sm:mx-auto col-span-full">
          {bannerPart2?.map(({id,image}) =>(
          <Banner2 key={id} image01={image[0]} 
          image02={image[1]} 
          image03={image[2]} 
          />
             ))}
          </div>
         
          
            

     {/*Third Part with banner */}     

          <div className="md:col-span-2 ">

          {products && 
          products.slice(4,5)
          .map(({id,title,price,discountPrice,description,category,images,
            quantity,type,companyName,rating,instock}) => (
           <Body
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
          settings={settings}

           /> ))} 
           </div>

     {/*Last part*/}

          {products && 
           products.slice(5,9)
          .map(({i,id,title,price,discountPrice, description,category,images,
            quantity,type,companyName,rating,instock}) => (
           <Body
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
          settings={settings}

           /> ))}

         

<div className="sm:mx-auto col-span-full">
          {bannerPart3?.map(({id,image}) =>(
          <Banner2 key={id} image01={image[0]} 
          image02={image[1]} 
          image03={image[2]} 
          />
             ))}
          </div>
 



          {products && 
          products.slice(9,13)
          .map(({i,id,title,price,discountPrice, description,category,images,
            quantity,type,companyName,rating,instock}) => (
            <Body
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
          settings={settings}

           />  ))}

        
<div className="sm:mx-auto col-span-full">
          {bannerPart4?.map(({id,image}) =>(
          <Banner2 key={id} image01={image[0]} 
          image02={image[1]} 
          image03={image[2]} 
          />
             ))}
          </div>
 
                  
          {products && 
          products.slice(13,products.length)
          .map(({i,id,title,price,discountPrice, description,category,images,
            quantity,type,companyName,rating,instock}) => (
           <Body
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
          settings={settings}

           />  ))}
          </div>
    )
}

export default HomeBody
