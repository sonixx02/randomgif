// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Spinner from "./Spinner";
// import useGif from "./useGif";

// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// const Random = () => {
//   const [gif, setGif] = useState("");
//   const [loading , setLoading] = useState(false);

//   async function fetchData() {
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
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

//   hook banaya khud ka
//   const { gif, loading, fetchData } = useGif();
//   function clickHandler() {
//     fetchData();
//   }

//   return (
//     <div className="w-1/2  bg-green-500 rounded-lg border-white flex flex-col items-center gap-y-5 mt-15px">
//       <h1 className="text-2xl underline uppercase font-bold">A Random gif</h1>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <img src={gif} width="450" alt="Random Gif" loading="lazy" />
//       )}

//       <button onClick={clickHandler} className="w-10/12 bg-white">
//         Generate
//       </button>
//     </div>
//   );
// };

// export default Random;

import React from "react";
import Spinner from "./Spinner";
import useGif from "./useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  function clickHandler() {
    if (gif && typeof gif === "string" && gif.trim() !== "") {
      fetchData();
    }
  }

  return (
    <div className="w-1/2 bg-green-500 rounded-lg border-white flex flex-col items-center gap-y-5 mt-15px">
      <h1 className="text-2xl underline uppercase font-bold">A Random gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} width="450" alt="Random Gif" loading="lazy" />
      )}

      <button onClick={clickHandler} className=" m-5 rounded-lg bg-white">
        Generate
      </button>
    </div>
  );
};

export default Random;
