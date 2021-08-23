
function Loading() {
    return (
        <div className=" fixed top-0 left-0 right-0 bottom-0 bg-gray-900 z-50 bg-opacity-80" >
            <div className="flex justify-center items-center w-screen h-screen">

                <div className="w-20 h-20 inline-block border-t-2 border-[rgba(255,255,0,3)] rounded-full animate-spin  mb-10">
                   
                </div>
                <div className="flex space-x-5">
                    <div  className="w-8 h-8 bg-blue-600 rounded-full inline-block animate-bounce animate-bluecircle  "></div>
                    <div  className="w-8 h-8 bg-green-600 rounded-full inline-block animate-bounce animate-greencircle  "></div>
                    <div  className="w-8 h-8 bg-red-600 rounded-full inline-block animate-bounce animate-redcircle  "></div>
                    
                </div>

            </div>
            
        </div>
    )
}

export default Loading
