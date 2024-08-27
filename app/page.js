"use client"
import React, { useState } from "react";
import Image from "next/image";
import logo from "@/public/logos/logo.png";

import c1 from "@/public/logos/c1.png";
import c2 from "@/public/logos/c2.png";
import c3 from "@/public/logos/c3.png";
import c4 from "@/public/logos/c4.png";

import tm1 from "@/public/backgrounds/tm1.png"
import tm2 from "@/public/backgrounds/tm2.png"
import tm3 from "@/public/backgrounds/tm3.png"

import hf1 from "@/public/backgrounds/hf1.png";
import hf2 from "@/public/backgrounds/hf2.jpg";
import hf5 from "@/public/backgrounds/hf5.jpg";
import hf6 from "@/public/backgrounds/hf6.png";
import hf8 from "@/public/backgrounds/hf8.jpg";
import hf82 from "@/public/backgrounds/hf8.2.jpg";
import hf83 from "@/public/backgrounds/hf8.3.png";
import hf10 from "@/public/backgrounds/hf10.png";
import p1 from "@/public/projects/p1.png";
import p12 from "@/public/projects/p1.2.png";
import p13 from "@/public/projects/p1.3.png";
import p14 from "@/public/projects/p1.4.png";

import p2 from "@/public/projects/p2.1.png";
import p22 from "@/public/projects/p2.2.png";
import p23 from "@/public/projects/p2.3.png";
import p24 from "@/public/projects/p2.4.png";

import p3 from "@/public/projects/p3.png";
import p32 from "@/public/projects/p3.2.png";
import p33 from "@/public/projects/p3.3.png";

import p4 from "@/public/projects/p4.png";
import p42 from "@/public/projects/p4.2.png";
import p43 from "@/public/projects/p4.3.png";
import p44 from "@/public/projects/p4.4.png";

import p5 from "@/public/projects/p5.png";
import p52 from "@/public/projects/p5.2.png";
import p53 from "@/public/projects/p5.3.png";
import p54 from "@/public/projects/p5.4.png";

import p6 from "@/public/projects/p6.png";
import p62 from "@/public/projects/p6.2.png";
import p63 from "@/public/projects/p6.3.png";
import p64 from "@/public/projects/p6.4.png";


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>


      {/*section header */}
      <header>

        {/* navbar */}
        <nav className="flex flex-col md:flex-row md:justify-between items-center p-4 bg-white">
          <div className="flex items-center w-full md:w-auto">
            <Image src={logo} alt="Logo" className="h-20 md:h-28 w-auto" />
            <p className="text-black mt-2 md:mt-0 text-xs md:text-base hidden md:block">
              In Design To Next Gen
            </p>
            <button
              className="md:hidden ml-auto text-black focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-yellow-950"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <ul
            className={`${isOpen ? 'block' : 'hidden'
              } md:flex md:flex-row md:items-center md:space-x-5 md:mt-0 mt-4 flex-col`}
          >
            {['VISION', 'ABOUT', 'CONTACT', 'PROJECTS'].map((item) => (
              <li key={item} className="relative group p-3 text-black font-semibold text-sm md:text-base">
                <a href={`#${item.toLowerCase()}`} className="transition-transform transform group-hover:scale-105">{item}</a>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#c9b585] transition-all transform scale-x-0 group-hover:scale-x-100"></span>
              </li>
            ))}
          </ul>
        </nav>

        {/* Landing Page */}
        <section className='relative w-full h-screen max-h-screen flex flex-col items-center bg-cover bg-center bg-no-repeat justify-center bg-[url("/backgrounds/bg1.jpg")] '>
          <div className="text-3xl md:text-6xl lg:text-8xl font-extrabold mb-10 md:mb-20 text-[#c4ab91] text-center">
            INXIGN INTERIOR
          </div>
          <span className="text-sm md:text-xl font-bold mb-3 md:mb-6">
            IN DESIGN TO NEXT GEN
          </span>
          <p className="border-t-4 border-black w-3/4 md:w-1/2 lg:w-1/3 mt-6"></p>
        </section>
      </header>

      {/* Introduction */}
      <section className='h-screen max-h-screen w-full relative flex flex-col items-center bg-cover bg-center bg-no-repeat justify-center bg-[url("/backgrounds/bg2hf.jpg")]'>
        <Image className="h-[500px] mr-[664px] max-[800px]:h-[450px] w-auto max-[340px]:h-[300px] max-[340px]:ml-[390px]" src={hf1} alt="Logo"></Image>
        <p className="absolute ml-[12cm] mb-[12cm] text-6xl font-bold text-[#544729] max-[1000px]:text-4xl max-[1000px]:font-extrabold max-[1000px]:mr-[1cm] max-[760px]:text-4xl max-[800px]:ml-[270px] max-[650px]:ml-[200px] max-[550px]:ml-[145px]  max-[550px]:text-3xl max-[485px]:text-[26px] max-[485px]:ml-[2cm] max-[350px]:ml-[1.8cm] max-[350px]:text-[26px]
  max-[340px]:text-[21px] max-[340px]:ml-[20px] ">
          HELLO FRIENDS!
        </p>

        <p className="absolute mb-[3cm] ml-[12.5cm] text-black w-[500px] max-[1000px]:mr-[2cm] max-[1000px]:w-[400px] font-light text-2xl text-justify max-[800px]:ml-[300px] max-[650px]:text-xl max-[650px]:w-[300px] max-[650px]:ml-[240px] max-[485px]:text-lg max-[485px]:ml-[130px] max-[485px]:w-[220px] max-[485px]:mt-16 max-[350px]:ml-[1.8cm]">
          Hello folks, your time and attention are greatly appreciated. Today,
          we're excited to share our vision, and the exciting roadmap ahead.
          Let's embark on this journey together, and thank you for considering
          an investment in our innovative venture.
        </p>
        <p className="absolute mt-[22cm] mb-[16cm] font-sans text-4xl font-bold text-[#d6ccb2] ml-[11.5cm] lg:text-4xl md:text-3xl sm:text-2xl max-[650px]:ml-[150px] max-[650px]:text-3xl max-[485px]:mt-[25cm] max-[485px]:text-2xl max-[350px]:ml-[1cm] max-[340px]:-ml-[14px] max-[340px]:text-xl">
          THANK YOU!
        </p>
      </section>

      {/* About Us */}
      <section id="about" className='h-screen relative flex flex-col items-start justify-center bg-cover bg-center bg-no-repeat bg-[url("/backgrounds/aboutus.jpg")] px-4 md:px-8 '>
        <div className="text-left md:w-1/2 mb-8 -mt-[2cm]">
          <p className="font-bold text-4xl md:text-6xl text-[#544729] mb-6">ABOUT US</p>
          <p className="font-sans text-lg md:text-2xl text-[#c9b585] mb-3">GET TO KNOW US BETTER</p>
          <div className="h-2 mb-6 w-24 md:w-36 bg-[#ebd6b0]"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
          <p className="text-black text-base md:text-xl lg:text-2xl w-full md:w-1/2 text-justify font-light mb-8 md:mb-0 px-4 md:px-0">
            Inxign is a forward-thinking design firm dedicated to creating spaces
            for the next generation. We specialize in residential, corporate, and
            commercial projects, focusing on innovative and future-proof designs.
            Our team is composed of young, creative professionals who bring fresh
            perspectives to every project. We prioritize real-time problem
            prediction and resolution, ensuring that our designs are both
            practical and visionary.
          </p>
          <div className="relative w-full md:w-1/2 flex justify-center">
            <Image
              className="w-full max-w-sm md:max-w-lg"
              src={hf2}
              height={430}
              alt="About Us Image"
            />
          </div>
        </div>
      </section>

      {/* what we believe */}
       <section id="vision" className="h-[1500px] sm:h-full max-w-auto flex flex-row items-center justify-center max-[768px]:flex-col
       max-[768px]:text-center
       ">
  <Image
    className="md:max-w-[500px] max-[600px] max-w-[300px] ml-8 mt-8"
    src={hf5} 
    alt="img"
  />
  <div className="xl:ml-4 lg:ml-4 top-8 left-8 space-y-8 space-x-8 p-8">
    <p className="text-6xl font-bold text-[#544729] ml-[25px] md:text-4xl lg:text-[55px] md:font-extrabold ph:text-4xl">
      WHAT WE BELIEVE
    </p>
    <p className="font-bold mb-4">
      ABOUT OUR VISION AND MISSION
    </p>
    <p className="text-xl font-extrabold text-[#544729] mb-4">
      VISION
    </p>
    <p className="text-black lg:text-[23px] max-w-[800px] md:text-[17px] text-justify font-light text-xl mb-4">
      Our vision is crystal clear: &apos;Inxign: In Design to Next Gen.&apos; We aim
      to create spaces that are not only functional and aesthetically
      pleasing but also sustainable and adaptable for the needs of future
      generations. By predicting real-time problems and addressing them
      before execution, we ensure that our designs remain relevant and
      innovative.
    </p>
    <p className="text-xl font-extrabold text-[#544729] mb-4">
      MISSION
    </p>
    <p className="text-black max-w-[800px] lg:text-[23px] md:text-[17px] text-justify font-light text-xl">
      Our mission is to design and execute spaces that cater to the needs of
      the next generation. We believe in collaborating closely with both
      clients and their next generation to create tailored spaces that meet
      their current and future needs. Our employees are our partners in this
      endeavor, working together to bring our vision to life.
    </p>
  </div>
      </section>

      {/* PROBLEMS */}
      <section className='h-full  w-auto flex flex-col bg-cover bg-center bg-no-repeat bg-[url("/backgrounds/bg6.jpg")]'>
        
        <div className="mt-[4cm] sm:mt-1">
        <p className="font-bold text-5xl sm:text-6xl text-[#544729] m-14 mt-28 ">PROBLEMS</p>
        <p className="font-sanstext-[120%] -mt-[1cm] ml-[2cm] text-[#c9b585]" >
          WE WILL SOLVE THE PROBLEMS </p>

        <div className="grid grid-cols-2 gap-[0.5cm] m-6 max-[900px]:grid-cols-1 ">

          <div>
            <div className="h-12 -mt-2 ml-[1.5cm] bg-[#544729] rounded-full absolute w-12 text-white text-center content-center">
              1
            </div>

            <p className="text-xl font-extrabold ml-[3cm]">
              Design For Future Needs
            </p>
            <p className="text-black max-w-[500px] text-justify font-light text-xl ml-[3cm] ">
              Inxign is a forward-thinking design firm dedicated to creating
              spaces for the next generation. We specialize in residential,
              corporate, and commercial projects, focusing on innovative and
            </p>
          </div>

          <Image className="ml-[2cm] -mt-[4cm] max-h-[250px] max-[900px]:hidden lg:max-h-[300px] xl:max-h-[350px] w-auto" src={hf6} alt="image"></Image>

          <div>
            <div className="h-12 -mt-2 ml-[1.5cm] bg-[#544729] rounded-full absolute w-12 text-white text-center content-center">
              2
            </div>

            <p className="text-xl font-extrabold ml-[3cm]">
              Over looking Real-Time Challlange
            </p>
            <p className="text-black max-w-[500px] text-justify font-light text-xl ml-[3cm] ">
              Traditional design approaches often overlook the real-time
              challenges that arise during execution. This can lead to costly
              modifications and delays, ultimately affecting the functionality
              and efficiency of the space.
            </p>
          </div>

          <div>
            <div className="h-12 -mt-2 ml-[1.5cm] bg-[#544729] rounded-full absolute w-12 text-white text-center content-center">
              3
            </div>

            <p className="text-xl font-extrabold ml-[3cm]">
            
              Lack of Inclusive Design
            </p>
            <p className="text-black max-w-[500px] text-justify font-light text-xl ml-[3cm] ">
              Clients desire spaces that are not only functional for their
              current lifestyle but are also tailored to the needs of their next
              generation. Without inclusive design discussions involving all the
              stakeholders clients or parents and youngsters, the end result may
              not fully meet the needs of all users.
            </p>
          </div>

        </div>
        </div>
      </section>
      
      {/* <!-- Market Opportunities Section --> */}
<section className="bg-[url('/backgrounds/bg8.jpg')] bg-center bg-cover bg-no-repeat py-16 px-4 md:px-8 ">
  <div className="text-left mb-12">
    <p className="font-bold text-3xl md:text-5xl text-[#544729] mb-4">
      MARKET <br /> OPPORTUNITIES
    </p>
    <p className="font-sans text-base md:text-lg text-[#c9b585]">
      WHAT WE COULD DO
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="flex flex-col items-center">
      <Image src={hf8} height={330} className="mb-4 w-full object-cover" alt="image"/>
      <p className="text-xl font-extrabold text-center">Residential Spaces</p>
      <p className="text-black text-justify font-light text-base md:text-lg">
        We design homes that cater to the lifetime needs of families,
        ensuring they are adaptable and future-proof for the next
        generation.
      </p>
    </div>

    <div className="flex flex-col items-center">
      <Image src={hf82} height={330} alt="image" className="mb-4 w-full object-cover" />
      <p className="text-xl font-extrabold text-center">Corporate Spaces</p>
      <p className="text-black text-justify font-light text-base md:text-lg">
        Our workspaces evolve with the next generation of professionals,
        providing innovative and functional environments.
      </p>
    </div>

    <div className="flex flex-col items-center">
      <Image src={hf83} height={330} alt="image" className="mb-4 w-full object-cover" />
      <p className="text-xl font-extrabold text-center">Commercial Spaces</p>
      <p className="text-black text-justify font-light text-base md:text-lg">
        We create future-proof designs for businesses targeting your
        younger customers or consumers. Now is not that what you need?
      </p>
    </div>
  </div>
</section>

      {/* <!-- Business Model Section --> */}
<section className='bg-[url("/backgrounds/bg10.jpg")] bg-cover bg-center bg-no-repeat py-16 px-4 '>
  <div className="flex flex-col items-center text-center">
    <Image src={hf10} className="max-w-full lg:max-w-[1000px] h-auto mb-6" alt="Image"/>
    <p className="font-bold text-4xl sm:text-5xl md:text-6xl ph:mt-[3cm] md:mt-[1cm] text-[#544729] mb-4">
      BUSINESS MODEL
    </p>
    <p className="text-black max-w-[90%] sm:max-w-[80%] lg:max-w-[1000px] font-light text-lg sm:text-xl md:text-2xl text-justify">
      Our business model at Inxign includes comprehensive design and
      execution services for residential, corporate, and commercial spaces.
      We generate revenue through design fees, execution charges,
      consultancy fees, and maintenance contracts. Additionally, we
      establish partnerships with technology providers and real estate
      developers to enhance our service offerings and expand our market
      reach.
    </p>
  </div>
</section>

{/* OUR PROJECTS  */}
<section id="projects" className='relative flex flex-col bg-cover bg-center bg-no-repeat bg-[url("/backgrounds/bg11.jpg")] py-12 px-4'>
  <p className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#544729] text-left mb-8">OUR PROJECTS</p>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-center justify-items-center">
    
    {/* Grid Item 1 */}
    <div className="grid grid-cols-2 gap-2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
      <Image src={p1} className="object-cover w-full h-auto" alt="Project 1" />
      <Image src={p12} className="object-cover w-full h-auto" alt="Project 2" />
      <Image src={p13} className="object-cover w-full h-auto" alt="Project 3" />
      <Image src={p14} className="object-cover w-full h-auto" alt="Project 4" />
    </div>
    
    {/* Grid Item 2 */}
    <div className="grid grid-cols-2 gap-2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
      <Image src={p2} className="object-cover w-full h-auto" alt="Project 5" />
      <Image src={p22} className="object-cover w-full h-auto" alt="Project 6" />
      <Image src={p23} className="object-cover w-full h-auto" alt="Project 7" />
      <Image src={p24} className="object-cover w-full h-auto" alt="Project 8" />
    </div>
    
    {/* Grid Item 3 */}
    <div className="grid grid-cols-2 gap-2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
      <Image src={p6} className="object-cover w-full h-auto" alt="Project 5" />
      <Image src={p62} className="object-cover w-full h-auto" alt="Project 6" />
      <Image src={p63} className="object-cover w-full h-auto" alt="Project 7" />
      <Image src={p64} className="object-cover w-full h-auto" alt="Project 8" />
    </div>
    
    {/* Grid Item 4 */}
    <div className="grid grid-cols-2 gap-2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
      <Image src={p3} className="object-cover w-full h-auto" alt="Project 5" />
      <Image src={p33} className="object-cover w-full h-auto" alt="Project 7" />
      <Image src={p32} className="object-cover w-full h-auto" alt="Project 6" />
      <Image src={p32} className="object-cover w-full h-auto" alt="Project 6" />
    </div>
    
    {/* Grid Item 5 */}
    <div className="grid grid-cols-2 gap-2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
      <Image src={p4} className="object-cover w-full h-auto" alt="Project 5" />
      <Image src={p42} className="object-cover w-full h-auto" alt="Project 6" />
      <Image src={p43} className="object-cover w-full h-auto" alt="Project 7" />
      <Image src={p44} className="object-cover w-full h-auto" alt="Project 8" />
    </div>
    
    {/* Grid Item 6 */}
    <div className="grid grid-cols-2 gap-2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px]">
      <Image src={p5} className="object-cover w-full h-auto" alt="Project 5" />
      <Image src={p52} className="object-cover w-full h-auto" alt="Project 6" />
      <Image src={p53} className="object-cover w-full h-auto" alt="Project 7" />
      <Image src={p54} className="object-cover w-full h-auto" alt="Project 8" />
    </div>

  </div>
</section>

{/* OUR CLIENTS */}
<section className='relative flex flex-col bg-cover bg-center bg-no-repeat bg-[url("/backgrounds/bg11.jpg")] py-12 px-4'>
  <p className="font-bold text-4xl md:text-5xl lg:text-6xl text-[#544729] text-center mb-8 mt-[3cm]">
    OUR CLIENTS
  </p>

  <div className="flex flex-wrap justify-center gap-28 mt-4">
    <Image src={c1} className="object-cover w-[80px] h-auto sm:w-[120px] lg:w-[150px] flex-shrink-0" alt="Client 1" />
    <Image src={c2} className="object-cover w-[80px] h-auto sm:w-[120px] lg:w-[150px] flex-shrink-0" alt="Client 2" />
    <Image src={c3} className="object-cover w-[80px] h-auto sm:w-[120px] lg:w-[150px] flex-shrink-0" alt="Client 3" />
    <Image src={c4} className="object-cover w-[80px] h-auto sm:w-[120px] lg:w-[150px] flex-shrink-0" alt="Client 4" />
  </div>
</section>

{/* TESTIMONIALS */}
<section className='sm:h-screen max-[640px]:h-full flex flex-col bg-cover bg-center bg-no-repeat bg-[url("/backgrounds/bg12.jpg")] py-12 px-4'>
  <p className="text-white text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-left xl:-mt-8">
    TESTIMONIAL
  </p>

  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 justify-center my-auto max-[640px]:mt-[3cm] max-w-[900px] mx-auto">
  <Image src={tm1} className="object-cover w-full h-auto max-w-[320px]" alt="Testimonial 1" />
  <Image src={tm2} className="object-cover w-full h-auto max-w-[320px]" alt="Testimonial 2" />
  <Image src={tm3} className="object-cover w-full h-auto max-w-[320px]" alt="Testimonial 3" />
</div>

</section>

{/* Footer */}
<footer id="contact" className="bg-[#2a2211] text-[#eaddbf] py-12 px-6 md:px-12 text-center  shadow-lg ">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
          <p className="mb-4 text-lg"><strong>Address:</strong> 105, Tower 1, DLF, Corporate Greens, Sector 74A, Gurugram, HR - 122004</p>
          <p className="mb-4 text-lg"><strong>Email:</strong> <a href="mailto:mail@inxgin.com" className="text-[#c9b585] hover:underline">mail@inxgin.com</a></p>
          <p className="mb-6 text-lg">EST. 2017</p>
          <p className="text-sm mt-6">&copy; 2024 Inxign Pvt. Ltd. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
