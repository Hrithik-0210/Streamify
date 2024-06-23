// import React, { useEffect, useState } from "react";
// import { BiSolidMicrophone } from "react-icons/bi";
// import { CiSearch } from "react-icons/ci";
// import { useDispatch, useSelector } from "react-redux";
// import { cacheResults } from "../utils/searchSlice";
// import { YOUTUBE_SEARCH_API } from "../utils/Constants";
// import { toggleMenu } from "../utils/menuBarSlice";
// import { Link } from "react-router-dom";

// const SearchBar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [showSuggestion, setShowSuggestion] = useState(false);

//   const searchCache = useSelector((store) => store.search);
//   const dispatch = useDispatch();

//   /**
//    * searchCache   = {
//    *  "iphone":["iphone 11" , "iphone 14"]
//    * }
//    * searchQuery = iphone
//    *
//    */

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (searchCache[searchQuery]) {
//         setSuggestions(searchCache[searchQuery]);
//       } else {
//         showSuggestions();
//       }
//     }, 200);
//     return () => {
//       clearTimeout(timer);
//     };
//   }, [searchQuery]);

//   const showSuggestions = async () => {
//     const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
//     const jsonData = await data.json();
//     setSuggestions(jsonData[1]);
//     dispatch(
//       cacheResults({
//         [searchQuery]: jsonData[1],
//       })
//     );
//     // console.log(jsonData[1]);
//   };

//   const toggleMenuHandler = () => {
//     // console.log("dispatched");
//     dispatch(toggleMenu());
//   };

//   const searchByItem = (item) => {
//     setShowSuggestion(false);
//     setSearchQuery(item);
//     // dispatch(searchText(item));
//   };
//   return (
//     <div className=" w-1/3  md:w-[40%]  flex  ">
//       <div className=" w-full   flex ">
//         <input
//           type="search"
//           placeholder="Search"
//           value={searchQuery}
//           className="w-full py-2 px-4 rounded-l-full  focus:outline-none font-sans text-sm border border-gray-400"
//           onChange={(e) => setSearchQuery(e.target.value)}
//           onClick={(e) => console.log(searchQuery)}
//           onFocus={() => setShowSuggestion(true)}
//           onBlur={() => setShowSuggestion(false)}
//         />
//       </div>

//       <Link to={"/results?search_query=" + searchQuery}>
//         <div
//           className="flex items-center justify-center py-2 px-4 bg-gray-100 rounded-e-full border  border-l-0"
//           onClick={() => searchByItem(searchQuery)}
//         >
//           <button>
//             <CiSearch className="w-5 h-5" />
//           </button>
//         </div>
//       </Link>

//       <div className="microphone-icon bg-gray-100 flex items-center mx-3 rounded-full p-2">
//         <BiSolidMicrophone className="w-5 h-5" />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;
