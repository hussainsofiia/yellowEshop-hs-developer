
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Banner2({image01,image02,image03}) {

  //this is also banner part 2.completly danamic

    return (
        <div className="relative">

            <div className="absolute w-full h-20 sm:bg-gradient-to-t sm:from-gray-100 
            sm:to-transparent bottom-0 z-10" />
            <Carousel 
            autoPlay
            infiniteLoop
            showStatus={false }
            showIndicators={false}
            showThumbs={false}
            interval={5000}
            >

            <div>
             <img loading='lazy' src={image01} alt="" />
            </div>
             <div>
             <img loading='lazy' src={image02} alt="" />
             </div>

             <div>
             <img loading='lazy' src={image03} alt="" />
             </div>
             </Carousel>
        </div>
    )
}

export default Banner2
