<<<<<<< HEAD
// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import { 
  RxCrop, 
  RxPencil2, 
  RxDesktop, 
  RxReader, 
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import {
  FaReact,
  FaJava,
  FaAws,
} from "react-icons/fa";
import { SiNextdotjs, SiXdadevelopers } from "react-icons/si";
// import required module
import SwiperCore, { Pagination } from "swiper";

// initialize Swiper core modules
SwiperCore.use([Pagination]);

// data
export const serviceData = [
  {
    icon: <FaAws />,
    title: 'AWS Cloud Services',
    description: 'Deploying scalable, secure, and efficient cloud solutions using Amazon Web Services (AWS) to meet diverse business needs.',
  },
  {
    icon: <FaJava />,
    title: 'Java Development',
    description: 'Building versatile and powerful applications utilizing the Java programming language.',
  },
  {
    icon: <FaReact />,
    title: 'React Js Development',
    description: 'Creating dynamic and intuitive user interfaces for single-page applications using React JS.',
  },
  {
    icon: <SiNextdotjs />,
    title: 'Next Js Development',
    description: 'Developing modern and efficient web applications with server-side rendering using Next.js.',
  },
  {
    icon: <SiXdadevelopers />,
    title: 'Competitive Programming',
    description: 'Solving algorithmic challenges with a focus on efficient coding, problem-solving, and designing optimized algorithms.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Crafting engaging and persuasive written content tailored for diverse platforms and audience engagement purposes.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Creating visually appealing designs for digital interfaces, print materials, and brand identity.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Improving online visibility through strategic optimization, increasing organic traffic in search engine results.',
  },
];
=======
>>>>>>> 38921d47099738820e9e289ccd1685884a258d19


const ServiceSlider = () => {
 
  return (
    <Swiper 
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div className=" bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex 
              sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)]">
                {/* icon */}
                <div className="text-4xl text-accent mb-4">{item.icon}</div>
                {/* title and description */}
                <div className="mv-8">
                  <div className="mb-2 text-lg">{item.title}</div>
                  <p className="max-w-[350px] overflow-hidden text-sm leading-normal">{item.description}</p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
