import React, { useState, useRef } from "react";
import ProjectCard from "../../components/ProjectCard";
import ProjectTag from "../../components/ProjectTag";
import Circles from "../../components/Circles";
import Bulb from "../../components/Bulb";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";
import "swiper/css";
import "swiper/swiper.min.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

SwiperCore.use([Pagination]);

const projectsData = [
  {
    id: 1,
    title: "Project 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/projects/thumb1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Project 2",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/projects/thumb2.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Project 3",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/projects/thumb3.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Project 4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/projects/thumb4.jpg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Project 5",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "/projects/thumb1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const ref = useRef(null);

  const handleTagChange = (newTag) => {
    setSelectedTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(selectedTag)
  );

  return (
    <section id="projects" className="h-screen">
      <div className="h-full bg-primary/30 py-32 flex justify-center items-center">
        <Circles />
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-x-8">
            <div className="w-full">
              <motion.h2
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="h2 text-center md:mt-40"
              >
                My Projects <span className="text-accent">.</span>
              </motion.h2>
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="text-white flex flex-row justify-center items-center gap-2 py-4"
              >
                <ProjectTag
                  onClick={() => handleTagChange("All")}
                  name="All"
                  isSelected={selectedTag === "All"}
                />
                <ProjectTag
                  onClick={() => handleTagChange("Web")}
                  name="Web"
                  isSelected={selectedTag === "Web"}
                />
                <ProjectTag
                  onClick={() => handleTagChange("Mobile")}
                  name="Mobile"
                  isSelected={selectedTag === "Mobile"}
                />
              </motion.div>
              <Swiper
                spaceBetween={10}
                pagination={{
                  clickable: true,
                }}
                className="h-[280px] sm:h-[488px] "
              >
                {filteredProjects.map((project) => (
                  <SwiperSlide key={project.id}>
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      imgUrl={project.image}
                      tag={project.tag}
                      gitUrl={project.gitUrl}
                      previewUrl={project.previewUrl}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <Bulb />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
