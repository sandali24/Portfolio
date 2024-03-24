// import React from 'react'
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";


// const SocialLinks = () => {

//     const links = [
//         {
//             id: 1,
//             child: (
//               <>
//                 LinkedIn <FaLinkedin size={30} />
//               </>
//             ),
//             href: "https://linkedin.com",
//             style: "rounded-tr-md",
//           },
//           {
//             id: 2,
//             child: (
//               <>
//                 GitHub <FaGithub size={30} />
//               </>
//             ),
//             href: "https://github.com/theyashpatel",
//           },
//           {
//             id: 3,
//             child: (
//               <>
//                 Mail <HiOutlineMail size={30} />
//               </>
//             ),
//             href: "mailto:foo@gmail.com",
//           },
//           {
//             id: 4,
//             child: (
//               <>
//                 Resume <BsFillPersonLinesFill size={30} />
//               </>
//             ),
//             style: "rounded-br-md",
//             href: "/resume.pdf",
//             download: true,
//           },
//     ];
//   return (
//     <div className="flex flex-col top-[35%] left-0 fixed ">
//         <ul>

//             {links.map((id, child, href, style, download) => (
//                 <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" + "" + style}  >
//                 <a href={href} className="flex justify-between items-center w-full text-white"
//                 download={download}
//                 target='_blank'
// >
        
//                     {child}
//                     </a>
//             </li>
//             ))}
            
//         </ul>
//     </div>
//   )
// }

// export default SocialLinks


// import React from "react";
// import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { HiOutlineMail } from "react-icons/hi";
// import { BsFillPersonLinesFill } from "react-icons/bs";

// const SocialLinks = () => {
//   const links = [
//     {
//       id: 1,
//       child: (
//         <>
//           LinkedIn <FaLinkedin size={30} />
//         </>
//       ),
//       href: "www.linkedin.com/in/sandali-siriwardana-8aa89026b",
//       style: "rounded-tr-md",
//     },
//     {
//       id: 2,
//       child: (
//         <>
//           GitHub <FaGithub size={30} />
//         </>
//       ),
//       href: "https://github.com/sandali24",
//     },
//     {
//       id: 3,
//       child: (
//         <>
//           Mail <HiOutlineMail size={30} />
//         </>
//       ),
//       href: "mailto:sandalisiri58@gmail.com",
//     },
//     {
//       id: 4,
//       child: (
//         <>
//           Resume <BsFillPersonLinesFill size={30} />
//         </>
//       ),
//       style: "rounded-br-md",
//       href: "/resume.pdf",
//       download: true,
//     },
//   ];
//   return (
//     <div className="hidden lg:flex-col top-[35%] left-0 fixed lg:flex">
//       <ul>
//         {links.map((link) => (
//           <li
//             key={link.id}
//             className={
//               "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
//               " " +
//               link.style
//             }
//           >
//             <a
//               href={link.href ? link.href : "/"}
//               className="flex justify-between items-center w-full text-white"
//               download={link.download}
//               target="_blank"
//               rel="noreferrer"
//             >
//               {link.child}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SocialLinks;

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "www.linkedin.com/in/sandali-siriwardana-8aa89026b",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/sandali24",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:sandalisiri58@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "/resume.pdf",
      download: true,
    },
  ];
  return (
    <div className="hidden flex-col top-[35%] left-0 fixed lg:flex">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={
              "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
              " " +
              link.style
            }
          >
            <a
              href={link.href ? link.href : "/"}
              className="flex justify-between items-center w-full text-white"
              download={link.download}
              target="_blank"
              rel="noreferrer"
            >
              {link.child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;