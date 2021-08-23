import apiData from "../public/apiData.json"
import Head from "next/head"
import { useEffect, useState } from "react"
import CashOn from "../components/checkout/CashOn"
import Footer from "../components/Footer"
import Header from "../components/head/Header"
import SearchResult from "../components/head/SearchResult"



function Cashondelivery({data}) {
 

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
        <div>
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
      <main className="max-h-full max-w-screen-2xl mx-auto" >
      
   
      <CashOn  settings={data.settings}  />
   
        <SearchResult  posts={data.products} toogle={toogle}   qtytoogle={qtytoogle} />
     
      </main>
      <Footer  settings={data.settings}  />
        </div>
    )
}

export default Cashondelivery



export async function getStaticProps(context) {
  
  const data = apiData

  return {
    props: { data }, 
  }
}