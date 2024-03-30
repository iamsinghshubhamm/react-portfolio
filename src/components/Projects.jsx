import React,{useEffect} from 'react'
import shoppingcart from '../assets/projects/shoppingcart.jpg'
import foodsite from '../assets/projects/foodsite.png'
import Primecart from '../assets/projects/primecart.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: shoppingcart,
      desc: "PrimeCart is a ecommerce project using ReactJS + Tailwind CSS + Firebase",
      demo: "",
      code: "https://github.com/iamsinghshubhamm/Shopping-cartAPI"
    },
    {
      id: 2,
      src: Primecart,
      desc: "Explore our eCommerce project! Built with Tailwind CSS, Redux Toolkit, Context API, and Firebase",
      demo: "",
      code: "https://github.com/iamsinghshubhamm/primecart"
    },
    {
      id: 3,
      src: foodsite,
      desc: "Food delivery website design using html and css ",
      demo: "",
      code: "https://github.com/iamsinghshubhamm/FoodWeb-Site"
    },
  
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="slide-up" data-aos-delay="100" data-aos-duration={id * 400} key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105 h-[180px] w-full object-cover' />
                <p className='p-2 text-justify font-extralight h-[70px]'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects