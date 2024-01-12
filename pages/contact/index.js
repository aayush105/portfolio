"use client";
import React, { useState } from "react";
// components
import Circles from "../../components/Circles";

// icons
import {BsArrowRight} from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";
import Bulb from "../../components/Bulb";

const Contact = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send/route";

    // form the request for sending data to the server
    const options ={
      // the method is POST because we are sending data
      method: "POST",
      // tell the server that the body of the request is json
      headers: {
        "Content-Type": "application/json",
      },
      // body of the request is the json data
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);
    if (resData.error) {
      alert("Something went wrong. Please try again later.");
    } else {
      alert("Message sent successfully!");
      emailSubmitted(true);
      e.target.reset();
    }
  }
  return (
    <div className="h-full bg-primary/30">
      <Circles />
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        {/* text & form */}
        <div className="flex flex-col w-full max-w-[700px]">
          {/* text */}
          <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-4"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='text-[#ADB7BE] mb-4 text-center'>
                {" "}
                I&apos;m currently looking for new opportunities, my inbox is always open. 
                Whether you have a question or just want to say hi, I&apos;ll try my best 
                to get back to you!
            </motion.p>
          {/* form */}
          <motion.form 
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col gap-6 w-full mx-auto">
            {/* input group */}
            <div className="flex gap-x-4 w-full">
              <input type="text" name="name" id="name" required placeholder="name" className="input" />
              <input type="text" name="email" id="email" required placeholder="email" className="input" />
            </div>
              <input type="text" name="subject" id="subject" placeholder="subject" className="input" />
              <textarea name="message" id="message" placeholder="message" className="textarea"></textarea>
              <button 
                type="submit"
                className="btn rounded-full border border-white/50 max-w-[170px] 
              px-9 transition-all duration-300 flex items-center justify-center 
              overflow-hidden hover:border-accent group">
                <span 
                  className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-300"
                >
                  Let&apos;s talk
                </span>
                <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"/>
              </button>
              {
                // if the email was submitted successfully
                emailSubmitted && (
                  <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
                )
              }
          </motion.form>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Contact;