import about_img from '../assets/about.png';
import logo_1 from '../assets/icon_11.png';
import logo_2 from '../assets/icon_12.png';
import logo_3 from '../assets/icon_13.png';
import logo_4 from '../assets/icon_14.png';





const About = () => {
  return (
    <div className='' id='about'>
      {/* about text */}

      <div className="px-4 lg:px-14 max-w-screen-4xl mx-auto mt-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="lg:w-[800px] lg:ml-[250px]">
                <img src={about_img} alt="about Image" className=""/>
            </div>

            <div className="">
                <h2 className="text-4xl text-neutralDGray font-semibold mb-6 md:w-4/5">The Unseen of spending three years at Pixelgrade.</h2>

                <p className="md:w-3/4 text-sm text-neutralGrey mb-8 leading-5">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, pariatur eveniet hic consequatur, corporis eaque dolore est ipsum repellat aliquid modi alias. Fuga fugit temporibus vero eius dolorem quidem a!
                </p>

                <button className='btn-primary'>Learn More!</button>
            </div>
        </div>

      </div>


      {/* company state */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

        
            <div className="md:w-1/2">
                <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3">Helping a global <br /><span className="text-brandPrimary">business reivent itself.</span></h2>

                <p>
                    We reached here with our hard work and dedications.
                </p>
            </div>



            {/* stats */}

            <div className="flex md:w-1/2 mx-auto sm:flex-row flex-col sm:items-center justify-around gap-12">

                <div className="space-y-8">
                    <div className="flex items-center gap-4">
                        <img src={logo_1} alt="image 11" className="w-8 h-8"/>
                        <div>
                          <h4 className="text-2xl text-neutralDGray font-semibold">2,245,342</h4>
                          <p className="text-neutralGrey text-sm">Members</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <img src={logo_4} alt="image 11" className="w-12 h-12"/>
                        <div>
                          <h4 className="text-2xl text-neutralDGray font-semibold">345,890</h4>
                          <p className="text-neutralGrey text-sm">Events Booking</p>
                        </div>
                    </div>

                </div>



                <div className="space-y-8">
                    <div className="flex items-center gap-2">
                        <img src={logo_3} alt="image 11" className="w-10 h-10"/>
                        <div>
                          <h4 className="text-2xl text-neutralDGray font-semibold">45,000</h4>
                          <p className="text-neutralGrey text-sm">Departments</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <img src={logo_2} alt="image 11" className="w-8 h-12"/>
                        <div>
                          <h4 className="text-2xl text-neutralDGray font-semibold">18,450,120</h4>
                          <p className="text-neutralGrey text-sm">Payments</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
