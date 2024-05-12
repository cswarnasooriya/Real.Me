import { Carousel } from "flowbite-react";
// import banner from '../assets/banner.png'
import '../App.css';

const Home = () => {
  return (
    <div className="bg-neutralSilver ">
        <div className="px-4 lg:px-14 max-w-screen mx-auto min-h-screen h-screen">

        <Carousel>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 1
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
      </div>
      
    </div>
  )
}

export default Home
