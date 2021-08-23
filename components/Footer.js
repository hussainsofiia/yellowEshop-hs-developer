import { GlobeIcon } from "@heroicons/react/outline"

function Footer({settings}) {

const scrolltop = () =>{

    window.scrollTo({ top:0, behavior:`smooth`})
}

    return (

        <div > 
            <div onClick={scrolltop}  className="bg-yellow-600 hover:bg-yellow-700 cursor-pointer text-white font-medium flex flex-grow justify-center items-center">
                <p className="py-3">Back to Top</p>

            </div>
        <footer className="  divide-y-[1px] divide-gray-300 bg-yellow-800  text-sm text-white">
            <div className="grid w-full divide-y-[1px] divide-gray-300 bg-yellow-700 text-sm text-white max-h-full max-w-screen-2xl mx-auto ">

           
            <div className="px-8 py-3 flex items-center space-x-1 ">
                <GlobeIcon className="h-5 text-green-500" />
               {settings.map(({id,country})=>(
                    <p key={id}> {country} </p>
               ))}
               
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 grid-flow-row-dense lg:mb-5 ">

                <div className="flex justify-center items-center md:col-span-2 lg:col-span-1 lg:col-start-2 ">
                   
                    © hs_developer
                </div>
                {settings.map(({id,footerButton1,footerButton2,footerButton3})=>(
                     <div key={id} className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start md:ml-5">
                     <p className="link">{footerButton1}</p>
                     <p className="link">{footerButton2}</p>
                     <p className="link">{footerButton3}</p>
                 </div>
                ))}
               {settings.map(({id,footerButton4,footerButton5,footerButton6})=>(
                   <div key={id} className="flex justify-center space-x-8 md:ml-auto md:mr-5">
                   <p className="link">{footerButton4}</p>
                   <p className="link">{footerButton5}</p>
                   <p className="link">{footerButton6}</p>
               </div>
               ))}
                
            </div>
            </div>
        </footer>
        </div>
    )
}

export default Footer
