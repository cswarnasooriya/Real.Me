import { Carousel } from "flowbite-react";
import banner from '../assets/banner_1.png'
import '../App.css';

const Home = () => {
  return (
    <div className="bg-neutralSilver ">
        <div className="px-4 lg:px-14 max-w-screen mx-auto min-h-screen h-screen">

        <Carousel className="w-full mx-auto">

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner} alt=""  />
          </div>

          {/* hero text */}

          <div className=" md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4  leading-snug">Learn and Earn money <span className="text-brandPrimary leading-snug"> in new methods.</span></h1>

            <p className="text-neutralGrey mb-8 text-base">
              Where to grow your business as a Photographer: site or social media?
            </p>

            <button className="btn-primary">
              Register
            </button>
          </div>

          
        </div>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner} alt=""  />
          </div>

          {/* hero text */}

          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4  leading-snug">Lessons and Insights <span className="text-brandPrimary leading-snug"> from 8 years.</span></h1>

            <p className="text-neutralGrey mb-8 text-base">
              Where to grow your business as a Photographer: site or social media?
            </p>

            <button className="btn-primary">
              Register
            </button>
          </div>

          </div>

        <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
          <div>
            <img src={banner} alt=""  />
          </div>

          {/* hero text */}

          <div className="md:w-1/2">
            <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4  leading-snug">Easy and Fast collobaration <span className="text-brandPrimary leading-snug"> with others.</span></h1>

            <p className="text-neutralGrey mb-8 text-base">
              Where to grow your business as a Photographer: site or social media?
            </p>

            <button className="btn-primary">
              Register
            </button>
          </div>

          

          
        </div>

        
        
      </Carousel>
      </div>
      
    </div>
  )
}

export default Home
