// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Spinner from "./Spinner";
// import { debounce } from "lodash";
// import useGif from "./useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const Tag = () => {
//   const [tag, setTag] = useState("");
//   const [gif, setGif] = useState("");
//   const [loading, setLoading] = useState(false);

//   const debouncedFetchData = debounce(fetchData, 300);

//   async function fetchData() {
//     if (tag.trim() === "") {
//       return;
//     }

//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

//     try {
//       setLoading(true);
//       const { data } = await axios.get(url);
//       const imageSource = data.data.images.downsized_large.url;
//       console.log(imageSource);
//       setGif(imageSource);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   useEffect(() => {

//     fetchData();
//   }, []);

//   const { gif, loading, fetchData } = useGif(tag);
//   function clickHandler() {
//     debouncedFetchData();
//   }

//   function changeHandler(event) {
//     setTag(event.target.value);
//   }

//   return (
//     <div className="w-1/2 bg-blue-500 rounded-lg border-white flex flex-col items-center gap-y-5 mt-15px">
//       <h1 className="text-2xl underline uppercase font-bold">Random gif</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <img src={gif} width="450" alt="Random Gif" loading="lazy" />
//       )}
//       <input
//         className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
//         onChange={changeHandler}
//         value={tag}
//       />

//       <button
//         onClick={clickHandler}
//         className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]"
//       >
//         Generate
//       </button>
//     </div>
//   );
// };

// export default Tag;

import React, { useState } from "react";
import Spinner from "./Spinner";
import { debounce } from "lodash";
import useGif from "./useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);
  

  const debouncedFetchData = debounce((value) => {
    fetchData(value);
  }, 300);

  function clickHandler() {
    fetchData(tag);
  }

  function changeHandler(event) {
    setTag(event.target.value);
    debouncedFetchData(event.target.value);
  }

  return (
    <div className="w-1/2 bg-blue-500 rounded-lg border-white flex flex-col items-center gap-y-5 mt-15px">
      <h1 className="text-2xl underline uppercase font-bold">Random gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="Random Gif" loading="lazy" />
      )}
      <input
        className=" text-lg py-2 rounded-lg mb-[3px] text-center"
        onChange={changeHandler}
        value={tag}
      />

      <button
        onClick={clickHandler}
        className=" bg-white text-lg py-2 rounded-lg mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
