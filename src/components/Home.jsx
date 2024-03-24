// import React from 'react'
// import HeroImage from "../assets/heroImage.jpg";
// import { MdKeyboardArrowRight } from "react-icons/md";
// // import { Link } from "react-scroll";


// const Home = () => {
//   return (
//     <div
//       name="home"
//       className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
//         <div className="flex flex-col justify-center h-full">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             I'm a Full Stack Developer
//           </h2>
//           <p className="text-gray-500 py-4 max-w-md">
//             I have 8 years of experience building and desgining software.
//             Currently, I love to work on web application using technologies like
//             React, Tailwind, Next JS and GraphQL.
//           </p>
//           <div>
// <button className='group text-white w-fit px-6 py-3 my-2 
// flex items-center rounded-md bg-gradient-to-r from-gray-500
//  to-black-500 cursor-pointer'> Portfolio
//     <span className='group-hover:rotate-90 duration-300'>
// <MdKeyboardArrowRight size={25} className='ml-'/>
//     </span>
//  </button>





//             {/* <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <HiArrowNarrowRight className="ml-1" />
//               </span>
//             </Link> */}
//           </div>
//         </div>
//         <div>
//           <img
//             src={HeroImage}
//             alt="my profile"
//             className="rounded-2xl mx-auto w-2/3 md:w-full md:h-auto"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Home

// // 49:00

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import HeroImage from "../assets/heroImage.jpg";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className=" max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-full px-4">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            I'm Sandali <br></br>
            SE Undergraduate
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          I am an enthusiastic undergraduate student 
          pursuing a degree in Software Engineering . 
          With a passion for coding and problem-solving, I am constantly expanding my knowledge and skills in this exciting field.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 "
          />
        </div> i want this image to be round in size and small
      </div>
    </div>
  );
};

export default Home;