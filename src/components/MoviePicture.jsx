import React, { useEffect, useState } from "react";

export default function MoviePicture(props) {
  const [img, setImg] = useState();

  const API_KEY = "dcb4a6c3f8dfa2fa63b84227c13b3b75";
  const url = `https://image.tmdb.org/t/p/w500${props.value}?api_key=${API_KEY}`;

  useEffect(() => {
    const fetchImage = async () => {
      const res = await fetch(url);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };

    fetchImage();
  }, []);

  return (
    <div>
      <img src={img} className="movie-photo"></img>
    </div>
  );
}
