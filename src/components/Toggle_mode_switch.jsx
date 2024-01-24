// import {useState, useEffect} from "react";

// import React from 'react'
// import { useMediaQuery } from "react-responsive";
// import {SunDim, MoonStars} from "@phosphor-icons/react";

// const Toggle = () => {
//     const [isDark, setIsDark] = useState(true);

//     const systemPrefersDark = useMediaQuery({query: "(prefers-color-scheme: dark)",}, undefined, (isSystemDark) => setIsDark(isSystemDark));
//       useEffect(() => {
//         if (isDark) {
//           document.body.classList.add('dark');
//         } else {
//           document.body.classList.remove('dark');
//         }
//       }, [isDark]);

//     return (
//         <div className="toggleButtonContainer">
//             <span>Light</span>
//             <label htmlFor="toggleButton" className="toggleButton" style={{backgroundColor: !isDark ? "var(--background-color) " : "var(--green-color)" }}>
//                 <input 
//                     type="checkbox" 
//                     name="toggleButton" 
//                     id="toggleButton" 
//                     checked={isDark}
//                     onChange={({ target }) => setIsDark(target.checked)}
//                 />
//                 <span className="dot" style={{right: isDark ? 1 : 22}}>{!isDark ? <SunDim /> : <MoonStars />}</span>
//             </label>
//             <span>Dark</span>
//         </div>
//     )
// }

// export default Toggle