import React, { useEffect, useState } from "react";
import CategoriItems from "./CategoriItems";


function CatagoriPaginate({posts,settings}) {

  //here all function for show paginate in category page
  
     //state
     const [data, setData] = useState([]);
     const [loading,setLoading] = useState(false);
      const [currentPage, setcurrentPage] = useState(1);
      const [itemsPerPage, setitemsPerPage] = useState(16);
      const [pageNumberLimit, setpageNumberLimit] = useState(5);
      const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
     const [minPageNumberLimit, setminPageNumberLimit] = useState(0);
 
     const handleClick = (event) => {
     setcurrentPage(Number(event.target.id));
     };
 
       const pages = [];
        for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
        pages.push(i);
          }
 
        const indexOfLastItem = currentPage * itemsPerPage;
         const indexOfFirstItem = indexOfLastItem - itemsPerPage;
         const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
 
             const renderPageNumbers = pages.map((number) => {
           if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
           <li
           key={number}
           id={number}
           onClick={handleClick}
           className={currentPage == number ? "px-2 bg-gray-800 text-white cursor-pointer " :
            " px-2 cursor-pointer border-2"}
             >
           {number}
           </li>
            );
           } else {
           return null;
                   }
                    });
     
          useEffect(() => {
           const fetchPost = async () =>{
           setLoading(true);
           setData(posts);
           setLoading(false);
                 }
          fetchPost();
          }, [posts]);
 
           const handleNextbtn = () => {
            setcurrentPage(currentPage + 1);
 
           if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
             setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
             } };
              
 
          const handlePrevbtn = () => {
          setcurrentPage(currentPage - 1);
 
             if ((currentPage - 1) % pageNumberLimit == 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
              } };
  
 
              let pageIncrementBtn = null;
              if (pages.length > maxPageNumberLimit) {
             pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
                }
 
           let pageDecrementBtn = null;
            if (minPageNumberLimit >= 1) {
             pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
               }
 
           //  const handleLoadMore = () => {
          //  setitemsPerPage(itemsPerPage + 5);
            //  };
  
          console.log(currentItems);
    return (
        <div>
        <>
       <div className="sm:flex-grow 
        grid grid-flow-row-dense md:grid-cols-2 
        lg:grid-cols-3 xl:grid-cols-4 
         mx-auto ">

        {currentItems && 
        currentItems.map((post)=>(
        <CategoriItems
         settings={settings}
          timestamp={post.timestamp}
          key={post.id}
          id={post.id}
          title={post.title}
          price={post.price}
          description={post.description}
          category={post.category}
          image={post.images}
          quantity={post.quantity}
           type={post.type}
            posts={posts}
            companyName={post.companyName}
            rating={post.rating}
            instock={post.instock}
            discountPrice={post.discountPrice}
               />
                  ))}
              </div>
            <ul className="flex space-x-1 sm:p-5">
            <li>
               <button
                onClick={handlePrevbtn}
                disabled={currentPage == pages[0] ? true : false}
                 className="focus:outline-none focus:bg-gray-800 focus:text-white bg-gray-400 px-2"
                    >
                  Prev
                 </button>
                   </li>
                 {pageDecrementBtn}
                  {renderPageNumbers}
                  {pageIncrementBtn}

                   <li>
                  <button
                  onClick={handleNextbtn}
                   disabled={currentPage == pages[pages.length - 1] ? true : false}
                    className="focus:outline-none focus:bg-gray-800 focus:text-white bg-gray-400 px-2"
                      >
                   Next
               </button>
                </li>
               </ul>

        </>


           </div>
    )
}

export default CatagoriPaginate
