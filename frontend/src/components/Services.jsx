import client_1 from '../assets/client_1.png';
import client_2 from '../assets/client_3.png';
import client_3 from '../assets/client_2.png';
import client_4 from '../assets/client_3.png';
import client_5 from '../assets/client_2.png';
import client_6 from '../assets/client_1.png';






const Services = () => {

    const services =[
        {id:1, title:"Membership Organization", description:"Our membership management software provides full automated of membership renewls and payments.", image:'../assets/logo_1.png'},
        {id:2, title:"National Assotiation", description:"Our membership management software provides full automated of membership renewls and payments.",  image:'../assets/icon_2.png'},
        {id:3, title:"Clubs and Groups", description:"Our membership management software provides full automated of membership renewls and payments.", image:'../assets/icon_2.png'},
    ];

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
        <div className="text-center my-8">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-2">Our Clients</h2>
            <p className="text-neutralGrey">We have been working with some fortune 500+ clients.</p>
{/* 
            company logos */}

            <div className="my-12 flex flex-wrap justify-between items-center gap-8">

                <img src={client_1} alt="client_1" className="w-[150px] h-[80px]" />
                <img src={client_2} alt="client_2"  className="w-[150px] h-[80px]"/>
                <img src={client_3} alt="client_3" className="w-[150px] h-[80px]" />
                <img src={client_4} alt="client_4"  className="w-[150px] h-[80px]"/>
                <img src={client_5} alt="client_5"  className="w-[150px] h-[80px]"/>
                <img src={client_6} alt="client_6"  className="w-[150px] h-[80px]"/>

            </div>
        </div>


            {/* service cards */}
        <div className="mt-20 md:w-1/2 mx-auto text-center">
            <h2 className="text-4xl font-semibold text-neutralDGray mb-3">Manage Your Entire Community In A Single System</h2>
            <p className="text-neutralGrey">Who is Real.Me suitable for?</p>
        </div>
{/* 
        cards */}

        <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 gap-12 mx-auto">
            {
                services.map(service => <div key={service.id} className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full">
                <div className="">
                <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                    <img src={service.image} alt="service card image" className="w-4 h-4" />
                </div>
                <h4 className="text-2xl font-bold text-neutralDGray mb-2 px-2">{service.title}</h4>
                <p className="text-sm text-neutralGrey">{service.description}</p>
                    
                </div>
              


                </div>)
            }
        </div>
      
    </div>
  )
}

export default Services
