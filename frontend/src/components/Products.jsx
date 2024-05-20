import about_img from '../assets/product_logo.png';
import client_1 from '../assets/client_1.png';
import client_2 from '../assets/client_3.png';
import client_3 from '../assets/client_2.png';



const Products = () => {
  return (
    <div className=''>
      {/* about text */}

      <div className="px-4 lg:px-14 max-w-screen-4xl mx-auto mt-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="lg:w-[800px] lg:ml-[250px]">
                <img src={about_img} alt="about Image" className="h-[450px]"/>
            </div>

            <div className="">
                <h2 className="text-4xl text-neutralDGray font-semibold mb-6 md:w-4/5">We Offer New and Latest Products for You!</h2>

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

        
            <div className="md:w-1/3 gap-8">
                <img src={about_img} alt="about Image" className="h-[450px] gap-6"/>
            </div>



            {/* stats */}

            <div className="md:w-2/3 mx-auto">
            <div>
                <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illum facere harum laudantium quam, voluptatibus illo commodi doloremque ex suscipit, eligendi optio ad totam aliquam nobis dolorum dignissimos voluptatem eos. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati, sapiente? Porro minus totam ex, quas, laboriosam mollitia beatae rerum maiores possimus provident blanditiis, nam natus alias tenetur delectus. Exercitationem, delectus.
                    
                </p>
                <h5 className="text-brandPrimary text-xl font-semibold mb-2">Tim Smith </h5>
                <p className='text-base text-neutralGrey'>British dragon Boat Racing Associations</p>

                <div className="mt-2">
                    <div className="flex items-center gap-8 flex-wrap">
                        <img src={client_1} alt="client_1" className="w-[70px] h-[40px] cursor-pointer" />
                        <img src={client_2} alt="client_1" className="w-[70px] h-[40px] cursor-pointer"/>
                        <img src={client_3} alt="client_1" className="w-[70px] h-[40px] cursor-pointer"/>
                        <img src={client_2} alt="client_1" className="w-[70px] h-[40px] cursor-pointer"/>
                        <img src={client_1} alt="client_1" className="w-[70px] h-[40px] cursor-pointer"/>
                        <img src={client_3} alt="client_1" className="w-[70px] h-[40px] cursor-pointer"/>

                        <div className="flex  items-center gap-8">
                          <a href="/" className="font-bold text-brandPrimary hover:text-neutral-700">Meet all Customers{" "}
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            width="17"
                            height="11"
                            viewBox='0 0 17 11'
                            fill='none'
                            className="inline-block ml-2"
                          >
                            <path
                              d='M12 9.39905L15.2929 6.10615C15.6834 5.71563 15.6834 5.08246 15.2929 4.69194L12 1.39905M15 5.39905L1 5.39905' stroke='#4caf4f'
                            />
                          </svg>
                          
                          </a>
                        </div>

                    </div>
                </div>
            </div>
            </div>

        
        </div>
      </div>
    </div>
  )
}

export default Products
