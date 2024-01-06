import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faC } from '@fortawesome/free-solid-svg-icons';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaBootstrap,
  FaLinux,
  FaNode,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import { 
  TbSql 
 } from "react-icons/tb";
import {
  SiPostman,
  SiDjango,
  SiMongodb,
  SiHeroku,
  SiCplusplus,
  SiNextdotjs,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          { icon: <FaBootstrap />, key: 'bootstrap' },
          { icon: <SiCplusplus />, key: 'cplusplus' },
          { icon: <FaCss3 />, key: 'css3' },
          { icon: <SiDjango />, key: 'django' },
          { icon: <FaHtml5 />, key: 'html5' },
          { icon: <FaJs />, key: 'js' },
          { icon: <SiNextdotjs />, key: 'nextjs' },
          { icon: <FaReact />, key: 'react' },
          { icon: <FaJava />, key: 'java' },
          { icon: <SiMongodb />, key: 'mongodb' },
          { icon: <FaNode />, key: 'node' },
        ],
      },
      {
        title: 'Tools',
        icons: [
          { icon: <FaAws />, key: 'aws' },
          { icon: <FaGitAlt/>, key: 'gitall' },
          { icon: <FaGithub/>, key: 'github' },
          { icon: <SiHeroku />, key: 'heroku' },
          { icon: <FaLinux/>, key: 'linux' },
          { icon: <SiPostman />, key: 'postman' },
          { icon: <TbSql/>, key: 'sql' },
        ],
      },
    ],
  },
  {
    title: 'eductaion',
    info: [
      {
        title: 'Bachelor in Computer Engineering - kantipur Engineering College',
        stage: '2020 - Present',
      },
      {
        title: 'National Examinations Board (NEB) (+2) - Kathmandu Model College',
        stage: '2018 - 2019',
      },
      {
        title: 'Secondary Education Examination (SEE) - Nexus International Academy',
        stage: '2014 - 2017',
      },
    ],
  },
  {
    title: 'achievements',
    info: [
      {
        title: 'Recipient of Engineering Semester Scholarship',
        stage: '2022',
      },
      {
        title: 'Top Contributor at Frogtoberfest 2023',
        stage: '2023',
      },
      {
        title: 'Participant in 60 Days Learning Challenge',
        stage: '2023',
      },
      {
        title: 'Acknowledged for Excellence in KMC-SRCC Collaborative Program',
        stage: '2018',
      },
      {
        title: 'Active Volunteer and Photographer at Kathmandu Youth Conclave',
        stage: '2019',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Java Intern - Codsoft',
        stage: '2023',
      },
    ],
  },
  {
    title: 'Training/Certifications',
    info: [
      {
        title: 'Java Package - Broadway Infosys',
        stage: '2023',
      },
      {
        title: 'Android Application Development - Kantipur Engineering College',
        stage: '2022',
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
  <div className="h-full bg-primary/30 py-32 text-center xl:text-left items-center">
    <Circles />
    {/* avatar img */}
    <motion.div 
      variants={fadeIn('right', 0.2)} 
      initial="hidden"
      animate="show"
      exit="hidden"
      className="hidden xl:flex absolute bottom-0 -left-[370px]"
    >
      <Avatar />
    </motion.div>
    <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
      {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
          variants={fadeIn('right', 0.2)} 
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2"
        >
          Hi, I&apos;m <span className="text-accent">Aayush</span>
        </motion.h2>
        <motion.p 
          variants={fadeIn('right', 0.4)} 
          initial="hidden"
          animate="show"
          exit="hidden"
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
        >
          Dedicated and driven Computer Engineering student with a passion for technology and problem-solving.
          Quick learner with a strong adaptability to new technologies and programming languages. 
        </motion.p>
        {/* counters */}
        <motion.div
          variants={fadeIn('right', 0.6)} 
          initial="hidden"
          animate="show"
          exit="hidden"
          className="hidden md:flex md:max-w-wl xl:max-w-none mx-auto xl:mx-0 mb-8"
        >
          <div className="flex flex-1 xl:gap-x-6">
            {/* experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={1} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[180px]">Years of experience</div>
            </div>
            {/* clients */}
            {/* <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={250} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[180px]">Satisfied Clients</div>
            </div> */}
            {/* Projects */}
            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={20} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[180px]">Finished Projects</div>
            </div>
            {/* awards */}
            {/* <div className="relative flex-1">
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={8} duration={5} /> +
              </div>
              <div className="text-xs uppercase tracking-[1px] loading-[1.4] max-w-[180px]">Winning awards</div>
            </div> */}
          </div>
        </motion.div>
      </div>
      {/* info */}
      <motion.div
        variants={fadeIn('left', 0.4)} 
        initial="hidden"
        animate="show"
        exit="hidden" 
        className="flex flex-col w-full xl:max-w-[48%] h-[335px]"
      >
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
          {aboutData.map((item, itemIndex) =>{
            return (
              <div 
                key={itemIndex} 
                className={`${index === itemIndex &&
                'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'}
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white 
                after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemIndex)}
              >
                {item.title}
              </div>
            );
          })}
        </div>
        <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
        items-center xl:items-start">
          {aboutData[index]?.info.map((item, itemIndex) => (
              <div key={itemIndex} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>
                <div className="flex gap-x-4">
                {/* icons */}
                {item.icons?.map((icon, iconIndex) => {
                  return <div key={iconIndex} className="text-2xl text-white">{icon.icon}</div>;
                })}
                </div>
              </div>
              ))
            }
        </div>
      </motion.div>
    </div>
  </div>
  );
};

export default About;
