import { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = (tag) => {
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const url = tag
      ? `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
      : `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    try {
      setLoading(true);
      const { data } = await axios.get(url);
      const imageSource = data.data.images.downsized_large.url;
      if (imageSource) {
        setGif(imageSource);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [tag]);

  return { gif, loading, fetchData };
};

export default useGif;
