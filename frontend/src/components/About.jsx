import about_img from '../assets/about.png';

const About = () => {
  return (
    <div className=''>
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
        <div>
            <div className="md:w-1/2">
                <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3">Helping a global <br /><span className="text-brandPrimary">business reivent itself.</span></h2>

                <p>
                    We reached here with our hard work and dedications.
                </p>
            </div>

            {/* stats */}

            <div>
                <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
