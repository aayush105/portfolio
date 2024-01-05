<<<<<<< HEAD
=======
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";


// data
export const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

>>>>>>> 38921d47099738820e9e289ccd1685884a258d19
// components
import ServiceSlider from "../../components/ServiceSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

<<<<<<< HEAD
const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-32 flex justify-center items-center'>
=======

const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex'>
>>>>>>> 38921d47099738820e9e289ccd1685884a258d19
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          {/* text */}
<<<<<<< HEAD
          <div className='text-center flex xl:w=[30vw] flex-col lg:text-left mb-4 xl:mb-0 '>
            <motion.h2 
              variants={fadeIn('up', 0.2)} 
              initial="hidden"
              animate="show" 
              exit="hidden"
              className='h2 xl:mt-8'>
              My Services <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden"
              animate="show" 
              exit="hidden"
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div 
            variants={fadeIn('down', 0.6)} 
            initial="hidden"
            animate="show" 
            exit="hidden"
            className="w-full xl:max-w-[65%] flex justify-center">
            <ServiceSlider />
          </motion.div>
=======
          <div className='text-center flex xl:w=[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <h2 className='h2 xl:ml-8'>
              My Services <span className='text-accent'>.</span>
            </h2>
            <p className='mb-4 max-w-[400px] mx-auto lg:mx-8'>
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam.
            </p>
          </div>
          {/* slider */}
          <ServiceSlider />
>>>>>>> 38921d47099738820e9e289ccd1685884a258d19
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
